import { produto } from "../data/produto";
import useScrollReveal from "../hooks/useScrollReveal";

/* ─────────────────────────────────────────────
   Spec card data
   ───────────────────────────────────────────── */
const specs = [
  { value: "41,56m²", label: "Área Privativa" },
  { value: "VP 2", label: "Posição" },
  { value: "Tipo 24", label: "Tipologia" },
  { value: "23º andar", label: "Andar" },
  { value: "Vista Parque", label: "Orientação" },
  { value: "Nov/2030", label: "Entrega" },
];

/* ─────────────────────────────────────────────
   UnidadeSection
   ───────────────────────────────────────────── */
export default function UnidadeSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      style={{ background: "#FAFAF8" }}
      className="py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* ── Section label ── */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="block w-8 h-[3px] rounded-full"
            style={{ background: "#2E7D32" }}
          />
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: "#2E7D32" }}
          >
            Ficha técnica
          </span>
        </div>

        {/* ── Headline ── */}
        <h2
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-12"
          style={{ color: "#1A1A1A" }}
        >
          Sala 2313
        </h2>

        {/* ── Spec cards grid: 2 cols mobile, 3 cols desktop ── */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {specs.map((spec, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl border border-gray-200
                         p-5 md:p-6 transition-all duration-300
                         hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5
                         hover:border-[#2E7D32]/30"
            >
              {/* Value — serif, green highlight */}
              <p
                className="font-serif text-2xl md:text-3xl lg:text-[2rem] font-bold mb-1 transition-colors duration-300
                           group-hover:text-[#2E7D32]"
                style={{ color: "#2E7D32" }}
              >
                {spec.value}
              </p>

              {/* Label — sans */}
              <p className="text-sm md:text-base text-gray-500 font-sans">
                {spec.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── Highlight box ── */}
        <div
          className="mt-10 rounded-2xl px-6 py-5 md:px-8 md:py-6 flex items-center gap-4"
          style={{ background: "#2E7D32" }}
        >
          {/* Breathing green dot */}
          <span className="relative flex h-3 w-3 shrink-0">
            <span
              className="absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{
                background: "#A5D6A7",
                animation: "breathe 2.4s ease-in-out infinite",
              }}
            />
            <span
              className="relative inline-flex h-3 w-3 rounded-full"
              style={{ background: "#E8F5E9" }}
            />
          </span>

          <p className="text-white text-base md:text-lg font-semibold">
            Última unidade aérea disponível
          </p>
        </div>
      </div>

      {/* ── Breathe animation keyframes ── */}
      <style>{`
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            opacity: 0.75;
          }
          50% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
