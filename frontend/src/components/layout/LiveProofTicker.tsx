import React from "react";

export function LiveProofTicker() {
  return (
    <div className="fixed top-0 left-0 w-full h-8 bg-[#FFC107] text-charcoal font-medium text-xs md:text-sm flex items-center overflow-hidden z-50">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="mx-8 flex items-center gap-2">
          <iconify-icon icon="solar:bolt-linear" class="text-lg"></iconify-icon>
          2,847 Leads Generated for our clients this month via AI
        </span>
        <span className="mx-8 flex items-center gap-2">
          <iconify-icon icon="solar:fire-linear" class="text-lg"></iconify-icon>
          New: AI Voice Agents now available in Telugu & Tamil
        </span>
        <span className="mx-8 flex items-center gap-2">
          <iconify-icon icon="solar:check-circle-linear" class="text-lg"></iconify-icon>
          94% Client Retention Rate — We deliver real results
        </span>
        <span className="mx-8 flex items-center gap-2">
          <iconify-icon icon="solar:bolt-linear" class="text-lg"></iconify-icon>
          2,847 Leads Generated for our clients this month via AI
        </span>
        <span className="mx-8 flex items-center gap-2">
          <iconify-icon icon="solar:fire-linear" class="text-lg"></iconify-icon>
          New: AI Voice Agents now available in Telugu & Tamil
        </span>
        <span className="mx-8 flex items-center gap-2">
          <iconify-icon icon="solar:check-circle-linear" class="text-lg"></iconify-icon>
          94% Client Retention Rate — We deliver real results
        </span>
      </div>
    </div>
  );
}
