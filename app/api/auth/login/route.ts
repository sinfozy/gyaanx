import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { connectToDB } from "@/lib/db";
import { User } from "@/models/User";
import bcrypt from "bcryptjs"; // <--- Yeh import zaroori hai

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    await connectToDB();

    // Email ko hamesha lowercase mein dhoondein
    const sanitizedEmail = email.toLowerCase().trim();
    const user = await User.findOne({ email: sanitizedEmail });

    // 1. Check if user exists
    if (!user) {
      return NextResponse.json({ message: "User not registered with GyaanX." }, { status: 404 });
    }

    // 2. ✅ FIXED: Check Password using Bcrypt Compare
    // Kyuki password database mein hashed hai, isliye compare use karna hi hoga
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return NextResponse.json({ message: "Incorrect password." }, { status: 401 });
    }

    // 3. ✅ VERIFICATION LOGIC (Standard vs OTP Flow)
    if (user.isVerified) {
      // Bacha pehle se verified hai -> Seedha Login karwa do
      return NextResponse.json({ 
        success: true, 
        needsVerification: false, 
        name: user.name,
        email: user.email,
        isProfileComplete: user.isProfileComplete || false,
        message: "Login successful!" 
      }, { status: 200 });
    } else {
      // Bacha database mein hai par verified nahi hai -> OTP bhejo
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      user.otp = otp;
      await user.save();

      await resend.emails.send({
        from: 'GyaanX AI <support@crypgo.eu>',
        to: [sanitizedEmail],
        subject: `${otp} is your GyaanX verification code`,
        html: `<div style="text-align:center;"><h1>Verify Your Email</h1><p>Your code is: <b>${otp}</b></p></div>`,
      });

      return NextResponse.json({ 
        success: true, 
        needsVerification: true, 
        message: "Account unverified. OTP sent to your email." 
      }, { status: 200 });
    }

  } catch (error: any) {
    console.error("Login Error:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}