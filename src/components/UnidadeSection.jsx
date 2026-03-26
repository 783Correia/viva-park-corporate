import useScrollReveal from "../hooks/useScrollReveal";

const specs = [
  { value: "41,56m²", label: "Área Privativa" },
  { value: "VP 2", label: "Posição" },
  { value: "Tipo 24", label: "Tipologia" },
  { value: "23º andar", label: "Andar" },
  { value: "Vista Parque", label: "Orientação" },
  { value: "Nov/2030", label: "Entrega" },
];

export default function UnidadeSection() {
  const [sectionRef, isVisible] = useScrollReveal(0.1);

  return (
    <section
      ref={sectionRef}
      style={{ background: "#FAFAF8" }}
      className="py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
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
            style={{ background: "#2D6A4F" }}
          />
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: "#2D6A4F" }}
          >
            Ficha técnica
          </span>
        </div>

        {/* Headline */}
        <h2
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-12 transition-all duration-700 delay-100"
          style={{
            color: "#1A1A1A",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          Sala 2313
        </h2>

        {/* Spec cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {specs.map((spec, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl border border-gray-200
                         p-4 md:p-6 transition-all duration-500
                         hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5
                         hover:border-[#2D6A4F]/30"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${200 + i * 100}ms`,
              }}
            >
              <p
                className="font-serif text-xl md:text-2xl lg:text-3xl font-bold mb-1 transition-colors duration-300
                           group-hover:text-[#2D6A4F]"
                style={{ color: "#2D6A4F" }}
              >
                {spec.value}
              </p>
              <p className="text-xs md:text-sm text-gray-500">
                {spec.label}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight box */}
        <div
          className="mt-8 md:mt-10 rounded-2xl px-5 py-4 md:px-8 md:py-6 flex items-center gap-3 md:gap-4 transition-all duration-700"
          style={{
            background: "#2D6A4F",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '800ms',
          }}
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span
              className="absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{
                background: "#A5D6A7",
                animation: "breathe 2.4s ease-in-out infinite",
              }}
            />
            <span
              className="relative inline-flex h-2.5 w-2.5 rounded-full"
              style={{ background: "#E8F5E9" }}
            />
          </span>
          <p className="text-white text-sm md:text-base font-semibold">
            Última unidade aérea disponível
          </p>
        </div>
      </div>

      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.75; }
          50% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
