export default function CoverageHero() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(13,76,139,0.35),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_80%,rgba(240,106,0,0.12),transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 relative z-10 text-center">
        <span className="inline-flex items-center gap-2 bg-[rgba(240,106,0,0.12)] border border-[rgba(240,106,0,0.3)] text-[#FF8C2A] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
          📡 ÁREA DE COBERTURA
        </span>

        <h1 className="font-poppins text-4xl md:text-6xl font-black text-white leading-tight mb-5">
          A Sol Telecom perto{" "}
          <span className="bg-gradient-to-r from-[#F06A00] via-[#FF8C2A] to-[#FFB347] bg-clip-text text-transparent">
            de você
          </span>
        </h1>

        <p className="text-[#94A3B8] text-lg max-w-xl mx-auto leading-relaxed">
          Confira as cidades atendidas e saiba onde nossa fibra óptica já chegou.
          Em expansão constante para chegar cada vez mais longe.
        </p>
      </div>
    </section>
  );
}
