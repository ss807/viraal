"use client";

import React, { useState } from "react";

const CORE_SERVICES = [
  { id: "lead_gen", title: "Lead Generation Automation", price: 7999, desc: "AI Lead Scraping, LinkedIn Outreach, Google Maps extraction, CRM Sync" },
  { id: "chatbots", title: "AI Chatbots & Customer Support", price: 6999, desc: "24/7 WhatsApp Assistant, Website Bot, IG/FB DM automated qualification" },
  { id: "social", title: "Social Media Automation", price: 6499, desc: "AI Content Creation, Reels/Shorts auto-scheduling, Comment responder" },
  { id: "sales", title: "Sales Automation & Closers", price: 7999, desc: "Follow-up sequences, Lead scoring, instant quote generation, meeting setter" },
  { id: "content", title: "AI Content Production", price: 4999, desc: "SEO blog writing, regional ad copy, product descriptions, email campaigns" },
  { id: "ecommerce", title: "E-Commerce Automation", price: 6499, desc: "WhatsApp catalog sync, abandoned cart recovery, automated review requests" },
  { id: "video", title: "AI Video & Avatar Services", price: 8999, desc: "HeyGen AI Spokesperson videos, regional promotional clips, UGC generation" },
  { id: "process", title: "Business Process Automation", price: 6999, desc: "HR/Employee onboarding bots, invoice automation, automated PDF reporting" },
];

const INDUSTRIES = [
  { name: "Real Estate & Builders", avgOrderValue: 500000, leadLossRate: 0.65 },
  { name: "Jewellery Showrooms", avgOrderValue: 45000, leadLossRate: 0.45 },
  { name: "Hospitals & Clinics", avgOrderValue: 8000, leadLossRate: 0.40 },
  { name: "Restaurants & Cafes", avgOrderValue: 1200, leadLossRate: 0.35 },
  { name: "Gyms & Fitness Centers", avgOrderValue: 15000, leadLossRate: 0.50 },
  { name: "Education Institutes", avgOrderValue: 35000, leadLossRate: 0.55 },
  { name: "Manufacturing & B2B", avgOrderValue: 200000, leadLossRate: 0.60 },
  { name: "Fashion & Retail", avgOrderValue: 2500, leadLossRate: 0.30 },
];

