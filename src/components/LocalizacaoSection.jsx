import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const distancias = [
  { nome: 'Itapema', tempo: '5min' },
  { nome: 'Balneário Camboriú', tempo: '15min' },
  { nome: 'Itajaí / Navegantes', tempo: '35min' },
  { nome: 'Florianópolis', tempo: '45min' },
  { nome: 'Penha / Beto Carrero', tempo: '40min' },
  { nome: 'Joinville', tempo: '1h20' },
];

export default function LocalizacaoSection() {
  const [sectionRef, isVisible] = useScrollReveal(0.15);

  return (
    <section
      ref={sectionRef}
      id="localizacao"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: '#F3F1ED' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* ── Label ── */}
        <div
          className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="block w-8 h-[2px] bg-[#0B6B4F]" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0B6B4F]">
            Localização
          </span>
        </div>

        {/* ── Headline ── */}
        <h2
          className={`font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] leading-tight max-w-2xl mb-5 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Perto de tudo, entre o mar e a BR&nbsp;101
        </h2>

        {/* ── Description ── */}
        <p
          className={`text-[#555] text-base md:text-lg max-w-xl mb-10 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          A apenas 45 minutos da capital e com acesso fácil aos principais
          aeroportos do Estado, Porto Belo é um lugar verdadeiramente único.
        </p>

        {/* ── Mapa ── */}
        <div
          className={`relative w-full rounded-2xl overflow-hidden shadow-xl mb-12 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative w-full" style={{ paddingBottom: '50%' }}>
            <iframe
              title="Localização Viva Park Porto Belo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14287.458!2d-48.6177!3d-27.1558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a5a5a5a5a5a5%3A0x1234567890!2sViva%20Park%20Porto%20Belo!5e0!3m2!1spt-BR!2sbr!4v1"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* ── Distance Pills ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-14">
          {distancias.map((item, i) => (
            <div
              key={item.nome}
              className={`pill-interactive flex items-center gap-2 bg-white rounded-full px-4 py-3 shadow-sm border border-[#E8E5DF] transition-all duration-500 cursor-default ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{
                transitionDelay: isVisible ? `${400 + i * 100}ms` : '0ms',
              }}
            >
              {/* Location icon */}
              <svg
                className="w-4 h-4 text-[#0B6B4F] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="leading-tight">
                <span className="text-xs font-medium text-[#1A1A1A] block">
                  {item.nome}
                </span>
                <span className="text-[11px] text-[#0B6B4F] font-semibold">
                  {item.tempo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Dark Callout ── */}
        <div
          className={`relative bg-[#1A1A1A] rounded-2xl px-6 py-8 md:px-10 md:py-10 text-center overflow-hidden transition-all duration-700 delay-[1000ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-72 h-72 rounded-full opacity-20 blur-3xl"
              style={{
                background:
                  'radial-gradient(circle, #0B6B4F 0%, transparent 70%)',
              }}
            />
          </div>
          <p className="relative text-white font-serif text-xl md:text-2xl lg:text-3xl">
            <span className="text-[#2AFFA0] font-semibold">
              80 mil visitantes
            </span>{' '}
            por mês no ecossistema Viva&nbsp;Park
          </p>
        </div>
      </div>
    </section>
  );
}
