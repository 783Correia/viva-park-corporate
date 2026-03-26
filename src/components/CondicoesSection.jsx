import React from 'react';
import { produto } from '../data/produto';
import useScrollReveal from '../hooks/useScrollReveal';

const conditions = [
  {
    title: 'Ato',
    value: 'R$ 144.454,79',
    installments: '1x',
    date: '01/03/2026',
  },
  {
    title: 'Mensais',
    value: 'R$ 4.299,26',
    installments: '56x',
    date: 'A partir de 05/04/2026',
  },
  {
    title: 'Semestrais',
    value: 'R$ 48.151,67',
    installments: '6x',
    date: 'A partir de 05/03/2027',
  },
  {
    title: 'Chaves',
    value: 'R$ 288.910,01',
    installments: '1x',
    date: '30/11/2030',
  },
];

export default function CondicoesSection() {
  const [sectionRef, isVisible] = useScrollReveal(0.1);
  const [totalRef, totalVisible] = useScrollReveal(0.3);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-40"
      style={{ backgroundColor: '#FAFAF8' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Section label with green line */}
        <div
          className="flex items-center gap-4 mb-4 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <div
            className="h-[2px] w-8 transition-all duration-700"
            style={{
              backgroundColor: '#40916C',
              width: isVisible ? '32px' : '0px',
            }}
          />
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: '#40916C' }}
          >
            Condições
          </span>
        </div>

        {/* Headline */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-serif mb-14 transition-all duration-700 delay-100"
          style={{
            color: '#1A1A1A',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          Condições de aquisição
        </h2>

        {/* Condition cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {conditions.map((cond, i) => (
            <div
              key={cond.title}
              className="relative bg-white rounded-xl border border-gray-200 p-6 md:p-8
                         transition-all duration-500 hover:shadow-lg hover:border-[#40916C]/30
                         hover:-translate-y-1 overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${200 + i * 120}ms`,
              }}
            >
              {/* Top green accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
                style={{ backgroundColor: '#40916C' }}
              />

              {/* Card content */}
              <div className="mt-2">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-400 mb-3">
                  {cond.title}
                </h3>

                <p className="text-2xl md:text-3xl font-serif font-bold text-[#1A1A1A] mb-1">
                  {cond.value}
                </p>

                <span
                  className="inline-block text-sm font-medium px-2.5 py-0.5 rounded-full mb-4"
                  style={{
                    backgroundColor: 'rgba(64, 145, 108, 0.1)',
                    color: '#40916C',
                  }}
                >
                  {cond.installments}
                </span>

                <p className="text-sm text-gray-500">{cond.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Total value highlight card */}
        <div ref={totalRef} className="flex justify-center">
          <div
            className="relative bg-white rounded-2xl border border-gray-200 px-10 py-10 md:px-16 md:py-12
                       text-center max-w-xl w-full transition-all duration-700 overflow-hidden
                       hover:shadow-xl"
            style={{
              opacity: totalVisible ? 1 : 0,
              transform: totalVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
              animation: totalVisible ? 'borderGlow 3s ease-in-out infinite' : 'none',
            }}
          >
            {/* Green corner accent — top-left */}
            <div
              className="absolute top-0 left-0 w-16 h-16 pointer-events-none"
              style={{
                background:
                  'linear-gradient(135deg, rgba(64,145,108,0.15) 0%, transparent 60%)',
                borderTopLeftRadius: '1rem',
              }}
            />
            {/* Green corner accent — bottom-right */}
            <div
              className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none"
              style={{
                background:
                  'linear-gradient(315deg, rgba(64,145,108,0.15) 0%, transparent 60%)',
                borderBottomRightRadius: '1rem',
              }}
            />

            <p className="text-sm font-semibold tracking-wide uppercase text-gray-400 mb-4">
              Valor total
            </p>

            <p className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold shimmer-green">
              R$ 963.033,38
            </p>
          </div>
        </div>
      </div>

      {/* Inline keyframes for border-glow animation & shimmer */}
      <style jsx>{`
        @keyframes borderGlow {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(64, 145, 108, 0);
          }
          50% {
            box-shadow: 0 0 30px -5px rgba(64, 145, 108, 0.2),
              0 0 0 1px rgba(64, 145, 108, 0.15);
          }
        }

        .shimmer-green {
          background: linear-gradient(
            90deg,
            #1a1a1a 0%,
            #40916c 40%,
            #52b788 60%,
            #1a1a1a 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }
      `}</style>
    </section>
  );
}
