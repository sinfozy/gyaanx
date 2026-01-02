import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { connectToDB } from "@/lib/db";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    await connectToDB();
    const { email, otp, newPassword, type } = await req.json();
    const sanitizedEmail = email.toLowerCase().trim();

    // PHASE 1: Send OTP for Reset
    if (type === "request") {
      const user = await User.findOne({ email: sanitizedEmail });
      if (!user) {
        return NextResponse.json({ message: "This email is not registered." }, { status: 404 });
      }

      const resetOtp = Math.floor(100000 + Math.random() * 900000).toString();
      user.otp = resetOtp;
      await user.save();

      await resend.emails.send({
        from: 'GyaanX Support <support@crypgo.eu>',
        to: [sanitizedEmail],
        subject: `${resetOtp} is your Password Reset Code`,
        html: `<h2>Password Reset Request</h2><p>Your code is: <b>${resetOtp}</b></p>`
      });

      return NextResponse.json({ success: true, message: "Reset OTP sent." });
    }

    // PHASE 2: Verify & Update Password
    if (type === "reset") {
      const user = await User.findOne({ email: sanitizedEmail, otp: otp });
      if (!user) {
        return NextResponse.json({ message: "Invalid OTP or Email." }, { status: 400 });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      user.otp = ""; // OTP clear karein
      await user.save();

      return NextResponse.json({ success: true, message: "Password updated successfully." });
    }

  } catch (error: any) {
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}