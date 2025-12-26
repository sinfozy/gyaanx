import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db"; // Apna correct path check karein
import { Performance } from "@/models/Performance";

export async function GET(req: Request) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const history = await Performance.find({ email }).sort({ date: -1 });
    return NextResponse.json(history);
  } catch (error) {
    console.error("Fetch history error:", error);
    return NextResponse.json({ error: "Failed to fetch history" }, { status: 500 });
  }
}