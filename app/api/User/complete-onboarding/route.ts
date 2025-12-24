import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { User } from "@/models/User";

export async function POST(req: Request) {
  try {
    const { email, path, grade } = await req.json();
    await connectToDB();

    await User.findOneAndUpdate({ email }, { 
        path, 
        grade, 
        isProfileComplete: true 
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ message: "Update Failed" }, { status: 500 });
  }
}