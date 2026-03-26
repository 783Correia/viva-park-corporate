import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import useCountUp from '../hooks/useCountUp';

const stats = [
  { end: 80, suffix: 'mil', label: 'visitantes/mês' },
  { end: 60, suffix: 'mil', label: 'acessos de veículos/mês' },
  { end: 30, suffix: '+', label: 'operações comerciais' },
  { end: 3, suffix: '', label: 'expansões planejadas' },
];

const pills = [
  'Colégio Bom Jesus',
  'MUV Arena',
  'VK Gastronomia',
  'Open Shopping',
  'Centro Médico',
  'Universidade',
  'Conviva',
];

function StatCard({ end, suffix, label, delay, isVisible }) {
  const count = useCountUp(end, isVisible, 2000);

  return (
    <div
      className="group flex flex-col items-center text-center px-4 py-6 transition-all duration-500 cursor-default"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white group-hover:text-[#40916C] transition-colors duration-300 font-serif">
        {count}
        {suffix && (
          <span className="text-2xl md:text-3xl ml-1 font-normal opacity-80">
            {suffix}
          </span>
        )}
      </span>
      <span className="mt-2 text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {label}
      </span>
    </div>
  );
}

export default function EcossistemaSection() {
  const [sectionRef, isVisible] = useScrollReveal(0.15);
  const [pillsRef, pillsVisible] = useScrollReveal(0.2);
  const [lineRef, lineVisible] = useScrollReveal(0.5);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{ backgroundColor: '#1A1A1A' }}
    >
      {/* Subtle texture background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/aerea-01.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.04,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Section label */}
        <div
          className="transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#40916C' }}
          >
            O ecossistema
          </span>
        </div>

        {/* Headline */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6 transition-all duration-700 delay-100"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          Tudo dentro do bairro
        </h2>

        {/* Description */}
        <p
          className="max-w-2xl text-base md:text-lg leading-relaxed mb-16 transition-all duration-700 delay-200"
          style={{
            color: '#999',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          O Viva Park Porto Belo é um bairro-parque completo com infraestrutura
          que nenhuma outra região oferece.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 mb-16">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 150}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Green line divider */}
        <div ref={lineRef} className="flex justify-center mb-16">
          <div
            className="h-[2px] transition-all duration-1000 ease-out"
            style={{
              backgroundColor: '#40916C',
              width: lineVisible ? '120px' : '0px',
            }}
          />
        </div>

        {/* Ecosystem pills */}
        <div
          ref={pillsRef}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {pills.map((pill, i) => (
            <span
              key={pill}
              className="px-5 py-2.5 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium cursor-default
                         border border-white/10 transition-all duration-300
                         hover:border-[#40916C]/50 hover:text-[#40916C] hover:shadow-[0_0_20px_rgba(64,145,108,0.1)]"
              style={{
                backgroundColor: '#2a2a2a',
                color: '#ccc',
                opacity: pillsVisible ? 1 : 0,
                transform: pillsVisible ? 'translateY(0) scale(1)' : 'translateY(15px) scale(0.95)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
