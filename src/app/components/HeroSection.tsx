export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-40">
        <div className="max-w-4xl">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm tracking-[0.3em] uppercase">
            Urano Sounds
          </div>

          <h1 className="text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight">
            Premium Samples For
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-purple-500">
              Modern Electronic Music
            </span>
          </h1>

          <p className="mt-10 text-xl text-zinc-300 leading-relaxed max-w-3xl">
            Urano Sounds is a premium electronic music sample label focused on
            Bigroom Techno, Mainstage Techno, Trance and Future Rave.
            Built for producers who want massive festival energy,
            cinematic atmospheres and modern sound design.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <a
              href="#pack"
              className="px-10 py-5 rounded-2xl bg-cyan-400 text-black font-black text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/30"
            >
              Explore Packs
            </a>

            <a
              href="#youtube"
              className="px-10 py-5 rounded-2xl border border-white/15 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 text-lg"
            >
              YouTube Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
