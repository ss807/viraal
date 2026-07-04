"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AuditPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    businessName: "",
    industry: "",
    bottleneck: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-[85vh] flex items-center justify-center py-20 px-6 relative overflow-hidden">
      {/* Ambient Light Glowing Background Elements */}
      <div className="absolute top-10 left-10 w-[450px] h-[450px] rounded-full bg-secondary-container/25 blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-primary-container/25 blur-[120px] -z-10 pointer-events-none"></div>

      <div className="w-full max-w-2xl mx-auto z-10">
        <div className="text-center mb-10">
          <span className="inline-block py-1.5 px-3.5 rounded-full bg-surface-container-high border border-outline-variant/40 text-on-surface-variant font-semibold text-xs mb-4 uppercase tracking-widest shadow-2xs">
            Zero Commitment | 24-Hour Turnaround
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-background mb-3 leading-tight">
            Get Your Free AI <span className="text-primary">Growth Audit</span>
          </h1>
          <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            Discover exactly where automation can cut costs and accelerate revenue in your business. No fluff, just actionable architectural intelligence.
          </p>
        </div>

        <div className="glass-card w-full rounded-3xl p-8 sm:p-12 border border-outline-variant/50 shadow-xl bg-surface-container-lowest/90 backdrop-blur-2xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-on-background mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-3 text-sm text-on-background focus:outline-none focus:border-primary transition-colors font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-on-background mb-2">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-3 text-sm text-on-background focus:outline-none focus:border-primary transition-colors font-mono font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-on-background mb-2">
                    Business / Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Enterprises Pvt Ltd"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-3 text-sm text-on-background focus:outline-none focus:border-primary transition-colors font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-on-background mb-2">
                    Industry Sector <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-3 text-sm text-on-background focus:outline-none focus:border-primary transition-colors font-medium cursor-pointer"
                  >
                    <option value="" disabled>Select your industry</option>
                    <option value="real_estate">Real Estate & Construction</option>
                    <option value="jewellery">Luxury & Jewellery Showrooms</option>
                    <option value="healthcare">Hospitals, Clinics & Healthcare</option>
                    <option value="retail">Retail & E-commerce D2C</option>
                    <option value="manufacturing">Manufacturing & Logistics</option>
                    <option value="services">Professional Services / Agency</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-on-background mb-2">
                  What is your biggest operational bottleneck right now? <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g., We miss calls when leads inquire on Sunday, or manual WhatsApp follow-ups take 4 hours every day..."
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl p-4 text-sm text-on-background focus:outline-none focus:border-primary transition-colors font-medium resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary py-4 rounded-xl font-display font-bold text-sm uppercase tracking-wider hover:opacity-95 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Request Free 24-Hour AI Audit</span>
                  <span className="material-symbols-outlined text-lg animate-pulse">auto_awesome</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-6 pt-4 border-t border-outline-variant/20 text-xs text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-secondary">verified_user</span>
                  100% Confidential
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-secondary">schedule</span>
                  24h Turnaround
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-secondary">block</span>
                  No Spam Guarantee
                </span>
              </div>
            </form>
          ) : (
            <div className="py-12 text-center space-y-6 animate-fade-in">
              <div className="w-20 h-20 bg-green-100 text-green-700 rounded-full mx-auto flex items-center justify-center shadow-inner">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-on-background">
                Audit Request Received! 🚀
              </h3>
              <p className="text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-on-background">{formData.fullName}</strong>. Our AI Automation Architect is reviewing your bottleneck in <strong className="text-on-background">{formData.industry || "your industry"}</strong>. We will send your custom automation roadmap to <strong className="text-on-background">{formData.whatsapp}</strong> within 24 hours.
              </p>
              <div className="pt-6 border-t border-outline-variant/20 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="bg-surface-container-high text-on-background px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-all"
                >
                  Return to Homepage
                </Link>
                <Link
                  href="/pricing"
                  className="bg-secondary text-on-secondary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all"
                >
                  Explore Pricing Tiers
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
