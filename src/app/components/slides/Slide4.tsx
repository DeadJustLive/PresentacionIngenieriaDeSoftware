import { motion } from 'motion/react';
import { Users, Car, Lock, TrendingUp, Zap, Eye } from 'lucide-react';

export default function Slide4() {
  const funcionales = [
    { icon: Users, title: 'Registro de Menores', desc: 'Autorización parental digital' },
    { icon: Car, title: 'Registro de Vehículos', desc: 'Documentación vehicular integrada' }
  ];

  const noFuncionales = [
    { icon: Lock, title: 'Seguridad', desc: 'Encriptación y protección de datos sensibles' },
    { icon: TrendingUp, title: 'Escalabilidad', desc: 'Soporte para alta concurrencia en periodos críticos' },
    { icon: Zap, title: 'Disponibilidad', desc: 'Sistema operativo 24/7 con tolerancia a fallos' },
    { icon: Eye, title: 'Confidencialidad', desc: 'Control de acceso y auditoría completa' }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-20 py-12 lg:py-0 overflow-y-auto lg:overflow-hidden w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 lg:mb-12 mt-8 lg:mt-0 flex-shrink-0 flex flex-col items-center"
      >
        <div className="flex items-center gap-3 mb-4 lg:mb-6">
          <div className="h-1 w-8 lg:w-12 bg-blue-500" />
          <span className="text-blue-400 uppercase tracking-wider text-xs lg:text-sm font-medium">
            Requerimientos Críticos
          </span>
          <div className="h-1 w-8 lg:w-12 bg-blue-500" />
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-2 lg:mb-4">
          Funcionales y No Funcionales
        </h2>
        <p className="text-base lg:text-xl text-slate-400 max-w-3xl">
          Dominio completo de las necesidades operativas y atributos de calidad del sistema
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl w-full pb-8 lg:pb-0">
        {/* Funcionales */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <div className="mb-6 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-white mb-2">Requisitos Funcionales</h3>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500" />
          </div>

          <div className="space-y-4 w-full">
            {funcionales.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors w-full"
              >
                <div className="flex items-start gap-4 text-left">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* No Funcionales */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <div className="mb-6 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-white mb-2">Requisitos No Funcionales</h3>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-green-500" />
          </div>

          <div className="space-y-4 w-full">
            {noFuncionales.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors w-full"
              >
                <div className="flex items-start gap-4 text-left">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="mt-10 flex justify-center"
      >
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl px-8 py-4 backdrop-blur-sm">
          <p className="text-slate-300 text-center">
            Sistema crítico que debe <span className="text-blue-400 font-semibold">proteger datos sensibles</span> y <span className="text-emerald-400 font-semibold">mantenerse disponible</span> en periodos de alta demanda
          </p>
        </div>
      </motion.div>
    </div>
  );
}
