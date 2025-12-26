import { NextResponse } from "next/server";
import {connectToDB} from "@/lib/db";
import { User } from "@/models/User";
import { Subscription } from "@/models/subscription";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, paymentId } = body;

    if (!email || !paymentId) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    await connectToDB();

    const user = await User.findOne({ email }).select("_id");
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // 1. Save the payment details for your own records/accounting
    await Subscription.create({
      userId: user._id,
      paymentId: paymentId,
      amount: 199,
      status: "SUCCESS"
    });

    // 2. PERMANENTLY UNLOCK THE USER
    // This is the line that ensures "Person A" never sees the paywall again
    const updatedUser = await User.findOneAndUpdate(
      { _id: user._id },
      { isSubscribed: true, subscribedAt: new Date() }, // Set to true forever
      { new: true, upsert: true } // Create user if they don't exist
    );

    return NextResponse.json({ 
      success: true, 
      message: "Access granted permanently" 
    });
  } catch (error) {
    console.error("Subscription Save Error:", error);
    return NextResponse.json({ error: "Failed to save subscription" }, { status: 500 });
  }
}