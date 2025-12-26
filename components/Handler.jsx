'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Button from './Button'
import Cake from "./Cake"
import Pergaminho from './Pergaminho'

export default function Handler() {

    const [isPartyTime, setIsPartyTime] = useState(false)
    const name = 'Jeanzinho'

    const handleTroca = () => {
        setIsPartyTime(true)
    }

    return (
        <>
            <div className="relative min-h-screen flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {!isPartyTime ? (
                        <motion.div
                            key="button"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{
                                opacity: 0,
                                scale: 1.5,
                                filter: "blur(15px)",
                                transition: { duration: 0.5, ease: "easeInOut" }
                            }}
                            className="z-20"
                        >
                            <Button hiddenButton={handleTroca} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="party"
                            initial={{ opacity: 0, scale: 0.5, y: 100 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 15,
                                    delay: 0.1
                                }
                            }}
                            className="relative flex flex-col items-center justify-center"
                        >
                            <div className="separation absolute z-20 flex flex-col items-center justify-center text-center w-max pointer-events-none select-none origin-center -top-80 md:-top-90 2xl:-top-100">
                                <h1 className="font-['Pacifico'] italic font-medium text-transparent bg-clip-text bg-linear-to-r from-rose-300 via-orange-200 to-rose-300 drop-shadow-sm tracking-widest text-4xl max-[500px]:text-3xl md:text-4xl 2xl:text-5xl">
                                    Happy Birthday
                                </h1>
                                <h2 className="font-['Fredoka'] font-bold text-transparent bg-clip-text bg-linear-to-br from-rose-300 via-orange-200 to-rose-300 mt-2 tracking-wide drop-shadow-md transform -rotate-1 text-5xl max-[500px]:text-5xl md:text-5xl 2xl:text-7xl">
                                    {name}
                                </h2>
                            </div>

                            <Cake />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {isPartyTime && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0, rotate: -90 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            rotate: 0,
                            transition: { delay: 1, type: "spring", bounce: 0.5 }
                        }}
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