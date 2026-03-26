import useScrollReveal from '../hooks/useScrollReveal';

const timeline = [
  {
    year: '2023',
    items: ['Gastronomia', 'Quadras MUV'],
    status: 'done',
  },
  {
    year: '2024',
    items: ['Oakberry', 'Mobilev', 'Waka Waka', 'Blumerie', 'Cremeliê'],
    status: 'done',
  },
  {
    year: '2025',
    items: ['Bom Jesus', 'Arena MUV', 'Wave', 'Farmácia', 'Papelaria', 'Escola de Idiomas', 'Crossfit', 'Bares e Restaurantes', 'Mercado Autônomo', 'Eletro Posto', 'Clínica Veterinário'],
    status: 'done',
  },
  {
    year: '2026',
    items: ['Cartório', 'Agências Bancárias', 'Salão de Beleza', 'Agência de Viagens', 'Café Bistrô'],
    status: 'current',
  },
  {
    year: '2027',
    items: ['Clínicas', 'Estéticas', 'Studio Funcional'],
    status: 'future',
  },
  {
    year: '2028',
    items: ['Varejo', 'Mix de Lojas', 'Gastronomia'],
    status: 'future',
  },
];

export default function TimelineSection() {
  const [sectionRef, isVisible] = useScrollReveal(0.1);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: '#F3F1ED' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Section label */}
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
            Evolução
          </span>
        </div>

        {/* Headline */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 transition-all duration-700 delay-100"
          style={{
            color: '#1A1A1A',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          Um bairro que não para de crescer
        </h2>

        <p
          className="max-w-2xl text-base md:text-lg leading-relaxed mb-14 transition-all duration-700 delay-200"
          style={{
            color: '#777',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          De 2023 a 2028, mais de 30 operações comerciais entregues e planejadas dentro do Viva Park.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line (desktop) */}
          <div
            className="hidden lg:block absolute top-[28px] left-0 right-0 h-[2px]"
            style={{
              background: isVisible
                ? 'linear-gradient(90deg, #2D6A4F 0%, #40916C 50%, #ddd 100%)'
                : '#ddd',
            }}
          />

          {/* Vertical line (mobile) */}
          <div
            className="md:hidden absolute top-0 bottom-0 left-[18px] w-[2px]"
            style={{
              background: 'linear-gradient(180deg, #2D6A4F 0%, #40916C 50%, #ddd 100%)',
            }}
          />

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-4">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className="relative pt-0 transition-all duration-600"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${300 + i * 150}ms`,
                }}
              >
                {/* Dot */}
                <div className="flex items-center mb-5">
                  <div
                    className="relative w-[14px] h-[14px] rounded-full border-[3px] z-10"
                    style={{
                      borderColor: item.status === 'future' ? '#bbb' : '#2D6A4F',
                      backgroundColor: item.status === 'current' ? '#2D6A4F' : '#F3F1ED',
                    }}
                  >
                    {item.status === 'current' && (
                      <span
                        className="absolute inset-0 rounded-full"
                        style={{
                          animation: 'timelinePulse 2s ease-in-out infinite',
                          background: '#2D6A4F',
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Year */}
                <h3
                  className="text-xl font-bold font-serif mb-3"
                  style={{
                    color: item.status === 'future' ? '#999' : '#1A1A1A',
                  }}
                >
                  {item.year}
                </h3>

                {/* Items */}
                <ul className="space-y-1.5">
                  {item.items.map((op) => (
                    <li
                      key={op}
                      className="text-sm leading-snug"
                      style={{
                        color: item.status === 'future' ? '#aaa' : '#666',
                      }}
                    >
                      {op}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile list */}
          <div className="md:hidden space-y-8 pl-10">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className="relative transition-all duration-600"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                  transitionDelay: `${300 + i * 120}ms`,
                }}
              >
                {/* Dot on vertical line */}
                <div
                  className="absolute -left-10 top-[2px] w-[14px] h-[14px] rounded-full border-[3px] z-10"
                  style={{
                    left: '-22px',
                    borderColor: item.status === 'future' ? '#bbb' : '#2D6A4F',
                    backgroundColor: item.status === 'current' ? '#2D6A4F' : '#F3F1ED',
                  }}
                />

                <h3
                  className="text-lg font-bold font-serif mb-2"
                  style={{
                    color: item.status === 'future' ? '#999' : '#1A1A1A',
                  }}
                >
                  {item.year}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {item.items.map((op) => (
                    <span
                      key={op}
                      className="text-xs px-2.5 py-1 rounded-full border"
                      style={{
                        borderColor: item.status === 'future' ? '#ddd' : 'rgba(45,106,79,0.2)',
                        color: item.status === 'future' ? '#aaa' : '#555',
                        backgroundColor: item.status === 'future' ? '#f5f5f5' : 'rgba(45,106,79,0.06)',
                      }}
                    >
                      {op}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes timelinePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
