import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-[#0F0F0F] py-14 md:py-18 overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
        {/* ── Animated green line ── */}
        <div className="flex justify-center mb-8">
          <span className="block w-12 h-[2px] bg-[#0B6B4F] animate-line-grow origin-center" />
        </div>

        {/* ── Main info ── */}
        <p className="text-white/70 text-sm md:text-base mb-2">
          Viva Park Corporate &middot; Sala 2313 &middot; Porto Belo – SC
        </p>
        <p className="text-white/50 text-xs md:text-sm mb-1">
          Assessor: Dieison Corazza &middot; Investimentos Imobiliários
        </p>
        <p className="text-white/50 text-xs md:text-sm mb-8">
          Incorporação: Eccel Incorporadora &middot; Urbanização: Vokkan
        </p>

        {/* ── Disclaimer ── */}
        <p className="text-white/30 text-[11px] leading-relaxed max-w-lg mx-auto mb-6">
          Este material tem caráter informativo. Valores e disponibilidade
          sujeitos a alteração sem aviso prévio.
        </p>

        {/* ── Copyright ── */}
        <p className="text-white/25 text-[11px]">
          &copy; 2026 &middot; Apresentação exclusiva Dieison Corazza
        </p>
      </div>
    </footer>
  );
}
