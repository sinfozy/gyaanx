// /api/zoom/signature/route.ts
import { NextResponse } from 'next/server';
// @ts-ignore

import { KJUR } from 'jsrsasign';

export async function POST(request: Request) {
  try {
    const { meetingNumber, role } = await request.json(); // role: 1 for host, 0 for join

    const iat = Math.round(new Date().getTime() / 1000) - 30;
    const exp = iat + 60 * 60 * 2;

    const oHeader = { alg: 'HS256', typ: 'JWT' };
    const oPayload = {
      sdkKey: process.env.ZOOM_SDK_KEY,
      mn: meetingNumber,
      role: role, // Yeh line bohot zaruri hai
      iat: iat,
      exp: exp,
      appKey: process.env.ZOOM_SDK_KEY,
      tokenExp: exp,
    };

    const sHeader = JSON.stringify(oHeader);
    const sPayload = JSON.stringify(oPayload);
    // @ts-ignore
    const signature = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, process.env.ZOOM_SDK_SECRET!);

    return NextResponse.json({ signature });
  } catch (error) {
    return NextResponse.json({ error: "Signature failed" }, { status: 500 });
  }
}