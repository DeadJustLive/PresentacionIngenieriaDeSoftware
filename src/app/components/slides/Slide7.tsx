import { motion } from 'motion/react';
import { ArrowRight, CheckCircle } from 'lucide-react';

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
      <div className="relative h-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 text-center py-12 lg:py-0 overflow-y-auto lg:overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mt-12 lg:mt-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8 lg:mb-12"
          >
            <div className="inline-flex items-center gap-2 lg:gap-3 mb-6 lg:mb-8">
              <div className="h-1 w-8 lg:w-12 bg-blue-500" />
              <span className="text-blue-400 uppercase tracking-wider text-xs lg:text-sm font-medium">
                Objetivo de Proyecto
              </span>
              <div className="h-1 w-8 lg:w-12 bg-blue-500" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 lg:mb-8">
              Buscamos una solución:
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Controlada, Escalable y Ágil
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-8 lg:mb-12"
          >
            <p className="text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Proponemos reducir la criticidad actual de los cuellos de botella (esperas de 8-20 horas) mediante una plataforma robusta y modernizada.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="space-y-4 mb-12"
          >
            {impactos.map((impacto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="flex items-center justify-center gap-4 text-lg text-slate-300"
              >
                <ArrowRight className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <span>{impacto}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="flex items-center justify-center mt-12 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6 lg:p-8 backdrop-blur-sm max-w-2xl mx-auto shadow-[0_0_30px_rgba(59,130,246,0.1)]"
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 font-bold text-xl lg:text-3xl tracking-wide">
                Hacia una frontera digital eficiente
              </span>
              <span className="text-slate-400 text-base lg:text-lg">
                Tecnología ágil al servicio del país y su competitividad
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
        className="absolute bottom-12 left-0 right-0 flex justify-center"
      >
        <div className="flex items-center gap-8 text-slate-400 text-sm">
          <span>Propuesta Técnica Preliminar</span>
          <div className="w-px h-4 bg-slate-600" />
          <span>Abril 2026</span>
          <div className="w-px h-4 bg-slate-600" />
          <span>Equipo de Ingeniería</span>
        </div>
      </motion.div>
    </div>
  );
}
