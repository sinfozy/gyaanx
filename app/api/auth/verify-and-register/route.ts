import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { User } from "@/models/User";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    const { db } = await connectToDB();

    // 1. Double check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User already registered" }, { status: 400 });
    }

    // 2. Create the user
    const newUser = new User({ name, email, password });
    await newUser.save();

    return NextResponse.json({ 
        success: true, 
        name: newUser.name, 
        email: newUser.email,
        isProfileComplete: false 
    }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json({ message: "Database Error: " + error.message }, { status: 500 });
  }
}