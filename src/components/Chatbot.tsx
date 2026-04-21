import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getChatResponse } from '../services/geminiService';
import { Message } from '../types';

function MessageBubble({ msg, isLoading, isLast, onRetry }: { msg: Message, isLoading: boolean, isLast: boolean, onRetry: () => void }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(msg.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} group space-y-2`}
    >
      <div className="relative max-w-[85%]">
        <div 
          className={`p-5 rounded-3xl text-[11px] leading-relaxed relative ${
            msg.role === 'user' 
              ? 'bg-primary-600 text-white rounded-tr-none font-medium' 
              : msg.isError
                ? 'bg-red-500/10 text-red-500 rounded-tl-none border border-red-500/20'
                : 'bg-neutral-900 text-neutral-300 rounded-tl-none border border-neutral-800/50'
          }`}
        >
          {msg.text || (isLoading && isLast ? <Loader2 className="animate-spin text-primary-500" size={14} /> : '')}
        </div>
        {msg.text && !msg.isError && (
          <button
            onClick={handleCopy}
            className={`absolute ${msg.role === 'user' ? '-left-8' : '-right-8'} top-1/2 -translate-y-1/2 p-2 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-500 hover:text-white`}
          >
            {copied ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
          </button>
        )}
      </div>
      {msg.isError && (
        <button 
          onClick={onRetry}
          className="text-[9px] font-bold uppercase tracking-widest text-primary-500 hover:text-primary-400 flex items-center gap-1.5 px-3 py-1 bg-primary-500/5 rounded-full border border-primary-500/10 transition-all active:scale-95"
        >
          <Send size={10} className="rotate-90" />
          Retry Request
        </button>
      )}
    </motion.div>
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm Pavan's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (overrideMessage?: any) => {
    const isOverride = typeof overrideMessage === 'string';
    const messageToSend = isOverride ? overrideMessage : input;
    if (!messageToSend || typeof messageToSend !== 'string' || !messageToSend.trim() || isLoading) return;

    const userMessage = messageToSend.trim();
    if (!isOverride) setInput('');
    
    // Only add to messages if it's not a retry (or we can replace the last error)
    if (!isOverride) {
      setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    }
    
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const stream = await getChatResponse(userMessage, history);
      
      let fullText = "";
      setMessages(prev => [...prev, { role: 'model', text: "" }]);

      for await (const chunk of stream) {
        if (chunk.text) {
          fullText += chunk.text;
          setMessages(prev => {
            const newMsgs = [...prev];
            newMsgs[newMsgs.length - 1] = { role: 'model', text: fullText };
            return newMsgs;
          });
        }
      }
    } catch (error: any) {
      console.error("Chat Error:", error);
      let errorMessage = "Systems failure. I encountered a logic error. Please try again or check your connection.";
      
      if (error.message?.includes('network')) {
        errorMessage = "Network interrupted. Please check your internet connection and retry.";
      } else if (error.message?.includes('safety')) {
        errorMessage = "Query blocked. The input violates safety parameters. Please refine your query.";
      } else if (error.message?.includes('quota')) {
        errorMessage = "Processing quota exceeded. Please wait a moment before retrying.";
      }

      setMessages(prev => [...prev, { 
        role: 'model', 
        text: errorMessage,
        isError: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    const lastUserMsg = [...messages].reverse().find(m => m.role === 'user');
    if (lastUserMsg) {
      handleSend(lastUserMsg.text);
    }
  };

  const quickPrompts = [
    "Tell me about TALOS",
    "View latest projects",
    "How to hire Pavan?",
    "Expertise in AI?"
  ];

  const handleQuickPrompt = (prompt: string) => {
    setInput(prompt);
    // Auto-send can be added here if desired:
    // setTimeout(() => handleSend(), 100);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-6 w-[350px] sm:w-[380px] h-[600px] bg-neutral-950 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-neutral-800"
          >
            {/* Header */}
            <div className="p-8 bg-neutral-900 flex justify-between items-center text-white border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <motion.div 
                    animate={isLoading ? { scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] } : {}}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-3 h-3 rounded-full bg-primary-500 absolute inset-0"
                  ></motion.div>
                  <div className="w-3 h-3 rounded-full bg-primary-500 relative"></div>
                </div>
                <div className="flex flex-col">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em]">TALOS Assistant</div>
                  <div className="text-[8px] text-neutral-500 font-bold uppercase tracking-widest mt-0.5">
                    {isLoading ? 'Processing Query...' : 'Active Logic Node'}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setMessages([{ role: 'model', text: "Systems reset. How can I assist?" }])}
                  className="p-2 hover:bg-white/5 rounded-xl text-neutral-500 hover:text-white transition-colors text-[8px] font-bold uppercase tracking-widest"
                  title="Clear Chat"
                >
                  Reset
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-thin scrollbar-thumb-neutral-800"
            >
              {messages.map((msg, i) => (
                <div key={i}>
                  <MessageBubble 
                    msg={msg} 
                    isLoading={isLoading} 
                    isLast={i === messages.length - 1} 
                    onRetry={handleRetry}
                  />
                </div>
              ))}
              {isLoading && messages[messages.length - 1].role === 'user' && (
                <div className="flex justify-start">
                  <div className="bg-neutral-900 p-5 rounded-2xl rounded-tl-none border border-neutral-800/50">
                    <Loader2 className="animate-spin text-primary-500" size={14} />
                  </div>
                </div>
              )}
            </div>

            {/* Quick Prompts */}
            <div className="px-6 py-4 flex gap-2 overflow-x-auto no-scrollbar border-t border-neutral-900 bg-neutral-950/50 backdrop-blur-sm">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleQuickPrompt(prompt)}
                  className="whitespace-nowrap px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-[9px] font-bold uppercase tracking-widest text-neutral-500 hover:text-white hover:border-primary-500 transition-all active:scale-95"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-8 border-t border-neutral-800 bg-neutral-950">
              <div className="relative group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Execute query..."
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl py-5 pl-6 pr-16 text-[11px] text-white focus:outline-none focus:border-primary-500 transition-all font-medium"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-primary-600 rounded-xl text-white hover:bg-primary-500 disabled:opacity-50 transition-all shadow-lg active:scale-90"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary-600 rounded-full shadow-2xl flex items-center justify-center text-white ring-4 ring-primary-500/20 hover:bg-primary-500 transition-colors"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
}
