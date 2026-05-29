import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot } from 'lucide-react';
import { askGroomingAI } from '@/lib/gemini';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

const hasApiKey = Boolean(import.meta.env.VITE_GEMINI_API_KEY);

export default function AiChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'ai',
      text: "Welcome to Mooch Saloon! I'm your personal grooming advisor. Ask me anything about haircuts, beard styling, or our services. 🪒",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    setMessages(m => [...m, { role: 'user', text }]);
    setLoading(true);

    try {
      if (!hasApiKey) {
        throw new Error('API key not configured');
      }
      const reply = await askGroomingAI(text);
      setMessages(m => [...m, { role: 'ai', text: reply }]);
    } catch {
      setMessages(m => [
        ...m,
        {
          role: 'ai',
          text: 'I\'m having trouble connecting right now. Please reach us directly on WhatsApp or visit us in Pushkar!',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!hasApiKey) return null; // Hide if no API key

  return (
    <>
      {/* Float button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center transition-all duration-300 shadow-lg"
        style={{ background: 'var(--gold)', borderRadius: '50%' }}
        aria-label="Open grooming assistant"
      >
        {open ? <X size={20} color="var(--dark)" /> : <Bot size={20} color="var(--dark)" />}
      </button>

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-80 md:w-96 flex flex-col shadow-2xl"
          style={{
            background: 'var(--dark-2)',
            border: '1px solid rgba(201,168,76,0.2)',
            maxHeight: '500px',
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
            <div className="w-8 h-8 flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.1)' }}>
              <MessageCircle size={14} style={{ color: 'var(--gold)' }} />
            </div>
            <div>
              <p className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--cream)' }}>
                Grooming Advisor
              </p>
              <p className="text-xs" style={{ color: 'var(--gold)' }}>Mooch Saloon · AI Powered</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4" style={{ maxHeight: '340px' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className="max-w-[85%] text-xs leading-relaxed px-4 py-3"
                  style={
                    msg.role === 'user'
                      ? { background: 'var(--gold)', color: 'var(--dark)' }
                      : { background: 'var(--dark-3)', color: 'var(--cream)', border: '1px solid rgba(201,168,76,0.1)' }
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-3 text-xs" style={{ background: 'var(--dark-3)', color: 'var(--gold)' }}>
                  Thinking…
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="flex gap-2 px-3 py-3" style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask about services…"
              className="flex-1 text-xs px-3 py-2 outline-none"
              style={{
                background: 'var(--dark-3)',
                border: '1px solid rgba(201,168,76,0.15)',
                color: 'var(--cream)',
                fontFamily: 'Montserrat, sans-serif',
              }}
            />
            <button
              onClick={send}
              disabled={loading}
              className="p-2 transition-opacity"
              style={{ background: 'var(--gold)', opacity: loading ? 0.5 : 1 }}
            >
              <Send size={14} color="var(--dark)" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
