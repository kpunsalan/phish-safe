import React, { useState, useRef, useEffect } from 'react';
import './ChatWidget.css';
import { getAssistantResponse } from '../../utils/assistant';

type Role = 'user' | 'assistant' | 'system';

interface Message {
  id: string;
  role: Role;
  text: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'm0', role: 'assistant', text: 'Hi — I can analyze suspicious messages, answer questions about phishing, and guide you through incident response. Paste the message or ask me anything.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [lastSource, setLastSource] = useState<'openai' | 'error' | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open]);

  const toggle = () => setOpen(v => !v);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg: Message = { id: `u-${Date.now()}`, role: 'user', text: trimmed };
    setMessages(m => [...m, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const { reply, source } = await getAssistantResponse(trimmed);
      const assistantMsg: Message = { id: `a-${Date.now()}`, role: 'assistant', text: reply };
      setMessages(m => [...m, assistantMsg]);
      setLastSource(source);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Sorry — I had trouble analyzing that. Please try again later.';
      const errMsg: Message = { id: `e-${Date.now()}`, role: 'assistant', text: message };
      setMessages(m => [...m, errMsg]);
      setLastSource('error');
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={`chat-widget ${open ? 'open' : ''}`}>
      <button className="chat-toggle" onClick={toggle} aria-label={open ? 'Close chat' : 'Open chat'}>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 2l2 4 4 .5-3 3 .7 4L12 12 6.6 14.5 7.3 10 4 7.5 8 7 10 3z" />
        </svg>
      </button>

      <div className="chat-panel" role="dialog" aria-hidden={!open}>
        <div className="chat-header">
          <div className="chat-title">PhishSafe Assistant</div>
          <div className="chat-sub">Security-focused help with suspicious messages</div>
          <div className="assistant-badge" aria-hidden>
            {lastSource === 'openai'
              ? <span className="badge openai">OpenAI</span>
              : lastSource === 'error'
              ? <span className="badge error">OpenAI error</span>
              : <span className="badge unknown">Waiting</span>}
          </div>
        </div>

        <div className="chat-body" ref={listRef}>
          {messages.map((m) => (
            <div key={m.id} className={`chat-message ${m.role}`}>
              <div className="message-text">{m.text}</div>
            </div>
          ))}
          {loading && (
            <div className="chat-message assistant loading">
              <div className="loading-dot" />
              <div className="loading-dot" />
              <div className="loading-dot" />
            </div>
          )}
        </div>

        <div className="chat-input-row">
          <input
            aria-label="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Paste an email, text, or describe a call..."
          />
          <button className="send-btn" onClick={sendMessage} disabled={loading || !input.trim()}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
