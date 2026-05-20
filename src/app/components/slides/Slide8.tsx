// @use(kind, props, deps)
// @kind(feature)
// @props({})
// @deps(motion/react, lucide-react)
import { motion } from 'motion/react';
import { MessageCircleQuestion } from 'lucide-react';

export default function Slide8() {
    return (
        <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 lg:px-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center max-w-3xl"
            >
                <MessageCircleQuestion className="w-10 h-10 sm:w-14 sm:h-14 lg:w-24 lg:h-24 text-blue-400 mb-3 sm:mb-4 lg:mb-6 mx-auto opacity-90" />

                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 lg:mb-6">
                    ¿Consultas?
                </h1>

                <p className="text-sm sm:text-base lg:text-xl text-slate-400 mb-4 sm:mb-6 lg:mb-12 leading-relaxed">
                    Gracias por su atención. El equipo queda a completa disposición para resolver dudas sobre la propuesta, arquitectura o despliegue.
                </p>

            </motion.div>
        </div>
    );
}