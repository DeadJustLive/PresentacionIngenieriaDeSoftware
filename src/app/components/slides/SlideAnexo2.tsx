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
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-20 py-12 lg:py-0 overflow-y-auto lg:overflow-hidden w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 lg:mb-12 mt-8 lg:mt-0 flex-shrink-0 flex flex-col items-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4 lg:mb-6">
          <div className="h-1 w-8 lg:w-12 bg-slate-500" />
          <span className="text-slate-400 uppercase tracking-wider text-xs lg:text-sm font-medium">
            Anexo 2 - EDT
          </span>
          <div className="h-1 w-8 lg:w-12 bg-slate-500" />
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-2 lg:mb-4">
          Estructura de Desglose de Trabajo
        </h2>
        <p className="text-base lg:text-xl text-slate-400">
          Componentes técnicos del sistema
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl pb-8 lg:pb-0">
        {componentes.map((comp, index) => (
          <motion.div
            key={comp.categoria}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.7 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <comp.icon className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">{comp.categoria}</h3>
            </div>

            <ul className="space-y-3">
              {comp.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
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
        className="mt-12 flex justify-center"
      >
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl px-8 py-4 backdrop-blur-sm">
          <p className="text-slate-400 text-center">
            Arquitectura modular escalable con separación de responsabilidades
          </p>
        </div>
      </motion.div>
    </div>
  );
}
