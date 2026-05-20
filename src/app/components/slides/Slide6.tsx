// @use(kind, props, deps)
// @kind(feature)
// @props({})
// @deps(motion/react, lucide-react)
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
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 lg:px-20 py-4 sm:py-6 lg:py-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 sm:mb-6 lg:mb-8 flex-shrink-0 flex flex-col items-center"
      >
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-4 lg:mb-6">
          <div className="h-1 w-6 sm:w-8 lg:w-12 bg-blue-500" />
          <span className="text-blue-400 uppercase tracking-wider text-[10px] sm:text-xs lg:text-sm font-medium">
            Calidad Total
          </span>
          <div className="h-1 w-6 sm:w-8 lg:w-12 bg-blue-500" />
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 lg:mb-3">
          Aseguramiento y Mejora Continua
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-slate-400 max-w-3xl">
          Control técnico basado en estándares internacionales y prácticas de ingeniería de software
        </p>
      </motion.div>

      <div className="flex-1 min-h-0 flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
        <div className="slide-card-grid grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-5 w-full mb-3 sm:mb-4">
          {qaItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.7 }}
              className="slide-card relative group bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all hover:border-blue-500/30"
            >
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-5">
                <div className="slide-card-icon rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-blue-400" />
                </div>

                <div className="flex-1 text-left min-w-0">
                  <div className="text-[9px] sm:text-[10px] lg:text-xs uppercase tracking-widest text-blue-400 mb-0.5 sm:mb-1">
                    {item.subtitle}
                  </div>

                  <h3 className="text-sm sm:text-base lg:text-xl font-bold text-white mb-1 sm:mb-2">
                    {item.title}
                  </h3>

                  <p className="text-[10px] sm:text-xs lg:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="w-full max-w-5xl mt-auto"
        >
          <div className="bg-gradient-to-r from-blue-950/30 via-slate-900/30 to-blue-950/30 border border-blue-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-3 text-left">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base lg:text-xl font-bold text-white mb-0.5">Calidad como Estrategia</h4>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-slate-400">
                    Basado en ISO/IEC 25010 con prácticas de control continuo
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-0.5">100%</div>
                  <div className="text-[9px] sm:text-[10px] lg:text-xs text-slate-400 uppercase tracking-wider">Cobertura QA</div>
                </div>
                <div className="w-px h-6 sm:h-8 lg:h-10 bg-slate-700" />
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-0.5">24/7</div>
                  <div className="text-[9px] sm:text-[10px] lg:text-xs text-slate-400 uppercase tracking-wider">Monitoreo</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}