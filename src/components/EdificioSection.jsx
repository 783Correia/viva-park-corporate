import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L6 10V12H26V10L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 12V24" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 12V24" stroke="currentColor" strokeWidth="2"/>
        <path d="M22 12V24" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 24H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="7" r="1" fill="currentColor"/>
      </svg>
    ),
    title: 'Heliponto',
    desc: 'No topo do edifício, para acesso rápido e exclusivo.',
    image: '/images/heliponto.jpg',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="14" width="24" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 14V10C8 8 10 6 16 6C22 6 24 8 24 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="10" cy="21" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="22" cy="21" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 19H18V23H14V19Z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Lounges e convivência',
    desc: 'Ambientes sofisticados para networking e descompressão.',
    image: '/images/lounge.jpg',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 12H28" stroke="currentColor" strokeWidth="2"/>
        <circle cx="8" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="16" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="24" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Salas de reunião',
    desc: 'Infraestrutura profissional pronta para usar.',
    image: '/images/reuniao.jpg',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 28V18C8 14 12 10 16 10C20 10 24 14 24 18V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 28H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="6" r="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 20H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 24H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Terraço e descompressão',
    desc: 'Terraço descoberto de 365m² com vista para o mar.',
    image: '/images/terraco-02.jpg',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 18V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 22H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="12" r="2" fill="currentColor"/>
      </svg>
    ),
    title: 'Sala de podcast',
    desc: 'Espaço acústico para gravações e conteúdo digital.',
    image: '/images/podcast.jpg',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L4 10V12H28V10L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="8" y="12" width="16" height="14" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 22H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 26H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Colégio Bom Jesus',
    desc: 'Uma das maiores escolas do sul do Brasil no térreo do edifício.',
    image: '/images/noturna-01.jpg',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 14H26" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 6V26" stroke="currentColor" strokeWidth="2"/>
        <circle cx="10" cy="10" r="1" fill="currentColor"/>
        <circle cx="20" cy="10" r="1" fill="currentColor"/>
        <circle cx="10" cy="20" r="1" fill="currentColor"/>
        <circle cx="20" cy="20" r="1" fill="currentColor"/>
      </svg>
    ),
    title: 'Restaurante panorâmico',
    desc: 'Gastronomia no 13º pavimento com vista privilegiada.',
    image: '/images/restaurante.jpg',
  },
];

export default function EdificioSection() {
  const [sectionRef, isVisible] = useScrollReveal(0.1);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-36"
      style={{ backgroundColor: '#FAFAF8' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Label */}
        <div
          className="flex items-center gap-3 mb-4 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <span
            className="block w-8 h-[3px] rounded-full"
            style={{ background: '#2D6A4F' }}
          />
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: '#2D6A4F' }}
          >
            O edifício
          </span>
        </div>

        {/* Headline */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 transition-all duration-700 delay-100"
          style={{
            color: '#1A1A1A',
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '-0.02em',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          Infraestrutura corporativa de primeiro nível
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Feature buttons */}
          <div className="space-y-3">
            {features.map((feat, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={feat.title}
                  onClick={() => setActiveIndex(i)}
                  className="w-full flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? '#fff' : 'transparent',
                    boxShadow: isActive ? '0 4px 24px rgba(0,0,0,0.08)' : 'none',
                    borderLeft: isActive ? '3px solid #2D6A4F' : '3px solid transparent',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${200 + i * 60}ms`,
                  }}
                >
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center transition-colors duration-300"
                    style={{
                      backgroundColor: isActive ? 'rgba(45,106,79,0.12)' : 'rgba(45,106,79,0.06)',
                      color: isActive ? '#2D6A4F' : '#888',
                    }}
                  >
                    {feat.icon}
                  </div>
                  <div>
                    <h3
                      className="text-[0.95rem] font-semibold mb-0.5 transition-colors duration-300"
                      style={{
                        color: isActive ? '#1A1A1A' : '#555',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {feat.title}
                    </h3>
                    {isActive && (
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: '#777' }}
                      >
                        {feat.desc}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Photo preview */}
          <div
            className="relative rounded-2xl overflow-hidden transition-all duration-700 sticky top-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              aspectRatio: '4 / 3',
            }}
          >
            {features.map((feat, i) => (
              <img
                key={feat.title}
                src={feat.image}
                alt={feat.title}
                className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-500"
                style={{ opacity: i === activeIndex ? 1 : 0 }}
                draggable={false}
              />
            ))}
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
              <div
                className="px-5 pb-4 pt-12"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,.6), transparent)',
                }}
              >
                <p className="text-white text-sm md:text-base font-semibold drop-shadow"
                   style={{ fontFamily: "'Inter', sans-serif" }}>
                  {features[activeIndex].title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
