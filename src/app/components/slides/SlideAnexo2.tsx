// @use(kind, props, deps)
// @kind(feature)
// @props({})
// @deps(motion/react, lucide-react)
import { motion } from 'motion/react';
import { FileCode, Database, Users, Shield } from 'lucide-react';

export default function SlideAnexo2() {
  const componentes = [
    {
      categoria: 'Frontend',
      icon: FileCode,
      items: ['React SPA', 'Mobile responsive', 'Formularios validados', 'Dashboard operativo']
    },
    {
      categoria: 'Backend',
      icon: Database,
      items: ['API RESTful', 'Microservicios', 'Business Logic', 'Message Queue']
    },
    {
      categoria: 'Integraciones',
      icon: Users,
      items: ['API SAG', 'API PDI', 'API Argentina', 'Sistema de notificaciones']
    },
    {
      categoria: 'Seguridad',
      icon: Shield,
      items: ['OAuth 2.0', 'JWT tokens', 'Encriptación TLS', 'Auditoría completa']
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 lg:px-20 py-4 sm:py-6 lg:py-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 sm:mb-6 lg:mb-10 mt-2 sm:mt-3 flex-shrink-0 flex flex-col items-center"
      >
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-4 lg:mb-6">
          <div className="h-1 w-6 sm:w-8 lg:w-12 bg-slate-500" />
          <span className="text-slate-400 uppercase tracking-wider text-[10px] sm:text-xs lg:text-sm font-medium">
            Anexo 2 - EDT
          </span>
          <div className="h-1 w-6 sm:w-8 lg:w-12 bg-slate-500" />
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 lg:mb-4">
          Estructura de Desglose de Trabajo
        </h2>
        <p className="text-xs sm:text-sm lg:text-xl text-slate-400">
          Componentes técnicos del sistema
        </p>
      </motion.div>

      <div className="slide-card-grid grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-6 max-w-5xl w-full">
        {componentes.map((comp, index) => (
          <motion.div
            key={comp.categoria}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.7 }}
            className="slide-card bg-white/5 border border-white/10 rounded-lg sm:rounded-xl lg:rounded-2xl hover:bg-white/10 transition-colors text-left"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 lg:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                <comp.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-400" />
              </div>
              <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white">{comp.categoria}</h3>
            </div>

            <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2">
              {comp.items.map((item, i) => (
                <li key={i} className="flex items-center gap-1.5 sm:gap-2 text-slate-400 text-[10px] sm:text-xs lg:text-sm">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-3 sm:mt-4 lg:mt-6 flex justify-center flex-shrink-0"
      >
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg sm:rounded-xl px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-sm">
          <p className="text-slate-400 text-[10px] sm:text-xs lg:text-sm text-center">
            Arquitectura modular escalable con separación de responsabilidades
          </p>
        </div>
      </motion.div>
    </div>
  );
}