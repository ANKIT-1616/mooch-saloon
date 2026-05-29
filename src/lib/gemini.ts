import { GoogleGenAI } from "@google/genai";

const systemInstruction =
  "You are the premium grooming assistant for Mooch Saloon in Pushkar. Keep responses concise, practical, and customer-safe. If unsure, suggest contacting the salon directly.";

export async function askGroomingAI(prompt: string): Promise<string> {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("Missing VITE_GEMINI_API_KEY");
  }

  const client = new GoogleGenAI({ apiKey });
  const response = await client.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    config: {
      systemInstruction,
      maxOutputTokens: 220,
      temperature: 0.6,
    },
  });

  const text = response.text?.trim();
  if (!text) {
    throw new Error("Empty AI response");
  }

  return text;
}
