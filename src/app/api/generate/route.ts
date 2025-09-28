import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    const apiKey = process.env.GEMNI_API_KEY
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Missing GEMINI_API_KEY" }), 
      { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return new Response(JSON.stringify({ text }), { status: 200 });
  } catch (error) {
        if (error instanceof Error) {
          console.error('Error:', error.message);
          if (error.stack) console.error('Stack:', error.stack);
        } else {
          console.error('Unknown error:', error);
        }
        return new Response(JSON.stringify({ error: error instanceof Error ? error.message : String(error) }), { status: 500 });
  }
}