import { NextResponse } from "next/server";
// import { db } from "@/lib/db"; // Import your actual DB (Prisma/Mongoose/Firebase)

export async function POST(req: Request) {
  try {
    const { email, amount, paymentId } = await req.json();

    // SERVER-SIDE LOGIC: 
    // Find user by email and update their "isPaid" status to true
    // Save the amount (199) and the Razorpay ID for records.
    
    /* Example Prisma code:
    await db.user.update({
      where: { email },
      data: { 
        isPaid: true,
        paidAmount: amount,
        paymentReference: paymentId 
      }
    });
    */

    console.log(`User ${email} paid ₹${amount}. Reference: ${paymentId}`);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "DB Save Failed" }, { status: 500 });
  }
}