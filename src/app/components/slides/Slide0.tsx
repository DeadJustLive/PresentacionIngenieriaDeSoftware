import { motion } from 'motion/react';

export default function Slide0() {
    return (
        <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-20">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col items-center"
            >
                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white/5 border border-white/10 mb-8 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.1)]">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full blur-xl opacity-50 animate-pulse" />
                </div>

                <h2 className="text-blue-400 uppercase tracking-widest text-sm lg:text-base font-medium mb-4">
                    Defensa Examen Transversal
                </h2>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tigth">
                    Sistema de Modernización<br />
                    <span className="text-slate-300">Aduanera</span>
                </h1>

                <p className="text-lg lg:text-xl text-slate-500 font-light tracking-wide mb-16 max-w-2xl">
                    Ingeniería de Software Aplicada
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
