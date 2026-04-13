import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Code, TestTube, Rocket } from 'lucide-react';

export default function SlideAnexo1() {
  const fases = [
    { fase: 'Semana 1-2', nombre: 'Planificación', icon: Calendar, items: ['Análisis requerimientos', 'Arquitectura', 'Diseño Inicial'] },
    { fase: 'Semana 3-5', nombre: 'Fase Backend', icon: Code, items: ['Backend core', 'APIs base', 'Base de datos'] },
    { fase: 'Semana 6-8', nombre: 'Fase Frontend', icon: Users, items: ['Frontend ciudadano', 'Frontend func.', 'Integraciones'] },
    { fase: 'Semana 9-10', nombre: 'Testing QA', icon: TestTube, items: ['Pruebas unitarias', 'Integración', 'UAT'] },
    { fase: 'Semana 11-12', nombre: 'Despliegue', icon: Rocket, items: ['Deploy prod.', 'Capacitación', 'Documentación'] }
  ];

  const [step, setStep] = useState(0);

  useEffect(() => {
    const handleCommand = (e: any) => {
      if (e.detail === 'next' && step < fases.length - 1) {
        e.preventDefault();
        setStep(s => s + 1);
      } else if (e.detail === 'prev' && step > 0) {
        e.preventDefault();
        setStep(s => s - 1);
      }
    };
    window.addEventListener('slideCommand', handleCommand);
    return () => window.removeEventListener('slideCommand', handleCommand);
  }, [step, fases.length]);

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 overflow-hidden text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: step === 0 ? 1 : 0.6, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 lg:mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-4 lg:mb-6">
          <div className="h-1 w-8 lg:w-12 bg-slate-500" />
          <span className="text-slate-400 uppercase tracking-wider text-xs lg:text-sm font-medium">
            Anexo 1 - Carta Gantt (Paso {step + 1} de {fases.length})
          </span>
          <div className="h-1 w-8 lg:w-12 bg-slate-500" />
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-2 lg:mb-4 transition-all">
          Cronograma Detallado
        </h2>
        <p className="text-base lg:text-xl text-slate-400">
          12 semanas distribuidas en 5 fases secuenciales
        </p>
      </motion.div>

      {/* Contenedor del Carrousel Horizontal */}
      <div className="relative w-full h-[400px] lg:h-[450px] flex items-center justify-center perspective-[1000px]">
        {fases.map((fase, index) => {
          const offset = index - step; // Distancia desde el paso actual

          return (
            <motion.div
              key={index}
              initial={false}
              animate={{
                x: offset * (window.innerWidth < 768 ? 240 : 360),
                scale: offset === 0 ? 1 : 0.8,
                opacity: offset === 0 ? 1 : 0.2,
                zIndex: 10 - Math.abs(offset),
                filter: offset === 0 ? 'blur(0px)' : 'blur(4px)',
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`absolute flex flex-col items-center w-[260px] lg:w-[320px] ${step === index ? '' : 'pointer-events-none'}`}
            >
              <div className="flex flex-col items-center justify-center w-full relative">
                <div className={`w-20 h-20 lg:w-24 lg:h-24 rounded-2xl border flex flex-shrink-0 items-center justify-center transition-all duration-500 z-10 ${offset === 0 ? 'bg-slate-900 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.4)]' : 'bg-slate-950/50 border-white/5'}`}>
                  <fase.icon className={`w-10 h-10 lg:w-12 lg:h-12 transition-colors ${offset === 0 ? 'text-blue-400' : 'text-slate-500'}`} />
                </div>

                {/* Línea conectora entre elementos */}
                {index < fases.length - 1 && (
                  <div className={`absolute top-1/2 left-[50%] w-[240px] lg:w-[360px] h-1 -translate-y-1/2 -z-10 transition-colors ${step > index ? 'bg-blue-500/40 shadow-[0_0_10px_rgba(59,130,246,0.3)]' : 'bg-slate-800'}`} />
                )}
              </div>

              <div className="mt-8 text-center bg-slate-950/80 backdrop-blur-sm border border-white/5 rounded-2xl p-6 w-full h-full shadow-xl">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-slate-800 rounded-full text-xs lg:text-sm text-slate-300 font-mono mb-3">{fase.fase}</span>
                  <h3 className={`text-xl lg:text-3xl font-bold ${offset === 0 ? 'text-white' : 'text-slate-400'}`}>{fase.nombre}</h3>
                </div>
                <div className="flex flex-col gap-2">
                  {fase.items.map((item, i) => (
                    <div key={i} className={`border rounded-lg px-3 py-3 text-xs lg:text-sm transition-all ${offset === 0 ? 'bg-blue-500/10 border-blue-500/30 text-blue-100 shadow-sm' : 'bg-white/5 border-white/10 text-slate-400'}`}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
