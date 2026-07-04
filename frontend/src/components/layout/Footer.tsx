"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 w-full py-12 px-5 md:px-16 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-3">
          <Link href="/" className="font-display text-2xl font-bold text-primary">
            Viraal
          </Link>
          <p className="font-sans text-sm text-secondary">
            © 2026 Agnostic AI. Empowering Indian MSMEs with Authority.
          </p>
          <div className="flex gap-4 text-xs font-semibold text-on-surface-variant/70 mt-1">
            <span>GeM Registered</span> • <span>Udyam Verified</span> • <span>ISO 27001</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 sm:justify-end font-sans text-xs font-semibold uppercase tracking-wider">
          <div className="flex flex-col gap-3">
            <Link className="text-on-surface-variant/80 hover:text-primary hover:underline transition-all duration-200" href="/trust">
              Privacy Policy
            </Link>
            <Link className="text-on-surface-variant/80 hover:text-primary hover:underline transition-all duration-200" href="/trust">
              Terms of Service
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link className="text-on-surface-variant/80 hover:text-primary hover:underline transition-all duration-200" href="/solutions">
              Support Center
            </Link>
            <Link className="text-on-surface-variant/80 hover:text-primary hover:underline transition-all duration-200" href="/audit">
              Contact Us
            </Link>
            <a className="text-on-surface-variant/80 hover:text-primary hover:underline transition-all duration-200" href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
