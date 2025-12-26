import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();

    // 1. Get OAuth Access Token from Zoom
    // You need: ZOOM_ACCOUNT_ID, ZOOM_CLIENT_ID, ZOOM_CLIENT_SECRET in .env
    const authRequest = await fetch(`https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${process.env.ZOOM_ACCOUNT_ID}`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${process.env.ZOOM_CLIENT_ID}:${process.env.ZOOM_CLIENT_SECRET}`).toString("base64")}`,
      },
    });

    const authData = await authRequest.json();
    const token = authData.access_token;

    // 2. Create Meeting on Zoom
    const meetingRequest = await fetch("https://api.zoom.us/v2/users/me/meetings", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic: topic,
        type: 1, // Instant Meeting
        settings: {
          join_before_host: true,
          waiting_room: false,
        },
      }),
    });

    const meetingData = await meetingRequest.json();

    return NextResponse.json({
      meetingId: meetingData.id.toString(),
      password: meetingData.password,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create meeting" }, { status: 500 });
  }
}