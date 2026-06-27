export default function Team() {
  const teamMembers = [
    {
      name: "Amjad Hamed",
      role: "Lunabotics Lead"
    }
  ];

  return (
    <div className="w-full pb-24 min-h-screen bg-[#050505]">
      {/* Background Grid */}
      <div className="fixed inset-0 tech-grid opacity-20 pointer-events-none" />

      {/* Header */}
      <header className="bg-[var(--color-bg-card)] border-b border-white/10 pt-32 pb-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold uppercase tracking-tighter text-white mb-6">
            Engineering Roster
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-3xl leading-relaxed">
            A multi-disciplinary team of hardware, software, and mechanical engineers focused on deploying robust autonomous systems in extreme environments.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[var(--color-bg-base)] border border-white/10 p-8 hover:border-[var(--color-primary)] transition-colors group hud-border">
              <div className="w-20 h-20 bg-black mb-6 grayscale group-hover:grayscale-0 transition-all border border-white/5 flex items-center justify-center">
                <span className="text-[10px] uppercase text-white/30 text-center font-mono">[ Photo ]</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-wider">{member.name}</h3>
              <div className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-widest">
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}