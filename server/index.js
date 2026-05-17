import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.warn('Warning: OPENAI_API_KEY not set. The /api/assistant endpoint will fail without it.');
}

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

app.post('/api/assistant', async (req, res) => {
  try {
    const { input } = req.body;
    if (!input) return res.status(400).json({ error: 'Missing input' });

    if (!OPENAI_API_KEY) return res.status(500).json({ error: 'Server not configured with OPENAI_API_KEY' });

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
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify(payload)
    });

    if (!resp.ok) {
      const text = await resp.text();
      console.error('OpenAI error:', resp.status, text);
      return res.status(502).json({ error: 'OpenAI API error', details: text });
    }

    const data = await resp.json();
    const reply = data?.choices?.[0]?.message?.content || '';
    return res.json({ reply });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Assistant proxy running on http://localhost:${PORT}`);
});
