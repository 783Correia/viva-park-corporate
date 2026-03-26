import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import useCountUp from '../hooks/useCountUp';

function ValueBlock({ label, value, prefix, suffix, end, isVisible, delay, highlight }) {
  const count = useCountUp(end, isVisible, 2200);

  return (
    <div
      className="text-center px-6 py-8 md:py-10 rounded-2xl transition-all duration-600"
      style={{
        backgroundColor: highlight ? 'rgba(45,106,79,0.12)' : 'rgba(255,255,255,0.04)',
        border: highlight ? '1px solid rgba(64,145,108,0.3)' : '1px solid rgba(255,255,255,0.06)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <p className="text-sm font-semibold tracking-wide uppercase mb-3" style={{ color: '#999' }}>
        {label}
      </p>
      <p
        className="text-3xl md:text-4xl lg:text-5xl font-bold"
        style={{ color: highlight ? '#40916C' : '#fff' }}
      >
        {prefix}{value || count}{suffix}
      </p>
    </div>
  );
}

export default function InvestimentoSection() {
  const [sectionRef, isVisible] = useScrollReveal(0.1);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-36 overflow-hidden"
      style={{ backgroundColor: '#111' }}
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(45,106,79,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Label */}
        <div
          className="flex items-center justify-center gap-3 mb-5 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <span className="block w-8 h-[3px] rounded-full" style={{ background: '#40916C' }} />
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#40916C' }}>
            Investimento
          </span>
          <span className="block w-8 h-[3px] rounded-full" style={{ background: '#40916C' }} />
        </div>

        {/* Headline */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6 transition-all duration-700 delay-100"
          style={{
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '-0.02em',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          Alavancagem imobiliária na prática
        </h2>

        <p
          className="max-w-2xl mx-auto text-center text-base md:text-lg leading-relaxed mb-14 transition-all duration-700 delay-200"
          style={{
            color: '#999',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          Você não investe R$ 963 mil de uma vez, mas valoriza sobre os R$ 963 mil desde o dia 1. Isso é alavancagem imobiliária.
        </p>

        {/* 3 value blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <ValueBlock
            label="Investiu"
            value="R$ 963 mil"
            end={963}
            isVisible={isVisible}
            delay={300}
          />
          <ValueBlock
            label="Valor na entrega (2030)"
            value="R$ 1,86M"
            end={186}
            isVisible={isVisible}
            delay={450}
          />
          <ValueBlock
            label="Valorização"
            value="~94%"
            end={94}
            isVisible={isVisible}
            delay={600}
            highlight
          />
        </div>

        {/* Renda mensal destaque */}
        <div
          className="text-center p-8 md:p-10 rounded-2xl transition-all duration-700 delay-500"
          style={{
            background: 'linear-gradient(135deg, rgba(45,106,79,0.15) 0%, rgba(64,145,108,0.08) 100%)',
            border: '1px solid rgba(64,145,108,0.25)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
          }}
        >
          <p className="text-sm font-semibold tracking-wide uppercase mb-3" style={{ color: '#40916C' }}>
            Renda mensal estimada na entrega
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
            R$ 7.472<span className="text-xl md:text-2xl font-normal opacity-60">/mês</span>
          </p>
          <p className="text-sm" style={{ color: '#888' }}>
            Rendimento de 0,775% a.m. sobre o valor investido
          </p>
          <p className="text-sm mt-1" style={{ color: '#666' }}>
            Projeção de 15% a.a. de valorização
          </p>
        </div>
      </div>
    </section>
  );
}
