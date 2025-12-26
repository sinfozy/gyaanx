import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { interest } = await req.json();
    const API_KEY = process.env.GEMINI_API_KEY;

    if (!API_KEY) {
      return NextResponse.json({ error: "API Key missing" }, { status: 500 });
    }

    // UPDATE: Use Gemini 3 Flash (Latest as of late 2025)
    // Stable models like gemini-2.5-flash use the /v1/ endpoint
    // Preview models like gemini-3-flash-preview use the /v1beta/ endpoint
    const MODEL_ID = "gemini-3-flash-preview"; 
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_ID}:generateContent?key=${API_KEY}`;

    const prompt = `Generate exactly 20 medium-difficulty multiple choice questions about ${interest}.
    Return ONLY a raw JSON array of objects. 
    Format: [{"question": "...", "options": ["a", "b", "c", "d"], "correctAnswer": "..."}]`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          // Gemini 3 uses JSON mode with this field
          response_mime_type: "application/json",
        },
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error("Gemini 3 Error:", data.error);
      return NextResponse.json({ error: data.error.message }, { status: 404 });
    }

    const resultText = data.candidates[0].content.parts[0].text;
    const questions = JSON.parse(resultText);

    return NextResponse.json({ questions });

  } catch (error: any) {
    console.error("Quiz Logic Error:", error);
    return NextResponse.json({ error: "Model retired or API changed. Please update model ID." }, { status: 500 });
  }
}