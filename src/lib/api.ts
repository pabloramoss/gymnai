import axios from "axios";

const openaiApiEndpoint = process.env.NEXT_PUBLIC_OPENAI_API_ENDPOINT;
const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
const engine = process.env.NEXT_PUBLIC_OPENAI_ENGINE;

export async function generateText(prompt: any) {
  const data = {
    prompt,
    temperature: 0.15,
    max_tokens: 60,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };
  const response = await axios.post(`${openaiApiEndpoint}engines/${engine}/completions`, data, {
    headers,
  });

  const choices = response.data?.choices || [];
  const generatedText =
    choices.length > 0 ? choices.reduce((acc: any, choice: any) => acc + choice.text, "") : "";

  return generatedText;
}