export default function ROICalculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["lead_gen", "chatbots"]);
  const [industry, setIndustry] = useState(INDUSTRIES[0].name);
  const [revenue, setRevenue] = useState(10); // in Lakhs
  const [bottleneck, setBottleneck] = useState("Too many leads get lost/unanswered after 7 PM");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Toggle Service
  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((s) => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // Calculate Price & Savings
  const rawTotal = selectedServices.reduce((sum, id) => {
    const s = CORE_SERVICES.find((item) => item.id === id);
    return sum + (s ? s.price : 0);
  }, 0);

  let recommendedBundle = null;
  let finalPrice = rawTotal;
  let savings = 0;

  if (selectedServices.length >= 4 || rawTotal >= 24000) {
    recommendedBundle = { name: "Growth AI Suite (Most Popular)", price: 24999 };
    if (rawTotal > 24999) {
      savings = rawTotal - 24999;
      finalPrice = 24999;
    }
  } else if (selectedServices.length >= 2 || rawTotal >= 14000) {
    recommendedBundle = { name: "Starter AI Pack", price: 14999 };
    if (rawTotal > 14999) {
      savings = rawTotal - 14999;
      finalPrice = 14999;
    }
  }

  // ROI Estimation
  const selectedInd = INDUSTRIES.find((i) => i.name === industry) || INDUSTRIES[0];
  const estMonthlyVisitors = Math.round((revenue * 100000) / (selectedInd.avgOrderValue * 0.1));
  const estLostLeads = Math.round(estMonthlyVisitors * selectedInd.leadLossRate * 0.3);
  const estRecoveredRevenue = Math.round(estLostLeads * 0.25 * selectedInd.avgOrderValue);
  const hoursSaved = selectedServices.length * 5 + 10;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) {
      alert("Please enter your WhatsApp number to receive your report.");
      return;
    }

    // Format WhatsApp proposal URL
    const selectedNames = selectedServices.map((id) => CORE_SERVICES.find((s) => s.id === id)?.title).join(", ");
    const msg = `Namaste Viraal Team!\n\nHere is my AI Growth Plan for *${industry}*:\n👤 Name: ${name || "Business Owner"}\n📱 Phone: ${phone}\n💰 Current Revenue: ₹${revenue} Lakhs/mo\n⚡ Biggest Challenge: ${bottleneck}\n\n🛠️ Selected Services: ${selectedNames || "None"}\n💎 Estimated Investment: ₹${finalPrice.toLocaleString("en-IN")}/mo ${savings > 0 ? `(Saved ₹${savings.toLocaleString("en-IN")})` : ""}\n\n📈 Estimated Monthly Revenue Recovery: ₹${estRecoveredRevenue.toLocaleString("en-IN")}\n⏱️ Estimated Hours Saved: ${hoursSaved} hrs/week\n\nPlease schedule my 10-minute discovery call & send full PDF case study!`;

    const waUrl = `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-12 p-4 sm:p-6 md:p-10 rounded-3xl bg-surface border border-outline/30 shadow-2xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-bold uppercase tracking-wider mb-3">
          ⚡ Interactive Lead & ROI Engine
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-on-background">
          Build Your AI Package & Estimate ROI
        </h2>
        <p className="text-on-surface-variant text-sm sm:text-base mt-2">
          Select the AI automation deliverables you need and see instant customized revenue recovery estimates for your industry.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Step 1: Package Builder (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between border-b border-outline/30 pb-3">
            <h3 className="font-display text-lg sm:text-xl font-bold text-on-background flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-xs flex items-center justify-center font-mono">1</span>
              <span>Select AI Automation Modules</span>
            </h3>
            <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
              {selectedServices.length} selected
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {CORE_SERVICES.map((service) => {
              const isChecked = selectedServices.includes(service.id);
              return (
                <div
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isChecked
                      ? "bg-surface-container-high border-primary shadow-lg shadow-primary/5"
                      : "bg-surface-container-low border-outline/20 hover:border-outline"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-display font-bold text-sm text-on-background leading-snug">
                        {service.title}
                      </span>
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 border ${
                          isChecked ? "bg-primary border-primary text-on-primary" : "border-outline text-transparent"
                        }`}
                      >
                        <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                      </div>
                    </div>
                    <p className="text-xs text-tertiary mt-1.5 leading-relaxed line-clamp-2">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-outline/10 flex justify-between items-center text-xs">
                    <span className="text-tertiary">Monthly investment</span>
                    <span className="font-mono font-bold text-primary">₹{service.price.toLocaleString("en-IN")}/mo</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Running Total Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-surface-container to-surface-container-high border border-primary/30">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <span className="text-xs uppercase font-mono text-tertiary tracking-wider">Estimated Monthly Investment</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-on-background">
                    ₹{finalPrice.toLocaleString("en-IN")}/mo
                  </span>
                  {savings > 0 && (
                    <span className="text-xs font-mono text-tertiary line-through">
                      ₹{rawTotal.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>
              </div>

              {recommendedBundle ? (
                <div className="bg-primary/15 border border-primary/40 text-primary px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">local_fire_department</span>
                  <div>
                    <div className="font-bold">{recommendedBundle.name}</div>
                    {savings > 0 && <div className="text-[11px] text-on-primary-container">Save ₹{savings.toLocaleString("en-IN")}/mo with Bundle!</div>}
                  </div>
                </div>
              ) : (
                <div className="text-xs text-tertiary italic">
                  💡 Select 2+ modules to unlock bundle discounts!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Step 2: ROI Calculator & Lead Gate (5 Cols) */}
        <div className="lg:col-span-5 bg-surface-container-low p-6 sm:p-8 rounded-2xl border border-outline/30 space-y-6">
          <div className="border-b border-outline/30 pb-3">
            <h3 className="font-display text-lg sm:text-xl font-bold text-on-background flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-xs flex items-center justify-center font-mono">2</span>
              <span>Calculate Your ROI Recovery</span>
            </h3>
          </div>

          <div className="space-y-4">
            {/* Industry Selector */}
            <div>
              <label className="block text-xs font-bold uppercase font-mono text-tertiary mb-1.5">
                Your Industry Niche
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full bg-surface border border-outline/40 rounded-xl px-3.5 py-2.5 text-sm text-on-surface font-medium focus:outline-none focus:border-primary"
              >
                {INDUSTRIES.map((ind) => (
                  <option key={ind.name} value={ind.name}>
                    {ind.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Revenue Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold uppercase font-mono text-tertiary mb-1.5">
                <span>Current Monthly Revenue</span>
                <span className="text-primary font-mono text-sm font-bold">₹{revenue} Lakhs/mo</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[11px] text-tertiary mt-1">
                <span>₹1L</span>
                <span>₹25L</span>
                <span>₹50L+</span>
              </div>
            </div>

            {/* Bottleneck Radio */}
            <div>
              <label className="block text-xs font-bold uppercase font-mono text-tertiary mb-1.5">
                Primary Growth Bottleneck
              </label>
              <select
                value={bottleneck}
                onChange={(e) => setBottleneck(e.target.value)}
                className="w-full bg-surface border border-outline/40 rounded-xl px-3.5 py-2.5 text-xs text-on-surface font-medium focus:outline-none focus:border-primary"
              >
                <option value="Too many leads get lost/unanswered after 7 PM">Missed calls / Unanswered WhatsApp after hours</option>
                <option value="Not getting enough qualified inquiries from ads">Ad spend wasted on unqualified/junk leads</option>
                <option value="Spending 5+ hours daily on repetitive WhatsApp FAQs">Too much time spent on manual WhatsApp replies</option>
                <option value="Competitors are converting faster online">Competitors responding faster to digital leads</option>
              </select>
            </div>
          </div>

          {/* AI Projected Results Card */}
          <div className="p-4 rounded-xl bg-surface border border-primary/40 space-y-3">
            <div className="text-xs font-mono font-bold text-primary uppercase tracking-wide flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
              <span>AI Growth Prediction (Industry Benchmark)</span>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-2.5 rounded-lg bg-surface-container/50 border border-outline/20">
                <div className="text-[11px] text-tertiary">Estimated Lost Leads</div>
                <div className="font-mono text-lg font-bold text-error mt-0.5">~{estLostLeads}/month</div>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-container/50 border border-outline/20">
                <div className="text-[11px] text-tertiary">Recovered Revenue</div>
                <div className="font-mono text-lg font-bold text-success mt-0.5">₹{(estRecoveredRevenue / 100000).toFixed(1)}L - ₹{((estRecoveredRevenue * 1.5) / 100000).toFixed(1)}L</div>
              </div>
            </div>
            <div className="text-xs text-on-surface-variant flex items-center justify-between border-t border-outline/20 pt-2">
              <span>⏱️ Weekly Time Saved:</span>
              <span className="font-mono font-bold text-on-surface">{hoursSaved}+ Hours/week</span>
            </div>
          </div>

          {/* Lead Capture Gate */}
          <form onSubmit={handleSubmit} className="space-y-3 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <input
                type="text"
                placeholder="Your Name (Optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-surface border border-outline/40 rounded-xl px-3.5 py-2 text-xs text-on-surface focus:outline-none focus:border-primary"
              />
              <input
                type="tel"
                required
                placeholder="WhatsApp Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-surface border border-primary/50 rounded-xl px-3.5 py-2 text-xs text-on-surface focus:outline-none focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-fixed text-on-primary font-bold text-sm py-3.5 rounded-xl shadow-xl shadow-primary/25 hover:shadow-primary/40 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
              <span>Send My Free AI Growth Plan to WhatsApp</span>
            </button>
            <p className="text-[11px] text-center text-tertiary">
              🔒 Instant automated delivery via WhatsApp. No spam guaranteed.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
