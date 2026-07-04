"use client";

import React, { useState } from "react";

const FAQS = [
  {
    qHi: "Kya yeh mere jaisi chhoti dukaan ya showroom ke liye kaam karega?",
    qEn: "Will this AI automation work for a small shop or showroom like mine?",
    aHi: "Haan bilkul! Hamare 60% clients Surat, Jaipur, aur Kanpur ke traditional showroom owners hain. Agar aapke paas WhatsApp aur mobile phone hai, toh humara AI bot aapke liye 24/7 inquiry handle karega aur customer ko shop par aane ke liye invite karega.",
    aEn: "Yes absolutely! 60% of our clients are traditional showroom owners in Tier-2 and Tier-3 cities. If you have WhatsApp on a smartphone, our AI bot will handle inquiries 24/7 and invite customers directly to your shop.",
  },
  {
    qHi: "Pehle ek marketing agency se kaam karaya tha, paise doob gaye aur kuch nahi hua. Aap kaise different ho?",
    qEn: "Tried a digital marketing agency before, wasted money and nothing happened. How are you different?",
    aHi: "Traditional agencies sirf 'likes' aur 'impressions' bechti hain. Hum revenue-focused AI automation agency hain. Humara system har ad lead ko 30 second ke andar WhatsApp aur AI Voice call karta hai. Jab tak lead qualify nahi hoti, aapki sales team ko time waste nahi karna padta.",
    aEn: "Traditional agencies sell 'likes' and 'impressions'. We are a revenue-focused AI automation agency. Our system contacts every ad lead within 30 seconds via WhatsApp and AI Voice call. Your sales team only talks to pre-qualified serious buyers.",
  },
  {
    qHi: "Kitna kharcha aayega total? Koi hidden charges toh nahi hain?",
    qEn: "What will be the total cost? Are there any hidden charges?",
    aHi: "Total transparency! Humari core AI setup aur management fee ₹4,999/month se start hoti hai. Iske alawa jo Meta/Google ad spend hoga wo aapka apna budget hoga (e.g. ₹300-₹500/day), aur WhatsApp/Vapi API ka actual bill (typically ₹500-₹1000/month) seedha official provider se aayega.",
    aEn: "Total transparency! Our core AI management fee starts at ₹4,999/month. Aside from this, your ad spend is completely under your control (e.g., ₹300-₹500/day), and API usage (typically ₹500-₹1000/month) is billed directly by official providers at cost.",
  },
  {
    qHi: "Kya mujhe ya mere staff ko coding ya koi technical software sikhna padega?",
    qEn: "Do I or my staff need to learn coding or any technical software?",
    aHi: "Bilkul nahi! Zero technical knowledge required. Humara system 100% cloud par chalta hai. Aapko aur aapke staff ko sirf apna regular WhatsApp check karna hai jahan qualified leads ki summary aur customer phone numbers auto-forward hote hain.",
    aEn: "Not at all! Zero technical knowledge required. Our system runs 100% in the cloud. You and your staff only need to check your regular WhatsApp where qualified lead summaries and phone numbers are automatically forwarded.",
  },
  {
    qHi: "Kya mujhe pehle trial ya pilot project milega?",
    qEn: "Can I get a trial or pilot project before signing a long-term contract?",
    aHi: "Ji haan! Humara special 14-day 'Bohoni Pilot' available hai. Hum aapke business ke liye custom WhatsApp bot setup karenge. Agar aapko real lead recovery aur sales improvement nahi dikhi, toh aap month-to-month kabhi bhi cancel kar sakte hain without penalty.",
    aEn: "Yes! We offer a special 14-day 'Bohoni Pilot'. We set up a custom WhatsApp bot for your business. If you don't see real lead recovery and measurable time savings, you can cancel month-to-month anytime with zero penalty.",
  },
];

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [lang, setLang] = useState<"HI" | "EN">("HI");

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-surface-container-low border-t border-outline/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            ❓ Anti-Jargon Clear Answers
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-on-background">
            Frequently Asked Questions
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base mt-2">
            Have questions about how AI automation works for traditional Indian businesses? Here are straight answers.
          </p>

          {/* Language Toggle Pill */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-surface border border-outline/30">
            <button
              onClick={() => setLang("HI")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold font-mono transition-all ${
                lang === "HI" ? "bg-primary text-on-primary shadow-sm" : "text-tertiary hover:text-on-surface"
              }`}
            >
              🇮🇳 Hindi / Hinglish
            </button>
            <button
              onClick={() => setLang("EN")}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold font-mono transition-all ${
                lang === "EN" ? "bg-primary text-on-primary shadow-sm" : "text-tertiary hover:text-on-surface"
              }`}
            >
              🇬🇧 English
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => toggleAccordion(idx)}
                className={`rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden ${
                  isOpen
                    ? "bg-surface border-primary shadow-xl shadow-primary/5"
                    : "bg-surface/60 border-outline/30 hover:border-outline hover:bg-surface"
                }`}
              >
                {/* Question */}
                <div className="p-5 sm:p-6 flex items-start justify-between gap-4">
                  <h3 className="font-display font-bold text-base sm:text-lg text-on-background leading-snug flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/15 text-primary text-xs flex items-center justify-center font-mono shrink-0 mt-0.5">
                      Q{idx + 1}
                    </span>
                    <span>{lang === "HI" ? faq.qHi : faq.qEn}</span>
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-primary text-on-primary" : "text-primary"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">expand_more</span>
                  </div>
                </div>

                {/* Answer */}
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed border-t border-outline/10 mt-2">
                    <div className="pt-4 flex items-start gap-3">
                      <span className="material-symbols-outlined text-success text-[20px] shrink-0 mt-0.5">verified</span>
                      <div>
                        <p className="text-on-surface font-medium">{lang === "HI" ? faq.aHi : faq.aEn}</p>
                        {/* Show alternate language subtext */}
                        <p className="text-xs text-tertiary italic mt-2.5 pt-2 border-t border-outline/10">
                          {lang === "HI" ? `🇬🇧 ${faq.aEn}` : `🇮🇳 ${faq.aHi}`}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-10 p-6 rounded-2xl bg-surface border border-outline/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-display font-bold text-base text-on-background">Still have a custom question?</h4>
            <p className="text-xs text-tertiary mt-0.5">Our AI bot answers questions 24/7 on WhatsApp in real-time.</p>
          </div>
          <a
            href="https://wa.me/919876543210?text=Hi%20Viraal,%20I%20have%20a%20question%20about%20your%20AI%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary-container hover:bg-secondary text-on-secondary-container font-bold text-xs px-5 py-3 rounded-xl transition-all flex items-center gap-2 shrink-0"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Ask on WhatsApp Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
