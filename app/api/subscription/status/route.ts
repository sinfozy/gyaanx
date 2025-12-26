import { NextResponse } from "next/server";
import {connectToDB} from "@/lib/db"; // Your DB connection utility
import { User } from "@/models/User";
import { UserCheck } from "lucide-react";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ isSubscribed: false }, { status: 400 });
  }

  try {
    await connectToDB();
    
    // Find the user by email in the database
    const user = await User.findOne({ email });
    console.log(user);
    

    if (!user) {
      return NextResponse.json({ isSubscribed: false });
    }

    // Return their actual subscription status from the DB
    return NextResponse.json({ isSubscribed: user.isSubscribed });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}