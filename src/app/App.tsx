import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, LayoutGrid, Eye, EyeOff } from 'lucide-react';
import Slide1 from './components/slides/Slide1';
import Slide2 from './components/slides/Slide2';
import Slide3 from './components/slides/Slide3';
import Slide4 from './components/slides/Slide4';
import Slide5 from './components/slides/Slide5';
import Slide6 from './components/slides/Slide6';
import Slide7 from './components/slides/Slide7';
import Slide8 from './components/slides/Slide8';
import Slide0 from './components/slides/Slide0';
import SlideBeneficiarios from './components/slides/SlideBeneficiarios';
import SlideAnexo1 from './components/slides/SlideAnexo1';
import SlideAnexo2 from './components/slides/SlideAnexo2';

const slides = [
  { id: 'Contexto', component: Slide1, isMain: true },
  { id: 'Plan Maestro', component: Slide2, isMain: true },
  { id: 'Arquitectura', component: Slide3, isMain: true },
  { id: 'Requerimientos', component: Slide4, isMain: true },
  { id: 'Usabilidad', component: Slide5, isMain: true },
  { id: 'Calidad', component: Slide6, isMain: true },
  { id: 'Beneficiarios', component: SlideBeneficiarios, isMain: true },
  { id: 'Visión de Impacto', component: Slide7, isMain: true },
  { id: 'A1: Carta Gantt', component: SlideAnexo1, isMain: false },
  { id: 'A2: EDT', component: SlideAnexo2, isMain: false },
  { id: 'Cierre y QA', component: Slide8, isMain: true },
  { id: 'Espera / Fondo', component: Slide0, isMain: true }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showHub, setShowHub] = useState(false);
  const [hiddenSlides, setHiddenSlides] = useState<Record<number, boolean>>({});

  const activeSlideIndexes = slides.map((_, i) => i).filter(i => !hiddenSlides[i]);
  const activeCount = activeSlideIndexes.length || 1; // avoid div by 0
  const currentActiveIndex = activeSlideIndexes.indexOf(currentSlide);

  const nextSlide = () => {
    const event = new CustomEvent('slideCommand', { detail: 'next', cancelable: true });
    if (window.dispatchEvent(event)) {
      if (currentActiveIndex !== -1 && currentActiveIndex < activeCount - 1) {
        setDirection(1);
        setCurrentSlide(activeSlideIndexes[currentActiveIndex + 1]);
      } else if (currentActiveIndex === -1) {
        const nextActive = activeSlideIndexes.find(i => i > currentSlide) ?? activeSlideIndexes[activeCount - 1];
        if (nextActive !== undefined) {
          setDirection(1);
          setCurrentSlide(nextActive);
        }
      }
    }
  };

  const prevSlide = () => {
    const event = new CustomEvent('slideCommand', { detail: 'prev', cancelable: true });
    if (window.dispatchEvent(event)) {
      if (currentActiveIndex > 0) {
        setDirection(-1);
        setCurrentSlide(activeSlideIndexes[currentActiveIndex - 1]);
      } else if (currentActiveIndex === -1) {
        const prevActive = [...activeSlideIndexes].reverse().find(i => i < currentSlide) ?? activeSlideIndexes[0];
        if (prevActive !== undefined) {
          setDirection(-1);
          setCurrentSlide(prevActive);
        }
      }
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(slides.length - 1);
      } else if (e.key === 'Escape') {
        setShowHub(prev => !prev);
      }
    };

    const handleToggleHub = () => setShowHub(prev => !prev);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('toggleHub', handleToggleHub);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('toggleHub', handleToggleHub);
    };
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <div className="w-screen h-screen bg-slate-950 overflow-hidden relative">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Botón Anterior */}
      <div className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 z-50">
        <button
          onClick={prevSlide}
          disabled={currentActiveIndex <= 0}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      {/* Botón Siguiente */}
      <div className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 z-50">
        <button
          onClick={nextSlide}
          disabled={currentActiveIndex >= activeCount - 1}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicadores de progreso (Puntos) */}
      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 flex items-center justify-center gap-2 z-50">
        {activeSlideIndexes.map((idx) => {
          const slide = slides[idx];
          return (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              title={slide.id}
              className={`transition-all ${idx === currentSlide
                ? 'w-12 h-2 bg-white'
                : slide.isMain
                  ? 'w-2 h-2 bg-white/40 hover:bg-white/60'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                } rounded-full`}
            />
          );
        })}
      </div>

      {/* HUB de Navegación Modal */}
      <AnimatePresence>
        {showHub && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex flex-col p-8 md:p-16 overflow-y-auto"
          >
            <div className="max-w-6xl w-full mx-auto pb-12">
              <div className="flex justify-between items-center mb-12">
                <div>
                  <h2 className="text-3xl lg:text-5xl font-bold text-white mb-2">Hub de Navegación</h2>
                  <p className="text-slate-400 text-lg">Selecciona una diapositiva para ir directamente.</p>
                </div>
                <button
                  onClick={() => setShowHub(false)}
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <span className="text-3xl leading-none font-light block -mt-1">&times;</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                {slides.map((slide, idx) => (
                  <div key={slide.id} className="relative group">
                    <button
                      onClick={() => { goToSlide(idx); setShowHub(false); }}
                      className={`w-full p-6 rounded-2xl border flex flex-col items-start gap-4 transition-all text-left group ${currentSlide === idx
                        ? 'bg-blue-500/20 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.2)]'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30'
                        } ${hiddenSlides[idx] ? 'opacity-50 grayscale' : ''}`}
                    >
                      <span className={`text-4xl font-bold transition-colors ${currentSlide === idx ? 'text-blue-400/30' : 'text-white/10 group-hover:text-white/20'}`}>
                        {(idx + 1).toString().padStart(2, '0')}
                      </span>
                      <span className={`text-xl font-medium tracking-wide ${currentSlide === idx ? 'text-blue-400' : 'text-slate-300'}`}>
                        {slide.id}
                      </span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setHiddenSlides(prev => ({ ...prev, [idx]: !prev[idx] }));
                      }}
                      className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white/50 hover:text-white transition-colors z-10"
                      title={hiddenSlides[idx] ? "Mostrar diapositiva" : "Ocultar diapositiva"}
                    >
                      {hiddenSlides[idx] ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ProgressBar Top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800 z-50">
        <div
          className="h-full bg-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${((Math.max(0, currentActiveIndex) + 1) / activeCount) * 100}%` }}
        />
      </div>

      {/* Top Right Controls (Hub Button and Counter) */}
      <div className="absolute top-6 right-6 flex items-stretch gap-3 z-50 shadow-lg">
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('toggleHub'))}
          className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/40 hover:bg-slate-800/60 border border-white/10 rounded-lg text-white/80 hover:text-white text-sm transition-all backdrop-blur-md"
          title="Abrir Índice de Diapositivas (Esc)"
        >
          <LayoutGrid className="w-4 h-4" />
          <span className="hidden md:inline font-medium">Slides Hub</span>
        </button>
        <div className="text-white/60 text-sm font-mono bg-slate-900/40 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md flex items-center justify-center min-w-[3rem]">
          {Math.max(0, currentActiveIndex) + 1}/{activeCount}
        </div>
      </div>
    </div>
  );
}