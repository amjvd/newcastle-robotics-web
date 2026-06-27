export default function ROV() {
  return (
    <div className="w-full pb-24 min-h-screen flex items-center justify-center relative">
      {/* Background Grid */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
      
      <div className="text-center z-10 p-8 border border-white/10 bg-black/50 backdrop-blur-md">
        <div className="w-16 h-16 border-4 border-dashed border-[#0066ff] rounded-full flex items-center justify-center mx-auto mb-6 opacity-50 animate-[spin_10s_linear_infinite]" />
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white mb-4">
          Subsea ROV
        </h1>
        <p className="text-xl font-mono text-[#0066ff] uppercase tracking-widest mb-2">
          Architecture in Development
        </p>
        <p className="text-sm text-[var(--color-text-muted)] max-w-lg mx-auto mt-4">
          R&D details regarding LiDAR integration, deep-water enclosures, and high-pressure resilience will be available soon.
        </p>
        <a href="/" className="inline-block mt-8 btn-outline">
          Return to Hub
        </a>
      </div>
    </div>
  );
}