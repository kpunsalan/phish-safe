// Lightweight rule-based assistant for on-device analysis

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

const urlRegex = /(https?:\/\/)?([\w-]+\.)+[\w-]+(\/\S*)?/i;
const shorteners = /\b(bit\.ly|tinyurl|t\.co|goo\.gl|ow\.ly)\b/i;

export async function getAssistantResponse(input: string) {
  await sleep(700);

  const text = input.toLowerCase();
  // If user asks a general question
  if (/\bwhat is\b|\bhow to\b|\bwhy\b|\bexplain\b|\bhelp\b/.test(text) && text.length < 120) {
    return `Short answer: Phishing (email), smishing (SMS), and vishing (phone) are social-engineering attacks that try to trick you into revealing credentials, personal data, or money. If you paste a suspicious message I can analyze it line-by-line and recommend next steps.`;
  }

  const findings: string[] = [];

  if (urlRegex.test(text)) {
    findings.push('- Contains a link or URL — hover or inspect the real destination before clicking.');
    if (shorteners.test(text)) {
      findings.push('- Link uses a URL shortener (e.g., bit.ly) which can hide the real destination.');
    }
  }

  if (/urgent|immediately|24 hours|act now|verify now|verify your|account will be|suspend/.test(text)) {
    findings.push('- Uses urgency or threats to pressure you into quick action.');
  }

  if (/password|ssn|social security|bank account|routing|account number|cvv|pin/.test(text)) {
    findings.push('- Requests sensitive personal or financial information — legitimate companies do not ask for this over unsolicited channels.');
  }

  if (/gift card|google play|itunes|paypal yourself|wire transfer|crypto|bitcoin/.test(text)) {
    findings.push('- Asks for payment via unusual channels (gift cards, crypto, wire) — classic scam indicator.');
  }

  if (/dear (customer|user)|valued customer/.test(text)) {
    findings.push('- Generic greeting instead of personalized name.');
  }

  if (/\b\d{3}-\d{2}-\d{4}\b/.test(text)) {
    findings.push('- Appears to contain a Social Security number format — treat as highly sensitive.');
  }

  if (/\b(paypal|irs|amazon|ups|fedex|usps|bank)\b/.test(text) && /\bmail\b|\.com|@/.test(text) === false) {
    // no-op; keep conservative
  }

  // Fallback for short messages that look like a question
  if (findings.length === 0) {
    if (text.length < 300) {
      return `I didn't detect obvious red flags from the short message, but here are safe next steps:\n- Do not click links or download attachments.\n- Verify by contacting the organization using a number or website you already trust.\n- If you shared any passwords or financial data, change those passwords and contact your bank.`;
    }
    return `I couldn't find strong automated signals, but treat unknown messages with suspicion. Paste the full message (headers, sender, and full link target if possible) for a more thorough analysis.`;
  }

  const actions = [] as string[];
  actions.push('Do not click links or call numbers provided in the message.');
  actions.push('If you shared passwords, change them now and enable 2FA where possible.');
  if (findings.some(f => /payment|gift cards|wire|crypto/.test(f))) {
    actions.push('Contact your bank immediately if you shared payment information.');
  }

  return `Analysis:\n${findings.join('\n')}\n\nRecommended next steps:\n- ${actions.join('\n- ')}`;
}

export default getAssistantResponse;
