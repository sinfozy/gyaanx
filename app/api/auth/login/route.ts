import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { connectToDB } from "@/lib/db";
import { User } from "@/models/User";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    await connectToDB();

    const user = await User.findOne({ email });

    // 1. Check if user exists
    if (!user) {
      return NextResponse.json({ message: "User not registered with GyaanX." }, { status: 404 });
    }

    // 2. Check Password
    if (user.password !== password) {
      return NextResponse.json({ message: "Incorrect password." }, { status: 401 });
    }

    // 3. ✅ VERIFICATION LOGIC (Standard vs OTP Flow)
    if (user.isVerified) {
      // Bacha pehle se verified hai -> Seedha Login karwa do
      return NextResponse.json({ 
        success: true, 
        needsVerification: false, // OTP ki zaroorat nahi hai
        name: user.name,
        email: user.email,
        isProfileComplete: user.isProfileComplete || false,
        message: "Login successful!" 
      }, { status: 200 });
    } else {
      // Bacha database mein hai par verified nahi hai (Ghost User) -> OTP bhejo
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      user.otp = otp;
      await user.save();

      await resend.emails.send({
        from: 'GyaanX AI <support@crypgo.eu>',
        to: [email],
        subject: `${otp} is your GyaanX verification code`,
        html: `<div style="text-align:center;"><h1>Verify Your Email</h1><p>Your code is: <b>${otp}</b></p></div>`,
      });

      return NextResponse.json({ 
        success: true, 
        needsVerification: true, // Frontend ko batao ki OTP screen dikhao
        message: "Account unverified. OTP sent to your email." 
      }, { status: 200 });
    }

  } catch (error: any) {
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}