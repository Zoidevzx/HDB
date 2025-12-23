'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Button from './Button'
import Cake from "./Cake"
import Pergaminho from './Pergaminho'

export default function Handler() {

    const [stage, setStage] = useState('visible')

    const handleTroca = () => {
        setStage('fading');

        setTimeout(() => {
            setStage('hidden');
        }, 500);
    };

    return (
        <>
            <div>
                {stage !== 'hidden' && (
                    <div
                        className={`transition-all duration-500 ease-out 
                        ${stage === 'fading' ? 'opacity-0 scale-90 blur-sm translate-y-4' : 'opacity-100 scale-100'}`}
                    >
                        <Button hiddenButton={handleTroca} />
                    </div>
                )}
                {stage === 'hidden' && (
                    <div className="animate-[fadeIn_0.7s_ease-out]">
                        <Cake />
                    </div>

                )}
            </div>

            <AnimatePresence>
                {stage === 'hidden' && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="fixed bottom-20 right-5 md:bottom-5 md:right-23 z-50 2xl:right-28"
                    >
                        <Pergaminho />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}