import { motion } from 'motion/react';
import { Database, Zap, ShieldCheck } from 'lucide-react';

export default function SlideCronogramaFases() {
    const fases = [
        {
            fase: 'Fase 1',
            semanas: 'Semanas 1 a 3',
            titulo: 'Levantamiento y Base de Datos',
            desc: 'Levantamiento de requisitos detallado y modelo de base de datos finalizado.',
            icon: Database,
            border: 'border-blue-500/20', hoverBorder: 'hover:border-blue-500/50', bgTop: 'bg-blue-500/40', bgIcon: 'bg-blue-500/10', text: 'text-blue-400', number: 'text-blue-500/20'
        },
        {
            fase: 'Fase 2',
            semanas: 'Semanas 4 a 10',
            titulo: 'Desarrollo e Integración',
            desc: 'Desarrollo de los módulos del sistema e integración con servicios externos (SAG, PDI, etc.).',
            icon: Zap,
            border: 'border-cyan-500/20', hoverBorder: 'hover:border-cyan-500/50', bgTop: 'bg-cyan-500/40', bgIcon: 'bg-cyan-500/10', text: 'text-cyan-400', number: 'text-cyan-500/20'
        },
        {
            fase: 'Fase 3',
            semanas: 'Semanas 11 a 12',
            titulo: 'Pruebas y Entrega',
            desc: 'Pruebas de calidad del sistema y entrega del producto final validado.',
            icon: ShieldCheck,
            border: 'border-emerald-500/20', hoverBorder: 'hover:border-emerald-500/50', bgTop: 'bg-emerald-500/40', bgIcon: 'bg-emerald-500/10', text: 'text-emerald-400', number: 'text-emerald-500/20'
        }
    ];

    return (
        <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 overflow-y-auto lg:overflow-hidden text-center py-12 lg:py-0 w-full">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 lg:mb-16 mt-8 lg:mt-0 flex-shrink-0 flex flex-col items-center"
            >
                <div className="flex items-center justify-center gap-3 mb-4 lg:mb-6">
                    <div className="h-1 w-8 lg:w-12 bg-slate-500" />
                    <span className="text-slate-400 uppercase tracking-wider text-xs lg:text-sm font-medium">
                        Opción B - Cronograma por Fases (Objetivo)
                    </span>
                    <div className="h-1 w-8 lg:w-12 bg-slate-500" />
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-2 lg:mb-4">
                    Tiempos de Desarrollo
                </h2>
                <p className="text-base lg:text-xl text-slate-400 max-w-3xl">
                    Macro-planificación en 3 meses (Desviación máxima permitida: 10%)
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl pb-8 lg:pb-0">
                {fases.map((fase, index) => {
                    const Icon = fase.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                            className={`flex flex-col bg-slate-900/50 backdrop-blur-md rounded-3xl p-8 border-2 ${fase.border} ${fase.hoverBorder} transition-colors duration-500 text-left relative overflow-hidden`}
                        >
                            {/* Decorative line */}
                            <div className={`absolute top-0 left-0 w-full h-1 ${fase.bgTop}`} />

                            <div className="flex items-center justify-between mb-8">
                                <span className="inline-block px-4 py-1.5 bg-white/5 rounded-full text-sm font-mono text-slate-300">
                                    {fase.semanas}
                                </span>
                                <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">
                                    {fase.fase}
                                </div>
                            </div>

                            <div className={`w-16 h-16 rounded-2xl ${fase.bgIcon} flex flex-shrink-0 items-center justify-center mb-6`}>
                                <Icon className={`w-8 h-8 ${fase.text}`} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{fase.titulo}</h3>
                            <p className="text-slate-400 text-base leading-relaxed flex-1">
                                {fase.desc}
                            </p>

                            {/* Step Indicator background */}
                            <div className={`absolute -bottom-16 -right-10 text-[18rem] leading-none font-black ${fase.number}`}>
                                {index + 1}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mt-12 flex justify-center w-full max-w-6xl"
            >
                <div className="w-full flex items-center justify-between text-slate-500 text-sm font-mono uppercase px-4">
                    <span>Inicio: Semana 1</span>
                    <span>Progreso Total: 3 meses</span>
                    <span>Término: Semana 12</span>
                </div>
            </motion.div>
        </div>
    );
}
