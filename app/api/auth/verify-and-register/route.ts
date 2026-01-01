import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { User } from "@/models/User";

export async function POST(req: Request) {
  try {
    const { email, otpInput } = await req.json();
    await connectToDB();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // ✅ FIX: Strict String comparison to avoid type issues
    if (user.otp && String(user.otp) === String(otpInput)) {
      
      // Update User Status
      user.isVerified = true;
      user.otp = null; // Use hone ke baad OTP delete kar dein
      await user.save();

      return NextResponse.json({ 
          success: true, 
          name: user.name, 
          email: user.email,
          message: "Account verified successfully!" 
      }, { status: 200 });
      
    } else {
      // Agar OTP match nahi hota
      return NextResponse.json({ message: "Invalid verification code. Please check your email." }, { status: 400 });
    }

  } catch (error: any) {
    console.error("Verification Error:", error);
    return NextResponse.json({ message: "Server Error: " + error.message }, { status: 500 });
  }
}