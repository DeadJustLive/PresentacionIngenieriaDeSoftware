import { motion } from 'motion/react';
import { Smartphone, Car, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function SlideFlujo() {
    const steps = [
        {
            icon: Smartphone,
            title: "1. Pre-digitación Online",
            desc: "Ciudadano completa formularios, declaraciones e información básica de forma anticipada desde la plataforma web o móvil.",
            bg: "bg-blue-500/10", border: "border-blue-500/20", hoverBg: "group-hover:bg-blue-500/20", hoverBorder: "group-hover:border-blue-400/30", text: "text-blue-400"
        },
        {
            icon: Car,
            title: "2. Llegada a la Frontera",
            desc: "Validación ágil mediante escaneo rápido (Código QR y Patente) al presentarse en el complejo fronterizo.",
            bg: "bg-cyan-500/10", border: "border-cyan-500/20", hoverBg: "group-hover:bg-cyan-500/20", hoverBorder: "group-hover:border-cyan-400/30", text: "text-cyan-400"
        },
        {
            icon: ShieldCheck,
            title: "3. Interoperabilidad",
            desc: "El sistema cruza datos en tiempo real con bases del SAG, PDI y entidades aduaneras vecinas.",
            bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20", hoverBg: "group-hover:bg-fuchsia-500/20", hoverBorder: "group-hover:border-fuchsia-400/30", text: "text-fuchsia-400"
        },
        {
            icon: CheckCircle2,
            title: "4. Aprobación y Cruce",
            desc: "Validación exitosa sin necesidad de filas físicas, reduciendo el proceso a solo minutos.",
            bg: "bg-emerald-500/10", border: "border-emerald-500/20", hoverBg: "group-hover:bg-emerald-500/20", hoverBorder: "group-hover:border-emerald-400/30", text: "text-emerald-400"
        }
    ];

    return (
        <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 py-12 lg:py-0 overflow-y-auto lg:overflow-hidden text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 lg:mb-16 mt-8 lg:mt-0 flex-shrink-0 flex flex-col items-center"
            >
                <div className="flex items-center justify-center gap-3 mb-4 lg:mb-6">
                    <div className="h-1 w-8 lg:w-12 bg-blue-500" />
                    <span className="text-blue-400 uppercase tracking-wider text-xs lg:text-sm font-medium">
                        Flujo de Operación
                    </span>
                    <div className="h-1 w-8 lg:w-12 bg-blue-500" />
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-2 lg:mb-4">
                    Viaje del Usuario Integrado
                </h2>
                <p className="text-base lg:text-xl text-slate-400 max-w-3xl">
                    Automatizando el proceso paso a paso para erradicar tiempos muertos y centralizar el control.
                </p>
            </motion.div>

            <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2 pb-8 lg:pb-0 relative">
                {/* Línea conectora de fondo para desktop */}
                <div className="hidden lg:block absolute top-[4rem] left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-emerald-500/20 -z-10" />

                {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <div key={index} className="flex flex-col lg:flex-row items-center w-full lg:w-1/4 relative">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                                className="flex flex-col items-center text-center px-2 group"
                            >
                                <div className={`w-20 h-20 lg:w-28 lg:h-28 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center mb-6 group-hover:scale-105 ${step.hoverBg} transition-all duration-300 relative`}>
                                    {/* Círculo decorativo exterior */}
                                    <div className={`absolute inset-0 rounded-2xl border-2 border-transparent ${step.hoverBorder} blur-[2px] transition-all duration-300`} />
                                    <Icon className={`w-10 h-10 lg:w-12 lg:h-12 ${step.text}`} />
                                </div>

                                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 min-h-[3rem] lg:min-h-[4rem] flex items-center">
                                    {step.title}
                                </h3>

                                <p className="text-sm lg:text-base text-slate-400 leading-relaxed max-w-[250px]">
                                    {step.desc}
                                </p>
                            </motion.div>

                            {/* Flecha conectora para desktop */}
                            {index < steps.length - 1 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 + index * 0.15, duration: 0.4 }}
                                    className="hidden lg:flex items-center justify-center text-slate-600 absolute -right-6 top-10"
                                >
                                    <ArrowRight className="w-8 h-8" />
                                </motion.div>
                            )}

                            {/* Flecha conectora para móvil */}
                            {index < steps.length - 1 && (
                                <div className="lg:hidden text-slate-600 my-4 transform rotate-90">
                                    <ArrowRight className="w-6 h-6" />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mt-12 flex justify-center"
            >
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl px-8 py-3 backdrop-blur-sm">
                    <p className="text-slate-400 text-sm">
                        Integración orientada a resolver las <span className="text-blue-400 font-semibold">esperas de 8-20 horas</span> históricas.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
