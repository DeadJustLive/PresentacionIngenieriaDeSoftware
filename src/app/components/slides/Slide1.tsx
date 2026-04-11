import { motion } from 'motion/react';

export default function Slide1() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1526588689807-8f704850cb17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Paso Los Libertadores"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/40" />
      </div>

      {/* Contenido */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col items-center w-full"
        >
          <div className="mb-6 md:mb-8 flex items-center justify-center gap-3">
            <div className="h-1 w-12 md:w-16 bg-blue-500" />
            <span className="text-blue-400 uppercase tracking-wider text-xs md:text-sm font-medium">
              Modernización Estatal
            </span>
            <div className="h-1 w-12 md:w-16 bg-blue-500" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
            Sistema de Modernización y Automatización de Trámites Aduaneros Terrestres
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 md:mb-12 max-w-2xl leading-relaxed">
            Transformando el flujo fronterizo mediante integración digital, interoperabilidad institucional y experiencia de usuario.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col items-center gap-2 text-slate-400"
          >
            <p className="text-base md:text-lg">Equipo de Desarrollo</p>
            <p className="text-xs md:text-sm">Ingeniería de Software | Arquitectura de Sistemas | Gestión de Calidad</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute top-6 md:top-8 left-6 md:left-20 flex items-center gap-3"
      >
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <span className="text-white/60 text-[10px] md:text-xs uppercase tracking-widest hidden md:inline">Propuesta Preliminar</span>
      </motion.div>
    </div>
  );
}
