import { openWhatsApp } from "@/lib/whatsapp";

export default function PlansHero() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(13,76,139,0.35),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_80%,rgba(240,106,0,0.12),transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 relative z-10 text-center">
        {/* TAG */}
        <span className="inline-flex items-center gap-2 bg-[rgba(240,106,0,0.12)] border border-[rgba(240,106,0,0.3)] text-[#FF8C2A] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
          ⚡ FIBRA ÓPTICA 100%
        </span>

        {/* TITLE */}
        <h1 className="font-poppins text-4xl md:text-6xl font-black text-white leading-tight mb-5">
          Internet do jeito{" "}
          <span className="bg-gradient-to-r from-[#F06A00] via-[#FF8C2A] to-[#FFB347] bg-clip-text text-transparent">
            que você merece
          </span>
        </h1>

        <p className="text-[#94A3B8] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Planos de fibra óptica com Wi-Fi Plus, instalação grátis e
          suporte especializado. Sem fidelidade, sem surpresas.
        </p>

        {/* STATS */}
        <div className="flex items-center justify-center gap-10 flex-wrap">
          {[
            { value: "700M",  label: "Velocidade máxima" },
            { value: "100%",  label: "Fibra óptica"      },
            { value: "24/7",  label: "Suporte"           },
            { value: "R$0",   label: "Instalação"        },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <strong className="block font-poppins text-3xl font-black text-[#F06A00]">
                {s.value}
              </strong>
              <span className="text-xs text-[#94A3B8]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
