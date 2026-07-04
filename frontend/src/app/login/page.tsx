"use client";

import React, { useState } from "react";
import Link from "next/link";

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
    <div className="w-full min-h-[75vh] flex items-center justify-center py-20 px-6">
      <div className="max-w-md w-full mx-auto">
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-outline-variant/40 shadow-xl bg-surface-container-lowest relative">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-primary text-on-primary font-display font-extrabold text-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
              A
            </div>
            <h1 className="font-display font-extrabold text-2xl text-on-background">
              Client Portal Login
            </h1>
            <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
              Access your real-time WhatsApp bot analytics, CRM lead logs, and voice call recordings.
            </p>
          </div>

          {!otpSent ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-on-background mb-2">
                  Registered WhatsApp Number
                </label>
                <div className="flex gap-2">
                  <div className="px-3 py-3 rounded-xl bg-surface-container border border-outline-variant/40 text-xs font-mono font-bold text-on-surface-variant flex items-center shrink-0">
                    +91
                  </div>
                  <input
                    type="tel"
                    maxLength={10}
                    required
                    placeholder="98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-3 text-sm font-mono text-on-background focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-primary hover:opacity-95 text-on-primary font-display font-bold text-sm uppercase tracking-wider shadow-md transition-all"
              >
                Send OTP via WhatsApp
              </button>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4 animate-fade-in">
              <div className="p-3 rounded-xl bg-green-50 border border-green-200 text-xs text-green-800 font-mono text-center mb-4">
                ✓ OTP dispatched to +91 {phone} on WhatsApp
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-on-background mb-2">
                  Enter 4-Digit OTP (Demo: 1234)
                </label>
                <input
                  type="text"
                  maxLength={4}
                  required
                  placeholder="1 2 3 4"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full bg-surface-container-low border border-primary/50 rounded-xl px-4 py-3 text-center tracking-[0.8em] text-lg font-mono font-bold text-on-background focus:outline-none focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-secondary text-on-secondary font-display font-bold text-sm uppercase tracking-wider shadow-md hover:opacity-90 transition-all"
              >
                Verify & Access Dashboard
              </button>

              <button
                type="button"
                onClick={() => setOtpSent(false)}
                className="w-full text-xs text-on-surface-variant hover:text-on-background underline text-center block pt-2"
              >
                Change phone number
              </button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-outline-variant/20 text-center">
            <p className="text-[11px] text-on-surface-variant">
              Not a client yet?{" "}
              <Link href="/audit" className="text-primary hover:underline font-bold">
                Book Free AI Audit →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
