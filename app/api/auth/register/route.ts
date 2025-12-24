// import { Resend } from 'resend';
// import { NextResponse } from 'next/server';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   try {
//     const { email, name } = await req.json();
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();

//     // Debugging to Terminal
//     console.log(`Sending OTP ${otp} to ${email}`);

//     const { data, error } = await resend.emails.send({
//       from: 'GyaanX AI <support@crypgo.eu>', // Keep this exactly as is for Free Tier
//       to: [email], // Wrap in array for better delivery
//       subject: `${otp} is your GyaanX verification code`,
//       html: `
//         <div style="background-color: #020617; color: white; padding: 40px; border-radius: 20px; font-family: sans-serif; text-align: center;">
//           <h1 style="color: #6366f1;">GyaanX AI</h1>
//           <p style="font-size: 16px;">Hello ${name}, your verification code is:</p>
//           <div style="background: #0f172a; padding: 20px; border-radius: 12px; display: inline-block; margin: 20px 0;">
//             <span style="font-size: 32px; font-weight: bold; letter-spacing: 10px; color: #818cf8;">${otp}</span>
//           </div>
//           <p style="color: #64748b; font-size: 12px;">This code will expire in 10 minutes.</p>
//         </div>
//       `,
//     });

//     if (error) {
//       console.error("Resend internal error:", error);
//       return NextResponse.json({ message: "Resend Error", error }, { status: 400 });
//     }

//     return NextResponse.json({ success: true, otp, data }, { status: 201 });
//   } catch (err: any) {
//     console.error("Internal server error:", err);
//     return NextResponse.json({ message: err.message }, { status: 500 });
//   }
// }

import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { connectToDB } from "@/lib/db";
import { User } from "@/models/User";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();
    
    // 1. Check if user already exists BEFORE wasting a Resend email limit
    await connectToDB();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "This email is already registered. Please Login." }, { status: 400 });
    }

    // 2. Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Debugging to Terminal (VS Code terminal)
    console.log(`NEW USER OTP REQUEST: ${email} -> CODE: ${otp}`);

    const { data, error } = await resend.emails.send({
      from: 'GyaanX AI <support@crypgo.eu>', // Standard Resend from address
      to: [email],
      subject: `${otp} is your GyaanX verification code`,
      html: `
        <div style="background-color: #020617; color: white; padding: 40px; border-radius: 20px; font-family: sans-serif; text-align: center;">
          <h1 style="color: #6366f1;">GyaanX AI</h1>
          <p style="font-size: 16px;">Hello ${name}, verify your account to unlock your personalized career dashboard:</p>
          <div style="background: #0f172a; padding: 20px; border-radius: 12px; display: inline-block; margin: 20px 0;">
            <span style="font-size: 36px; font-weight: bold; letter-spacing: 10px; color: #818cf8;">${otp}</span>
          </div>
          <p style="color: #64748b; font-size: 12px;">This security code will expire in 10 minutes.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend internal error:", error);
      return NextResponse.json({ message: "Failed to send email. Check API limit." }, { status: 400 });
    }

    // Return success to trigger the OTP input screen on Frontend
    return NextResponse.json({ success: true, otp, data }, { status: 201 });

  } catch (err: any) {
    console.error("Internal server error:", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}