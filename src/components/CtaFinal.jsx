import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const recapPills = ['41,56m²', 'Vista Parque', '23º andar', 'Última unidade'];

export default function CtaFinal() {
  const [sectionRef, isVisible] = useScrollReveal(0.15);

  return (
    <section
      ref={sectionRef}
      id="cta-final"
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/terraco-01.jpg)' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 text-center py-20">
        {/* Exclusive badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-[#52B788]" />
          <span
            className="text-xs font-semibold tracking-[0.15em] uppercase"
            style={{ color: '#52B788' }}
          >
            Oportunidade exclusiva
          </span>
        </div>

        <h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-100"
          style={{
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '-0.02em',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          Seja bem-vindo ao único<br />
          endereço corporativo do{' '}
          <span className="text-[#52B788]">Viva Park</span>
        </h2>

        <p
          className="text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10 transition-all duration-700 delay-200"
          style={{
            color: 'rgba(255,255,255,0.6)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          Esta é a última sala aérea disponível em um edifício que não terá igual
          dentro do maior bairro-parque do Brasil. Quando acabar, acabou.
        </p>

        {/* Recap pills */}
        <div
          className="inline-flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700 delay-300"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
          }}
        >
          {recapPills.map((pill) => (
            <span
              key={pill}
              className="text-white/90 text-xs md:text-sm font-medium tracking-wide px-5 py-2.5 rounded-full border border-white/20"
            >
              {pill}
            </span>
          ))}
        </div>

        <p className="mt-6 text-white/25 text-[11px] leading-relaxed max-w-md mx-auto">
          Este material tem caráter informativo e não constitui oferta ou
          contrato. Imagens meramente ilustrativas. Valores e disponibilidade
          sujeitos a alteração sem aviso prévio.
        </p>
      </div>
    </section>
  );
}
