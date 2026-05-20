// @use(kind, limit, props, state, deps)
// @kind(feature)
// @props({})
// @state(currentIndex)
// @deps(motion/react, lucide-react)
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Server, Shield, Zap } from 'lucide-react';

const nodes = [
  {
    icon: Globe,
    title: 'Portal Web/Móvil',
    desc: 'Pre-digitación para ciudadanos y turistas',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/30',
    iconColor: 'text-blue-400',
    connectorColor: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Server,
    title: 'Servicios Cloud',
    desc: 'Gestión y lógica de negocio. Diseñado bajo el Modelo 4+1 y diagramado en UML.',
    color: 'from-slate-800/50 to-slate-900/50',
    border: 'border-blue-500/50',
    iconColor: 'text-blue-400',
    connectorColor: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'APIs Externas',
    desc: 'SAG, PDI, Argentina — integración en tiempo real',
    color: 'from-emerald-500/20 to-green-500/20',
    border: 'border-emerald-500/30',
    iconColor: 'text-emerald-400',
    connectorColor: 'from-emerald-500 to-teal-500',
  },
];

export default function Slide3() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = nodes.length;

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

  const node = nodes[currentIndex];
  const Icon = node.icon;

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-20 pt-20 lg:pt-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 lg:mb-12 flex-shrink-0 flex flex-col items-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4 lg:mb-6">
          <div className="h-1 w-8 lg:w-12 bg-blue-500" />
          <span className="text-blue-400 uppercase tracking-wider text-xs lg:text-sm font-medium">
            Arquitectura Técnica
          </span>
          <div className="h-1 w-8 lg:w-12 bg-blue-500" />
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-2 lg:mb-4">
          Ecosistema Digital Interoperable
        </h2>
        <p className="text-base lg:text-xl text-slate-400 max-w-3xl">
          Integración en tiempo real con actores institucionales para reducir tiempos y validaciones manuales
        </p>
      </motion.div>

      <div className="flex-1 flex items-center justify-center w-full max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 w-full">
          {/* Node detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className={`w-40 h-40 lg:w-52 lg:h-52 rounded-3xl bg-gradient-to-br ${node.color} border-2 ${node.border} backdrop-blur-sm flex items-center justify-center mb-6 relative`}>
                {currentIndex === 1 && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-500 border-2 border-slate-950 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </div>
                )}
                <Icon className={`w-16 h-16 lg:w-24 lg:h-24 ${node.iconColor}`} />
              </div>
              <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">{node.title}</h3>
              <p className="text-base lg:text-lg text-slate-400 leading-relaxed max-w-lg">
                {node.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Miniatura del flujo completo + indicador */}
      <div className="flex items-center justify-center gap-3 mt-6 mb-4">
        <Globe className={`w-5 h-5 ${currentIndex === 0 ? 'text-blue-400' : 'text-white/20'}`} />
        <Zap className={`w-4 h-4 ${currentIndex === 0 ? 'text-cyan-400 animate-pulse' : 'text-white/10'}`} />
        <Server className={`w-5 h-5 ${currentIndex === 1 ? 'text-blue-400' : 'text-white/20'}`} />
        <Zap className={`w-4 h-4 ${currentIndex === 1 ? 'text-cyan-400 animate-pulse' : 'text-white/10'}`} />
        <Shield className={`w-5 h-5 ${currentIndex === 2 ? 'text-emerald-400' : 'text-white/20'}`} />
      </div>

      {/* Indicador de progreso */}
      <div className="flex items-center justify-center gap-4 mb-4">
        {nodes.map((n, idx) => (
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
              {n.title.split('/')[0]}
            </span>
          </button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mb-4"
      >
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl px-6 py-3 backdrop-blur-sm">
          <p className="text-slate-400 text-sm">
            {currentIndex < total - 1
              ? 'Presiona → para ver el siguiente componente'
              : 'Presiona → para continuar'}
            <span className="text-cyan-400 font-semibold ml-1">
              | Flujo de datos bidireccional
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
