// @use(kind, limit, scope, props, state, deps)
// @kind(feature)
// @scope(module: diagramas)
// @props({ folderIndex: number })
// @state(diagramType, imageLoaded)
// @deps(motion/react)
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type DiagramType = 'actividad' | 'secuencia';

interface DiagramSet {
  title: string;
  images: Record<DiagramType, string>;
  color: string;
  border: string;
}

const diagramSets: DiagramSet[] = [
  {
    title: 'Registro Anticipado (Pre‑digitación SAG/PDI o Vehículos)',
    images: {
      actividad: './Diagramas/diagrama1/Registro Anticipado (Pre‑digitación SAG⁄PDI o Vehículos)Actividad.jpg',
      secuencia: './Diagramas/diagrama1/Registro Anticipado (Pre‑digitación SAG⁄PDI o Vehículos)Secuencia.jpg',
    },
    color: 'from-blue-600/20 to-cyan-600/20',
    border: 'border-blue-500/30',
  },
  {
    title: 'Autorizar Paso Fronterizo (Control Integrado)',
    images: {
      actividad: './Diagramas/Diagrama2/Autorizar Paso Fronterizo (Control Integrado)Actividad.jpg',
      secuencia: './Diagramas/Diagrama2/Autorizar Paso Fronterizo (Control Integrado)Secuencia.jpg',
    },
    color: 'from-fuchsia-600/20 to-violet-600/20',
    border: 'border-fuchsia-500/30',
  },
  {
    title: 'Sincronización de Datos con Aduana Limítrofe',
    images: {
      actividad: './Diagramas/Diagrama3/Sincronización de Datos con Aduana LimítrofeActividad.jpg',
      secuencia: './Diagramas/Diagrama3/Sincronización de Datos con Aduana LimítrofeSecuencia.jpg',
    },
    color: 'from-emerald-600/20 to-teal-600/20',
    border: 'border-emerald-500/30',
  },
];

export default function SlideDiagramaSet({ folderIndex }: { folderIndex: number }) {
  const [diagramType, setDiagramType] = useState<DiagramType>('actividad');
  const [imageLoaded, setImageLoaded] = useState(false);
  const currentSet = diagramSets[folderIndex] ?? diagramSets[0];
  const currentImage = currentSet.images[diagramType];
  const steps = ['actividad', 'secuencia'] as const;

  const toggleType = useCallback(() => {
    setImageLoaded(false);
    setDiagramType(prev => (prev === 'actividad' ? 'secuencia' : 'actividad'));
  }, []);

  // Intercept slideCommand to toggle between activity/sequence within the same slide
  // → : actividad → secuencia → (next slide)
  // ← : secuencia → actividad → (prev slide)
  useEffect(() => {
    const handler = (e: CustomEvent) => {
      if (e.detail === 'next' && diagramType === 'actividad') {
        e.preventDefault();
        toggleType();
      } else if (e.detail === 'prev' && diagramType === 'secuencia') {
        e.preventDefault();
        toggleType();
      }
    };
    window.addEventListener('slideCommand', handler as EventListener);
    return () => window.removeEventListener('slideCommand', handler as EventListener);
  }, [diagramType, toggleType]);

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col overflow-hidden">
      <div className="flex-shrink-0 px-6 md:px-10 pt-6 md:pt-8 pb-2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-1">
            <div className="h-1 w-8 md:w-12 bg-blue-500" />
            <span className="text-blue-400 uppercase tracking-wider text-xs font-medium">Diagramas del Sistema</span>
            <div className="h-1 w-8 md:w-12 bg-blue-500" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white">{currentSet.title}</h2>
        </motion.div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 md:px-8 pb-2 min-h-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`relative w-full h-full max-w-5xl mx-auto rounded-2xl border ${currentSet.border} bg-gradient-to-br ${currentSet.color} backdrop-blur-sm overflow-hidden flex items-center justify-center`}
          style={{ aspectRatio: '4/3', maxHeight: '100%' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={diagramType}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex items-center justify-center p-3 md:p-4"
            >
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-400 rounded-full animate-spin" />
                </div>
              )}
              <img
                src={currentImage}
                alt={`${currentSet.title} - ${diagramType === 'actividad' ? 'Actividad' : 'Secuencia'}`}
                className={`max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(true)}
                style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-3 left-3 md:top-4 md:left-4">
            <div className={`px-2 py-1 rounded-md text-[10px] md:text-xs font-medium uppercase tracking-wider backdrop-blur-md ${
              diagramType === 'actividad'
                ? 'bg-blue-500/30 text-blue-200 border border-blue-400/30'
                : 'bg-amber-500/30 text-amber-200 border border-amber-400/30'
            }`}>
              {diagramType === 'actividad' ? 'Actividad' : 'Secuencia'}
            </div>
          </div>

          <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4">
            <span className="text-white/40 text-xs font-mono">{folderIndex + 1} / {diagramSets.length}</span>
          </div>
        </motion.div>
      </div>

      {/* Indicador de progreso dentro de la slide: actividad | secuencia */}
      <div className="flex-shrink-0 flex items-center justify-center gap-3 pb-1">
        {steps.map(step => (
          <div key={step} className="flex items-center gap-2">
            <div
              className={`transition-all rounded-full ${
                diagramType === step ? 'w-6 h-2 bg-blue-400' : 'w-2 h-2 bg-white/20'
              }`}
            />
            <span className={`text-[10px] uppercase tracking-wider ${
              diagramType === step ? 'text-blue-300' : 'text-white/30'
            }`}>
              {step === 'actividad' ? 'Actividad' : 'Secuencia'}
            </span>
          </div>
        ))}
      </div>

      <div className="flex-shrink-0 text-center pb-4 md:pb-6">
        <p className="text-xs text-slate-500">
          {diagramType === 'actividad'
            ? 'Presiona → para ver el Diagrama de Secuencia'
            : 'Presiona → para continuar al siguiente diagrama'}
        </p>
      </div>
    </div>
  );
}
