import { motion } from 'motion/react';
import { Globe, Server, Shield, Zap } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-20 overflow-y-auto overflow-x-hidden pt-20 lg:pt-0 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 lg:mb-16 mt-4 lg:mt-0 flex-shrink-0 flex flex-col items-center"
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

      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto w-full gap-4 lg:gap-0 pb-12 lg:pb-0">
        {/* Portal Web/Móvil */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm flex items-center justify-center mb-2 lg:mb-4">
            <Globe className="w-10 h-10 lg:w-16 lg:h-16 text-blue-400" />
          </div>
          <h3 className="text-lg lg:text-xl font-bold text-white mb-1 lg:mb-2">Portal Web/Móvil</h3>
          <p className="text-xs lg:text-sm text-slate-400 text-center max-w-xs">
            Pre-digitación para ciudadanos y turistas
          </p>
        </motion.div>

        {/* Conectores */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4 my-2 lg:my-0"
        >
          <Zap className="w-6 h-6 lg:w-8 lg:h-8 text-cyan-400 animate-pulse lg:-rotate-90 hidden lg:block" />
          <div className="w-px h-8 lg:h-px lg:w-24 bg-gradient-to-b lg:bg-gradient-to-r from-cyan-500 to-blue-500" />
          <Zap className="w-6 h-6 lg:w-8 lg:h-8 text-cyan-400 animate-pulse lg:rotate-90 hidden lg:block" />
        </motion.div>

        {/* Backend Central */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-2 border-blue-500/50 backdrop-blur-sm flex items-center justify-center mb-2 lg:mb-4 relative">
            <Server className="w-14 h-14 lg:w-20 lg:h-20 text-blue-400" />
            <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-green-500 border-2 border-slate-950 flex items-center justify-center">
              <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white animate-pulse" />
            </div>
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 lg:mb-2">Servicios Cloud</h3>
          <p className="text-xs lg:text-sm text-slate-400 text-center max-w-xs">
            Gestión y lógica de negocio. Diseñado bajo el Modelo 4+1 y diagramado en UML.
          </p>
        </motion.div>

        {/* Conectores */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4 my-2 lg:my-0"
        >
          <Zap className="w-6 h-6 lg:w-8 lg:h-8 text-cyan-400 animate-pulse lg:-rotate-90 hidden lg:block" />
          <div className="w-px h-8 lg:h-px lg:w-24 bg-gradient-to-b lg:bg-gradient-to-r from-blue-500 to-cyan-500" />
          <Zap className="w-6 h-6 lg:w-8 lg:h-8 text-cyan-400 animate-pulse lg:rotate-90 hidden lg:block" />
        </motion.div>

        {/* APIs Externas */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30 backdrop-blur-sm flex items-center justify-center mb-2 lg:mb-4">
            <Shield className="w-10 h-10 lg:w-16 lg:h-16 text-emerald-400" />
          </div>
          <h3 className="text-lg lg:text-xl font-bold text-white mb-1 lg:mb-2">APIs Externas</h3>
          <p className="text-xs lg:text-sm text-slate-400 text-center max-w-xs">
            SAG, PDI, Argentina
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-16 flex justify-center"
      >
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl px-6 py-3 backdrop-blur-sm">
          <p className="text-slate-400 text-sm">
            <span className="text-cyan-400 font-semibold">Flujo de datos bidireccional</span> con validación en tiempo real
          </p>
        </div>
      </motion.div>
    </div>
  );
}
