import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND, HERO_IMAGES } from "../data/brand";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_MS = 5000;
const SWIPE_PX = 48;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);
  const timerRef = useRef<number | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const next = () => setIndex((i) => (i + 1) % HERO_IMAGES.length);
  const prev = () => setIndex((i) => (i - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  useEffect(() => {
    const start = () => {
      stop();
      timerRef.current = window.setInterval(() => {
        if (!pausedRef.current) next();
      }, AUTOPLAY_MS);
    };
    const stop = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
    start();
    return stop;
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    pausedRef.current = true;
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    if (!start) { pausedRef.current = false; return; }
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_PX) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      dx < 0 ? next() : prev();
    }
    touchStart.current = null;
    pausedRef.current = false;
  };

  return (
    <section
      id="inicio"
      aria-roledescription="carousel"
      aria-label="Galería de portada"
      className="relative w-full overflow-hidden
                 h-[80vh] min-h-[520px] sm:h-[88vh] sm:min-h-[600px] md:h-[92vh] md:min-h-[640px]"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slide actual con cross-fade */}
      <AnimatePresence mode="wait">
        <motion.img
          key={HERO_IMAGES[index].src}
          src={HERO_IMAGES[index].src}
          alt={HERO_IMAGES[index].alt}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover
                     object-center sm:object-[center_35%]"
          fetchPriority={index === 0 ? "high" : "auto"}
          decoding="async"
        />
      </AnimatePresence>

      {/* Preload del siguiente */}
      <img
        src={HERO_IMAGES[(index + 1) % HERO_IMAGES.length].src}
        alt=""
        aria-hidden
        className="hidden"
        decoding="async"
      />

      {/* Overlay (más fuerte en móvil para legibilidad) */}
      <div className="absolute inset-0 bg-gradient-to-b
                      from-black/60 via-black/40 to-black/60
                      sm:from-black/40 sm:via-black/30 sm:to-black/60" />

      {/* Contenido */}
      <div className="relative h-full mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-[env(safe-area-inset-top)]">
        <div className="h-full w-full grid place-items-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="mb-4 sm:mb-6 text-[10px] sm:text-[11px]
                            tracking-[0.35em] sm:tracking-[0.45em] uppercase text-white/80">
              {BRAND.established}
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold uppercase drop-shadow-md
                           tracking-[0.08em] sm:tracking-[0.18em]">
              Creando Futuro Arquitectónico
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-white/85">
              Arq. Claudia Elena Vazquez Rios
            </p>

            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="#portafolio"
                className="inline-flex items-center justify-center
                           px-6 py-2.5 sm:px-8 sm:py-3
                           border-2 border-white text-white
                           uppercase tracking-[0.18em] text-[10px] sm:text-xs font-semibold
                           hover:bg-white/10 rounded-sm"
              >
                Portafolio
              </a>
              {BRAND.portfolioPDF !== "#" && (
                <a
                  href={BRAND.portfolioPDF}
                  className="inline-flex items-center justify-center
                             px-6 py-2.5 sm:px-8 sm:py-3
                             bg-white text-slate-900
                             uppercase tracking-[0.18em] text-[10px] sm:text-xs font-semibold
                             hover:opacity-90 rounded-sm"
                >
                  Descargar PDF
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Flechas: ocultas en móvil */}
        <button
          aria-label="Anterior"
          onClick={prev}
          className="hidden sm:grid absolute left-4 top-1/2 -translate-y-1/2
                     place-items-center rounded-full bg-white/15 hover:bg-white/25
                     backdrop-blur p-2 text-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          aria-label="Siguiente"
          onClick={next}
          className="hidden sm:grid absolute right-4 top-1/2 -translate-y-1/2
                     place-items-center rounded-full bg-white/15 hover:bg-white/25
                     backdrop-blur p-2 text-white"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots: más grandes y separados en móvil */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 sm:gap-2.5">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir al slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`transition-all rounded-full ${
                  i === index ? "w-6 h-2 bg-white" : "w-2.5 h-2.5 bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
