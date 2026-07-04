"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/solutions" },
  { name: "Industries", href: "/industries" },
  { name: "Pricing", href: "/pricing" },
  { name: "Trust Center", href: "/trust" },
  { name: "AI Education Hub", href: "/blog" },
];

export default function TopAppBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "HI">("EN");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "EN" ? "HI" : "EN"));
  };

  return (
    <header
      className={`w-full sticky top-8 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-outline/30 shadow-2xl shadow-primary/5 py-3"
          : "bg-background/80 backdrop-blur-lg border-b border-outline-variant/20 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-primary-container flex items-center justify-center shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
            <span className="font-display font-extrabold text-on-primary text-xl">V</span>
          </div>
          <span className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-on-background">
            VIRAAL <span className="text-primary font-mono text-sm uppercase px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20">AI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden lg:flex gap-6 xl:gap-8 items-center">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-sans text-sm xl:text-base font-medium transition-colors duration-200 relative py-1 ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-on-surface-variant hover:text-on-background"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions & Language Toggle */}
        <div className="hidden md:flex items-center gap-3 xl:gap-4">
          {/* Language Switcher Pill */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container border border-outline/40 text-xs font-semibold text-on-surface hover:border-primary/50 transition-colors"
            title="Toggle Language"
          >
            <span className="material-symbols-outlined text-[16px] text-primary">translate</span>
            <span className={lang === "EN" ? "text-primary font-bold" : "text-tertiary"}>EN</span>
            <span className="text-tertiary">|</span>
            <span className={lang === "HI" ? "text-primary font-bold" : "text-tertiary"}>हिंदी</span>
          </button>

          <Link
            href="/login"
            className="text-on-surface-variant hover:text-primary font-semibold text-sm px-3 py-2 transition-colors"
          >
            Client Portal
          </Link>

          <Link
            href="/audit"
            className="bg-primary hover:bg-primary-fixed text-on-primary font-bold text-sm px-5 py-2.5 rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95 transition-all duration-200 flex items-center gap-2"
          >
            <span>Free AI Audit</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-surface-container border border-outline/40 text-xs font-semibold text-on-surface"
          >
            <span className={lang === "EN" ? "text-primary font-bold" : ""}>EN</span>
            <span>|</span>
            <span className={lang === "HI" ? "text-primary font-bold" : ""}>HI</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-surface-container text-on-surface hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[full] mt-2 mx-4 bg-surface/95 backdrop-blur-2xl border border-outline/40 rounded-2xl shadow-2xl p-6 transition-all duration-300 animate-[fadeIn_0.2s_ease-out]">
          <nav className="flex flex-col gap-4 mb-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium py-2 border-b border-outline-variant/20 flex items-center justify-between ${
                  pathname === link.href ? "text-primary font-bold" : "text-on-surface"
                }`}
              >
                <span>{link.name}</span>
                <span className="material-symbols-outlined text-[20px] text-tertiary">chevron_right</span>
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium py-2 text-on-surface-variant flex items-center justify-between"
            >
              <span>Client Portal (Login)</span>
              <span className="material-symbols-outlined text-[20px] text-tertiary">lock</span>
            </Link>
          </nav>

          <Link
            href="/audit"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full bg-primary text-on-primary font-bold text-base py-3.5 rounded-xl shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">auto_awesome</span>
            <span>Get Free AI Audit Now</span>
          </Link>
        </div>
      )}
    </header>
  );
}
