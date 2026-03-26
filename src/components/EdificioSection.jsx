import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L6 10V12H26V10L16 4Z" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 12V24" stroke="#2D6A4F" strokeWidth="2"/>
        <path d="M16 12V24" stroke="#2D6A4F" strokeWidth="2"/>
        <path d="M22 12V24" stroke="#2D6A4F" strokeWidth="2"/>
        <path d="M4 24H28" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="7" r="1" fill="#2D6A4F"/>
      </svg>
    ),
    title: 'Heliponto',
    desc: 'No topo do edifício, para acesso rápido e exclusivo.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="14" width="24" height="14" rx="2" stroke="#2D6A4F" strokeWidth="2"/>
        <path d="M8 14V10C8 8 10 6 16 6C22 6 24 8 24 10V14" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="10" cy="21" r="2" stroke="#2D6A4F" strokeWidth="1.5"/>
        <circle cx="22" cy="21" r="2" stroke="#2D6A4F" strokeWidth="1.5"/>
        <path d="M14 19H18V23H14V19Z" stroke="#2D6A4F" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Lounges e espaços de convivência',
    desc: 'Ambientes sofisticados para networking e descompressão.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="24" height="16" rx="2" stroke="#2D6A4F" strokeWidth="2"/>
        <path d="M4 12H28" stroke="#2D6A4F" strokeWidth="2"/>
        <circle cx="8" cy="18" r="2" stroke="#2D6A4F" strokeWidth="1.5"/>
        <circle cx="16" cy="18" r="2" stroke="#2D6A4F" strokeWidth="1.5"/>
        <circle cx="24" cy="18" r="2" stroke="#2D6A4F" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Salas de reunião compartilhadas',
    desc: 'Infraestrutura profissional pronta para usar.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 28V18C8 14 12 10 16 10C20 10 24 14 24 18V28" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 28H28" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="6" r="2" stroke="#2D6A4F" strokeWidth="2"/>
        <path d="M12 20H20" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 24H18" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Espaço de descompressão',
    desc: 'Qualidade de vida integrada ao ambiente de trabalho.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="12" r="6" stroke="#2D6A4F" strokeWidth="2"/>
        <path d="M16 18V28" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 22H20" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="12" r="2" fill="#2D6A4F"/>
      </svg>
    ),
    title: 'Sala de podcast',
    desc: 'Espaço acústico para gravações e conteúdo digital.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L4 10V12H28V10L16 4Z" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="8" y="12" width="16" height="14" stroke="#2D6A4F" strokeWidth="2"/>
        <path d="M12 18H20" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 22H20" stroke="#2D6A4F" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 26H28" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Colégio Bom Jesus no térreo',
    desc: 'Uma das maiores escolas do sul do Brasil, gerando fluxo constante.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="20" height="20" rx="2" stroke="#2D6A4F" strokeWidth="2"/>
        <path d="M6 14H26" stroke="#2D6A4F" strokeWidth="2"/>
        <path d="M14 6V26" stroke="#2D6A4F" strokeWidth="2"/>
        <circle cx="10" cy="10" r="1" fill="#2D6A4F"/>
        <circle cx="20" cy="10" r="1" fill="#2D6A4F"/>
        <circle cx="10" cy="20" r="1" fill="#2D6A4F"/>
        <circle cx="20" cy="20" r="1" fill="#2D6A4F"/>
      </svg>
    ),
    title: 'Espaços corporativos adaptáveis',
    desc: 'Plantas flexíveis que se moldam ao seu negócio.',
  },
];

export default function EdificioSection() {
  const [sectionRef, isVisible] = useScrollReveal(0.1);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-36"
      style={{ backgroundColor: '#FAFAF8' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div
            className="relative rounded-2xl overflow-hidden transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
            }}
          >
            <img
              src="/images/aerea-02.jpg"
              alt="Vista aérea do Viva Park Corporate"
              className="w-full h-auto rounded-2xl"
              loading="lazy"
            />
            {/* Green corner accent */}
            <div
              className="absolute top-0 left-0 w-20 h-20 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(45,106,79,0.25) 0%, transparent 60%)',
                borderTopLeftRadius: '1rem',
              }}
            />
          </div>

          {/* Features side */}
          <div>
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
              className="text-3xl md:text-4xl font-serif mb-10 transition-all duration-700 delay-100"
              style={{
                color: '#1A1A1A',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              Muito mais que um escritório
            </h2>

            {/* Feature list */}
            <div className="space-y-5">
              {features.map((feat, i) => (
                <div
                  key={feat.title}
                  className="flex items-start gap-4 p-4 rounded-xl transition-all duration-500 hover:bg-white hover:shadow-md cursor-default"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${200 + i * 80}ms`,
                  }}
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(45,106,79,0.08)' }}
                  >
                    {feat.icon}
                  </div>
                  <div>
                    <h3
                      className="text-base font-semibold mb-1"
                      style={{ color: '#1A1A1A', fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {feat.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: '#777' }}
                    >
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
