import React from "react";

export function Footer() {
  return (
    <footer className="bg-[#020617] text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <span className="font-heading font-extrabold text-2xl text-white tracking-tighter uppercase mb-6 block">Viraal</span>
          <p className="text-sm mb-6 leading-relaxed">India's leading AI automation agency dedicated to transforming Micro, Small & Medium Enterprises into scalable digital powerhouses.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><iconify-icon icon="solar:hashtag-linear" class="text-xl"></iconify-icon></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><iconify-icon icon="solar:link-circle-linear" class="text-xl"></iconify-icon></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><iconify-icon icon="solar:videocamera-record-linear" class="text-xl"></iconify-icon></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><iconify-icon icon="solar:phone-calling-linear" class="text-xl"></iconify-icon></a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Solutions</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-gold transition-colors">Lead Gen Automation</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">AI Chatbots</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Social Media Automation</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Sales Follow-ups</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">AI Content & Video</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Industries</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-gold transition-colors">Real Estate</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Jewellery Retail</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Hospitals & Clinics</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Fitness Centers</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Education & Coaching</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide text-sm uppercase">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2024 Viraal AI Solutions. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
}
