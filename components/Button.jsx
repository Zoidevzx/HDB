'use client'

import { useState } from "react";

export default function Button({ hiddenButton }) {

    const buttonClasses = `
    relative overflow-hidden 
    bg-gradient-to-b from-white to-gray-100 
    text-black font-bold text-xl px-14 py-6 rounded-2xl
    border border-gray-200
    shadow-[0_0_20px_rgba(255,255,255,0.2)] 
    hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]
    hover:-translate-y-1 active:scale-95 transition-all duration-500
    cursor-pointer select-none

    before:absolute before:inset-0 
    before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent
    before:translate-x-[-200%] hover:before:translate-x-[200%] 
    before:transition-transform before:duration-700 before:ease-out
`;

    return (
        <div>
            <button onClick={hiddenButton} className={buttonClasses}> Clique aqui</button>
        </div>
    )
}