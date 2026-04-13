import { motion } from 'motion/react';
import { Award, CheckCircle, GitBranch, TrendingUp } from 'lucide-react';

export default function Slide6() {
  const qaItems = [
    {
      icon: Award,
      title: 'ISO 25010',
      subtitle: 'Modelo de calidad',
      description: 'Confiabilidad, usabilidad, seguridad, mantenibilidad y eficiencia del desempeño'
    },
    {
      icon: CheckCircle,
      title: 'UAT Aprobadas',
      subtitle: 'Validación de usuario',
      description: 'Pruebas de aceptación con usuarios reales y casos de uso críticos'
    },
    {
      icon: GitBranch,
      title: 'Control de Versiones',
      subtitle: 'Trazabilidad Git',
      description: 'Historial completo de cambios, revisión de código y gestión de releases'
    },
    {
      icon: TrendingUp,
      title: 'Mejora Continua',
      subtitle: 'Optimización',
      description: 'Retroalimentación constante, métricas de calidad y optimización progresiva'
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
          <div className="h-1 w-8 lg:w-12 bg-blue-500" />
          <span className="text-blue-400 uppercase tracking-wider text-xs lg:text-sm font-medium">
            Calidad Total
          </span>
          <div className="h-1 w-8 lg:w-12 bg-blue-500" />
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-2 lg:mb-4">
          Aseguramiento y Mejora Continua
        </h2>
        <p className="text-base lg:text-xl text-slate-400 max-w-3xl">
          Control técnico basado en estándares internacionales y prácticas de ingeniería de software
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl pb-8 lg:pb-0">
        {qaItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.15, duration: 0.7 }}
            className="relative group"
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 h-full hover:bg-white/10 transition-all hover:border-blue-500/30">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-blue-400" />
                </div>

                <div className="flex-1">
                  <div className="text-xs uppercase tracking-widest text-blue-400 mb-2">
                    {item.subtitle}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-4 right-4 w-12 h-px bg-gradient-to-r from-transparent to-blue-500/50" />
                <div className="absolute top-4 right-4 w-px h-12 bg-gradient-to-b from-transparent to-blue-500/50" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-12 max-w-6xl"
      >
        <div className="bg-gradient-to-r from-blue-950/30 via-slate-900/30 to-blue-950/30 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">Calidad como Estrategia</h4>
                <p className="text-sm text-slate-400">
                  Basado en ISO/IEC 25010 con prácticas de control continuo
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-xs text-slate-400">Cobertura QA</div>
              </div>
              <div className="w-px h-12 bg-slate-700" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs text-slate-400">Monitoreo</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
