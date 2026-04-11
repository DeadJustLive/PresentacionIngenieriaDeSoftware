import { motion } from 'motion/react';
import { Smartphone, CheckCircle, LayoutDashboard, Fingerprint } from 'lucide-react';

export default function Slide5() {
  const mejoras = [
    {
      title: "Pre-digitación Móvil",
      desc: "Autogestión ciudadana. Permite adelantar datos desde cualquier smartphone, evitando demoras de captura física.",
      icon: Smartphone,
      color: "blue"
    },
    {
      title: "Validación en Origen",
      desc: "Notificaciones y chequeos automáticos en tiempo real que previenen rechazos o errores en ventanilla.",
      icon: CheckCircle,
      color: "emerald"
    },
    {
      title: "Reducción de Carga Cognitiva",
      desc: "Dashboard unificado para el funcionario. Presenta solo la información crítica para tomar decisiones rápidas.",
      icon: LayoutDashboard,
      color: "purple"
    },
    {
      title: "Accesibilidad e Identidad",
      desc: "Interfaces bajo estándares WCAG, alto contraste, y preparados para integración con biometría futura.",
      icon: Fingerprint,
      color: "cyan"
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-blue-950/10 to-slate-950 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-20 py-12 lg:py-0 overflow-y-auto lg:overflow-hidden w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 lg:mb-12 mt-8 lg:mt-0 flex-shrink-0 flex flex-col items-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4 lg:mb-6">
          <div className="h-1 w-8 lg:w-12 bg-blue-500" />
          <span className="text-blue-400 uppercase tracking-wider text-xs lg:text-sm font-medium">
            Prototipo y Usabilidad
          </span>
          <div className="h-1 w-8 lg:w-12 bg-blue-500" />
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-2 lg:mb-4">
          Diseño Centrado en Usuario
        </h2>
        <p className="text-base lg:text-xl text-slate-400 max-w-3xl">
          Reducir errores humanos y facilitar la experiencia en ventanilla mediante interfaces claras y accesibles
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl pb-8 lg:pb-0 w-full text-left">
        {mejoras.map((mejora, index) => {
          const Icon = mejora.icon;
          return (
            <motion.div
              key={mejora.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-${mejora.color}-500/10 border border-${mejora.color}-500/20 flex items-center justify-center mb-6`}>
                <Icon className={`w-7 h-7 lg:w-8 lg:h-8 text-${mejora.color}-400`} />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 tracking-wide">{mejora.title}</h3>
              <p className="text-slate-400 text-sm lg:text-base leading-relaxed">
                {mejora.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
