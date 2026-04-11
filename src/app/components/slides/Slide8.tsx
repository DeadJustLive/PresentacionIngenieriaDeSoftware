import { motion } from 'motion/react';
import { LayoutGrid, MessageCircleQuestion } from 'lucide-react';

export default function Slide8() {
    return (
        <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center max-w-3xl"
            >
                <MessageCircleQuestion className="w-20 h-20 lg:w-32 lg:h-32 text-blue-400 mb-8 mx-auto opacity-90" />

                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                    ¿Consultas?
                </h1>

                <p className="text-xl lg:text-2xl text-slate-400 mb-12 leading-relaxed">
                    Gracias por su atención. El equipo queda a completa disposición para resolver dudas sobre la propuesta, arquitectura o despliegue.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.dispatchEvent(new CustomEvent('toggleHub'))}
                    className="flex items-center gap-3 px-6 py-4 lg:px-8 lg:py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors text-white font-medium text-lg shadow-lg backdrop-blur-md"
                >
                    <LayoutGrid className="w-6 h-6 text-blue-400" />
                    <span>Abrir Hub de Diapositivas</span>
                </motion.button>
            </motion.div>
        </div>
    );
}
