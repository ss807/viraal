"use client";

import React, { useState } from "react";
import Link from "next/link";

const pillars = [
  {
    icon: "target",
    title: "Lead Generation Automation",
    desc: "Autonomous scraping, LinkedIn outreach, and multi-channel verification that feeds qualified appointments directly to your calendar.",
    tag: "3x Volume",
  },
  {
    icon: "forum",
    title: "AI Chatbots & Support",
    desc: "24/7 WhatsApp and website assistants trained on your docs. Resolves 85% of customer inquiries instantly without human intervention.",
    tag: "0s Wait Time",
  },
  {
    icon: "support_agent",
    title: "AI Voice Callers (Hindi/English)",
    desc: "Human-sounding voice bots that call inbound leads within 30 seconds of form submission. Speaks natural Hindi, Hinglish, and English.",
    tag: "Inbound & Outbound",
  },
  {
    icon: "trending_up",
    title: "Sales & Follow-up Sequences",
    desc: "Automated nurture campaigns across WhatsApp, SMS, and Email that re-engage cold leads and recover abandoned carts.",
    tag: "40% Higher Conversion",
  },
  {
    icon: "edit_note",
    title: "AI Content Production",
    desc: "SEO-optimized blog posts, ad copy, and social media captions generated daily at scale, tailored to your brand voice.",
    tag: "Organic Growth",
  },
  {
    icon: "videocam",
    title: "AI Video & Creative Services",
    desc: "Realistic AI spokesperson promos, product showcase reels, and automated video editing for Instagram Reels and YouTube Shorts.",
    tag: "High Engagement",
  },
  {
    icon: "account_tree",
    title: "Business Process Automation",
    desc: "Connect your CRM, billing systems, and inventory with smart workflows that eliminate tedious manual data entry and human error.",
    tag: "100+ Hrs Saved/mo",
  },
  {
    icon: "shopping_cart_checkout",
    title: "E-Commerce Growth Engine",
    desc: "Automated Shopify order routing, NDR management, and personalized WhatsApp product recommendations that drive repeat purchases.",
    tag: "D2C Scaling",
  },
];

