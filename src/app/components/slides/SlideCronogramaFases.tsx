// @use(kind, limit, props, state, deps)
// @kind(feature)
// @props({})
// @state(currentIndex)
// @deps(motion/react, lucide-react)
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, Zap, ShieldCheck } from 'lucide-react';

const fases = [
  {
    fase: 'Fase 1',
    semanas: 'Semanas 1 a 3',
    titulo: 'Levantamiento y Base de Datos',
    desc: 'Levantamiento de requisitos detallado y modelo de base de datos finalizado.',
    icon: Database,
    border: 'border-blue-500/20', bgTop: 'bg-blue-500/40', bgIcon: 'bg-blue-500/10', text: 'text-blue-400', number: 'text-blue-500/20'
  },
  {
    fase: 'Fase 2',
    semanas: 'Semanas 4 a 10',
    titulo: 'Desarrollo e Integración',
    desc: 'Desarrollo de los módulos del sistema e integración con servicios externos (SAG, PDI, etc.).',
    icon: Zap,
    border: 'border-cyan-500/20', bgTop: 'bg-cyan-500/40', bgIcon: 'bg-cyan-500/10', text: 'text-cyan-400', number: 'text-cyan-500/20'
  },
  {
    fase: 'Fase 3',
    semanas: 'Semanas 11 a 12',
    titulo: 'Pruebas y Entrega',
    desc: 'Pruebas de calidad del sistema y entrega del producto final validado.',
    icon: ShieldCheck,
    border: 'border-emerald-500/20', bgTop: 'bg-emerald-500/40', bgIcon: 'bg-emerald-500/10', text: 'text-emerald-400', number: 'text-emerald-500/20'
  }
];

export default function SlideCronogramaFases() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = fases.length;

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

  const fase = fases[currentIndex];
  const Icon = fase.icon;

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
            Opción B - Cronograma por Fases (Objetivo)
          </span>
          <div className="h-1 w-8 lg:w-12 bg-slate-500" />
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-2 lg:mb-4">
          Tiempos de Desarrollo
        </h2>
        <p className="text-base lg:text-xl text-slate-400 max-w-3xl">
          Macro-planificación en 3 meses (Desviación máxima permitida: 10%)
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
            <div className={`flex flex-col bg-slate-900/50 backdrop-blur-md rounded-3xl p-8 lg:p-10 border-2 ${fase.border} text-left relative overflow-hidden max-w-lg mx-auto`}>
              <div className={`absolute top-0 left-0 w-full h-1 ${fase.bgTop}`} />
              <div className="flex items-center justify-between mb-8">
                <span className="inline-block px-4 py-1.5 bg-white/5 rounded-full text-sm font-mono text-slate-300">
                  {fase.semanas}
                </span>
                <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">
                  {fase.fase}
                </div>
              </div>
              <div className={`w-16 h-16 rounded-2xl ${fase.bgIcon} flex flex-shrink-0 items-center justify-center mb-6`}>
                <Icon className={`w-8 h-8 ${fase.text}`} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">{fase.titulo}</h3>
              <p className="text-slate-400 text-base lg:text-lg leading-relaxed flex-1">
                {fase.desc}
              </p>
              <div className={`absolute -bottom-16 -right-10 text-[18rem] leading-none font-black ${fase.number}`}>
                {currentIndex + 1}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicador de progreso */}
      <div className="flex items-center justify-center gap-4 mt-6 mb-4">
        {fases.map((f, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className="flex items-center gap-2"
          >
            <div className={`transition-all rounded-full ${
              idx === currentIndex ? 'w-6 h-2 bg-slate-400' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
            }`} />
            <span className={`text-[10px] uppercase tracking-wider ${
              idx === currentIndex ? 'text-slate-300' : 'text-white/30'
            }`}>
              {f.fase}
            </span>
          </button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="w-full max-w-3xl"
      >
        <div className="flex items-center justify-between text-slate-500 text-xs font-mono uppercase px-4 mb-2">
          <span>Inicio: Semana 1</span>
          <span>Progreso Total: 3 meses</span>
          <span>Término: Semana 12</span>
        </div>
        <p className="text-xs text-slate-500">
          {currentIndex < total - 1
            ? 'Presiona → para ver la siguiente fase'
            : 'Presiona → para continuar'}
        </p>
      </motion.div>
    </div>
  );
}
