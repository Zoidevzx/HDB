'use client'

import Handler from '../components/Handler'
import Music from '../components/Music'

export default function Home() {
    return (
        <div>
            <div className="h-screen flex justify-center items-center">
                <Handler />
                <Music />
            </div>
        </div>
    );
}