export default function HomePage() {
  const [phoneInput, setPhoneInput] = useState("");
  const [callStatus, setCallStatus] = useState<"idle" | "calling" | "success">("idle");
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", text: "Namaste! I am Agnostic AI's qualification bot. Which industry is your business in?" },
  ]);

  const handleTriggerCall = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneInput) return;
    setCallStatus("calling");
    setTimeout(() => {
      setCallStatus("success");
    }, 2000);
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const newMsg = { sender: "user", text: chatInput };
    setChatMessages((prev) => [...prev, newMsg]);
    setChatInput("");
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Great! Our AI automates 90% of lead qualification for that industry. Would you like to book a 15-min live demo?" },
      ]);
    }, 1000);
  };

  return (
    <div className="w-full pb-16 overflow-hidden bg-background text-on-background">
      {/* 1. Hero Section (2-Column Grid as in Stitch) */}
      <section className="relative min-h-[820px] flex items-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface-container-low to-surface-variant/40 -z-10"></div>
        <div className="relative w-full max-w-[1280px] mx-auto px-5 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8 z-10">
            <div className="flex flex-col gap-3">
              <span className="inline-block px-3.5 py-1.5 bg-surface-container-low text-primary border border-outline-variant/30 rounded-full font-sans text-xs font-bold self-start uppercase tracking-wider shadow-2xs">
                Empowering MSMEs with Authority
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-on-surface leading-[1.15] tracking-tight">
                Automate Growth.<br />
                Scale with <span className="text-primary">Intelligence.</span>
              </h1>
              <p className="font-sans text-lg text-on-surface-variant max-w-xl leading-relaxed">
                Viraal deploys sophisticated AI voice and chat agents that sell, support, and scale your business 24/7. Built for high-discretion markets demanding zero friction.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/audit"
                className="bg-primary text-on-primary hover:bg-on-primary-container transition-all duration-300 px-8 py-4 rounded-xl font-sans text-sm font-bold shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Deploy Your AI Agent
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link
                href="/pricing"
                className="bg-transparent text-secondary border-2 border-secondary hover:bg-secondary/5 transition-all duration-300 px-8 py-4 rounded-xl font-sans text-sm font-bold flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">play_circle</span>
                Watch 90-Sec VSL
              </Link>
            </div>
            {/* Social Proof Row */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                <img className="w-9 h-9 rounded-full border-2 border-surface object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEs-qjgkvierUq3Tqxj7IyRrzqDNbWniNHdjpNxO4kZlvt0IGjeJ643EAMTVSWdTug_w687p9_fyMv76YbF4M5Q5xw0JRu4ERd0ZislA6DStEhPJK_4G8-e5zOhhqaCfexdfRiGFj1ZXMMQGuqcmmu3ctMkzu0jB-zZ-xWBITs-IF75VBhFtCrEieULXsWIoVooxlFu4fvpjppHMfQyVrsuVDqjDWMoOJJ6wawETHQJuRfx8AaV4oP2FrFpq_ZOsujc6-23Le9vB5w" alt="Client 1" />
                <img className="w-9 h-9 rounded-full border-2 border-surface object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn6A_OW6OILTlBDCJVjCsGVvI4aFFOaxiY4lOk2PTdQsfY7_ADnC8LqITjKvzDuKm63shN2zOM5N6Rs13K9ZHy8-icG0fIkhBdumXa2PoU-3YFPzZWynmSrXyIoTjyY-IE3XC_75g610bp_GgdTM-VcxM-pLQmh4DnDpf0e2rj6PEsWKOLJWPsZaqWli6zfF_HYE3MCqQiN70kbFMPcuoWJFKLfawwYzfepk3qkStht_rPzDYFwvEqiZ0-t_yv5sgDgmwgxN0g8lq5" alt="Client 2" />
                <img className="w-9 h-9 rounded-full border-2 border-surface object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkkoTS8hV58Cqu8yAO7I6yl3wyeZ0lbjyaiU3SOwBdYdvcEyu_NM00t9FnXGb3NfMLJ1N22zG5F8sKVCGAwp9xzjNEMBkVMYr4fMvPYbIc1ZrSQWboH51z4haCuWQFnUQZnfBsoD-pdXfedRZRUMEFAU5i5yXKX4KZtUMq69A7lO_zwX4ALOuGJsm_DfIn6jOYAi3h6esQ7hLd04vSjWC5UmMf2-cfSTuPqw1eQ20cEY3B4r6Q4hTGvJ24WRul02R-wbHYO2E-h-up" alt="Client 3" />
              </div>
              <span className="font-sans text-sm font-semibold text-on-surface-variant">Trusted by 500+ enterprises globally.</span>
            </div>
          </div>
          {/* Right Column: Sleek Video Player Card */}
          <div className="relative z-10 w-full aspect-video rounded-2xl overflow-hidden glass-card shadow-2xl group border border-outline-variant/40">
            <div
              className="bg-cover bg-center w-full h-full absolute inset-0 group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAzKIV3CWz7Krqyvjl5Xw96yKA3VW8w3SSGpw9WUH7btcxM-o5nZSbXEX1JZrMBA_kSheF95bQQXkKQIkv22DIkar8TwJ-HF2_eydTHGK9tYhf87hapZVqgqH-h02TWLojOiuhltT_-4X_05lEKH9JMntJRlytjEWZ3suLOZAze-HxaSryhCgEDO8hxqTxDaCBu--EytSlrCuFqrMDfg0iVZ0mt96Oi8ItUP1_MZ_v0-eItndk-efM4PQYBsHrgI7W8w_ZUI4NnxRN')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-on-surface/20 flex items-center justify-center backdrop-blur-[1px]">
              <button className="w-20 h-20 bg-surface/95 rounded-full flex items-center justify-center text-primary shadow-xl hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl ml-1">play_arrow</span>
              </button>
            </div>
            <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-on-surface flex items-center gap-2 shadow-sm">
              <span className="w-2.5 h-2.5 bg-error rounded-full animate-pulse"></span>
              90-Second AI Demo
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar (Logos as in Stitch) */}
      <section className="border-y border-outline-variant/20 bg-surface-container-lowest py-10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16 text-center">
          <p className="font-sans text-xs font-bold text-on-surface-variant/70 mb-6 uppercase tracking-widest">
            Trusted by Forward-Thinking MSMEs
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-display text-2xl font-extrabold text-on-surface-variant">CorpNova</span>
            <span className="font-display text-2xl font-extrabold text-on-surface-variant">NexusTech</span>
            <span className="font-display text-2xl font-extrabold text-on-surface-variant">Vanguard.</span>
            <span className="font-display text-2xl font-extrabold text-on-surface-variant">Aura AI</span>
            <span className="font-display text-2xl font-extrabold text-on-surface-variant hidden sm:block">Stratagem</span>
          </div>
        </div>
      </section>

      {/* 3. Live Demo Section (3-Column Side-by-Side Grid as in Stitch) */}
      <section className="py-20 bg-surface">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-on-surface mb-4">
              Experience the Authority
            </h2>
            <p className="font-sans text-base text-on-surface-variant">
              Interact with our live demos below. See firsthand how Viraal handles complex queries with professional grace.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: AI Voice Caller */}
            <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1.5 transition-transform duration-300 border border-outline-variant/40 bg-surface-container-lowest shadow-md">
              <div className="w-14 h-14 bg-primary-container/20 rounded-xl flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-3xl">call</span>
              </div>
              <h3 className="font-display font-bold text-xl text-on-surface">AI Voice Caller</h3>
              <p className="font-sans text-sm text-on-surface-variant flex-grow">
                A sophisticated voice agent capable of negotiating, qualifying, and closing in Hindi and English.
              </p>
              {callStatus === "idle" ? (
                <form onSubmit={handleTriggerCall} className="mt-4 space-y-3">
                  <div className="flex gap-2">
                    <span className="bg-surface-container px-3 py-2 rounded-lg font-mono text-xs font-bold text-on-surface flex items-center">+91</span>
                    <input
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={phoneInput}
                      onChange={(e) => setPhoneInput(e.target.value)}
                      className="flex-1 bg-surface-container-low border border-outline-variant/30 rounded-lg px-3 py-2 text-xs text-on-surface focus:outline-none focus:border-primary font-mono"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-primary text-on-primary hover:bg-on-primary-container transition-colors rounded-xl font-sans text-xs font-bold shadow-sm flex items-center justify-center gap-2 uppercase tracking-wider"
                  >
                    Call Demo (English) <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                  </button>
                </form>
              ) : callStatus === "calling" ? (
                <div className="py-6 text-center space-y-2">
                  <span className="material-symbols-outlined text-2xl text-primary animate-ping">phone_in_talk</span>
                  <p className="text-xs font-bold text-on-surface">Calling +91 {phoneInput}...</p>
                </div>
              ) : (
                <div className="py-4 text-center space-y-2">
                  <span className="material-symbols-outlined text-2xl text-green-600">check_circle</span>
                  <p className="text-xs font-bold text-green-700">Call Dispatched!</p>
                  <button onClick={() => { setCallStatus("idle"); setPhoneInput(""); }} className="text-[11px] underline text-primary">Reset</button>
                </div>
              )}
            </div>

            {/* Card 2: WhatsApp Sim */}
            <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1.5 transition-transform duration-300 border border-outline-variant/40 bg-surface-container-lowest shadow-md relative overflow-hidden">
              <div className="w-14 h-14 bg-[#25D366]/10 rounded-xl flex items-center justify-center text-[#25D366] mb-2">
                <span className="material-symbols-outlined text-3xl">forum</span>
              </div>
              <h3 className="font-display font-bold text-xl text-on-surface">WhatsApp Sim</h3>
              <p className="font-sans text-sm text-on-surface-variant">
                Instant, context-aware chat resolution integrating directly with your CRM via WhatsApp.
              </p>
              <div className="bg-[#ECE5DD] rounded-xl p-3 max-h-[140px] overflow-y-auto space-y-2 font-sans text-xs my-1 border border-outline-variant/20">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`p-2 rounded-lg max-w-[85%] ${msg.sender === "user" ? "bg-[#DCF8C6] text-black" : "bg-white text-black shadow-2xs"}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendChat} className="flex gap-2 mt-auto">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask bot something..."
                  className="flex-1 bg-surface-container-low border border-outline-variant/30 rounded-lg px-3 py-2 text-xs focus:outline-none"
                />
                <button type="submit" className="bg-[#25D366]/20 text-[#075E54] hover:bg-[#25D366]/30 px-3 py-2 rounded-lg font-bold text-xs flex items-center justify-center">
                  <span className="material-symbols-outlined text-base">send</span>
                </button>
              </form>
            </div>

            {/* Card 3: Audio Insights */}
            <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1.5 transition-transform duration-300 border border-outline-variant/40 bg-surface-container-lowest shadow-md">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-2">
                <span className="material-symbols-outlined text-3xl">graphic_eq</span>
              </div>
              <h3 className="font-display font-bold text-xl text-on-surface">Audio Insights</h3>
              <p className="font-sans text-sm text-on-surface-variant">
                Listen to real recorded AI conversations handling tough objections in native vernaculars.
              </p>
              <div className="flex-grow flex items-center justify-center py-6 opacity-70">
                <div className="flex items-center gap-1.5 h-10">
                  <div className="w-1.5 bg-secondary h-full rounded-full animate-pulse"></div>
                  <div className="w-1.5 bg-secondary h-3/4 rounded-full animate-pulse" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-1.5 bg-secondary h-1/2 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-1.5 bg-secondary h-full rounded-full animate-pulse" style={{ animationDelay: "0.3s" }}></div>
                  <div className="w-1.5 bg-secondary h-1/4 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                  <div className="w-1.5 bg-secondary h-3/4 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                  <div className="w-1.5 bg-secondary h-2/3 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                </div>
              </div>
              <button className="w-full py-3 bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors rounded-xl font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 mt-auto shadow-2xs">
                Listen to Samples <span className="material-symbols-outlined text-[16px]">play_arrow</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Intelligent Automation Infrastructure (Services Grid) */}
      <section className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-background mb-4">
            Intelligent Automation Infrastructure
          </h2>
          <p className="font-sans text-base text-on-surface-variant max-w-2xl mx-auto">
            Deploy specialized AI agents designed to handle complex workflows with precision and authority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group border border-outline-variant/40 hover:border-primary/40 bg-surface-container-lowest shadow-sm hover:shadow-lg"
            >
              <div>
                <div className="flex justify-between items-start mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
                  </div>
                  <span className="text-[11px] font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full border border-secondary/20">
                    {pillar.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-on-background mb-2.5 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-xs font-bold text-secondary">
                <span>Explore Deliverables</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Fixed Bottom CTA Bar (Exact from Stitch) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-highest border-t border-outline-variant/30 px-4 py-3 z-50 flex gap-2 shadow-2xl">
        <Link href="/audit" className="flex-1 bg-primary text-on-primary py-3 rounded-lg font-sans text-sm font-bold shadow-md text-center flex items-center justify-center">
          Get Audit
        </Link>
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="w-12 h-[44px] bg-[#25D366]/15 text-[#075E54] rounded-lg flex items-center justify-center self-center shadow-xs">
          <span className="material-symbols-outlined text-xl">chat</span>
        </a>
      </div>
    </div>
  );
}
