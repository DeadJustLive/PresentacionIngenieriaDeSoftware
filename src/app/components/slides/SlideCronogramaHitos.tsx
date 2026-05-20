// @use(kind, limit, props, state, deps)
// @kind(feature)
// @props({})
// @state(currentStep)
// @deps(motion/react, lucide-react)
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flag, Search, Layers, Code, TestTube, Rocket } from 'lucide-react';

const hitos = [
  { icon: Flag, nombre: 'Inicio proyecto', fecha: 'Semana 1', text: 'text-blue-400' },
  { icon: Search, nombre: 'Levantamiento de requisitos', fecha: 'Semana 1-3', text: 'text-violet-400' },
  { icon: Layers, nombre: 'Diseño lógico y arquitectura', fecha: 'Semana 4-5', text: 'text-cyan-400' },
  { icon: Code, nombre: 'Desarrollo', fecha: 'Semana 6-10', text: 'text-emerald-400' },
  { icon: TestTube, nombre: 'Pruebas', fecha: 'Semana 11', text: 'text-amber-400' },
  { icon: Rocket, nombre: 'Implementación', fecha: 'Semana 12', text: 'text-rose-400' },
];

// Agrupar en pares
const groups = [
  [hitos[0], hitos[1]],
  [hitos[2], hitos[3]],
  [hitos[4], hitos[5]],
];

export default function SlideCronogramaHitos() {
  const [currentStep, setCurrentStep] = useState(0);
  const total = groups.length;

  useEffect(() => {
    const handler = (e: CustomEvent) => {
      if (e.detail === 'next' && currentStep < total - 1) {
        e.preventDefault();
        setCurrentStep(prev => prev + 1);
      } else if (e.detail === 'prev' && currentStep > 0) {
        e.preventDefault();
        setCurrentStep(prev => prev - 1);
      }
    };
    window.addEventListener('slideCommand', handler as EventListener);
    return () => window.removeEventListener('slideCommand', handler as EventListener);
  }, [currentStep, total]);

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 py-12 lg:py-0 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 lg:mb-12 flex-shrink-0 flex flex-col items-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4 lg:mb-6">
          <div className="h-1 w-8 lg:w-12 bg-slate-500" />
          <span className="text-slate-400 uppercase tracking-wider text-xs lg:text-sm font-medium">
            Opción A - Cronograma de Hitos Principales
          </span>
          <div className="h-1 w-8 lg:w-12 bg-slate-500" />
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-2 lg:mb-4">
          Hitos del Proyecto
        </h2>
        <p className="text-base lg:text-xl text-slate-400 max-w-3xl">
          Desglose en 6 etapas clave de desarrollo (Ref. Acta de Constitución)
        </p>
      </motion.div>

      <div className="flex-1 flex items-center justify-center w-full max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl"
          >
            {groups[currentStep].map((hito, idx) => {
              const Icon = hito.icon;
              const globalIndex = currentStep * 2 + idx;
              return (
                <div
                  key={globalIndex}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-4 mb-4 z-10">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-slate-800 border">
                      <Icon className={`w-6 h-6 ${hito.text}`} />
                    </div>
                    <div className="text-left">
                      <div className={`text-xs font-mono uppercase tracking-widest ${hito.text} mb-1`}>
                        {hito.fecha}
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-white leading-tight">
                        {hito.nombre}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 text-[10rem] font-bold text-white/20 leading-none z-0">
                    {globalIndex + 1}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicador de progreso */}
      <div className="flex items-center justify-center gap-4 mt-6 mb-4">
        {groups.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentStep(idx)}
            className="flex items-center gap-2"
          >
            <div className={`transition-all rounded-full ${
              idx === currentStep ? 'w-6 h-2 bg-slate-400' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
            }`} />
            <span className={`text-[10px] uppercase tracking-wider hidden sm:inline ${
              idx === currentStep ? 'text-slate-300' : 'text-white/30'
            }`}>
              {idx === 0 ? 'S1-3' : idx === 1 ? 'S4-10' : 'S11-12'}
            </span>
          </button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="w-full max-w-6xl"
      >
        <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 via-emerald-500 to-rose-500 mb-2 hidden lg:block" />
        <p className="text-xs text-slate-500">
          {currentStep < total - 1
            ? 'Presiona → para ver los siguientes hitos'
            : 'Presiona → para continuar'}
        </p>
      </motion.div>
    </div>
  );
}
