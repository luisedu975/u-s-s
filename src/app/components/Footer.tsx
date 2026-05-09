export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <div className="text-2xl font-black tracking-tight">
            Urano Sounds
          </div>

          <div className="text-zinc-500 mt-2 text-sm">
            Premium Electronic Music Sample Packs
          </div>
        </div>

        <div className="flex items-center gap-6 text-zinc-400 text-sm">

          <a href="#" className="hover:text-cyan-400 transition-colors">
            Instagram
          </a>

          <a href="#" className="hover:text-cyan-400 transition-colors">
            YouTube
          </a>

          <a href="#" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>

        </div>
      </div>
    </footer>
  );
}
