// @use(kind, limit, props, state, deps)
// @kind(feature)
// @props({})
// @state(showFuncionales)
// @deps(motion/react, lucide-react)
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, TrendingUp, Zap, Eye, Shield, UserPlus, Fingerprint, Network, BarChart, Search, Edit3, Files } from 'lucide-react';

const funcionales = [
  { icon: Fingerprint, title: 'Autenticación', desc: 'Validación de funcionarios del sistema' },
  { icon: UserPlus, title: 'Registro Pasajeros', desc: 'Control y validación de identidades' },
  { icon: Files, title: 'Registro Vehículos', desc: 'Documentación vehicular integrada' },
  { icon: Shield, title: 'Menores de Edad', desc: 'Gestión de autorización parental' },
  { icon: Network, title: 'Integración', desc: 'Conexión con SAG, PDI y Aduanas' },
  { icon: BarChart, title: 'Reportes', desc: 'Generación de estadísticas automatizadas' },
  { icon: Search, title: 'Consulta de Trámite', desc: 'Seguimiento de estado online' },
  { icon: Edit3, title: 'Pre-digitación', desc: 'Plataforma para información previa' }
];

const noFuncionales = [
  { icon: Lock, title: 'Seguridad y Confidencialidad', desc: 'Protección de datos sensibles y control de accesos' },
  { icon: TrendingUp, title: 'Escalabilidad', desc: 'Eficiencia y soporte para alta concurrencia' },
  { icon: Zap, title: 'Alta Disponibilidad', desc: 'Sistema tolerante a fallos, continuo 24/7' },
  { icon: Network, title: 'Compatibilidad', desc: 'Concordancia con estándares gubernamentales' },
  { icon: Eye, title: 'Accesibilidad y Web', desc: 'Interfaz web responsiva en móvil y escritorio' }
];

export default function Slide4() {
  const [showFuncionales, setShowFuncionales] = useState(true);

  useEffect(() => {
    const handler = (e: CustomEvent) => {
      if (e.detail === 'next' && !showFuncionales) {
        // En next con No Funcionales: no hacer nada (dejar pasar)
      } else if (e.detail === 'next' && showFuncionales) {
        e.preventDefault();
        setShowFuncionales(false);
      } else if (e.detail === 'prev' && !showFuncionales) {
        e.preventDefault();
        setShowFuncionales(true);
      } else if (e.detail === 'prev' && showFuncionales) {
        // En prev con Funcionales: dejar pasar
      }
    };
    window.addEventListener('slideCommand', handler as EventListener);
    return () => window.removeEventListener('slideCommand', handler as EventListener);
  }, [showFuncionales]);

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 lg:px-20 py-4 sm:py-6 lg:py-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-3 sm:mb-4 lg:mb-6 flex-shrink-0 flex flex-col items-center"
      >
        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 lg:mb-5">
          <div className="h-1 w-6 sm:w-8 lg:w-12 bg-blue-500" />
          <span className="text-blue-400 uppercase tracking-wider text-[10px] sm:text-xs lg:text-sm font-medium">
            Requerimientos del Sistema
          </span>
          <div className="h-1 w-6 sm:w-8 lg:w-12 bg-blue-500" />
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 lg:mb-3">
          Funcionales y No Funcionales
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-slate-400 max-w-3xl">
          Dominio integral según el Acta de Constitución para satisfacer las necesidades operativas.
        </p>
      </motion.div>

      <div className="flex-1 min-h-0 flex items-center justify-center w-full max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {showFuncionales ? (
            <motion.div
              key="funcionales"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="w-full"
            >
              <div className="mb-2 sm:mb-3 flex flex-col items-center">
                <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-white mb-1 sm:mb-2">Requisitos Funcionales</h3>
                <div className="h-0.5 sm:h-1 w-16 sm:w-20 lg:w-24 bg-gradient-to-r from-blue-500 to-cyan-500" />
              </div>
              <div className="slide-card-grid grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2.5 w-full">
                {funcionales.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03, duration: 0.4 }}
                      className="slide-card bg-white/5 border border-white/10 rounded-lg sm:rounded-xl hover:bg-white/10 transition-colors w-full"
                    >
                      <div className="flex items-start gap-1.5 sm:gap-2 lg:gap-3 text-left">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-md sm:rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-blue-400" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-[10px] sm:text-xs lg:text-sm font-semibold text-white mb-0.5 truncate">{item.title}</h4>
                          <p className="text-[9px] sm:text-[10px] lg:text-xs text-slate-400 leading-snug">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="no-funcionales"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.35 }}
              className="w-full max-w-2xl mx-auto"
            >
              <div className="mb-2 sm:mb-3 flex flex-col items-center">
                <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-white mb-1 sm:mb-2">No Funcionales</h3>
                <div className="h-0.5 sm:h-1 w-16 sm:w-20 lg:w-24 bg-gradient-to-r from-emerald-500 to-green-500" />
              </div>
              <div className="slide-card-grid grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2.5 w-full">
                {noFuncionales.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="slide-card bg-white/5 border border-white/10 rounded-lg sm:rounded-xl hover:bg-white/10 transition-colors w-full"
                    >
                      <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 text-left">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-md sm:rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-emerald-400" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-[10px] sm:text-xs lg:text-sm font-semibold text-white mb-0.5 truncate">{item.title}</h4>
                          <p className="text-[9px] sm:text-[10px] lg:text-xs text-slate-400 leading-snug">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Indicador */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mt-2 sm:mt-3 mb-2">
        <button onClick={() => setShowFuncionales(true)} className="flex items-center gap-1.5 sm:gap-2">
          <div className={`transition-all rounded-full ${showFuncionales ? 'w-4 sm:w-6 h-1.5 sm:h-2 bg-blue-400' : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/20 hover:bg-white/40'}`} />
          <span className={`text-[9px] sm:text-[10px] uppercase tracking-wider ${showFuncionales ? 'text-blue-300' : 'text-white/30'}`}>
            Funcionales
          </span>
        </button>
        <button onClick={() => setShowFuncionales(false)} className="flex items-center gap-1.5 sm:gap-2">
          <div className={`transition-all rounded-full ${!showFuncionales ? 'w-4 sm:w-6 h-1.5 sm:h-2 bg-emerald-400' : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/20 hover:bg-white/40'}`} />
          <span className={`text-[9px] sm:text-[10px] uppercase tracking-wider ${!showFuncionales ? 'text-emerald-300' : 'text-white/30'}`}>
            No Funcionales
          </span>
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm">
          <p className="text-slate-300 text-[10px] sm:text-xs text-center">
            {showFuncionales
              ? 'Presiona → para ver requerimientos No Funcionales'
              : 'Presiona → para continuar'}
            <span className="text-blue-400 font-semibold ml-1">
              | {showFuncionales ? `${funcionales.length} requisitos` : `${noFuncionales.length} requisitos`}
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
