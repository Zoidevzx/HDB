'use client'

import { useState } from "react";

export default function Button() {

    const [button, setButton] = useState(true)

    const esconderBotao = () => {
        setButton(false)
    }

    return (
        <div>
            {button && (
                <button onClick={esconderBotao} className="relative overflow-hidden bg-linear-to-b from-white to-gray-100 text-black font-bold text-xl px-14 py-6 rounded-2xl
               shadow-[0_4px_10px_rgba(0,0,0,0.25),0_8px_25px_rgba(0,0,0,0.2),inset_0_1px_3px_rgba(255,255,255,0.3)]
               border border-gray-200
               hover:shadow-[0_6px_25px_rgba(0,0,0,0.35),0_12px_40px_rgba(0,0,0,0.25),inset_0_1px_3px_rgba(255,255,255,0.4)]
               hover:-translate-y-1 active:scale-95 transition-all duration-500
               cursor-pointer select-none
               before:absolute before:inset-0 before:bg-linear-to-r before:from-transparent before:via-white/40 before:to-transparent
               before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700 before:ease-out
               before:content-['']">
                    Clique aqui
                </button>
            )
            }
        </div>
    )
}