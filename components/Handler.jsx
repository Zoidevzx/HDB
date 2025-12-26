'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Button from './Button'
import Cake from "./Cake"
import Pergaminho from './Pergaminho'

export default function Handler() {

    const [stage, setStage] = useState('visible')
    const name = 'Jeanzinho'

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
                    <div className="relative animate-[fadeIn_0.7s_ease-out] flex flex-col items-center justify-center">

                        <div className="separation absolute z-20 flex flex-col items-center justify-center text-center w-max pointer-events-none select-none
        transition-all duration-300 ease-in-out origin-center -top-80 md:-top-90 2xl:-top-100">

                            <h1 className="font-['Pacifico'] italic font-medium text-transparent bg-clip-text bg-linear-to-r from-rose-300 via-orange-200 to-rose-300 drop-shadow-sm tracking-widest
        text-4xl                  
        max-[500px]:text-3xl        
        md:text-4xl                
        2xl:text-5xl
    ">
                                Happy Birthday
                            </h1>

                            <h2 className="font-['Fredoka'] font-bold text-transparent bg-clip-text bg-linear-to-br from-rose-300 via-orange-200 to-rose-300 mt-2 tracking-wide drop-shadow-md transform -rotate-1
        text-5xl                
        max-[500px]:text-5xl        
        md:text-5xl                 
        2xl:text-7xl
    ">
                                {name}
                            </h2>
                        </div>

                        <Cake />
                    </div>

                )}
            </div >

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