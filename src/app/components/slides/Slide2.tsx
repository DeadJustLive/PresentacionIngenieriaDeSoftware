import { motion } from 'motion/react';
import { Calendar, DollarSign, Target } from 'lucide-react';

export default function Slide2() {
  const planItems = [
    {
      icon: Target,
      label: 'Alcance (Fijo)',
      title: 'Definido al Inicio',
      description: 'Requisitos cerrados y exhaustivos, exigido al ser Aduanas una entidad gubernamental',
      color: 'blue'
    },
    {
      icon: Calendar,
      label: 'Tiempo',
      title: '12 Semanas',
      description: 'Ejecución secuencial y estructurada, controlada mediante Carta Gantt y EDT',
      color: 'cyan'
    },
    {
      icon: DollarSign,
      label: 'Costo',
      title: '$30.000.000 CLP',
      description: 'Presupuesto cerrado sin desviaciones, con monitoreo continuo de hitos',
      color: 'red'
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-20 overflow-y-auto lg:overflow-hidden py-12 lg:py-0 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 lg:mb-16 mt-8 lg:mt-0 flex flex-col items-center"
      >
        <div className="flex items-center gap-3 mb-4 lg:mb-6">
          <div className="h-1 w-8 lg:w-12 bg-blue-500" />
          <span className="text-blue-400 uppercase tracking-wider text-xs lg:text-sm font-medium">
            Plan Maestro (Enfoque Predictivo)
          </span>
          <div className="h-1 w-8 lg:w-12 bg-blue-500" />
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-2 lg:mb-4">
          Triple Restricción Tradicional
        </h2>
        <p className="text-base lg:text-xl text-slate-400 max-w-3xl">
          Gestión basada en Metodología Tradicional (Cascada) asegurando previsibilidad técnica
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl">
        {planItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.15, duration: 0.7 }}
            className="relative"
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 h-full hover:bg-white/10 transition-colors flex flex-col items-center text-center">
              <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center justify-center mb-4 lg:mb-6`}>
                <item.icon className={`w-6 h-6 lg:w-7 lg:h-7 text-${item.color}-400`} />
              </div>

              <div className="text-[10px] lg:text-xs uppercase tracking-widest text-slate-500 mb-2">
                {item.label}
              </div>

              <h3 className="text-xl lg:text-3xl font-bold text-white mb-2 lg:mb-4">
                {item.title}
              </h3>

              <p className="text-sm lg:text-base text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-12 flex items-center gap-4"
      >
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        <span className="text-slate-500 text-sm">Flujo Secuencial: Requisitos ➔ Análisis ➔ Diseño ➔ Desarrollo ➔ Pruebas</span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </motion.div>
    </div>
  );
}
