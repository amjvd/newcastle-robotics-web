"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background Opacities (crossfading)
  const introBgOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const dirtBgOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const marineBgOpacity = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0]);
  const moonBgOpacity = useTransform(scrollYProgress, [0.55, 0.65, 1], [0, 1, 1]);

  // Persistent Title (Fades during middle, comes back at end)
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.15, 0.85, 0.9, 1], [1, 1, 0.15, 0.15, 1, 1]);
  const titleScale = useTransform(scrollYProgress, [0, 0.1, 0.15, 0.85, 0.9, 1], [1, 1, 0.85, 0.85, 1, 1]);

  // Action UI (Subtitle + Buttons fade out early, come back at end)
  const actionUIOpacity = useTransform(scrollYProgress, [0, 0.1, 0.15, 0.85, 0.9, 1], [1, 1, 0, 0, 1, 1]);
  const actionUIPointerEvents = useTransform(scrollYProgress, [0, 0.1, 0.15, 0.85, 0.9, 1], ["auto", "auto", "none", "none", "auto", "auto"]);

  // Phase 2: Sand Card
  const sandOpacity = useTransform(scrollYProgress, [0.15, 0.2, 0.3, 0.35], [0, 1, 1, 0]);
  const sandY = useTransform(scrollYProgress, [0.15, 0.2, 0.3, 0.35], [50, 0, 0, -50]);

  // Phase 3: Marine Card
  const marineOpacity = useTransform(scrollYProgress, [0.35, 0.4, 0.5, 0.55], [0, 1, 1, 0]);
  const marineY = useTransform(scrollYProgress, [0.35, 0.4, 0.5, 0.55], [50, 0, 0, -50]);

  // Phase 4: Lunar Card
  const moonOpacity = useTransform(scrollYProgress, [0.55, 0.6, 0.7, 0.75], [0, 1, 1, 0]);
  const moonY = useTransform(scrollYProgress, [0.55, 0.6, 0.7, 0.75], [50, 0, 0, -50]);

  return (
    <div className="w-full">
      <div ref={containerRef} className="relative h-[500vh] w-full bg-black">
        {/* Sticky Viewport */}
        <motion.div 
          className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#050505]"
        >
          {/* Background Images */}
          {/* Intro Robotics */}
          <motion.div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center brightness-[0.4] contrast-[1.2]"
            style={{ opacity: introBgOpacity }}
          />
          {/* Dirt / Trucks */}
          <motion.div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523848309072-c199db53f137?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center brightness-[0.4] contrast-[1.2]"
            style={{ opacity: dirtBgOpacity }}
          />
          {/* Deep Ocean */}
          <motion.div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center brightness-[0.5] contrast-[1.3]"
            style={{ opacity: marineBgOpacity }}
          />
          {/* Lunar */}
          <motion.div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale brightness-[0.4] contrast-[1.5]"
            style={{ opacity: moonBgOpacity }}
          />
          
          {/* Overlays for industrial terminal feel */}
          <div className="absolute inset-0 tech-grid scanlines pointer-events-none opacity-40 mix-blend-overlay z-0" />
          <div className="absolute inset-0 bg-black/20 pointer-events-none z-0" />

          {/* Persistent Background Title & Action UI */}
          <motion.div 
            className="absolute z-10 w-full h-full flex flex-col items-center justify-center text-center px-6 pt-12 pb-24"
          >
             {/* Title */}
             <motion.h1 
               className="text-5xl md:text-[6.5rem] lg:text-[8rem] font-black uppercase tracking-tighter text-white leading-[0.9] drop-shadow-2xl mb-8"
               style={{ opacity: titleOpacity, scale: titleScale }}
             >
               Newcastle <br/> Robotics <br/> <span className="text-[var(--color-primary)]">Group</span>
             </motion.h1>

             {/* Action UI (Subtitle + Buttons) */}
             <motion.div 
               className="flex flex-col items-center"
               style={{ opacity: actionUIOpacity, pointerEvents: actionUIPointerEvents as any }}
             >
                <div className="h-[2px] w-32 bg-[var(--color-primary)] mb-6 shadow-[0_0_10px_rgba(255,179,0,0.5)]" />
                <p className="text-lg md:text-2xl text-white max-w-3xl mx-auto uppercase tracking-widest font-mono drop-shadow-lg font-bold mb-10">
                  Heavy robotics for the ocean floor, the lunar surface, and the dirt in between.
                </p>
                
                <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center w-full">
                  <a href="/lunabot" className="btn-outline py-4 px-6 text-sm md:text-base bg-black/50 backdrop-blur-sm pointer-events-auto">
                    Explore Earthmoving Autonomy
                  </a>
                  <a href="/rov" className="btn-outline py-4 px-6 text-sm md:text-base bg-black/50 backdrop-blur-sm pointer-events-auto">
                    Explore Subsea Engineering
                  </a>
                  <a href="/partners" className="btn-primary py-4 px-8 text-sm md:text-base shadow-[0_0_20px_rgba(255,179,0,0.3)] pointer-events-auto">
                    View Partners
                  </a>
                </div>

                <div className="flex flex-col items-center gap-2 opacity-70 animate-bounce mt-12">
                  <span className="text-xs font-mono tracking-widest uppercase text-[var(--color-primary)] font-bold drop-shadow-md">Initiate Descent</span>
                  <div className="w-[2px] h-8 bg-[var(--color-primary)] shadow-[0_0_10px_rgba(255,179,0,0.5)]" />
                </div>
             </motion.div>
          </motion.div>

          {/* Phase 2: Sand Card */}
          <motion.div 
            className="absolute z-20 text-center px-6 w-full max-w-4xl flex flex-col items-center justify-center pointer-events-none"
            style={{ opacity: sandOpacity, y: sandY }}
          >
            <div className="bg-black/60 backdrop-blur-md p-10 border border-[#ff8c00]/50 rounded-sm hud-border shadow-2xl">
              <p className="text-[#ff8c00] font-mono text-sm tracking-widest mb-4 uppercase flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-[#ff8c00] animate-pulse rounded-full" />
                Environment: Terrestrial / Sand
              </p>
              <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-4 drop-shadow-[0_0_15px_rgba(255,140,0,0.5)]">
                Abrasive Terrain
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto leading-relaxed">
                Engineering high-torque earthmoving platforms capable of navigating extreme surface environments, resisting dust ingress, and managing massive payloads.
              </p>
            </div>
          </motion.div>

          {/* Phase 3: Marine Card */}
          <motion.div 
            className="absolute z-20 text-center px-6 w-full max-w-4xl flex flex-col items-center justify-center pointer-events-none"
            style={{ opacity: marineOpacity, y: marineY }}
          >
            <div className="bg-black/60 backdrop-blur-md p-10 border border-[#0066ff]/50 rounded-sm hud-border shadow-2xl">
              <p className="text-[#0066ff] font-mono text-sm tracking-widest mb-4 uppercase flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-[#0066ff] animate-pulse rounded-full" />
                Environment: Deep Subsea
              </p>
              <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-4 drop-shadow-[0_0_15px_rgba(0,102,255,0.5)]">
                Crushing Pressure
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto leading-relaxed">
                Developing marine technology designed to operate in absolute darkness, utilizing LiDAR and high-pressure enclosures.
              </p>
            </div>
          </motion.div>

          {/* Phase 4: Lunar Card */}
          <motion.div 
            className="absolute z-20 text-center px-6 w-full max-w-4xl flex flex-col items-center justify-center pointer-events-none"
            style={{ opacity: moonOpacity, y: moonY }}
          >
            <div className="bg-black/60 backdrop-blur-md p-10 border border-white/50 rounded-sm hud-border shadow-2xl">
              <p className="text-white/80 font-mono text-sm tracking-widest mb-6 uppercase flex items-center justify-center gap-2">
                 <span className="w-2 h-2 bg-white animate-ping rounded-full" />
                 Environment: Extraterrestrial
              </p>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
                The Lunar Surface
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto leading-relaxed">
                Pushing the boundaries of survival. Simulating extraterrestrial regolith excavation and fully autonomous off-world operations.
              </p>
            </div>
          </motion.div>

          {/* Engineering Stats Banner (Fixed at the bottom) */}
          <div className="absolute bottom-0 w-full bg-[#050505]/95 backdrop-blur-md border-t border-[var(--color-primary)]/30 py-4 px-6 z-50 shadow-2xl">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center text-center gap-4 font-mono uppercase tracking-widest scale-90 md:scale-100 origin-bottom">
              <div className="flex flex-col">
                <span className="text-[var(--color-primary)] text-[10px] md:text-xs font-bold mb-1">Peak Actuator Thrust</span>
                <span className="text-white text-sm md:text-lg font-bold">1,500 N</span>
              </div>
              <div className="hidden md:block w-[1px] h-8 bg-white/20" />
              <div className="flex flex-col">
                <span className="text-[var(--color-primary)] text-[10px] md:text-xs font-bold mb-1">Subsea Pressure Tolerance</span>
                <span className="text-white text-sm md:text-lg font-bold">30 ATM</span>
              </div>
              <div className="hidden md:block w-[1px] h-8 bg-white/20" />
              <div className="flex flex-col">
                <span className="text-[var(--color-primary)] text-[10px] md:text-xs font-bold mb-1">Telemetry Latency</span>
                <span className="text-white text-sm md:text-lg font-bold">{'<'} 12 ms</span>
              </div>
              <div className="hidden md:block w-[1px] h-8 bg-white/20" />
              <div className="flex flex-col">
                <span className="text-[var(--color-primary)] text-[10px] md:text-xs font-bold mb-1">Control Loop Freq</span>
                <span className="text-white text-sm md:text-lg font-bold">100 Hz</span>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}