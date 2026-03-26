import React from 'react';
import useParallax from '../hooks/useParallax';

const WHATSAPP_URL =
  'https://wa.me/5547992762266?text=Olá%20Dieison!%20Vi%20a%20Sala%202313%20no%20Viva%20Park%20Corporate%20e%20gostaria%20de%20conversar.';

const recapPills = ['41,56m²', 'Vista Parque', 'Última unidade'];

export default function CtaFinal() {
  const [parallaxRef, offset] = useParallax(0.15);

  return (
    <section
      ref={parallaxRef}
      id="cta-final"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* ── Background with parallax ── */}
      <div
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/aerea-02.jpg)',
          transform: `translateY(${offset}px)`,
          willChange: 'transform',
        }}
      />

      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 bg-black/65" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 text-center py-20">
        {/* Headline */}
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
          Já imaginou seu escritório{' '}
          <span className="shimmer-green inline-block bg-gradient-to-r from-[#2AFFA0] via-[#0B6B4F] to-[#2AFFA0] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
            neste endereço?
          </span>
        </h2>

        {/* ── Glass recap pills ── */}
        <div className="inline-flex flex-wrap justify-center gap-3 mb-8 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
          {recapPills.map((pill) => (
            <span
              key={pill}
              className="bg-white/15 text-white text-xs md:text-sm font-semibold tracking-wide px-4 py-2 rounded-full border border-white/20"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* ── Availability ── */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2AFFA0] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2AFFA0]" />
          </span>
          <span className="text-white/90 text-sm md:text-base font-medium">
            Sala 2313 disponível agora
          </span>
        </div>

        {/* ── CTA Button ── */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="glow-pulse inline-flex items-center gap-3 bg-[#0B6B4F] hover:bg-[#095E44] text-white font-semibold text-base md:text-lg px-10 py-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Falar com Dieison no WhatsApp
        </a>

        {/* ── Legal ── */}
        <p className="mt-10 text-white/40 text-[11px] leading-relaxed max-w-md mx-auto">
          Este material tem caráter informativo e não constitui oferta ou
          contrato. Imagens meramente ilustrativas. Valores e disponibilidade
          sujeitos a alteração sem aviso prévio.
        </p>
      </div>
    </section>
  );
}
