import Link from 'next/link';

export default function Lunabot() {
  return (
    <div className="w-full min-h-screen bg-[#050505] text-white selection:bg-[var(--color-primary)] selection:text-black">
      {/* Background Grids */}
      <div className="fixed inset-0 tech-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 scanlines opacity-30 pointer-events-none mix-blend-overlay" />

      {/* Header / Nav */}
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group text-sm font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors">
            ← Return to Hub
          </Link>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[var(--color-primary)] animate-pulse rounded-full" />
            <p className="text-[var(--color-primary)] font-mono text-xs uppercase tracking-widest">
              NODE: LUNABOT // ONLINE
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-24 relative z-10">
        
        {/* V2 Section (Current Focus) */}
        <div className="mb-32">
          <div className="inline-block border border-[var(--color-primary)]/50 text-[var(--color-primary)] font-mono text-xs px-3 py-1 mb-6 uppercase tracking-widest bg-[var(--color-primary)]/10 animate-pulse">
            Active Development
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-8">
            Lunabot <span className="text-[var(--color-primary)] text-stroke">V2 (Autonomous)</span>
          </h1>
          
          <div className="w-full aspect-video md:aspect-[21/9] bg-[#0a0a0a] border border-white/10 relative flex flex-col items-center justify-center overflow-hidden mb-8 group">
             {/* Blurred Image Background */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center blur-xl opacity-30 group-hover:opacity-40 transition-opacity grayscale" />
             <div className="absolute inset-0 bg-black/50" />
             
             <div className="relative z-10 text-center flex flex-col items-center">
                <span className="text-6xl md:text-8xl font-black text-white/20 mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">?</span>
                <span className="text-xl font-mono text-white/70 uppercase tracking-widest bg-black/50 px-4 py-2 border border-white/10 backdrop-blur-sm">
                  CLASSIFIED // ARCHITECTURE IN DEVELOPMENT
                </span>
             </div>
          </div>
          
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl leading-relaxed font-light">
            Our next-generation platform. V2 represents a complete shift towards full autonomy, integrating LiDAR-based SLAM, custom-machined chassis components, and highly refined continuous excavation mechanisms designed for lunar analog environments.
          </p>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-32" />

        {/* V1 Section (Prototype) */}
        <div className="mb-20">
          <div className="inline-block border border-white/20 text-white/50 font-mono text-xs px-3 py-1 mb-6 uppercase tracking-widest bg-white/5">
            Legacy Prototype
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4 text-white/50">
            Project Scrap-E <span className="text-white text-stroke">(V1)</span>
          </h2>
          <p className="text-sm font-mono text-[var(--color-primary)] uppercase tracking-widest mb-6 border-l-2 border-[var(--color-primary)] pl-3 bg-[var(--color-primary)]/10 py-1 max-w-fit">
            Showcased at UK Lunabotics 2026 (Inaugural Year)
          </p>
          <p className="text-xl md:text-2xl text-[var(--color-text-muted)] max-w-3xl leading-relaxed font-light">
            In just a few months, we engineered a teleoperated earthmoving rover from scratch. It wasn't the prettiest machine—built on T-slot extrusion with exposed wiring—but it worked. Out of the entire competition, <strong className="text-white">we were one of only two teams to successfully run and move in the testing pit</strong>.
          </p>
        </div>

        {/* Technical Architecture */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-white mb-8 border-l-4 border-white/50 pl-4 text-white/80">
            Technical Architecture
          </h2>
          <div className="bg-[#0a0a0a] border border-white/10 p-8 hud-border grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                We presented our architecture directly to engineers from <strong className="text-white">NASA</strong> and <strong className="text-white">Caterpillar (CAT)</strong>. The system was designed for raw functionality and rapid integration under extreme time constraints.
              </p>
              <ul className="space-y-6 text-sm md:text-base font-mono text-[var(--color-text-muted)]">
                <li className="flex gap-4">
                  <span className="text-white/50">►</span>
                  <span><strong className="text-white/80">Unified Power System:</strong> Single battery architecture powering both logic and high-draw locomotion.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-white/50">►</span>
                  <span><strong className="text-white/80">Independent Drive:</strong> Each wheel is independently driven for maximum traction and skid-steer capability in regolith.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-white/50">►</span>
                  <span><strong className="text-white/80">Isolated Electronics:</strong> Opto-isolation between high-current motor drivers and delicate logic boards.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-white/50">►</span>
                  <span><strong className="text-white/80">Compute Stack:</strong> NVIDIA Jetson for main processing, communicating with an ESP32 for real-time motor control via a local router network and mini-computer.</span>
                </li>
              </ul>
            </div>
            
            {/* Image: Fixing Rover */}
            <div className="relative group bg-black border border-white/10 aspect-square md:aspect-auto flex flex-col overflow-hidden">
              <div className="absolute top-2 left-2 text-[10px] font-mono text-white/50 bg-black/70 px-2 py-1 z-10">IMG_LOG: PIT_FIX</div>
              <img 
                src="/images/pitfix.jpeg" 
                alt="Fixing the rover near the pit" 
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>
        </section>

        {/* The Exhibition */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-white mb-8 border-l-4 border-white/50 pl-4 text-white/80">
            The Exhibition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="w-full aspect-video bg-[#0a0a0a] border border-white/10 relative overflow-hidden group">
              <div className="absolute top-4 left-4 text-xs font-mono text-white/50 bg-black/70 px-2 py-1 z-10">IMG_LOG: INDUSTRY_REVIEW</div>
              <img 
                src="/images/fullteam+nasa+cat+ou.jpeg" 
                alt="Team with CAT, NASA, and Open University" 
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
            <div className="w-full aspect-video bg-[#0a0a0a] border border-white/10 relative overflow-hidden group">
              <div className="absolute top-4 left-4 text-xs font-mono text-white/50 bg-black/70 px-2 py-1 z-10">IMG_LOG: LUNAR_DEPLOYMENT</div>
              <img 
                src="/images/rover_infront_moon.jpeg" 
                alt="Rover in front of inflatable moon" 
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>
          <p className="text-[var(--color-text-muted)] text-center font-mono text-sm max-w-2xl mx-auto uppercase tracking-widest">
            Presenting the V1 platform alongside industry leaders.
          </p>
        </section>

        {/* The Crucible (Funny Story) */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-[#ff8c00] mb-8 border-l-4 border-[#ff8c00] pl-4">
            Field Notes: Whatever It Takes
          </h2>
          <div className="bg-[#1a0d00]/50 border border-[#ff8c00]/30 p-8 md:p-12 hud-border">
            <p className="text-lg text-white/90 leading-relaxed mb-10">
              Hardware development rarely goes to plan. Hours before deployment, a critical part of our drivetrain sheared off. Without a replacement, the rover was dead in the water. We dragged a 3D printer into our hotel room, took shifts staying awake through the night to monitor the prints, and when the tolerances were slightly too tight in the morning? We used a hotel hairdryer to heat-expand the parts and force them into place. It worked perfectly.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Image: 3D Printer */}
              <div className="aspect-square bg-black border border-[#ff8c00]/20 relative overflow-hidden group">
                 <div className="absolute top-2 left-2 text-[10px] font-mono text-[#ff8c00] bg-black/70 px-2 py-1 z-10 border border-[#ff8c00]/30">FABRICATION: HOTEL_ROOM</div>
                 <img 
                    src="/images/hotel_printer.jpeg" 
                    alt="3D Printer running in hotel" 
                    className="w-full h-full object-cover sepia-[.3] hue-rotate-[-30deg] saturate-50 opacity-80 group-hover:saturate-100 group-hover:opacity-100 transition-all duration-500"
                 />
              </div>
              {/* Image: Hairdryer */}
              <div className="aspect-square bg-black border border-[#ff8c00]/20 relative overflow-hidden group">
                 <div className="absolute top-2 left-2 text-[10px] font-mono text-[#ff8c00] bg-black/70 px-2 py-1 z-10 border border-[#ff8c00]/30">FABRICATION: THERMAL_EXPANSION</div>
                 <img 
                    src="/images/hairdryer_part.jpeg" 
                    alt="Using hairdryer to expand parts" 
                    className="w-full h-full object-cover sepia-[.3] hue-rotate-[-30deg] saturate-50 opacity-80 group-hover:saturate-100 group-hover:opacity-100 transition-all duration-500"
                 />
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
}