"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scroll, X } from "lucide-react";

export default function Pergaminho() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                .scrollbar-medieval::-webkit-scrollbar {
                    width: 8px;
                }
                .scrollbar-medieval::-webkit-scrollbar-track {
                    background: rgba(87, 65, 43, 0.1);
                    border-radius: 4px;
                }
                .scrollbar-medieval::-webkit-scrollbar-thumb {
                    background: #8b6e4e;
                    border: 1px solid #5e4b35;
                    border-radius: 4px;
                }
                .scrollbar-medieval::-webkit-scrollbar-thumb:hover {
                    background: #6f5840;
                }
            `}} />

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                    relative z-70
                    group flex items-center justify-center p-3 rounded-full 
                    bg-white/10 backdrop-blur-md border border-white/20 text-white 
                    shadow-lg transition-all duration-300 ease-out
                    hover:bg-white/20 hover:scale-105 active:scale-95
                    cursor-pointer
                "
            >
                {isOpen ? <X size={24} /> : <Scroll size={24} />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-60 flex items-center justify-center pointer-events-none">

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/70 backdrop-blur-sm pointer-events-auto"
                            onClick={() => setIsOpen(false)}
                        />

                        <div className="relative w-full max-w-lg flex flex-col items-center pointer-events-auto perspective-1000">

                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 14, opacity: 1 }}
                                exit={{ y: 30, opacity: 0, transition: { delay: 0.1 } }}
                                className="z-30 w-[96%] h-16 rounded-full shadow-2xl flex items-center justify-between px-1 relative overflow-hidden"
                                style={{
                                    background: 'linear-gradient(180deg, #5d4037 0%, #3e2723 50%, #5d4037 100%)',
                                    borderBottom: '4px solid #281812'
                                }}
                            >
                                <div className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent opacity-30"></div>
                                <div className="w-5 h-full bg-linear-to-r from-yellow-600 via-yellow-300 to-yellow-700 border-r border-yellow-900 shadow-lg"></div>
                                <div className="w-5 h-full bg-linear-to-r from-yellow-600 via-yellow-300 to-yellow-700 border-l border-yellow-900 shadow-lg"></div>
                            </motion.div>

                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{
                                    height: "auto",
                                    opacity: 1,
                                    paddingTop: "4rem",
                                    paddingBottom: "4rem",
                                }}
                                exit={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                                className="w-[88%] bg-[#e3d5b8] overflow-hidden relative shadow-[0_0_80px_rgba(0,0,0,0.8)] mx-auto"
                                style={{
                                    backgroundImage: `url("https://www.transparenttextures.com/patterns/aged-paper.png"), linear-gradient(to right, rgba(0,0,0,0.1), transparent 10%, transparent 90%, rgba(0,0,0,0.1))`,
                                    borderLeft: "2px solid #8b7355",
                                    borderRight: "2px solid #8b7355",
                                }}
                            >
                                <div className="absolute top-4 left-4 right-4 bottom-4 border border-amber-900/20 pointer-events-none"></div>
                                <div className="absolute top-5 left-5 right-5 bottom-5 border border-amber-900/10 pointer-events-none"></div>

                                <div className="relative px-8 md:px-12 text-center font-serif text-amber-950 max-h-[50vh] overflow-y-auto scrollbar-medieval">

                                    <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-widest text-amber-900 drop-shadow-sm uppercase" style={{ fontFamily: 'Times New Roman, serif' }}>
                                        Antiga Profecia
                                    </h2>

                                    <p className="leading-loose text-lg md:text-xl font-medium text-amber-950/90 italic">
                                        "Nas profundezas do código, onde os bugs habitam, apenas o desenvolvedor com o coração valente poderá compilar a build final sem erros."
                                    </p>

                                    <div className="my-8 flex items-center justify-center gap-3 opacity-50">
                                        <div className="h-px w-20 bg-amber-900"></div>
                                        <div className="text-amber-900 text-xs">♦</div>
                                        <div className="h-px w-20 bg-amber-900"></div>
                                    </div>

                                    <p className="leading-relaxed text-base text-amber-900/80 mb-8">
                                        Este é um texto de exemplo para demonstrar a rolagem. Se você escrever muito aqui, a barra lateral estilizada aparecerá automaticamente para preservar a estética medieval.
                                    </p>

                                    <div className="pb-4">
                                        <p className="font-bold text-xs uppercase tracking-[0.3em] text-amber-900/50">Assinado por</p>
                                        <p className="text-2xl font-cursive text-amber-900 mt-2">O Mago do React</p>
                                    </div>

                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ y: -30, opacity: 0 }}
                                animate={{ y: -14, opacity: 1 }}
                                exit={{ y: -30, opacity: 0, transition: { delay: 0.1 } }}
                                className="z-30 w-[96%] h-16 rounded-full shadow-2xl flex items-center justify-between px-1 relative overflow-hidden"
                                style={{
                                    background: 'linear-gradient(180deg, #5d4037 0%, #3e2723 50%, #5d4037 100%)',
                                    borderTop: '4px solid #281812'
                                }}
                            >
                                <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/30 opacity-50"></div>
                                <div className="w-5 h-full bg-linear-to-r from-yellow-600 via-yellow-300 to-yellow-700 border-r border-yellow-900 shadow-lg"></div>
                                <div className="w-5 h-full bg-linear-to-r from-yellow-600 via-yellow-300 to-yellow-700 border-l border-yellow-900 shadow-lg"></div>
                            </motion.div>

                        </div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}