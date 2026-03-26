import React, { useRef, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const numeros = [
  { value: '4,5M m²', label: 'de área total planejada' },
  { value: '3', label: 'fases de expansão' },
  { value: '30+', label: 'operações comerciais' },
  { value: '80 mil', label: 'visitantes por mês' },
];

export default function ManifestoSection() {
  const [sectionRef, isVisible] = useScrollReveal(0.15);
  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(false);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: '#1A1A1A' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28 lg:py-36">
        {/* Label + headline */}
        <div
          className="text-center mb-6 md:mb-8 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span
              className="block w-8 h-[3px] rounded-full"
              style={{ background: '#40916C' }}
            />
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: '#40916C', fontFamily: "'Inter', sans-serif" }}
            >
              O bairro-parque
            </span>
            <span
              className="block w-8 h-[3px] rounded-full"
              style={{ background: '#40916C' }}
            />
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.02em' }}
          >
            Sejam bem-vindos à evolução urbana
          </h2>
        </div>

        {/* Description paragraph */}
        <p
          className="text-center max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-12 md:mb-16 transition-all duration-700 delay-150"
          style={{
            color: '#999',
            fontFamily: "'Inter', sans-serif",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          O <strong className="text-white font-semibold">Viva Park Porto Belo</strong> é o maior bairro-parque do Brasil,
          idealizado pela <strong className="text-white font-semibold">Vokkan</strong>. São 4,5 milhões de m² planejados em Porto Belo, SC — entre
          o mar e a BR 101 — com escola, arena esportiva, gastronomia, centro médico,
          shopping a céu aberto, universidade e residências de alto padrão.
          Um ecossistema completo onde se vive, trabalha, estuda e se diverte no mesmo lugar.
        </p>

        {/* Numbers grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-14 md:mb-16 transition-all duration-700 delay-200"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          {numeros.map((item, i) => (
            <div
              key={item.label}
              className="text-center p-5 rounded-xl transition-all duration-500"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                transitionDelay: `${300 + i * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <span
                className="block text-2xl md:text-3xl font-bold mb-1"
                style={{ color: '#52B788', fontFamily: "'Inter', sans-serif" }}
              >
                {item.value}
              </span>
              <span className="text-xs md:text-sm" style={{ color: '#888' }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Video container */}
        <div
          className="relative rounded-2xl overflow-hidden transition-all duration-700 delay-300"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
            aspectRatio: '16 / 9',
            maxWidth: '960px',
            margin: '0 auto',
          }}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-2xl"
            src="/videos/manifesto.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={showControls}
            poster="/images/aerea-topo.jpg"
          />

          {/* Subtle gradient overlay at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none rounded-b-2xl"
            style={{
              background: 'linear-gradient(transparent, rgba(26,26,26,0.6))',
              opacity: showControls ? 0 : 1,
              transition: 'opacity 0.3s',
            }}
          />
        </div>
      </div>
    </section>
  );
}
