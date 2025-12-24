import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "API Key Missing" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Change "gemini-1.5-flash" to "gemini-2.5-flash" (Standard 2025 Model)
    // Or try "gemini-3-flash" if you want the absolute latest version
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const userPrompt = messages[messages.length - 1].content;

    const result = await model.generateContent(userPrompt);
    const text = result.response.text();

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("DEBUG ERROR:", error);
    return NextResponse.json({ error: "Model unavailable. Use gemini-2.5-flash." }, { status: 500 });
  }
}