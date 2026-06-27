export default function Partners() {
  return (
    <div className="w-full pb-24">
      {/* Header */}
      <header className="bg-[#050505] border-b border-white/10 pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid scanlines opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
            Industry Partners
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl mx-auto leading-relaxed mb-10">
            Our autonomous systems are powered by industry-leading silicon, hardware, and institutional support. We collaborate with top-tier engineering firms to push the boundaries of extreme-environment robotics.
          </p>
          <a href="#" className="btn-primary inline-block text-lg shadow-[0_0_20px_rgba(255,179,0,0.3)]">
            Become a Partner
          </a>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 mt-16 space-y-24">
        
        {/* Principal Partners Tier */}
        <section>
          <h2 className="text-2xl font-bold uppercase tracking-widest text-white mb-10 border-l-4 border-[var(--color-primary)] pl-4">
            Principal Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-64 bg-[#0a0a0a] border border-white/10 flex flex-col items-center justify-center p-6 border-dashed hud-border group hover:border-[var(--color-primary)]/50 transition-colors">
              <span className="text-sm uppercase tracking-widest text-white/30 mb-4 font-mono group-hover:text-[var(--color-primary)] transition-colors">
                [ Principal Sponsor Slot ]
              </span>
              <span className="text-xs text-[var(--color-text-muted)] text-center max-w-md">
                Highest tier partnership. Providing critical funding and tier-1 hardware for extraterrestrial and deep-sea R&D deployment.
              </span>
            </div>
            <div className="h-64 bg-[#0a0a0a] border border-white/10 flex flex-col items-center justify-center p-6 border-dashed hud-border group hover:border-[var(--color-primary)]/50 transition-colors">
              <span className="text-sm uppercase tracking-widest text-white/30 mb-4 font-mono group-hover:text-[var(--color-primary)] transition-colors">
                [ Principal Sponsor Slot ]
              </span>
              <span className="text-xs text-[var(--color-text-muted)] text-center max-w-md">
                Highest tier partnership. Providing critical funding and tier-1 hardware for extraterrestrial and deep-sea R&D deployment.
              </span>
            </div>
          </div>
        </section>

        {/* Partners Tier */}
        <section>
          <h2 className="text-2xl font-bold uppercase tracking-widest text-white mb-10 border-l-4 border-white/30 pl-4">
            Hardware & Silicon Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Placeholder */}
            <div className="aspect-video bg-[#0a0a0a] border border-white/5 flex flex-col items-center justify-center p-6 border-dashed group">
              <span className="text-xs uppercase tracking-widest text-white/30 font-mono text-center">
                [ Hardware Partner Slot ]
              </span>
            </div>
            
            {/* Placeholder */}
            <div className="aspect-video bg-[#0a0a0a] border border-white/5 flex flex-col items-center justify-center p-6 border-dashed group">
              <span className="text-xs uppercase tracking-widest text-white/30 font-mono text-center">
                [ Hardware Partner Slot ]
              </span>
            </div>

            {/* Placeholder */}
            <div className="aspect-video bg-[#0a0a0a] border border-white/5 flex flex-col items-center justify-center p-6 border-dashed group">
              <span className="text-xs uppercase tracking-widest text-white/30 font-mono text-center">
                [ Hardware Partner Slot ]
              </span>
            </div>

            {/* Placeholder */}
            <div className="aspect-video bg-[#0a0a0a] border border-white/5 flex flex-col items-center justify-center p-6 border-dashed group">
              <span className="text-xs uppercase tracking-widest text-white/30 font-mono text-center">
                [ Hardware Partner Slot ]
              </span>
            </div>
          </div>
        </section>

        {/* Institutional Backing */}
        <section>
          <h2 className="text-2xl font-bold uppercase tracking-widest text-white mb-10 border-l-4 border-[var(--color-primary)] pl-4">
            Institutional Backing
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="p-10 bg-[#0a0a0a] border border-white/10 flex flex-col md:flex-row items-center gap-10 hud-border">
              <div className="w-32 h-32 bg-white/5 rounded-full flex-shrink-0 flex items-center justify-center border border-white/20">
                <span className="text-xs uppercase text-white/30 text-center font-mono">[ Uni Logo ]</span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-widest">Newcastle University</h3>
                <p className="text-sm text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
                  Providing critical laboratory space, manufacturing facilities, and academic oversight for heavy-hardware development. Supported by the School of Engineering.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}