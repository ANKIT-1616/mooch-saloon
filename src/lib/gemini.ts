import { GoogleGenAI } from '@google/genai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY as string;

let client: GoogleGenAI | null = null;

export function getGeminiClient(): GoogleGenAI {
  if (!API_KEY) {
    throw new Error('VITE_GEMINI_API_KEY is not set. Add it to your .env.local file.');
  }
  if (!client) {
    client = new GoogleGenAI({ apiKey: API_KEY });
  }
  return client;
}

export async function askGroomingAI(userMessage: string): Promise<string> {
  const ai = getGeminiClient();
  const systemPrompt = `You are the grooming expert at Mooch Saloon, a luxury barbershop in Pushkar, Rajasthan, India. 
You help clients with grooming advice, beard styling tips, haircut recommendations, and answer questions about our services.
Be warm, professional, and knowledgeable. Keep responses concise (2-3 sentences max unless asked for detail).
Our services include: Royal Hot Towel Shave, Master Beard Sculpting, Signature Haircuts, Hair Spa & Treatments, Keratin & Smoothening.
Always mention we are located in the heart of Pushkar, Rajasthan.`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: [
      {
        role: 'user',
        parts: [{ text: `${systemPrompt}\n\nClient question: ${userMessage}` }],
      },
    ],
  });

  return response.text ?? 'Sorry, I could not generate a response. Please try again.';
}
