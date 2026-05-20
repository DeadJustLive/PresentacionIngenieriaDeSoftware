// @use(kind, limit, props, state, deps)
// @kind(feature)
// @props({})
// @state(isPositive)
// @deps(motion/react, lucide-react)
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Shield, UserCheck, Users, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function SlideBeneficiarios() {
    const beneficiarios = [
        {
            id: 'PDI',
            nombre: 'PDI',
            fullname: 'Policía de Investigaciones',
            icon: Shield,
            negative: [
                'Escasa integración entre organismos',
                'Control migratorio lento y manual'
            ],
            positive: [
                'Integración con sistemas externos',
                'Validación de identidad en tiempo real'
            ]
        },
        {
            id: 'SAG',
            nombre: 'SAG',
            fullname: 'Serv. Agrícola y Ganadero',
            icon: Leaf,
            negative: [
                'Sistemas aislados y fragmentados',
                'Dificultad en cruces de datos'
            ],
            positive: [
                'Agilización del control sanitario',
                'Interoperabilidad para importaciones'
            ]
        },
        {
            id: 'Aduanas',
            nombre: 'Aduanas',
            fullname: 'Funcionarios de Aduana',
            icon: UserCheck,
            negative: [
                'Dependencia de trámites físicos',
                'Congestión y lentitud en ventanillas'
            ],
            positive: [
                'Automatización documental',
                'Trazabilidad instantánea de cargas'
            ]
        },
        {
            id: 'Pasajeros',
            nombre: 'Pasajeros',
            fullname: 'Turistas y Transportistas',
            icon: Users,
            negative: [
                'Extensos tiempos de espera (8-20h)',
                'Incertidumbre e información nula'
            ],
            positive: [
                'Reducción drástica de espera',
                'Plataforma ágil de consulta online'
            ]
        }
    ];

    const [isPositive, setIsPositive] = useState(false);

    useEffect(() => {
        const handleCommand = (e: any) => {
            if (e.detail === 'next' && !isPositive) {
                e.preventDefault();
                setIsPositive(true);
            } else if (e.detail === 'prev' && isPositive) {
                e.preventDefault();
                setIsPositive(false);
            }
        };
        window.addEventListener('slideCommand', handleCommand);
        return () => window.removeEventListener('slideCommand', handleCommand);
    }, [isPositive]);

    return (
        <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden text-center py-4 sm:py-6 lg:py-0">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-3 sm:mb-4 lg:mb-6 mt-2 sm:mt-3 lg:mt-0 flex-shrink-0"
            >
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3 lg:mb-5">
                    <div className="h-1 w-6 sm:w-8 lg:w-12 bg-blue-500" />
                    <span className="text-blue-400 uppercase tracking-wider text-[10px] sm:text-xs lg:text-sm font-medium">
                        Beneficiarios del Sistema ({isPositive ? 'Situación Proyectada' : 'Problemática Actual'})
                    </span>
                    <div className="h-1 w-6 sm:w-8 lg:w-12 bg-blue-500" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 transition-all">
                    Impacto y Transformación
                </h2>
                <p className="text-xs sm:text-sm lg:text-base text-slate-400">
                    Superando las limitantes actuales a través de la modernización
                </p>
            </motion.div>

            <div className="flex-1 min-h-0 flex items-center justify-center w-full max-w-6xl mx-auto">
                <div className="slide-card-grid grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 w-full">
                {beneficiarios.map((bene, index) => (
                    <motion.div
                        key={bene.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className={`slide-card flex flex-col relative bg-slate-900/40 backdrop-blur-md rounded-lg sm:rounded-xl lg:rounded-2xl border-2 transition-all duration-700 text-left
                            ${!isPositive
                                ? 'border-rose-500/20 hover:border-rose-500/40 shadow-[0_0_30px_rgba(225,29,72,0.05)]'
                                : 'border-emerald-500/20 hover:border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.05)]'
                            }
                        `}
                    >
                        <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <div className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-11 lg:h-11 rounded-lg flex flex-shrink-0 items-center justify-center transition-colors duration-700 text-sm sm:text-base
                                ${!isPositive ? 'bg-rose-500/20 text-rose-400' : 'bg-emerald-500/20 text-emerald-400'}`
                            }>
                                <bene.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white leading-tight">{bene.nombre}</h3>
                                <p className="text-[9px] sm:text-[10px] lg:text-xs text-slate-400 leading-tight truncate">{bene.fullname}</p>
                            </div>
                        </div>

                        <div className="relative flex-1 min-h-0 w-full border-t border-white/5 pt-2 sm:pt-3">
                            <AnimatePresence mode="wait">
                                {!isPositive ? (
                                    <motion.div
                                        key="negative"
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 15 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col gap-1.5 sm:gap-2"
                                    >
                                        {bene.negative.map((item, i) => (
                                            <div key={i} className="flex gap-1.5 items-start">
                                                <AlertTriangle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-400 flex-shrink-0 mt-0.5" />
                                                <p className="text-[10px] sm:text-xs lg:text-sm text-slate-300 leading-relaxed font-light">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="positive"
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 15 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col gap-1.5 sm:gap-2"
                                    >
                                        {bene.positive.map((item, i) => (
                                            <div key={i} className="flex gap-1.5 items-start">
                                                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                <p className="text-[10px] sm:text-xs lg:text-sm text-slate-300 leading-relaxed font-light">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                ))}
                </div>
            </div>
        </div>
    );
}