import { motion } from 'motion/react';
import { Lock, TrendingUp, Zap, Eye, Shield, UserPlus, Fingerprint, Network, BarChart, Search, Edit3, Files } from 'lucide-react';

export default function Slide4() {
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

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-20 py-12 lg:py-0 overflow-y-auto lg:overflow-hidden w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 mt-12 lg:mt-0 flex-shrink-0 flex flex-col items-center"
      >
        <div className="flex items-center gap-3 mb-4 lg:mb-6">
          <div className="h-1 w-8 lg:w-12 bg-blue-500" />
          <span className="text-blue-400 uppercase tracking-wider text-xs lg:text-sm font-medium">
            Requerimientos del Sistema
          </span>
          <div className="h-1 w-8 lg:w-12 bg-blue-500" />
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-2 lg:mb-3">
          Funcionales y No Funcionales
        </h2>
        <p className="text-sm lg:text-base text-slate-400 max-w-3xl">
          Dominio integral según el Acta de Constitución para satisfacer las necesidades operativas.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 max-w-6xl w-full pb-8 lg:pb-0">
        {/* Funcionales */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <div className="mb-4 flex flex-col items-center">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Requisitos Funcionales</h3>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
            {funcionales.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-colors w-full"
              >
                <div className="flex items-start gap-3 text-left">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-0.5">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-snug">{item.desc}</p>
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
          <div className="mb-4 flex flex-col items-center">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">No Funcionales</h3>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-green-500" />
          </div>

          <div className="space-y-3 w-full">
            {noFuncionales.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-colors w-full"
              >
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-0.5">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-snug">{item.desc}</p>
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
