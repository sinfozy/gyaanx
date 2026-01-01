
import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { User } from "@/models/User";
// import bcrypt from "bcryptjs"; // Jab aap security add karein

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required." }, { status: 400 });
    }

    await connectToDB();

    // 1. Find user (Using .lean() for faster performance)
    const user = await User.findOne({ email }).lean();

    // 2. Requirement: "User not registered" check
    if (!user) {
      return NextResponse.json({ message: "User not registered with GyaanX." }, { status: 404 });
    }

    // 3. Password Check 
    // Note: Agar aapne register me bcrypt use kiya hai toh yahan bcrypt.compare use hoga
    if (user.password !== password) {
      return NextResponse.json({ message: "Incorrect password." }, { status: 401 });
    }

    // 4. Final Response
    // User object se password hata kar baki data bhej rahe hain
    return NextResponse.json({ 
      success: true, 
      user: {
        name: user.name,
        email: user.email, 
        isProfileComplete: user.isProfileComplete || false,
        isPaid: user.isPaid || false
      }
    });

  } catch (error: any) {
    console.error("Login Error:", error.message);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}