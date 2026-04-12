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
            negative: 'Escasa integración entre organismos, lo que genera un control migratorio lento.',
            positive: 'Integración con sistemas externos para validar identidades en tiempo real.'
        },
        {
            id: 'SAG',
            nombre: 'SAG',
            fullname: 'Servicio Agrícola y Ganadero',
            icon: Leaf,
            negative: 'Sistemas aislados, lo que dificulta el cruce de datos.',
            positive: 'Agilización del control sanitario y agricultura mediante interoperabilidad.'
        },
        {
            id: 'Aduanas',
            nombre: 'Aduanas',
            fullname: 'Funcionarios de Aduana',
            icon: UserCheck,
            negative: 'Alta dependencia de trámites manuales y presenciales, lentitud en ventanilla.',
            positive: 'Automatización documental y validación instantánea de vehículos y personas.'
        },
        {
            id: 'Pasajeros',
            nombre: 'Pasajeros',
            fullname: 'Turistas y Pasajeros',
            icon: Users,
            negative: 'Extensos tiempos de espera (8 a 20 horas) y falta de información previa.',
            positive: 'Reducción drástica de espera, plataforma de pre-digitación y consulta online.'
        }
    ];

    const totalSteps = beneficiarios.length * 2;
    const [step, setStep] = useState(0);

    useEffect(() => {
        const handleCommand = (e: any) => {
            if (e.detail === 'next' && step < totalSteps - 1) {
                e.preventDefault();
                setStep(s => s + 1);
            } else if (e.detail === 'prev' && step > 0) {
                e.preventDefault();
                setStep(s => s - 1);
            }
        };
        window.addEventListener('slideCommand', handleCommand);
        return () => window.removeEventListener('slideCommand', handleCommand);
    }, [step, totalSteps]);

    const currentIndex = Math.floor(step / 2);
    const isPositive = step % 2 === 1;

    return (
        <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 overflow-hidden text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 lg:mb-16"
            >
                <div className="flex items-center justify-center gap-3 mb-4 lg:mb-6">
                    <div className="h-1 w-8 lg:w-12 bg-blue-500" />
                    <span className="text-blue-400 uppercase tracking-wider text-xs lg:text-sm font-medium">
                        Beneficiarios del Sistema ({currentIndex + 1} de {beneficiarios.length})
                    </span>
                    <div className="h-1 w-8 lg:w-12 bg-blue-500" />
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-2 lg:mb-4 transition-all">
                    Impacto y Transformación
                </h2>
                <p className="text-base lg:text-xl text-slate-400">
                    Superando las limitantes actuales a través de la modernización
                </p>
            </motion.div>

            {/* Contenedor del Carrousel Horizontal */}
            <div className="relative w-full h-[400px] lg:h-[450px] flex items-center justify-center perspective-[1000px]">
                {beneficiarios.map((bene, index) => {
                    const offset = index - currentIndex;

                    return (
                        <motion.div
                            key={bene.id}
                            initial={false}
                            animate={{
                                x: offset * (window.innerWidth < 768 ? 200 : 340),
                                scale: offset === 0 ? 1 : 0.7,
                                opacity: offset === 0 ? 1 : 0.4,
                                zIndex: 10 - Math.abs(offset),
                                filter: offset === 0 ? 'blur(0px)' : 'blur(2px)',
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className={`absolute flex flex-col items-center w-[280px] lg:w-[380px] ${offset === 0 ? '' : 'pointer-events-none'}`}
                        >
                            <div className="flex flex-col items-center justify-center w-full relative">
                                <div className={`w-24 h-24 lg:w-28 lg:h-28 rounded-3xl border-2 flex flex-shrink-0 items-center justify-center transition-all duration-500 z-10 ${offset === 0
                                        ? isPositive ? 'bg-emerald-900/80 border-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.4)]' : 'bg-rose-900/80 border-rose-500 shadow-[0_0_40px_rgba(225,29,72,0.4)]'
                                        : 'bg-slate-950/80 border-slate-700/50 grayscale'
                                    }`}>
                                    <bene.icon className={`w-12 h-12 lg:w-14 lg:h-14 transition-colors ${offset === 0
                                            ? isPositive ? 'text-emerald-400' : 'text-rose-400'
                                            : 'text-slate-500'
                                        }`} />
                                </div>

                                {index < beneficiarios.length - 1 && (
                                    <div className={`absolute top-1/2 left-[50%] w-[200px] lg:w-[340px] h-1 -translate-y-1/2 -z-10 transition-colors ${currentIndex > index ? 'bg-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.3)]' : 'bg-slate-800'}`} />
                                )}
                            </div>

                            {/* Contenido Dinámico */}
                            <motion.div
                                animate={{
                                    opacity: offset === 0 ? 1 : 0,
                                    y: offset === 0 ? 0 : 20
                                }}
                                className="mt-8 text-center bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8 w-full h-[220px] lg:h-[240px] shadow-2xl flex flex-col items-center justify-center relative overflow-hidden"
                            >
                                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{bene.nombre}</h3>
                                <p className="text-sm text-slate-400 mb-6">{bene.fullname}</p>

                                <AnimatePresence mode="wait">
                                    {!isPositive ? (
                                        <motion.div
                                            key="negative"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="flex flex-col items-center flex-1 w-full"
                                        >
                                            <AlertTriangle className="w-8 h-8 text-rose-400 mb-3 flex-shrink-0" />
                                            <p className="text-sm lg:text-base text-rose-200/80 leading-relaxed max-w-[90%]">
                                                {bene.negative}
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="positive"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="flex flex-col items-center flex-1 w-full"
                                        >
                                            <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-3 flex-shrink-0" />
                                            <p className="text-sm lg:text-base text-emerald-200/80 leading-relaxed max-w-[90%]">
                                                {bene.positive}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
