import { NextResponse } from 'next/server'; // Corrected import
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { meetingNumber, role } = body;
    
    const iat = Math.round(new Date().getTime() / 1000) - 30;
    const exp = iat + 60 * 60 * 2;
    
    const sdkKey = process.env.ZOOM_SDK_KEY;
    const sdkSecret = process.env.ZOOM_SDK_SECRET;

    if (!sdkKey || !sdkSecret) {
      return NextResponse.json({ error: "Zoom credentials missing" }, { status: 500 });
    }

    const oHeader = { alg: 'HS256', typ: 'JWT' };
    const oPayload = {
      sdkKey: sdkKey,
      mn: meetingNumber,
      role: role,
      iat: iat,
      exp: exp,
      appKey: sdkKey,
      tokenExp: iat + 60 * 60 * 2
    };

    const sHeader = Buffer.from(JSON.stringify(oHeader)).toString('base64').replace(/=/g, '');
    const sPayload = Buffer.from(JSON.stringify(oPayload)).toString('base64').replace(/=/g, '');
    const signature = crypto.createHmac('sha256', sdkSecret)
      .update(sHeader + '.' + sPayload)
      .digest('base64')
      .replace(/=/g, '');

    return NextResponse.json({ signature: sHeader + '.' + sPayload + '.' + signature });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}