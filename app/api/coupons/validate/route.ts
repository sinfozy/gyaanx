import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { Coupon } from "@/models/Coupon";
import { User } from "@/models/User";

export async function POST(req: Request) {
  try {
    const { email, code } = await req.json();
    await connectToDB();

    const coupon = await Coupon.findOne({ code, isUsed: false });
    if (!coupon) return NextResponse.json({ message: "Invalid or used coupon" }, { status: 400 });

    // Payment bypass logic: User ko Paid mark kar do
    await User.findOneAndUpdate({ email }, { isPaid: true });
    
    // Coupon ko used mark kar do
    coupon.isUsed = true;
    await coupon.save();

    return NextResponse.json({ success: true, message: "Access Granted!" });
  } catch (error) {
    return NextResponse.json({ message: "Validation failed" }, { status: 500 });
  }
}