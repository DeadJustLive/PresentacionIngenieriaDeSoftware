// @use(kind, limit, props, state, deps)
// @kind(feature)
// @props({})
// @state(currentIndex)
// @deps(motion/react, lucide-react)
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, Car, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    title: "1. Pre-digitación Online",
    desc: "Ciudadano completa formularios, declaraciones e información básica de forma anticipada desde la plataforma web o móvil.",
    bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400"
  },
  {
    icon: Car,
    title: "2. Llegada a la Frontera",
    desc: "Validación ágil mediante escaneo rápido (Código QR y Patente) al presentarse en el complejo fronterizo.",
    bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400"
  },
  {
    icon: ShieldCheck,
    title: "3. Interoperabilidad",
    desc: "El sistema cruza datos en tiempo real con bases del SAG, PDI y entidades aduaneras vecinas.",
    bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20", text: "text-fuchsia-400"
  },
  {
    icon: CheckCircle2,
    title: "4. Aprobación y Cruce",
    desc: "Validación exitosa sin necesidad de filas físicas, reduciendo el proceso a solo minutos.",
    bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400"
  }
];

export default function SlideFlujo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = steps.length;

  useEffect(() => {
    const handler = (e: CustomEvent) => {
      if (e.detail === 'next' && currentIndex < total - 1) {
        e.preventDefault();
        setCurrentIndex(prev => prev + 1);
      } else if (e.detail === 'prev' && currentIndex > 0) {
        e.preventDefault();
        setCurrentIndex(prev => prev - 1);
      }
    };
    window.addEventListener('slideCommand', handler as EventListener);
    return () => window.removeEventListener('slideCommand', handler as EventListener);
  }, [currentIndex, total]);

  const currentStep = steps[currentIndex];
  const Icon = currentStep.icon;

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 py-12 lg:py-0 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 lg:mb-12 flex-shrink-0 flex flex-col items-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4 lg:mb-6">
          <div className="h-1 w-8 lg:w-12 bg-blue-500" />
          <span className="text-blue-400 uppercase tracking-wider text-xs lg:text-sm font-medium">
            Flujo de Operación
          </span>
          <div className="h-1 w-8 lg:w-12 bg-blue-500" />
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-2 lg:mb-4">
          Viaje del Usuario Integrado
        </h2>
        <p className="text-base lg:text-xl text-slate-400 max-w-3xl">
          Automatizando el proceso paso a paso para erradicar tiempos muertos y centralizar el control.
        </p>
      </motion.div>

      <div className="flex-1 flex items-center justify-center w-full max-w-3xl mx-auto">
        <div className="flex items-center gap-4 lg:gap-8 w-full justify-center">
          {/* Previous step preview (smaller) */}
          {currentIndex > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.5, x: 0 }}
              className="hidden md:flex flex-col items-center"
            >
              <div className={`w-12 h-12 rounded-xl ${steps[currentIndex - 1].bg} border ${steps[currentIndex - 1].border} flex items-center justify-center`}>
                {(() => { const PrevIcon = steps[currentIndex - 1].icon; return <PrevIcon className="w-5 h-5 text-slate-500" />; })()}
              </div>
              <span className="text-xs text-slate-600 mt-2">{steps[currentIndex - 1].title}</span>
            </motion.div>
          )}

          {/* Connector arrow */}
          {currentIndex > 0 && (
            <div className="hidden md:flex text-slate-600">
              <ArrowRight className="w-6 h-6" />
            </div>
          )}

          {/* Current step - big */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className={`w-28 h-28 lg:w-36 lg:h-36 rounded-2xl ${currentStep.bg} border ${currentStep.border} flex items-center justify-center mb-6 relative`}>
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent blur-[2px] transition-all duration-300`} />
                <Icon className={`w-12 h-12 lg:w-16 lg:h-16 ${currentStep.text}`} />
              </div>
              <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                {currentStep.title}
              </h3>
              <p className="text-base lg:text-lg text-slate-400 leading-relaxed max-w-xl">
                {currentStep.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Next step preview */}
          {currentIndex < total - 1 && (
            <>
              <div className="hidden md:flex text-slate-600">
                <ArrowRight className="w-6 h-6" />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 0.5, x: 0 }}
                className="hidden md:flex flex-col items-center"
              >
                <div className={`w-12 h-12 rounded-xl ${steps[currentIndex + 1].bg} border ${steps[currentIndex + 1].border} flex items-center justify-center`}>
                  {(() => { const NextIcon = steps[currentIndex + 1].icon; return <NextIcon className="w-5 h-5 text-slate-500" />; })()}
                </div>
                <span className="text-xs text-slate-600 mt-2">{steps[currentIndex + 1].title}</span>
              </motion.div>
            </>
          )}
        </div>
      </div>

      {/* Indicador de progreso */}
      <div className="flex items-center justify-center gap-4 mt-6 mb-4">
        {steps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className="flex items-center gap-2"
          >
            <div className={`transition-all rounded-full ${
              idx === currentIndex ? 'w-6 h-2 bg-blue-400' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
            }`} />
            <span className={`text-[10px] uppercase tracking-wider hidden sm:inline ${
              idx === currentIndex ? 'text-blue-300' : 'text-white/30'
            }`}>
              Paso {idx + 1}
            </span>
          </button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl px-6 py-3 backdrop-blur-sm">
          <p className="text-slate-400 text-sm">
            {currentIndex < total - 1
              ? 'Presiona → para avanzar al siguiente paso'
              : 'Presiona → para continuar'}
            <span className="text-blue-400 font-semibold ml-1">
              | Esperas de 8-20 horas históricas
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
