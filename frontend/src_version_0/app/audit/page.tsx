"use client";

import React, { useState } from "react";
import LiveProofTicker from "@/components/layout/LiveProofTicker";
import TopAppBar from "@/components/layout/TopAppBar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";

export default function AuditBookingPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [industry, setIndustry] = useState("Real Estate & Builders");
  const [revenue, setRevenue] = useState("10-25 Lakhs");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) {
      alert("Please enter a valid WhatsApp number.");
      return;
    }

    const msg = `Namaste Viraal Team!\n\nI want to book my Free 10-Minute AI Audit:\n👤 Name: ${name || "Business Owner"}\n🏢 Business Name: ${business || "N/A"}\n🏭 Industry: ${industry}\n📱 Phone: ${phone}\n💰 Monthly Revenue: ${revenue}\n\nPlease analyze my current lead flow and tell me how many leads I am losing after hours!`;
    const waUrl = `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <LiveProofTicker />
      <TopAppBar />

      <main className="flex-1 pt-12 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              🎯 100% Free • No Sales Pitch
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-on-background">
              Book Your Free AI Audit
            </h1>
            <p className="text-on-surface-variant text-base sm:text-lg mt-3">
              We will review your current Facebook/Google ads, Google Maps listing, and WhatsApp response time to show you exactly how much revenue you are losing after 7 PM.
            </p>
          </div>

          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-primary/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-on-surface mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Zaveri"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-surface border border-outline/40 rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-on-surface mb-2">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-surface border border-primary/50 rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-on-surface mb-2">
                    Business / Showroom Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Zaveri Jewellers"
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    className="w-full bg-surface border border-outline/40 rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-on-surface mb-2">
                    Industry Niche
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full bg-surface border border-outline/40 rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary"
                  >
                    <option value="Real Estate & Builders">Real Estate & Builders</option>
                    <option value="Jewellery Showrooms">Jewellery Showrooms</option>
                    <option value="Hospitals & Clinics">Hospitals & Clinics</option>
                    <option value="Restaurants & Cafes">Restaurants & Cafes</option>
                    <option value="Gyms & Fitness">Gyms & Fitness Centers</option>
                    <option value="Education & Coaching">Education & Coaching Institutes</option>
                    <option value="Manufacturing & B2B">Manufacturing & B2B</option>
                    <option value="Other Business">Other Business</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-on-surface mb-2">
                  Current Estimated Monthly Revenue
                </label>
                <select
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  className="w-full bg-surface border border-outline/40 rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary"
                >
                  <option value="Under 5 Lakhs">Under ₹5 Lakhs / month</option>
                  <option value="5-10 Lakhs">₹5 - ₹10 Lakhs / month</option>
                  <option value="10-25 Lakhs">₹10 - ₹25 Lakhs / month</option>
                  <option value="25-50 Lakhs">₹25 - ₹50 Lakhs / month</option>
                  <option value="50 Lakhs+">₹50 Lakhs+ / month</option>
                </select>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-fixed text-on-primary font-display font-extrabold text-base py-4 rounded-xl shadow-xl shadow-primary/30 hover:shadow-primary/50 active:scale-95 transition-all flex items-center justify-center gap-2 group"
                >
                  <span className="material-symbols-outlined text-[22px]">send</span>
                  <span>Confirm Free Audit Booking via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
