import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest text-on-surface-variant font-sans w-full pt-16 pb-24 md:pb-12 border-t border-outline/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-display font-extrabold text-on-primary text-lg">V</span>
              </div>
              <span className="font-display text-2xl font-extrabold text-on-background">
                VIRAAL <span className="text-primary font-mono text-xs uppercase px-1 py-0.5 rounded bg-primary/10">AI</span>
              </span>
            </Link>
            <p className="text-sm text-tertiary max-w-sm leading-relaxed">
              India&apos;s #1 AI Automation Marketing Agency. We transform traditional MSMEs into 24/7 lead generation powerhouses using vernacular WhatsApp bots and autonomous AI voice agents.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface border border-outline/40 text-[11px] font-mono text-primary">
                ✅ GeM Registered
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface border border-outline/40 text-[11px] font-mono text-secondary">
                ⚡ Udyam Certified
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface border border-outline/40 text-[11px] font-mono text-success">
                🔒 ISO 27001 Compliant
              </span>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-display font-bold text-on-background text-sm uppercase tracking-wider mb-4">
              AI Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/solutions" className="hover:text-primary transition-colors">Lead Generation Bot</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">WhatsApp 24/7 Assistant</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">AI Voice Sales Agents</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">Social Media Automation</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">E-Commerce Cart Recovery</Link></li>
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="font-display font-bold text-on-background text-sm uppercase tracking-wider mb-4">
              Industries
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/industries/real-estate" className="hover:text-primary transition-colors">Real Estate & Developers</Link></li>
              <li><Link href="/industries" className="hover:text-primary transition-colors">Jewellery Stores</Link></li>
              <li><Link href="/industries" className="hover:text-primary transition-colors">Hospitals & Clinics</Link></li>
              <li><Link href="/industries" className="hover:text-primary transition-colors">Restaurants & Cafes</Link></li>
              <li><Link href="/industries" className="hover:text-primary transition-colors">Manufacturing & B2B</Link></li>
            </ul>
          </div>

          {/* Company & Trust Column */}
          <div>
            <h4 className="font-display font-bold text-on-background text-sm uppercase tracking-wider mb-4">
              Company & Trust
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Transparent Pricing</Link></li>
              <li><Link href="/trust" className="hover:text-primary transition-colors">PASO Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">AI Education Hub</Link></li>
              <li><Link href="/audit" className="hover:text-primary transition-colors">Book Free AI Audit</Link></li>
              <li><Link href="/login" className="hover:text-primary transition-colors">Client Portal Login</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-outline/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-tertiary">
          <div>
            © 2026 Viraal AI Automation Pvt. Ltd. All rights reserved. Built with Next.js & AI.
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="hover:text-on-background transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-on-background transition-colors">Terms of Service</Link>
            <Link href="/dpdp" className="hover:text-on-background transition-colors">DPDP Act Compliance</Link>
            <Link href="/sla" className="hover:text-on-background transition-colors">Service Level Agreement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
