"use client";

import { useRef, useState } from "react";

export default function AudioDemoSection() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="audio-demo" className="max-w-7xl mx-auto px-6 py-24">
      <div className="rounded-[40px] border border-white/10 bg-white/[0.03] overflow-hidden">

        <div className="grid lg:grid-cols-2 gap-0 items-center">

          {/* LEFT */}
          <div className="p-10 lg:p-16">

            <div className="uppercase tracking-[0.4em] text-xs text-cyan-400">
              Audio Demo
            </div>

            <h2 className="mt-5 text-5xl font-black leading-tight">
              Hear The Energy
            </h2>

            <p className="mt-6 text-zinc-300 text-lg leading-relaxed">
              Preview the sound and atmosphere of
              The Techno Vault Vol. 1 before purchasing.
              Designed for massive festival drops,
              dark techno grooves and cinematic tension.
            </p>

            <div className="mt-10 flex items-center gap-5">

              <button
                onClick={toggleAudio}
                className="w-20 h-20 rounded-full bg-cyan-400 text-black text-3xl font-black hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/30"
              >
                {isPlaying ? "❚❚" : "▶"}
              </button>

              <div>
                <div className="text-xl font-bold">
                  The Techno Vault Vol. 1 Demo
                </div>

                <div className="text-zinc-400 mt-1">
                  Urano Sounds
                </div>
              </div>

            </div>

            <audio
              ref={audioRef}
              src="/techno-vault1-demo.mp3"
              onEnded={() => setIsPlaying(false)}
            />
          </div>

          {/* RIGHT */}
          <div className="relative h-full min-h-[350px] bg-gradient-to-br from-cyan-500/10 via-black to-purple-500/10 flex items-center justify-center">

            <div className="w-[80%] flex items-end gap-2 h-40">

              <div className="w-full bg-cyan-400/80 rounded-full h-10 animate-pulse"></div>
              <div className="w-full bg-cyan-400/70 rounded-full h-20 animate-pulse"></div>
              <div className="w-full bg-cyan-400 rounded-full h-32 animate-pulse"></div>
              <div className="w-full bg-cyan-400/70 rounded-full h-16 animate-pulse"></div>
              <div className="w-full bg-cyan-400/90 rounded-full h-28 animate-pulse"></div>
              <div className="w-full bg-cyan-400/60 rounded-full h-14 animate-pulse"></div>
              <div className="w-full bg-cyan-400 rounded-full h-36 animate-pulse"></div>
              <div className="w-full bg-cyan-400/70 rounded-full h-24 animate-pulse"></div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}