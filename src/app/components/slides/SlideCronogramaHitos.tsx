import { motion } from 'motion/react';
import { Flag, Search, Layers, Code, TestTube, Rocket } from 'lucide-react';

export default function SlideCronogramaHitos() {
    const hitos = [
        {
            icon: Flag,
            nombre: 'Inicio proyecto',
            fecha: 'Semana 1',
            text: 'text-blue-400'
        },
        {
            icon: Search,
            nombre: 'Levantamiento de requisitos',
            fecha: 'Semana 1-3',
            text: 'text-violet-400'
        },
        {
            icon: Layers,
            nombre: 'Diseño lógico y arquitectura',
            fecha: 'Semana 4-5',
            text: 'text-cyan-400'
        },
        {
            icon: Code,
            nombre: 'Desarrollo',
            fecha: 'Semana 6-10',
            text: 'text-emerald-400'
        },
        {
            icon: TestTube,
            nombre: 'Pruebas',
            fecha: 'Semana 11',
            text: 'text-amber-400'
        },
        {
            icon: Rocket,
            nombre: 'Implementación',
            fecha: 'Semana 12',
            text: 'text-rose-400'
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
                        Opción A - Cronograma de Hitos Principales
                    </span>
                    <div className="h-1 w-8 lg:w-12 bg-slate-500" />
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-2 lg:mb-4">
                    Hitos del Proyecto
                </h2>
                <p className="text-base lg:text-xl text-slate-400 max-w-3xl">
                    Desglose en 6 etapas clave de desarrollo (Ref. Acta de Constitución)
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl pb-8 lg:pb-0">
                {hitos.map((hito, index) => {
                    const Icon = hito.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col relative group overflow-hidden"
                        >
                            {/* Decorative gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="flex items-center gap-4 mb-4 z-10">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-slate-800 border`}>
                                    <Icon className={`w-6 h-6 ${hito.text}`} />
                                </div>
                                <div className="text-left">
                                    <div className={`text-xs font-mono uppercase tracking-widest ${hito.text} mb-1`}>
                                        {hito.fecha}
                                    </div>
                                    <h3 className="text-lg lg:text-xl font-bold text-white leading-tight">
                                        {hito.nombre}
                                    </h3>
                                </div>
                            </div>

                            {/* Timeline Node effect */}
                            <div className="absolute -bottom-4 -right-4 text-[10rem] font-bold text-white/20 leading-none z-0">
                                {index + 1}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Timeline base bar */}
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="w-full max-w-6xl h-2 mt-8 rounded-full bg-gradient-to-r from-blue-500 via-emerald-500 to-rose-500 hidden lg:block"
            />
        </div>
    );
}
