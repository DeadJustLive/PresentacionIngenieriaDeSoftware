import { motion } from 'motion/react';

export default function Slide0() {
    return (
        <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-20 relative overflow-hidden">
            {/* Background animated gradients */}
            <motion.div
                className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"
                animate={{
                    x: [0, 50, -30, 0],
                    y: [0, -50, 40, 0],
                    scale: [1, 1.2, 0.9, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute bottom-[10%] right-[10%] w-[25rem] h-[25rem] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"
                animate={{
                    x: [0, -40, 50, 0],
                    y: [0, 40, -30, 0],
                    scale: [1, 1.1, 0.8, 1]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col items-center z-10"
            >
                {/* Floating central icon */}
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white/5 border border-white/10 mb-8 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.1)] relative"
                >
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.6, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-xl"
                    />
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-full border border-white/5 backdrop-blur-md" />
                </motion.div>

                <motion.h2
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="text-blue-400 uppercase tracking-widest text-sm lg:text-base font-medium mb-4"
                >
                    Propuesta Tecnológica Institucional
                </motion.h2>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    Sistema de Modernización<br />
                    <span className="text-slate-300">Aduanera</span>
                </h1>

                <p className="text-lg lg:text-xl text-slate-500 font-light tracking-wide mb-16 max-w-2xl">
                    Equipo de Ingeniería y Arquitectura de Software
                </p>

                <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-slate-600 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 rounded-full bg-slate-600 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 rounded-full bg-slate-600 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
            </motion.div>
        </div>
    );
}
