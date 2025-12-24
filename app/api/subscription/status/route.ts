import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  // SERVER-SIDE LOGIC: Look up this email in your DB
  // const user = await db.user.findUnique({ where: { email } });
  // const isPaid = user?.isPaid || false;

  const isPaid = false; // Placeholder logic - replace with your DB check

  return NextResponse.json({ isSubscribed: isPaid });
}