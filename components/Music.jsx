'use client'
import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react";

const playlist = [
    "/music/Benson Boone - Beautiful Things (Official Music Video).MP3",
    "/music/David Kushner - Daylight (Official Music Video).MP3",
    "/music/David Kushner - Dead Man (Official Music Video).MP3",
    "/music/Johnny Huynh - LOCK ME OUT (Official Video).MP3",
    "/music/JVKE - golden hour (official music video).MP3"
]

export default function Music() {

    const audioRef = useRef(null)
    const currentIndexRef = useRef(0)
    const [isMuted, setIsMuted] = useState(false)

    useEffect(() => {

        currentIndexRef.current = Math.floor(Math.random() * playlist.length)

        const audio = new Audio()
        audioRef.current = audio

        audio.volume = 1.0

        audio.loop = false


        const playCurrentTrack = () => {
            audio.src = playlist[currentIndexRef.current];
            audio.muted = isMuted

            const playPromise = audio.play();


            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    console.log("Autoplay bloqueado. Aguardando interação.");
                    setIsMuted(true);
                    audio.muted = true;
                });
            }
        };

        const handleTrackEnded = () => {
            currentIndexRef.current = (currentIndexRef.current + 1) % playlist.length;
            playCurrentTrack();
        };

        audio.addEventListener('ended', handleTrackEnded);

        playCurrentTrack();

        return () => {
            audio.removeEventListener('ended', handleTrackEnded);
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    const toggleMute = () => {
        if (audioRef.current) {

            const newState = !audioRef.current.muted;
            audioRef.current.muted = newState;
            setIsMuted(newState);

            if (audioRef.current.paused && !newState) {
                audioRef.current.play().catch(e => console.log("Ainda bloqueado", e));
            }
        }
    };

    return (
        <button
            onClick={toggleMute}
            className="fixed cursor-pointer bottom-5 right-5 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
            aria-label={isMuted ? "Ativar som" : "Silenciar"}
        >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
    );
}