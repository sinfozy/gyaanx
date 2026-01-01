import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // ⚠️ Inhe apni choice ke credentials se badal dein
  const ADMIN_EMAIL = "admin@gyaanx.eu";
  const ADMIN_PASSWORD = "GYAANX_MASTER_2026";

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const cookieStore = await cookies();
    
    // Admin token set kar rahe hain jo 1 din tak valid rahega
    cookieStore.set("admin_session", "authorized_neural_access", {
      httpOnly: true,
      secure: process.env.NODE_SETTING === "production",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });

    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}