export default function FeaturesSection() {
  return (
    <section className="border-y border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center max-w-3xl mx-auto">
          <div className="text-cyan-400 uppercase tracking-[0.4em] text-xs">
            Why Urano Sounds
          </div>

          <h2 className="mt-5 text-5xl font-black">
            Built For Producers Who Want To Sound Massive
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="rounded-[28px] border border-white/10 bg-black/40 p-8 hover:border-cyan-400/40 transition-all duration-300">
            <div className="text-4xl">⚡</div>

            <h3 className="mt-6 text-2xl font-bold">
              Festival Energy
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Crafted specifically for high-energy electronic music with huge
              drops and cinematic tension.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-black/40 p-8 hover:border-cyan-400/40 transition-all duration-300">
            <div className="text-4xl">🎛️</div>

            <h3 className="mt-6 text-2xl font-bold">
              Professional Sound
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              High-quality mixing and sound design made to compete with modern
              mainstage productions.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-black/40 p-8 hover:border-cyan-400/40 transition-all duration-300">
            <div className="text-4xl">🔥</div>

            <h3 className="mt-6 text-2xl font-bold">
              Royalty Free
            </h3>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              Use the samples in your own tracks without worrying about
              copyright restrictions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
