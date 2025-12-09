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
    const isMutedRef = useRef(false)
    const [isMuted, setIsMuted] = useState(false)
    const isMountedRef = useRef(true)

    useEffect(() => {
        isMountedRef.current = true;

        if (!audioRef.current) {
            audioRef.current = new Audio();
        }

        const audio = audioRef.current;

        currentIndexRef.current = Math.floor(Math.random() * playlist.length);
        audio.volume = 1.0;
        audio.loop = false;

        const playTrack = () => {
            if (!isMountedRef.current || !audio) return;

            audio.src = playlist[currentIndexRef.current];
            audio.muted = isMutedRef.current;

            const playPromise = audio.play();

            if (playPromise !== undefined) {
                playPromise.catch((error) => {
                    if (error.name !== 'AbortError' && isMountedRef.current) {
                        console.log("Autoplay bloqueado pelo navegador.");
                        setIsMuted(true);
                        isMutedRef.current = true;
                        audio.muted = true;
                    }
                });
            }
        };

        const handleTrackEnded = () => {
            currentIndexRef.current = (currentIndexRef.current + 1) % playlist.length;
            playTrack();
        };

        const handleVisibilityChange = () => {
            if (!audio) return;

            if (document.hidden) {

                audio.pause();
            } else {

                if (!isMutedRef.current) {
                    const playPromise = audio.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(() => { });
                    }
                }
            }
        };

        audio.addEventListener('ended', handleTrackEnded);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        playTrack();

        return () => {
            isMountedRef.current = false;

            audio.removeEventListener('ended', handleTrackEnded);
            document.removeEventListener("visibilitychange", handleVisibilityChange);

            audio.pause();
            audio.currentTime = 0;
            audio.src = "";
            audio.load();
        };
    }, []);

    const toggleMute = () => {
        if (audioRef.current) {
            const newState = !isMutedRef.current;

            isMutedRef.current = newState;
            audioRef.current.muted = newState;
            setIsMuted(newState);

            if (newState) {

            } else {

                if (audioRef.current.paused) {
                    audioRef.current.play().catch(() => { });
                }
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