"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("@/components/cobertura/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-125 rounded-2xl bg-dark-card border border-[rgba(255,255,255,0.07)] flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-3 animate-pulse">🗺️</div>
        <p className="text-[#94A3B8] text-sm">Carregando mapa...</p>
      </div>
    </div>
  ),
});

export default function CoverageMap() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-5">
      <div className="text-center mb-10">
        <span className="inline-block bg-[rgba(240,106,0,0.12)] border border-[rgba(240,106,0,0.3)] text-orange px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
          MAPA DE COBERTURA
        </span>
        <h2 className="font-poppins text-3xl md:text-4xl font-black text-white mb-3">
          Onde estamos <span className="text-orange">presentes</span>
        </h2>
        <p className="text-[#94A3B8] text-sm">
          🟠 Atendemos agora &nbsp;|&nbsp; 🔵 Em breve
        </p>
      </div>

      <LeafletMap />
    </section>
  );
}
