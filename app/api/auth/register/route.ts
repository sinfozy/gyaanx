import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { connectToDB } from "@/lib/db";
import { User } from "@/models/User";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    await connectToDB();

    // 1. Check if user already exists and is verified
    const existingUser = await User.findOne({ email });
    if (existingUser && existingUser.isVerified) {
      return NextResponse.json({ message: "Email already registered. Please Login." }, { status: 400 });
    }

    // 2. Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // 3. DATABASE: Create or Update Unverified User (Using upsert for reliability)
    await User.findOneAndUpdate(
      { email }, 
      { name, password, otp, isVerified: false }, 
      { upsert: true, new: true } 
    );

    console.log(`NEW OTP for ${email}: ${otp}`); // For Terminal Debugging

    // 4. SEND EMAIL via Resend
    const { error } = await resend.emails.send({
      from: 'GyaanX AI <support@crypgo.eu>',
      to: [email],
      subject: `${otp} is your GyaanX verification code`,
      html: `
        <div style="background-color: #020617; color: white; padding: 40px; border-radius: 20px; font-family: sans-serif; text-align: center;">
          <h1 style="color: #6366f1;">GyaanX AI</h1>
          <p style="font-size: 16px;">Hello ${name}, verify your account to unlock your personalized dashboard:</p>
          <div style="background: #0f172a; padding: 20px; border-radius: 12px; display: inline-block; margin: 20px 0;">
            <span style="font-size: 36px; font-weight: bold; letter-spacing: 10px; color: #818cf8;">${otp}</span>
          </div>
          <p style="color: #64748b; font-size: 12px;">This code is valid for 10 minutes.</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ message: "User saved, but Email failed to send." }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "OTP sent successfully." }, { status: 201 });

  } catch (err: any) {
    console.error("Registration Error:", err);
    return NextResponse.json({ message: "Server Error: " + err.message }, { status: 500 });
  }
}