"use client";
import Image from "next/image";

export default function PackSection() {
  return (
    <section id="pack" className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <div className="rounded-[32px] overflow-hidden border border-white/10 bg-black shadow-2xl shadow-cyan-500/10">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/imagem-techno-vault1.jpeg"
                alt="The Techno Vault Vol. 1"
                fill
                className="object-contain hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm uppercase tracking-widest">
            Available Now
          </div>

          <h2 className="mt-6 text-5xl font-black leading-tight">
            The Techno Vault Vol. 1
          </h2>

          <p className="mt-6 text-zinc-300 leading-relaxed text-lg">
            Designed for producers inspired by the energy of modern
            mainstage and techno festivals. This pack includes hard-hitting
            kicks, claps, drum loops, ambiences, basslines,
            hats, FX and premium vocals.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-cyan-400 font-bold text-lg">
                Included
              </div>

              <ul className="mt-3 space-y-2 text-zinc-300 text-sm">
                <li>• Bigroom Techno Kicks</li>
                <li>• Vocals</li>
                <li>• Basslines</li>
                <li>• Mainstage FX</li>
                <li>• Kits</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-cyan-400 font-bold text-lg">
                Perfect For
              </div>

              <ul className="mt-3 space-y-2 text-zinc-300 text-sm">
                <li>• Festival Drops</li>
                <li>• Peak-Time Techno</li>
                <li>• Mainstage Techno</li>
                <li>• Club Tracks</li>
                <li>• Hard Dance Energy</li>
              </ul>
            </div>

          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div>
              <div className="text-sm uppercase tracking-widest text-zinc-500">
                Price
              </div>

              <div className="flex items-end gap-3 mt-2">
                <span className="text-6xl font-black text-cyan-400">
                  $9.99
                </span>
              </div>

              <div className="text-sm text-zinc-400 mt-2">
                Premium sounds for modern techno producers.
              </div>
            </div>
          </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="https://uranosounds.gumroad.com/l/the-techno-vault-vol1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 rounded-2xl bg-cyan-400 text-black font-black text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/30"
              >
                Buy Now
              </a>

              <button 
                onClick={() => document.getElementById("audio-demo")?.scrollIntoView({ behavior: "smooth" })}
                className="px-10 py-5 rounded-2xl border border-white/10 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 text-lg">
                Listen Demo
              </button>

          </div>
        </div>
      </div>
    </section>
  );
}