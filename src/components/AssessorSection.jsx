import React, { useState } from 'react';
import { assessor } from '../data/produto';
import useScrollReveal from '../hooks/useScrollReveal';

const stats = [
  { label: '15+ anos' },
  { label: '200+ imóveis' },
  { label: 'Especialista SC' },
  { label: 'Curadoria' },
];

const WHATSAPP_URL =
  'https://wa.me/5547992762266?text=Olá%20Dieison!%20Vi%20a%20Sala%202313%20no%20Viva%20Park%20Corporate%20e%20gostaria%20de%20conversar.';

export default function AssessorSection() {
  const [sectionRef, isVisible] = useScrollReveal(0.15);
  const [imgError, setImgError] = useState(false);

  return (
    <section
      ref={sectionRef}
      id="assessor"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: '#FAFAF8' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* ── Label ── */}
        <div
          className={`flex items-center gap-3 mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="block w-8 h-[2px] bg-[#2D6A4F]" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2D6A4F]">
            Seu assessor
          </span>
        </div>

        {/* ── Content Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div
            className={`relative flex justify-center md:justify-start transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative">
              {/* Green corner accents */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-[3px] border-l-[3px] border-[#2D6A4F] rounded-tl-2xl pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-[3px] border-r-[3px] border-[#2D6A4F] rounded-br-2xl pointer-events-none" />

              {!imgError ? (
                <img
                  src={assessor.foto}
                  alt="Dieison Corazza"
                  className="w-64 h-80 md:w-72 md:h-96 object-cover rounded-2xl shadow-lg"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl shadow-lg flex items-center justify-center bg-gradient-to-br from-[#2D6A4F] to-[#064C37]">
                  <span className="text-5xl font-serif font-bold text-white/90">
                    DC
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div>
            <h3
              className={`font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-2 transition-all duration-700 delay-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              Dieison Corazza
            </h3>
            <p
              className={`text-[#2D6A4F] font-medium text-sm tracking-wide uppercase mb-6 transition-all duration-700 delay-[350ms] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              Assessor de Investimentos Imobiliários
            </p>
            <p
              className={`text-[#555] leading-relaxed mb-8 max-w-md transition-all duration-700 delay-[400ms] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              Especialista no mercado imobiliário do litoral catarinense, com
              mais de 15 anos conectando investidores às melhores oportunidades
              da região. Curadoria rigorosa e atendimento consultivo para
              decisões seguras e rentáveis.
            </p>

            {/* Stat Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {stats.map((stat, i) => (
                <span
                  key={stat.label}
                  className={`inline-block bg-[#2D6A4F]/10 text-[#2D6A4F] text-xs font-semibold tracking-wide px-4 py-2 rounded-full transition-all duration-500 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${450 + i * 80}ms` : '0ms',
                  }}
                >
                  {stat.label}
                </span>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 bg-[#2D6A4F] hover:bg-[#245a42] text-white font-semibold text-sm md:text-base px-8 py-4 rounded-full shadow-lg transition-all duration-500 delay-700 hover:-translate-y-0.5 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              {/* WhatsApp icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar com Corazza
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
