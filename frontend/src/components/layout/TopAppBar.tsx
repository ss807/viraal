"use client";

import React, { useState } from "react";

export function TopAppBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-8 w-full z-40 bg-white/95 backdrop-blur-md border-b border-border transition-all duration-300 shadow-sm mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <span className="font-heading font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-navy to-gold tracking-tighter uppercase">
                Viraal
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group cursor-pointer text-sm text-slate hover:text-navy font-medium flex items-center gap-1">
                Solutions <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
                <div className="absolute top-full left-0 mt-2 w-48 bg-surface rounded-xl shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  <a href="#services" className="block px-4 py-2 text-sm text-charcoal hover:bg-primary hover:text-gold">Lead Generation</a>
                  <a href="#services" className="block px-4 py-2 text-sm text-charcoal hover:bg-primary hover:text-gold">AI Chatbots</a>
                  <a href="#services" className="block px-4 py-2 text-sm text-charcoal hover:bg-primary hover:text-gold">Sales Automation</a>
                </div>
              </div>
              <a href="#industries" className="text-sm text-slate hover:text-navy font-medium">Industries</a>
              <a href="#pricing" className="text-sm text-slate hover:text-navy font-medium">Pricing</a>
              <a href="#trust" className="text-sm text-slate hover:text-navy font-medium">Trust Center</a>
              <div className="flex items-center ml-4 gap-4 border-l border-gray-200 pl-4">
                <div className="flex items-center bg-gray-100 rounded-full p-1 cursor-pointer">
                  <span className="bg-white shadow-sm text-charcoal text-xs font-bold px-2 py-1 rounded-full">EN</span>
                  <span className="text-slate text-xs font-medium px-2 py-1">हिंदी</span>
                </div>
                <button className="bg-navy text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-navy/90 transition-colors shadow-sm">
                  Free AI Audit
                </button>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate hover:text-charcoal focus:outline-none p-2">
                <iconify-icon icon="solar:hamburger-menu-linear" class="text-2xl"></iconify-icon>
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border px-4 pt-2 pb-4 space-y-1">
            <a href="#services" className="block px-3 py-2 text-base font-medium text-slate hover:text-navy hover:bg-gray-50 rounded-md">Solutions</a>
            <a href="#industries" className="block px-3 py-2 text-base font-medium text-slate hover:text-navy hover:bg-gray-50 rounded-md">Industries</a>
            <a href="#pricing" className="block px-3 py-2 text-base font-medium text-slate hover:text-navy hover:bg-gray-50 rounded-md">Pricing</a>
            <div className="mt-4 pt-4 border-t border-border flex justify-between items-center px-3">
              <div className="flex items-center bg-gray-100 rounded-full p-1">
                <span className="bg-white shadow-sm text-charcoal text-xs font-bold px-2 py-1 rounded-full">EN</span>
                <span className="text-slate text-xs font-medium px-2 py-1">HI</span>
              </div>
              <button className="bg-gold text-charcoal text-sm font-bold px-4 py-2 rounded-lg">Audit</button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
