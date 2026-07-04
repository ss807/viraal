"use client";

import React, { useState } from "react";
import Link from "next/link";
import LiveProofTicker from "@/components/layout/LiveProofTicker";
import TopAppBar from "@/components/layout/TopAppBar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      alert("Please enter your registered 10-digit WhatsApp number.");
      return;
    }
    setOtpSent(true);
    alert(`🔒 Verification OTP sent via WhatsApp to +91 ${phone}! (Demo OTP: 1234)`);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === "1234" || otp.length === 4) {
      alert("Welcome to Viraal Client Portal! Redirecting to your AI analytics dashboard...");
    } else {
      alert("Invalid OTP. Please enter 1234 for demo.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <LiveProofTicker />
      <TopAppBar />

      <main className="flex-1 pt-16 pb-24 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-outline/30 shadow-2xl relative">
            <div className="text-center mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary text-on-primary font-display font-extrabold text-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30">
                V
              </div>
              <h1 className="font-display font-extrabold text-2xl text-on-background">
                Client Portal Login
              </h1>
              <p className="text-xs text-tertiary mt-1">
                Access your real-time WhatsApp bot analytics, CRM lead logs, and voice call recordings.
              </p>
            </div>

            {!otpSent ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-on-surface mb-2">
                    Registered WhatsApp Number
                  </label>
                  <div className="flex gap-2">
                    <div className="px-3 py-3 rounded-xl bg-surface border border-outline/40 text-xs font-mono font-bold text-tertiary flex items-center shrink-0">
                      +91
                    </div>
                    <input
                      type="tel"
                      maxLength={10}
                      required
                      placeholder="98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-surface border border-outline/40 rounded-xl px-4 py-3 text-sm font-mono text-on-surface focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-fixed text-on-primary font-bold text-sm shadow-xl shadow-primary/25 active:scale-95 transition-all"
                >
                  Send OTP via WhatsApp
                </button>
              </form>
            ) : (
              <form onSubmit={handleLogin} className="space-y-4 animate-[fadeIn_0.3s_ease-out]">
                <div className="p-3 rounded-xl bg-success/10 border border-success/30 text-xs text-success font-mono text-center mb-4">
                  ✓ OTP dispatched to +91 {phone} on WhatsApp
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-on-surface mb-2">
                    Enter 4-Digit OTP (Demo: 1234)
                  </label>
                  <input
                    type="text"
                    maxLength={4}
                    required
                    placeholder="1 2 3 4"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full bg-surface border border-primary/50 rounded-xl px-4 py-3 text-center tracking-[1em] text-lg font-mono font-bold text-on-surface focus:outline-none focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-success text-on-primary font-bold text-sm shadow-xl shadow-success/25 active:scale-95 transition-all"
                >
                  Verify & Access Dashboard
                </button>

                <button
                  type="button"
                  onClick={() => setOtpSent(false)}
                  className="w-full text-xs text-tertiary hover:text-on-surface underline text-center block pt-2"
                >
                  Change phone number
                </button>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-outline/20 text-center">
              <p className="text-[11px] text-tertiary">
                Not a client yet?{" "}
                <Link href="/audit" className="text-primary hover:underline font-bold">
                  Book Free AI Audit →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
