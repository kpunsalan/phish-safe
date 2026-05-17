const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY as string | undefined;

const SYSTEM_PROMPT = `You are PhishSafe Assistant, a friendly and knowledgeable cybersecurity awareness guide. Your purpose is to help everyday people — including older adults with limited tech experience — understand and protect themselves from phishing (email), smishing (SMS/text), and vishing (voice/phone) attacks.

When a user shares a suspicious message or describes a suspicious call:
- Identify specific red flags present
- Explain clearly why each element is suspicious
- Give a plain-language verdict on whether it is likely a scam
- Advise on next steps

When answering general questions:
- Use simple, jargon-free language
- Be warm, patient, and non-condescending
- Provide concrete, actionable advice

When someone says they may have already been victimized:
- Be empathetic and reassuring first ("This is not your fault")
- Walk through the most relevant incident response steps based on what they shared
- Encourage them to act quickly but calmly

Never be alarmist. Never make the user feel foolish. Always end with a clear next action they can take.`;

export async function getAssistantResponse(input: string): Promise<{ reply: string; source: 'openai' }> {
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key is not configured. Set VITE_OPENAI_API_KEY in .env and restart the app.');
  }

  const payload = {
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: input }
    ],
    temperature: 0.2,
    max_tokens: 800
  };

  const resp = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify(payload)
  });

  if (!resp.ok) {
    const text = await resp.text();
    console.error('OpenAI API request failed:', resp.status, text);
    throw new Error('OpenAI assistant failed to respond. Check your API key and network connection.');
  }

  const data = await resp.json();
  const reply = data?.choices?.[0]?.message?.content;
  if (!reply) {
    console.error('OpenAI API returned no reply:', data);
    throw new Error('OpenAI assistant returned an invalid response.');
  }

  return { reply, source: 'openai' };
}

export default getAssistantResponse;
