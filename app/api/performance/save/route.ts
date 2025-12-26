import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { Performance } from "@/models/Performance";

export async function POST(req: Request) {
  try {
    await connectToDB();
    const body = await req.json();
    
    const newEntry = await Performance.create(body);
    return NextResponse.json(newEntry);
  } catch (error) {
    console.error("Save performance error:", error);
    return NextResponse.json({ error: "Failed to save performance" }, { status: 500 });
  }
}