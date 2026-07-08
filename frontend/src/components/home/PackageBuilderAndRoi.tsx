"use client";

import React, { useState } from "react";

interface ServiceOption {
  id: string;
  name: string;
  price: number;
}

const packageOptions: ServiceOption[] = [
  { id: "insta", name: "Instagram Posts & Reels Engine", price: 6999 },
  { id: "ads", name: "Ad Campaign Automation", price: 7999 },
  { id: "whatsapp", name: "WhatsApp & DM Chatbot", price: 6999 },
  { id: "leads", name: "Lead Gen & Outreach", price: 7999 },
  { id: "content", name: "AI Content Production", price: 4999 },
];

export default function PackageBuilderAndRoi() {
  // Package Builder State
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // ROI Calculator State
  const [industry, setIndustry] = useState("Retail & E-commerce");
  const [revenueSlider, setRevenueSlider] = useState(10);
  const [bottleneck, setBottleneck] = useState("Not enough leads");

  const toggleOption = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedIds(next);
  };

  const builderTotal = packageOptions
    .filter((o) => selectedIds.has(o.id))
    .reduce((sum, o) => sum + o.price, 0);

  const handleSendProposal = () => {
    const selectedNames = packageOptions
      .filter((o) => selectedIds.has(o.id))
      .map((o) => `• ${o.name} (₹${o.price.toLocaleString("en-IN")})`)
      .join("\n");

    const message = encodeURIComponent(
      `Hi Viraal team, I want to explore this Custom AI Package:\n\n${
        selectedNames || "No items selected yet"
      }\n\nEstimated Monthly Investment: ₹${builderTotal.toLocaleString(
        "en-IN"
      )}/mo.\nPlease send me the proposal details!`
    );

    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  // ROI formulas
  const leadsLost = Math.floor(revenueSlider * 4.5);
  const recovery = (revenueSlider * 0.15).toFixed(1);
  const hoursSaved = Math.floor(20 + revenueSlider * 1.5);

  return (
    <section id="pricing" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
        {/* Left Card: Build Your AI Package matching Screenshot 2026-07-08 230736.png */}
        <div
          id="builder"
          className="bg-white border border-border rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-gold/15 text-gold flex items-center justify-center">
              <iconify-icon icon="solar:box-bold" class="text-2xl"></iconify-icon>
            </div>
            <div>
              <h2 className="font-heading font-extrabold text-2xl tracking-tight text-charcoal">
                Build Your AI Package
              </h2>
              <p className="text-xs text-slate font-medium">
                Select custom modules to build your automated growth engine
              </p>
            </div>
          </div>

          {/* Checklist with interactive data check */}
          <div className="space-y-3.5 flex-grow">
            {packageOptions.map((item) => {
              const isChecked = selectedIds.has(item.id);
              return (
                <label
                  key={item.id}
                  className={`flex items-center justify-between p-3.5 border rounded-xl cursor-pointer transition-all duration-200 select-none group ${
                    isChecked
                      ? "bg-amber-50/50 border-gold shadow-sm"
                      : "border-border hover:bg-gray-50/80 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleOption(item.id)}
                      className="w-5 h-5 rounded-md border-2 border-gray-300 checked:bg-gold checked:border-gold text-white focus:ring-0 cursor-pointer transition-all"
                    />
                    <span
                      className={`text-sm font-semibold transition-colors ${
                        isChecked
                          ? "text-charcoal font-bold"
                          : "text-charcoal group-hover:text-gold"
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold font-numbers text-slate">
                    ₹{item.price.toLocaleString("en-IN")}
                  </span>
                </label>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex justify-between items-end mb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate block">
                  Estimated Monthly Investment
                </span>
                <span className="text-2xs text-gray-400">
                  Cancel or adjust anytime
                </span>
              </div>
              <div className="text-right">
                <span className="text-2xs text-gray-400 block mb-0.5 uppercase tracking-wider font-bold">
                  TOTAL
                </span>
                <span className="font-numbers font-extrabold text-3xl sm:text-4xl text-charcoal">
                  ₹{builderTotal.toLocaleString("en-IN")}
                </span>
                <span className="text-slate text-sm font-medium"> /mo</span>
              </div>
            </div>

            {/* Starter AI Pack Recommendation when total > 14999 */}
            {builderTotal > 14999 && (
              <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-4 mb-5 transition-all">
                <div className="flex gap-3 items-start">
                  <iconify-icon
                    icon="solar:lightbulb-bolt-bold"
                    class="text-blue-600 text-2xl shrink-0 mt-0.5"
                  ></iconify-icon>
                  <div>
                    <h4 className="font-bold text-blue-900 text-sm">
                      💡 RECOMMENDED: Starter AI Pack
                    </h4>
                    <p className="text-xs text-blue-800 mt-0.5 leading-relaxed">
                      Bundle top 3 services for just{" "}
                      <span className="font-bold">₹14,999/mo</span>.{" "}
                      <span className="text-emerald-700 font-bold">
                        Save ₹{(builderTotal - 14999).toLocaleString("en-IN")}!
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Zero Risk Guarantee Alert Card matching Screenshot 2026-07-08 230736.png */}
            <div className="bg-[#EBFBF7] border border-[#A7E8D8] rounded-2xl p-4 mb-5 text-center">
              <p className="text-xs sm:text-sm font-bold text-[#006A6A] flex items-center justify-center gap-1.5">
                <iconify-icon
                  icon="solar:shield-check-bold"
                  class="text-lg"
                ></iconify-icon>
                Zero Risk Guarantee
              </p>
              <p className="text-xs text-[#006A6A]/90 mt-1 font-medium">
                We accept payment only if you are satisfied with your first fulfillment. No advance money required.
              </p>
            </div>

            <button
              onClick={handleSendProposal}
              className="w-full bg-gradient-to-r from-[#F59E0B] to-[#D4AF37] text-charcoal font-bold uppercase text-sm min-h-[3.25rem] rounded-xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(245,158,11,0.25)]"
            >
              <span>SEND THIS PROPOSAL TO MY WHATSAPP</span>
              <iconify-icon
                icon="solar:plain-2-bold"
                class="text-lg"
              ></iconify-icon>
            </button>
          </div>
        </div>

        {/* Right Card: ROI Calculator matching Screenshot 2026-07-08 230736.png */}
        <div className="bg-white text-charcoal border border-border rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col h-full">
          {/* Subtle decorative ambient gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

          <div className="mb-6">
            <h2 className="font-heading font-extrabold text-2xl tracking-tight text-charcoal">
              ROI Calculator
            </h2>
            <p className="text-slate text-sm font-medium mt-1">
              See how much revenue you&apos;re leaving on the table.
            </p>
          </div>

          <div className="space-y-6 flex-grow">
            {/* Industry Selector */}
            <div>
              <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-2">
                INDUSTRY
              </label>
              <div className="relative">
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-[#f8f9fa] border border-border rounded-xl p-3.5 pr-10 text-charcoal font-semibold focus:border-[#006A6A] outline-none text-sm appearance-none cursor-pointer transition-all"
                >
                  <option>Retail & E-commerce</option>
                  <option>Real Estate & Construction</option>
                  <option>Healthcare & Clinics</option>
                  <option>Education & Coaching</option>
                  <option>Professional Services</option>
                  <option>Hospitality & Restaurants</option>
                </select>
                <iconify-icon
                  icon="solar:alt-arrow-down-linear"
                  class="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate text-lg pointer-events-none"
                ></iconify-icon>
              </div>
            </div>

            {/* Monthly Revenue Slider matching Screenshot 2026-07-08 230736.png */}
            <div>
              <div className="flex justify-between items-end mb-2.5">
                <label className="block text-xs font-bold text-slate uppercase tracking-wider">
                  MONTHLY REVENUE
                </label>
                <span className="font-numbers font-bold text-lg text-gold bg-amber-50 px-3 py-1 rounded-lg border border-amber-200/60">
                  ₹{revenueSlider} Lakh{revenueSlider > 1 ? "s" : ""}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={revenueSlider}
                onChange={(e) => setRevenueSlider(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
              />
              <div className="flex justify-between text-2xs font-bold text-slate mt-1.5 font-numbers">
                <span>₹1L</span>
                <span>₹50L+</span>
              </div>
            </div>

            {/* Biggest Bottleneck Radio Options */}
            <div>
              <label className="block text-xs font-bold text-slate uppercase tracking-wider mb-3">
                BIGGEST BOTTLENECK
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: "leads", label: "Not enough leads" },
                  { id: "lost", label: "Leads get lost" },
                  { id: "manual", label: "Manual work" },
                ].map((opt) => {
                  const isSelected = bottleneck === opt.label;
                  return (
                    <label
                      key={opt.id}
                      onClick={() => setBottleneck(opt.label)}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all select-none ${
                        isSelected
                          ? "bg-amber-50/50 border-gold shadow-sm"
                          : "bg-[#f8f9fa] border-border hover:border-gray-300"
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? "border-gold" : "border-gray-300"
                        }`}
                      >
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-gold" />
                        )}
                      </span>
                      <span className="text-sm font-semibold text-charcoal">
                        {opt.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Dynamic Results Summary Bar matching Screenshot 2026-07-08 230736.png */}
          <div className="mt-8 bg-[#f8f9fa] rounded-2xl p-5 border border-border flex flex-col sm:flex-row justify-around gap-4 text-center shadow-inner">
            <div>
              <span className="block text-2xs font-bold text-slate uppercase tracking-wider mb-1">
                ESTIMATED LEADS LOST
              </span>
              <span className="font-numbers font-extrabold text-2xl text-red-500">
                {leadsLost}/mo
              </span>
            </div>
            <div className="hidden sm:block w-px bg-border my-1" />
            <div>
              <span className="block text-2xs font-bold text-slate uppercase tracking-wider mb-1">
                POTENTIAL RECOVERY
              </span>
              <span className="font-numbers font-extrabold text-2xl text-[#006A6A]">
                ₹{recovery}L/mo
              </span>
            </div>
            <div className="hidden sm:block w-px bg-border my-1" />
            <div>
              <span className="block text-2xs font-bold text-slate uppercase tracking-wider mb-1">
                HOURS SAVED
              </span>
              <span className="font-numbers font-extrabold text-2xl text-blue-600">
                {hoursSaved} hrs
              </span>
            </div>
          </div>

          <button
            onClick={() =>
              window.open(
                `https://wa.me/919876543210?text=${encodeURIComponent(
                  `Hi Viraal, I used the ROI Calculator for ${industry} (₹${revenueSlider} Lakhs/mo revenue). My biggest bottleneck is "${bottleneck}". Please send me a Free Custom Growth Plan!`
                )}`,
                "_blank"
              )
            }
            className="w-full bg-[#006A6A] hover:bg-[#085858] text-white font-bold uppercase text-sm min-h-[3.25rem] rounded-xl active:scale-[0.98] transition-all mt-6 shadow-[0_4px_15px_rgba(0,106,106,0.25)] flex items-center justify-center gap-2"
          >
            <span>GET FREE CUSTOM GROWTH PLAN</span>
            <iconify-icon icon="solar:arrow-right-up-linear" class="text-lg"></iconify-icon>
          </button>
        </div>
      </div>
    </section>
  );
}
