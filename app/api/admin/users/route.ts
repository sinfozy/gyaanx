import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { User } from "@/models/User";

export async function GET() {
  try {
    await connectToDB();
    const users = await User.find().sort({ createdAt: -1 }).select("-password"); // Password nahi dikhayenge security ke liye
    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching users" }, { status: 500 });
  }
}