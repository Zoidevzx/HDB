'use client'

import { useState } from "react"
import Button from './Button'
import Cake from "./Cake"

export default function Handler() {

    const [stage, setStage] = useState('visible')

    const handleTroca = () => {
        setStage('fading');

        setTimeout(() => {
            setStage('hidden');
        }, 500);
    };

    return (
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
    );

}