import { useState, useEffect, useCallback, useRef } from "react";
import { produto } from "../data/produto";
import useScrollReveal from "../hooks/useScrollReveal";

/* ─────────────────────────────────────────────
   Chevron SVG helpers
   ───────────────────────────────────────────── */
const ChevronLeft = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 6 15 12 9 18" />
  </svg>
);

/* ─────────────────────────────────────────────
   GaleriaSection
   ───────────────────────────────────────────── */
export default function GaleriaSection() {
  const sectionRef = useScrollReveal();

  const fotos = produto.galeria;
  const total = fotos.length;

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const [lightbox, setLightbox] = useState(false);

  /* ── Thumbnail page (4 visible at a time) ── */
  const thumbsPerPage = 4;
  const thumbPage = Math.floor(current / thumbsPerPage);
  const thumbStart = thumbPage * thumbsPerPage;
  const visibleThumbs = fotos.slice(thumbStart, thumbStart + thumbsPerPage);

  /* ── Navigation helpers ── */
  const go = useCallback(
    (dir) => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + dir + total) % total);
        setFade(true);
      }, 200);
    },
    [total]
  );

  const goTo = useCallback(
    (idx) => {
      if (idx === current) return;
      setFade(false);
      setTimeout(() => {
        setCurrent(idx);
        setFade(true);
      }, 200);
    },
    [current]
  );

  const prev = useCallback(() => go(-1), [go]);
  const next = useCallback(() => go(1), [go]);

  /* ── Keyboard navigation ── */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape" && lightbox) setLightbox(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next, lightbox]);

  /* ── Touch / swipe support ── */
  const touchStart = useRef(null);

  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? prev() : next();
    }
    touchStart.current = null;
  };

  /* ── Counter string "01 / 16" ── */
  const pad = (n) => String(n).padStart(2, "0");
  const counter = `${pad(current + 1)} / ${pad(total)}`;

  /* ── Progress fraction ── */
  const progress = ((current + 1) / total) * 100;

  return (
    <section
      ref={sectionRef}
      style={{ background: "#F3F1ED" }}
      className="py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* ── Section label ── */}
        <div className="flex items-center gap-3 mb-10">
          <span
            className="block w-8 h-[3px] rounded-full"
            style={{ background: "#2E7D32" }}
          />
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: "#2E7D32" }}
          >
            A sua sala
          </span>
        </div>

        {/* ── Gallery layout ── */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* ── Main image ── */}
          <div className="relative flex-1 min-w-0">
            <div
              className="relative w-full overflow-hidden rounded-2xl cursor-pointer
                         aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9]"
              onClick={() => setLightbox(true)}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <img
                src={fotos[current].src}
                alt={fotos[current].caption || `Foto ${current + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                style={{ opacity: fade ? 1 : 0 }}
                draggable={false}
              />

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
                <div
                  className="px-5 pb-4 pt-12"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,.55), transparent)",
                  }}
                >
                  <p className="text-white text-sm md:text-base font-medium drop-shadow">
                    {fotos[current].caption}
                  </p>
                </div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
                           bg-white/80 hover:bg-white flex items-center justify-center
                           text-gray-800 shadow-md transition backdrop-blur-sm"
                aria-label="Foto anterior"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
                           bg-white/80 hover:bg-white flex items-center justify-center
                           text-gray-800 shadow-md transition backdrop-blur-sm"
                aria-label="Próxima foto"
              >
                <ChevronRight size={22} />
              </button>

              {/* Counter badge */}
              <span className="absolute top-4 right-4 bg-black/50 text-white text-xs font-mono px-3 py-1 rounded-full backdrop-blur-sm">
                {counter}
              </span>
            </div>

            {/* Progress bar */}
            <div className="mt-2 h-[3px] w-full bg-black/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%`, background: "#2E7D32" }}
              />
            </div>
          </div>

          {/* ── Thumbnails ── */}
          <div
            className="flex lg:flex-col gap-2 lg:w-[120px] shrink-0
                        overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto"
          >
            {visibleThumbs.map((foto, i) => {
              const idx = thumbStart + i;
              const isActive = idx === current;
              return (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`relative flex-shrink-0 w-[100px] h-[68px] lg:w-full lg:h-[72px]
                              rounded-lg overflow-hidden border-2 transition-all duration-200
                              ${
                                isActive
                                  ? "border-[#2E7D32] ring-2 ring-[#2E7D32]/30 scale-[1.03]"
                                  : "border-transparent opacity-60 hover:opacity-90"
                              }`}
                >
                  <img
                    src={foto.src}
                    alt={foto.caption || `Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─────────── Lightbox ─────────── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightbox(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-5 right-5 text-white/80 hover:text-white text-3xl font-light z-10"
            aria-label="Fechar"
          >
            &#x2715;
          </button>

          {/* Lightbox image */}
          <div
            className="relative max-w-[92vw] max-h-[88vh]"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={fotos[current].src}
              alt={fotos[current].caption || `Foto ${current + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg transition-opacity duration-300"
              style={{ opacity: fade ? 1 : 0 }}
              draggable={false}
            />

            {/* Caption */}
            {fotos[current].caption && (
              <p className="text-center text-white/80 text-sm mt-3">
                {fotos[current].caption}
              </p>
            )}

            {/* Lightbox nav arrows */}
            <button
              onClick={prev}
              className="absolute left-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
                         bg-white/15 hover:bg-white/30 flex items-center justify-center
                         text-white transition max-lg:left-2"
              aria-label="Foto anterior"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="absolute right-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
                         bg-white/15 hover:bg-white/30 flex items-center justify-center
                         text-white transition max-lg:right-2"
              aria-label="Próxima foto"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Counter */}
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-sm font-mono">
            {counter}
          </span>
        </div>
      )}
    </section>
  );
}
