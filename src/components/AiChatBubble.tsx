/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Sparkles, X, Send, Bot, User, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/decoraraData.ts';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

export const AiChatBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'ai',
      text: "Namaste! I'm Decorara's gifting assistant. Looking for a hamper or décor idea for an upcoming milestone?",
      time: 'Just now'
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const quickReplies = [
    { label: 'Suggest a gift', query: 'Can you suggest a gift for a wedding or housewarming?' },
    { label: 'Delivery info', query: 'What are standard delivery timelines across India?' },
    { label: 'Customise box', query: 'Can I customize the items or ribbon in a hamper?' },
    { label: 'Talk to a human', query: 'I want to talk to a human stylist on WhatsApp' }
  ];

  const handleSend = (userText?: string) => {
    const textToSend = userText || inputVal.trim();
    if (!textToSend) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      time: 'Now'
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!userText) setInputVal('');

    // Process reply via rule-based knowledge base (easily swappable for real backend LLM API call)
    setTimeout(() => {
      const lower = textToSend.toLowerCase();
      let aiResponse = "Our head gifting concierge is available to curate custom options! Would you like to review our Royal Diwali Hamper or build a custom box?";

      if (lower.includes('delivery') || lower.includes('shipping') || lower.includes('timeline') || lower.includes('time')) {
        aiResponse = "We dispatch Pan-India via insured couriers. Metro cities arrive in 2 to 4 business days. Same-day express dispatch is available in Bengaluru and Delhi NCR upon WhatsApp request.";
      } else if (lower.includes('suggest') || lower.includes('recommend') || lower.includes('idea')) {
        aiResponse = "For housewarmings and weddings, our 'The Rajbari Festive Trunk' and 'Luxury Oud & Makrana Marble' are bestsellers. Or check out our interactive AI Gift Finder on this page!";
      } else if (lower.includes('custom') || lower.includes('box') || lower.includes('monogram')) {
        aiResponse = "Yes! You can choose your base box (pinewood trunk, emerald velvet, or jute) and handpick 3-5 artisanal treasures in our Custom Hamper Studio above.";
      } else if (lower.includes('human') || lower.includes('person') || lower.includes('whatsapp') || lower.includes('stylist') || lower.includes('talk')) {
        aiResponse = "Connecting you directly to our human concierge! Opening WhatsApp now...";
        const waText = encodeURIComponent("Hello Decorara Concierge, I'm chatting with your website assistant and would love to talk to a human stylist!");
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`, '_blank');
      } else if (lower.includes('payment') || lower.includes('pay') || lower.includes('price')) {
        aiResponse = "We accept all UPI apps (Google Pay, PhonePe, Paytm), Credit/Debit cards, Net Banking, and Amex via encrypted Razorpay invoicing.";
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiResponse,
        time: 'Now'
      };

      setMessages((prev) => [...prev, aiMsg]);
    }, 450);
  };

  return (
    <>
      {/* 1. FLOATING CHAT TRIGGER (BOTTOM-LEFT) */}
      <div className="fixed bottom-6 left-4 sm:left-8 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 bg-[#263328] hover:bg-[#3C4A3E] text-white px-5 py-3.5 rounded-full shadow-[0_8px_24px_rgba(38,51,40,0.25)] transition-all cursor-pointer hover:scale-105 border border-[#B8975A]/40"
            aria-label="Open AI Gifting Stylist Chat"
          >
            <Sparkles className="w-5 h-5 text-[#ffdea6] animate-pulse" />
            <span className="font-sans text-xs sm:text-sm font-medium tracking-wide">
              AI Gifting Stylist
            </span>
          </button>
        )}
      </div>

      {/* 2. CHAT PANEL DRAWER */}
      {isOpen && (
        <aside
          className="fixed bottom-6 left-4 sm:left-8 w-[calc(100vw-32px)] sm:w-96 bg-white rounded-3xl shadow-2xl border border-[#E9CFC4]/70 z-50 flex flex-col overflow-hidden animate-scale"
          aria-label="AI Gifting Stylist Assistant"
        >
          {/* Header */}
          <div className="p-4 bg-[#263328] text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#3C4A3E] flex items-center justify-center text-[#ffdea6]">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <span className="font-serif text-sm font-medium block">
                  Decorara Concierge AI
                </span>
                <span className="font-sans text-[10px] text-[#d7e7d6] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Online • Instant Gifting Help</span>
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#FAF6F0]/70 hover:text-white p-1 cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="p-4 h-72 overflow-y-auto flex flex-col gap-3 font-sans text-xs bg-[#FAF6F0]">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2 max-w-[85%] ${
                  m.sender === 'user' ? 'self-end flex-row-reverse' : 'self-start'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                    m.sender === 'user' ? 'bg-[#C0725A] text-white' : 'bg-[#263328] text-[#ffdea6]'
                  }`}
                >
                  {m.sender === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                </div>

                <div
                  className={`p-3 rounded-2xl leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#C0725A] text-white rounded-tr-none'
                      : 'bg-white text-[#263328] rounded-tl-none border border-[#E9CFC4]/50 shadow-2xs'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Reply Pills */}
          <div className="p-2 bg-[#F5EFEB] flex items-center gap-1.5 overflow-x-auto scrollbar-none border-t border-[#E9CFC4]/30">
            {quickReplies.map((qr) => (
              <button
                key={qr.label}
                onClick={() => handleSend(qr.query)}
                className="px-3 py-1.5 bg-white hover:bg-[#EBE3DB] rounded-full whitespace-nowrap text-[11px] font-sans font-medium text-[#263328] transition-all cursor-pointer border border-[#E9CFC4]/40 shrink-0"
              >
                {qr.label}
              </button>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-2.5 bg-white border-t border-[#E9CFC4]/40 flex items-center gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask for gift suggestions, delivery..."
              className="flex-1 px-3.5 py-2 rounded-full text-xs font-sans bg-[#FAF6F0] text-[#263328] border border-[#E9CFC4]/60 focus:outline-none focus:ring-1 focus:ring-[#C0725A]"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-full bg-[#C0725A] hover:bg-[#A35842] text-white transition-all cursor-pointer shadow-xs"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>
      )}

      {/* 3. FLOATING WHATSAPP BUTTON (BOTTOM-RIGHT ON ALL SCREENS) */}
      <div className="fixed bottom-6 right-4 sm:right-8 z-40">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            "Hello Decorara Concierge, I would like to enquire about your artisanal hampers and home décor curations."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-all hover:scale-105 cursor-pointer"
          title="Chat with Decorara Concierge on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="hidden md:inline font-sans text-xs sm:text-sm font-semibold tracking-wide">
            WhatsApp Inquiry
          </span>
        </a>
      </div>
    </>
  );
};
