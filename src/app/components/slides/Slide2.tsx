// @use(kind, limit, props, state, deps)
// @kind(feature)
// @props({})
// @state(currentIndex)
// @deps(motion/react, lucide-react)
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, DollarSign, Target } from 'lucide-react';

const planItems = [
  {
    icon: Target,
    label: 'Alcance (Fijo)',
    title: 'Definido al Inicio',
    description: 'Requisitos cerrados y exhaustivos, exigido al ser Aduanas una entidad gubernamental',
    bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400'
  },
  {
    icon: Calendar,
    label: 'Tiempo',
    title: '12 Semanas',
    description: 'Ejecución secuencial y estructurada, controlada mediante Carta Gantt y EDT',
    bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400'
  },
  {
    icon: DollarSign,
    label: 'Costo',
    title: '$30.000.000 CLP',
    description: 'Presupuesto cerrado sin desviaciones, con monitoreo continuo de hitos',
    bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400'
  }
];

export default function Slide2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = planItems.length;

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

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-20 py-12 lg:py-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 lg:mb-12 flex flex-col items-center"
      >
        <div className="flex items-center gap-3 mb-4 lg:mb-6">
          <div className="h-1 w-8 lg:w-12 bg-blue-500" />
          <span className="text-blue-400 uppercase tracking-wider text-xs lg:text-sm font-medium">
            Plan Maestro (Enfoque Predictivo)
          </span>
          <div className="h-1 w-8 lg:w-12 bg-blue-500" />
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-2 lg:mb-4">
          Triple Restricción Tradicional
        </h2>
        <p className="text-base lg:text-xl text-slate-400 max-w-3xl">
          Gestión basada en Metodología Tradicional (Cascada) asegurando previsibilidad técnica
        </p>
      </motion.div>

      <div className="flex-1 flex items-center justify-center w-full max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            {(() => {
              const item = planItems[currentIndex];
              const Icon = item.icon;
              return (
                <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 flex flex-col items-center text-center max-w-lg mx-auto">
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 lg:w-10 lg:h-10 ${item.text}`} />
                  </div>
                  <div className="text-xs lg:text-sm uppercase tracking-widest text-slate-500 mb-3">
                    {item.label}
                  </div>
                  <h3 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base lg:text-lg text-slate-400 leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              );
            })()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicador de progreso: dots con labels */}
      <div className="flex items-center justify-center gap-4 mt-6 mb-4">
        {planItems.map((item, idx) => (
          <button
            key={item.label}
            onClick={() => setCurrentIndex(idx)}
            className="flex items-center gap-2"
          >
            <div className={`transition-all rounded-full ${
              idx === currentIndex ? 'w-6 h-2 bg-blue-400' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
            }`} />
            <span className={`text-[10px] uppercase tracking-wider ${
              idx === currentIndex ? 'text-blue-300' : 'text-white/30'
            }`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        <span className="text-slate-500 text-xs">
          {currentIndex < total - 1 ? 'Presiona → para ver la siguiente restricción' : 'Presiona → para continuar'}
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </motion.div>
    </div>
  );
}
