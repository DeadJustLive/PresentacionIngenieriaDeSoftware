// @use(kind, props, deps)
// @kind(feature)
// @props({})
// @deps(motion/react, lucide-react)
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Slide7() {
  const impactos = [
    'Reducción de tiempos de espera en fronteras',
    'Mejora en la experiencia de viajeros y turistas',
    'Optimización operativa para funcionarios',
    'Interoperabilidad institucional efectiva',
    'Modernización digital del Estado chileno'
  ];

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1772375970027-514257024dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Frontera moderna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/90 to-slate-950/80" />
      </div>

      {/* Contenido */}
      <div className="relative h-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20 text-center py-4 sm:py-6 lg:py-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4 sm:mb-6 lg:mb-10"
          >
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-5 lg:mb-7">
              <div className="h-1 w-6 sm:w-8 lg:w-12 bg-blue-500" />
              <span className="text-blue-400 uppercase tracking-wider text-[10px] sm:text-xs lg:text-sm font-medium">
                Objetivo de Proyecto
              </span>
              <div className="h-1 w-6 sm:w-8 lg:w-12 bg-blue-500" />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2 sm:mb-4 lg:mb-6">
              Buscamos una solución:
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Controlada, Escalable y Eficiente
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-3 sm:mb-5 lg:mb-8"
          >
            <p className="text-sm sm:text-base lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Proponemos reducir la criticidad actual de los cuellos de botella (esperas de 8-20 horas) mediante una plataforma robusta y modernizada.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="space-y-1.5 sm:space-y-2 lg:space-y-3 mb-4 sm:mb-6"
          >
            {impactos.map((impacto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg text-slate-300"
              >
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-emerald-400 flex-shrink-0" />
                <span>{impacto}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex items-center justify-center mt-2 sm:mt-4 lg:mt-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 backdrop-blur-sm max-w-xl mx-auto shadow-[0_0_30px_rgba(59,130,246,0.1)]"
          >
            <div className="flex flex-col items-center gap-1 sm:gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 font-bold text-sm sm:text-base lg:text-xl tracking-wide">
                Hacia una frontera digital eficiente
              </span>
              <span className="text-slate-400 text-[10px] sm:text-xs lg:text-sm">
                Tecnología eficiente al servicio del país y su competitividad
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Branding inferior */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-0 right-0 flex justify-center"
      >
        <div className="flex items-center gap-2 sm:gap-4 md:gap-8 text-slate-500 text-[9px] sm:text-xs md:text-sm">
          <span>Propuesta Técnica Preliminar</span>
          <div className="w-px h-2 sm:h-3 md:h-4 bg-slate-600" />
          <span>Abril 2026</span>
          <div className="w-px h-2 sm:h-3 md:h-4 bg-slate-600" />
          <span>Equipo de Ingeniería</span>
        </div>
      </motion.div>
    </div>
  );
}