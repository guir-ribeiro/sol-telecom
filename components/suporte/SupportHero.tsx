"use client";

import { openWhatsApp } from "@/lib/whatsapp";

const stats = [
  { icon: "⚡", value: "Rápido",    label: "Resposta ágil"       },
  { icon: "🤝", value: "Humano",    label: "Atendimento real"     },
  { icon: "🛠️", value: "Técnico",   label: "Equipe especializada" },
  { icon: "📲", value: "WhatsApp",  label: "Canal principal"      },
];

export default function SupportHero() {
  return (
    <section className="relative py-20 overflow-hidden text-center">
      {/* BG */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 50% 0%, rgba(13,76,139,0.4) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 80% 80%, rgba(240,106,0,0.12) 0%, transparent 60%),
            linear-gradient(180deg, #0B1120 0%, #0B1A30 60%, #0B1120 100%)
          `,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        {/* Tag */}
        <span className="inline-flex items-center gap-2 bg-[rgba(240,106,0,0.2)] border border-[rgba(240,106,0,0.4)] text-[#FF8C2A] px-4 py-1.5 rounded-full text-xs font-bold tracking-[2px] uppercase mb-5">
          <i className="fas fa-headset" /> ATENDIMENTO
        </span>

        <h1 className="font-poppins text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-5">
          Estamos aqui para{" "}
          <span className="bg-gradient-to-r from-[#F06A00] via-[#FF8C2A] to-[#FFB347] bg-clip-text text-transparent">
            te ajudar
          </span>
        </h1>

        <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Fale com a nossa equipe pelo WhatsApp ou Instagram. Atendimento rápido,
          humano e especializado.
        </p>

        <div className="flex gap-3 justify-center flex-wrap mb-14">
          <button
            onClick={() => openWhatsApp("Atendimento geral")}
            className="btn-whatsapp"
          >
            <i className="fab fa-whatsapp" /> Falar no WhatsApp
          </button>
          <a href="#topicos" className="btn-ghost">
            Ver assuntos
          </a>
        </div>

        {/* STATS BAR */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden border"
          style={{
            background: "var(--card-fixed-bg)",
            borderColor: "var(--card-fixed-border)",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="py-6 px-4 text-center border-r border-white/[0.07] last:border-r-0 hover:bg-[rgba(240,106,0,0.06)] transition-all"
            >
              <span className="text-2xl block mb-2">{s.icon}</span>
              <span className="block font-poppins text-xl font-black text-[#F06A00] leading-none mb-1">
                {s.value}
              </span>
              <span className="text-xs text-white/50">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
