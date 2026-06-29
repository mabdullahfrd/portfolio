import { useState, useEffect, useRef } from 'react';
import { X, Send, Sparkles } from 'lucide-react';

type ChatState = 'bubble' | 'expanded' | 'collapsed';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const demoQA: Message[] = [
  { id: 1, text: "Hi there! 👋 I'm Muhammad's virtual assistant. Ask me anything about his work, skills, or experience!", sender: 'bot' },
];

const sampleResponses: Record<string, string> = {
  'marketing': "Muhammad specializes in digital marketing, brand strategy, and growth hacking. He's worked on campaigns across social media, content marketing, and SEO.",
  'ai': "He's passionate about AI and its intersection with marketing. He explores emerging AI tools for content creation, automation, and data-driven decision making.",
  'branding': "Muhammad helps brands find their voice and build identity systems. From logo design to brand strategy, he believes every brand has a unique story.",
  'experience': "With 3+ years of hands-on experience, Muhammad has led community initiatives, organized youth events, and worked with brands on digital growth strategies.",
  'contact': "You can reach Muhammad via the email buttons in the Contact section, or connect with him on LinkedIn at @mabdullahfrd!",
  'name': "His full name is Muhammad Abdullah Fareed. He goes by @mabdullahfrd online!",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, value] of Object.entries(sampleResponses)) {
    if (lower.includes(key)) return value;
  }
  return "That's a great question! Muhammad Abdullah Fareed is always open to discussing marketing, AI, branding, and new opportunities. Feel free to reach out directly!";
}

export default function ChatWidget() {
  const [chatState, setChatState] = useState<ChatState>('bubble');
  const [messages, setMessages] = useState<Message[]>(demoQA);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (chatState === 'expanded') setChatState('collapsed');
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [chatState]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        text: getResponse(input),
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Panel */}
      <div
        className={`chat-panel mb-3 ${chatState === 'expanded' ? 'open' : ''}`}
      >
        <div className="w-[340px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] overflow-hidden border border-[#F0F0F0]">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#F0F0F0] bg-gradient-to-r from-[#1A1A1A] to-[#333333]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#E53E3E] overflow-hidden ring-2 ring-white/30 animate-pulse-soft">
                <img
                  src="/images/hero-portrait.png"
                  alt="Muhammad"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Muhammad AI</p>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-xs text-white/70">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setChatState('collapsed')}
              className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X size={18} className="text-white/80" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-message-in`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div
                  className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#1A1A1A] text-white rounded-br-md'
                      : 'bg-[#F3F4F6] text-[#1A1A1A] rounded-bl-md'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-[#F0F0F0]">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2.5 text-sm border border-[#E5E5E5] rounded-full outline-none focus:border-[#E53E3E] focus:ring-2 focus:ring-[#E53E3E]/20 transition-all"
              />
              <button
                onClick={handleSend}
                className="w-9 h-9 flex items-center justify-center bg-[#E53E3E] text-white rounded-full hover:bg-[#C53030] transition-all duration-300 hover:scale-110 hover:rotate-12 shrink-0"
                aria-label="Send message"
              >
                <Send size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bubble */}
      {chatState === 'bubble' && (
        <div className="chat-bubble-enter visible mb-3">
          <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.1)] px-4 py-3 relative border border-[#F0F0F0] flex items-center gap-2">
            <Sparkles size={16} className="text-[#E53E3E] animate-spin-slow" />
            <button
              onClick={() => setChatState('collapsed')}
              className="absolute -top-2 -right-2 w-5 h-5 bg-[#F3F4F6] rounded-full flex items-center justify-center hover:bg-[#E5E5E5] transition-colors"
              aria-label="Dismiss"
            >
              <X size={12} className="text-[#666666]" />
            </button>
            <p className="text-sm font-medium text-[#1A1A1A]">
              Ask me about Muhammad 👋
            </p>
          </div>
        </div>
      )}

      {/* Avatar trigger */}
      <button
        onClick={() =>
          setChatState(chatState === 'expanded' ? 'collapsed' : 'expanded')
        }
        className="w-12 h-12 rounded-full overflow-hidden border-[3px] border-white shadow-[0_2px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-110 shrink-0 relative"
        aria-label="Open chat"
      >
        <img
          src="/images/hero-portrait.png"
          alt="Chat with Muhammad"
          className="w-full h-full object-cover"
        />
        <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
      </button>
    </div>
  );
}
