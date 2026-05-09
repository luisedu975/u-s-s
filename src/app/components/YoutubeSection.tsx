export default function YoutubeSection() {
  return (
    <section id="youtube" className="max-w-7xl mx-auto px-6 py-24">
      <div className="rounded-[40px] overflow-hidden border border-white/10 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 p-10 lg:p-16">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <div className="uppercase tracking-[0.4em] text-xs text-cyan-400">
              YouTube Channel
            </div>

            <h2 className="mt-5 text-5xl font-black leading-tight">
              Grow The Urano Sounds Movement
            </h2>

            <p className="mt-6 text-zinc-300 text-lg leading-relaxed">
              Upload demo tracks, sound design videos, tutorials and previews
              of upcoming packs to build your audience and drive traffic to
              your store.
            </p>
          </div>

          <div className="rounded-[32px] bg-black/50 border border-white/10 p-8">

            <div className="text-sm uppercase tracking-widest text-zinc-500">
              Suggested Content
            </div>

            <div className="mt-6 space-y-4 text-zinc-300">

              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
                "How I Made a Mainstage Techno Drop"
              </div>

              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
                "Future Rave Serum Preset Showcase"
              </div>

              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
                "The Techno Vault Vol. 1 Demo Track"
              </div>

            </div>

            <button className="w-full mt-8 px-8 py-4 rounded-2xl bg-red-500 font-bold hover:scale-[1.02] transition-all duration-300">
              Subscribe On YouTube
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
