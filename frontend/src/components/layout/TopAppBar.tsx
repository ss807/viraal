"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Solutions", href: "/solutions" },
  { name: "Case Studies", href: "/trust" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/blog" },
];

export function TopAppBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-surface/85 backdrop-blur-xl border-b border-outline-variant/30 shadow-md fixed top-8 left-0 w-full z-40 transition-all duration-300">
      <div className="flex justify-between items-center px-5 md:px-16 py-4 max-w-[1280px] mx-auto">
        {/* Brand */}
        <div className="flex items-center">
          <Link href="/" className="font-display text-2xl font-bold text-primary tracking-tight">
            Viraal
          </Link>
          <span className="hidden md:inline-block text-xs font-semibold text-secondary bg-secondary-container px-2.5 py-1 rounded-full ml-3">
            by Agnostic AI
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center font-sans text-sm font-semibold">
          {navLinks.map((link) => {
            const isActive = pathname?.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all duration-300 px-3 py-2 rounded-lg ${
                  isActive
                    ? "text-primary bg-surface-container-low font-bold"
                    : "text-on-surface-variant hover:text-secondary hover:bg-surface-container-low/50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs & Language */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1 text-sm font-medium text-on-surface-variant">
            <span className="material-symbols-outlined text-[18px]">language</span>
            <select className="bg-transparent border-none text-sm focus:ring-0 cursor-pointer outline-none font-semibold">
              <option>EN</option>
              <option>HI</option>
            </select>
          </div>
          <Link
            href="/audit"
            className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-sans text-sm font-bold hover:bg-primary-container hover:text-on-primary-container transition-all shadow-md hidden md:block"
          >
            Free AI Audit
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-primary p-1 rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-lowest border-t border-outline-variant/30 px-6 py-4 space-y-3 shadow-xl animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-on-surface-variant hover:text-primary font-semibold text-base border-b border-outline-variant/10 last:border-none"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-3">
            <Link
              href="/audit"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-primary text-on-primary py-3 rounded-lg font-bold text-sm uppercase tracking-wider shadow-md"
            >
              Free AI Audit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
