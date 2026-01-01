import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { Coupon } from "@/models/Coupon";

// ✅ GET: Coupons ki list dikhane ke liye
export async function GET() {
  try {
    await connectToDB();
    const coupons = await Coupon.find().sort({ createdAt: -1 });
    return NextResponse.json({ coupons }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching coupons" }, { status: 500 });
  }
}

// ✅ POST: Naya coupon banane ke liye
export async function POST(req: Request) {
  try {
    const { days, customCode } = await req.json();
    await connectToDB();

    const code = customCode || Math.random().toString(36).substring(2, 8).toUpperCase();
    
    const newCoupon = await Coupon.create({ 
      code: code.trim().toUpperCase(), 
      expiryDays: days || 90 
    });

    return NextResponse.json({ success: true, code: newCoupon.code }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error generating coupon" }, { status: 500 });
  }
}