// @use(kind, props, deps)
// @kind(feature)
// @props({})
// @deps(motion/react, lucide-react)
import { motion } from 'motion/react';
import { Smartphone, CheckCircle, LayoutDashboard, Fingerprint } from 'lucide-react';

export default function Slide5() {
  const mejoras = [
    {
      title: "Pre-digitación Móvil",
      desc: "Autogestión ciudadana. Permite adelantar datos desde cualquier smartphone, evitando demoras de captura física.",
      icon: Smartphone,
      bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400"
    },
    {
      title: "Validación en Origen",
      desc: "Notificaciones y chequeos automáticos en tiempo real que previenen rechazos o errores en ventanilla.",
      icon: CheckCircle,
      bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400"
    },
    {
      title: "Reducción de Carga Cognitiva",
      desc: "Dashboard unificado para el funcionario. Presenta solo la información crítica para tomar decisiones rápidas.",
      icon: LayoutDashboard,
      bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-400"
    },
    {
      title: "Accesibilidad e Identidad",
      desc: "Interfaces bajo estándares WCAG, alto contraste, y preparados para integración con biometría futura.",
      icon: Fingerprint,
      bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400"
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-blue-950/10 to-slate-950 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 lg:px-20 py-4 sm:py-6 lg:py-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 sm:mb-6 lg:mb-8 flex-shrink-0 flex flex-col items-center"
      >
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-4 lg:mb-6">
          <div className="h-1 w-6 sm:w-8 lg:w-12 bg-blue-500" />
          <span className="text-blue-400 uppercase tracking-wider text-[10px] sm:text-xs lg:text-sm font-medium">
            Prototipo y Usabilidad
          </span>
          <div className="h-1 w-6 sm:w-8 lg:w-12 bg-blue-500" />
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 lg:mb-3">
          Diseño Centrado en Usuario
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-slate-400 max-w-3xl">
          Reducir errores humanos y facilitar la experiencia en ventanilla mediante interfaces claras y accesibles
        </p>
      </motion.div>

      <div className="flex-1 min-h-0 flex items-center justify-center w-full max-w-5xl mx-auto">
        <div className="slide-card-grid grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-5 w-full">
          {mejoras.map((mejora, index) => {
            const Icon = mejora.icon;
            return (
              <motion.div
                key={mejora.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="slide-card flex flex-col bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <div className={`slide-card-icon rounded-lg sm:rounded-xl ${mejora.bg} border ${mejora.border} flex items-center justify-center mb-2 sm:mb-3`}>
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 ${mejora.text}`} />
                </div>
                <h3 className="text-sm sm:text-base lg:text-xl font-bold text-white mb-1 sm:mb-2 tracking-wide">{mejora.title}</h3>
                <p className="text-slate-400 text-[10px] sm:text-xs lg:text-sm leading-relaxed">
                  {mejora.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}