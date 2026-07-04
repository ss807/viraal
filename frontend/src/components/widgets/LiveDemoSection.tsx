"use client";

import React, { useState } from "react";

const SAMPLE_CHATS = [
  { sender: "user", text: "Do you have 3BHK luxury flats available under 2 Cr in Gurgaon?" },
  { sender: "bot", text: "Namaste! 🙏 Yes, we have premium 3BHK units (1850 sq.ft) in Golf Course Extension starting at ₹1.85 Cr. All units face the golf greens!" },
  { sender: "bot", text: "Would you like me to book a VIP site visit for you this Saturday at 11 AM, or share the brochure PDF right here on WhatsApp?" },
];

export default function LiveDemoSection() {
  const [phone, setPhone] = useState("");
  const [callLang, setCallLang] = useState<"HI" | "EN" | "HINGLISH">("HINGLISH");
  const [callStatus, setCallStatus] = useState<"idle" | "calling" | "connected">("idle");

  // Chat simulator state
  const [chatMessages, setChatMessages] = useState(SAMPLE_CHATS);
  const [inputMsg, setInputMsg] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Audio tab state
  const [activeAudioTab, setActiveAudioTab] = useState<"HI" | "EN" | "HINGLISH">("HI");

  const handleCallDemo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    setCallStatus("calling");
    setTimeout(() => {
      setCallStatus("connected");
      // Trigger WhatsApp backup alert
      alert(`📞 AI Voice Agent is calling +91 ${phone} in ${callLang}! Please keep your phone handy.`);
    }, 2000);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputMsg.trim()) return;

    const userText = inputMsg;
    setChatMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInputMsg("");
    setIsTyping(true);

    setTimeout(() => {
      let botReply = "That's a great question! Our AI chatbot checks inventory in real-time and qualifies buyer budget instantly.";
      if (userText.toLowerCase().includes("price") || userText.toLowerCase().includes("cost") || userText.toLowerCase().includes("rate")) {
        botReply = "Our packages start at just ₹4,999/month! Want me to send the complete pricing catalog to your WhatsApp number?";
      } else if (userText.toLowerCase().includes("visit") || userText.toLowerCase().includes("demo") || userText.toLowerCase().includes("time")) {
        botReply = "Sure! I can sync directly with Google Calendar to book a slot. What date and time works best for you?";
      }
      setIsTyping(false);
      setChatMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 1200);
  };

  return (
    <section className="w-full py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            🔴 Live Interactive Proof
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-background">
            Don&apos;t Believe Us? <span className="text-primary">Experience Our AI Right Now.</span>
          </h2>
          <p className="text-on-surface-variant text-base sm:text-lg mt-3">
            No sales pitch. Try our autonomous AI voice caller and WhatsApp qualification bot live on your own device.
          </p>
        </div>

        {/* Demo Widgets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Widget 1: AI Voice Call & Audio Demo (6 Cols) */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-outline/30 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[28px] animate-pulse">support_agent</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-on-background">AI Voice Sales Agent Call</h3>
                  <p className="text-xs text-tertiary">Real-time conversational voice bot powered by Vapi/Bland AI</p>
                </div>
              </div>

              {/* Call Trigger Form */}
              <form onSubmit={handleCallDemo} className="p-5 rounded-2xl bg-surface-container-low border border-outline/30 space-y-4">
                <label className="block text-xs font-mono font-bold text-on-surface uppercase tracking-wide">
                  1. Choose Voice Language:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["HI", "EN", "HINGLISH"] as const).map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => setCallLang(l)}
                      className={`py-2 rounded-xl text-xs font-bold font-mono border transition-all ${
                        callLang === l
                          ? "bg-primary text-on-primary border-primary shadow-md"
                          : "bg-surface border-outline/30 text-on-surface-variant hover:border-primary/50"
                      }`}
                    >
                      {l === "HI" ? "🇮🇳 Hindi" : l === "EN" ? "🇬🇧 English" : "⚡ Hinglish"}
                    </button>
                  ))}
                </div>

                <label className="block text-xs font-mono font-bold text-on-surface uppercase tracking-wide pt-2">
                  2. Enter Your Mobile Number:
                </label>
                <div className="flex gap-2">
                  <div className="flex items-center justify-center px-3 rounded-xl bg-surface border border-outline/40 text-xs font-mono font-bold text-tertiary shrink-0">
                    +91
                  </div>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-surface border border-outline/40 rounded-xl px-4 py-2.5 text-sm font-mono text-on-background focus:outline-none focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={callStatus === "calling"}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all ${
                    callStatus === "calling"
                      ? "bg-surface-container-highest text-tertiary cursor-wait"
                      : callStatus === "connected"
                      ? "bg-success text-on-primary shadow-success/20"
                      : "bg-primary text-on-primary hover:bg-primary-fixed shadow-primary/25 active:scale-95"
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {callStatus === "calling" ? "ring_volume" : callStatus === "connected" ? "check_circle" : "call"}
                  </span>
                  <span>
                    {callStatus === "calling"
                      ? "Connecting AI Voice Server..."
                      : callStatus === "connected"
                      ? "AI Caller Triggered! Check Phone"
                      : "Trigger Live AI Call Now (30s)"}
                  </span>
                </button>
              </form>

              {/* Audio Center */}
              <div className="mt-6 pt-6 border-t border-outline/20">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono uppercase font-bold text-tertiary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">graphic_eq</span>
                    <span>Listen to Actual Call Recordings</span>
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-surface border border-outline/30 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => alert(`Playing ${activeAudioTab} sample call audio...`)}
                      className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary text-primary hover:text-on-primary flex items-center justify-center transition-colors shrink-0"
                      aria-label="Play sample audio"
                    >
                      <span className="material-symbols-outlined text-[22px]">play_arrow</span>
                    </button>
                    <div>
                      <div className="text-xs font-bold text-on-surface">
                        {activeAudioTab === "HI" ? "Jewellery Showroom Inquiry" : activeAudioTab === "EN" ? "Real Estate Site Visit Setter" : "SaaS Startup Follow-up"}
                      </div>
                      <div className="text-[11px] text-tertiary font-mono">Duration: 0:48 • Vernacular Indian Accent</div>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {(["HI", "EN", "HINGLISH"] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveAudioTab(tab)}
                        className={`px-2 py-1 rounded text-[10px] font-mono font-bold transition-colors ${
                          activeAudioTab === tab ? "bg-primary/20 text-primary border border-primary/30" : "text-tertiary hover:text-on-surface"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-[11px] text-tertiary flex items-center gap-1.5 justify-center">
              <span className="material-symbols-outlined text-[14px] text-success">lock</span>
              <span>Your phone number is processed securely & never shared with 3rd parties.</span>
            </div>
          </div>

          {/* Widget 2: Live WhatsApp Bot Simulator (6 Cols) */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-outline/30 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-surface to-surface-container">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#25D366] text-[28px]">forum</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-on-background">Live WhatsApp Bot Simulator</h3>
                    <p className="text-xs text-tertiary">Experience instant 30-second lead qualification</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-success/15 text-success border border-success/30 text-[11px] font-mono font-bold">
                  ● Online 24/7
                </span>
              </div>

              {/* Chat Window Frame */}
              <div className="w-full h-[320px] rounded-2xl bg-[#0b141a] border border-outline/40 flex flex-col justify-between overflow-hidden shadow-inner">
                {/* Chat Header */}
                <div className="bg-[#202c33] px-4 py-2.5 flex items-center gap-3 border-b border-white/5">
                  <div className="w-8 h-8 rounded-full bg-[#00a884] text-white font-bold text-xs flex items-center justify-center shrink-0">
                    VA
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white leading-tight">Viraal Real Estate AI Bot</span>
                    <span className="text-[10px] text-[#8696a0]">Typically replies instantly</span>
                  </div>
                </div>

                {/* Messages Body */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed shadow-md ${
                          msg.sender === "user"
                            ? "bg-[#005c4b] text-white rounded-br-none"
                            : "bg-[#202c33] text-[#e9edef] rounded-bl-none border border-white/5"
                        }`}
                      >
                        {msg.text}
                        <div className={`text-[9px] mt-1 text-right ${msg.sender === "user" ? "text-white/60" : "text-[#8696a0]"}`}>
                          Just now {msg.sender === "user" && "✓✓"}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-[#202c33] px-4 py-2 rounded-2xl rounded-bl-none text-xs text-[#8696a0] animate-pulse flex items-center gap-1">
                        <span>AI Bot is typing</span>
                        <span className="animate-bounce">.</span>
                        <span className="animate-bounce [animation-delay:0.2s]">.</span>
                        <span className="animate-bounce [animation-delay:0.4s]">.</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <form onSubmit={handleSendMessage} className="bg-[#202c33] p-2 flex items-center gap-2 border-t border-white/5">
                  <input
                    type="text"
                    placeholder="Type a question (e.g., 'What is the price?')..."
                    value={inputMsg}
                    onChange={(e) => setInputMsg(e.target.value)}
                    className="flex-1 bg-[#2a3942] text-white placeholder-[#8696a0] text-xs px-3.5 py-2 rounded-full focus:outline-none border border-transparent focus:border-[#00a884]"
                  />
                  <button
                    type="submit"
                    className="w-8 h-8 rounded-full bg-[#00a884] text-white flex items-center justify-center shrink-0 hover:bg-[#008f72] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Quick Prompts */}
            <div className="mt-4 pt-4 border-t border-outline/20">
              <div className="text-[11px] font-mono text-tertiary mb-2">⚡ Try clicking a sample query:</div>
              <div className="flex flex-wrap gap-2">
                {[
                  "What is your pricing?",
                  "Can I book a demo call?",
                  "Does it work for jewellery stores?",
                ].map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setInputMsg(prompt);
                      handleSendMessage();
                    }}
                    className="px-2.5 py-1 rounded-full bg-surface-container hover:bg-primary/20 text-on-surface hover:text-primary border border-outline/30 text-xs transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
