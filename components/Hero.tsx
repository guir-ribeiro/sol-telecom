"use client";

import { useEffect, useRef } from "react";
import { openWhatsApp } from "@/lib/whatsapp";

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;
    const colors = ["#F06A00", "#FF8C2A", "#0D4C8B", "#1565C0", "#ffffff"];
    for (let i = 0; i < 18; i++) {
      const p = document.createElement("div");
      const size = Math.random() * 5 + 2;
      const x = Math.random() * 100;
      const dur = Math.random() * 15 + 10;
      const delay = Math.random() * 10;
      const color = colors[Math.floor(Math.random() * colors.length)];
      p.style.cssText = `
        position:absolute; border-radius:50%; opacity:0;
        animation:float linear infinite;
        width:${size}px; height:${size}px;
        left:${x}%; background:${color};
        animation-duration:${dur}s;
        animation-delay:${delay}s;
      `;
      particlesRef.current.appendChild(p);
    }
  }, []);

  return (
    // ✅ Fundo fixo — hero sempre escuro nos dois temas
    <section className="relative min-h-[88vh] flex items-center overflow-hidden py-16">

      {/* BG — fixo, não muda com tema */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 60% 50%, rgba(13,76,139,0.35) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(240,106,0,0.15) 0%, transparent 60%),
            linear-gradient(135deg, #0B1120 0%, #0B1A30 50%, #0B1120 100%)
          `,
        }}
      />

      {/* PARTICLES */}
      <div ref={particlesRef} className="absolute inset-0 z-0 overflow-hidden" />

      <div className="max-w-6xl mx-auto px-5 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center w-full">

        {/* ── LEFT ── */}
        <div>
          {/* Tag — fundo sempre escuro, ok manter hardcoded */}
          <span className="inline-flex items-center gap-2 bg-[rgba(240,106,0,0.2)] border border-[rgba(240,106,0,0.4)] text-[#FF8C2A] px-4 py-1.5 rounded-full text-xs font-bold tracking-[2px] uppercase mb-5">
            ⚡ FIBRA ÓPTICA 100%
          </span>

          {/* ✅ text-white correto — hero sempre escuro */}
          <h1 className="font-poppins text-5xl lg:text-6xl font-black leading-[1.1] text-white mb-5">
            Internet que vai
            <br />
            na{" "}
            <span className="bg-gradient-to-r from-[#F06A00] via-[#FF8C2A] to-[#FFB347] bg-clip-text text-transparent">
              velocidade
            </span>
            <br />
            da sua vida
          </h1>

          {/* ✅ text-white/70 em vez de hardcoded #94A3B8 */}
          <p className="text-white/70 text-lg mb-9 max-w-lg leading-relaxed">
            Fibra óptica de verdade com Wi-Fi Plus, instalação grátis e suporte
            especializado. Do jeito que você merece.
          </p>

          <div className="flex gap-3 flex-wrap items-center">
            <button onClick={() => openWhatsApp("Quero assinar")} className="btn-orange">
              <i className="fab fa-whatsapp" /> Assine já
            </button>
            <a href="#planos" className="btn-ghost">Ver planos</a>
            <a href="/area-do-cliente" className="btn-ghost">Área do cliente</a>
          </div>

          {/* STATS */}
          <div className="flex gap-7 mt-10 pt-8 border-t border-white/[0.08] flex-wrap">
            {[
              { val: "700M", label: "Velocidade máxima" },
              { val: "100%", label: "Fibra óptica" },
              { val: "24/7", label: "Suporte" },
            ].map((s) => (
              <div key={s.label}>
                <strong className="block font-poppins text-2xl font-black text-[#F06A00]">
                  {s.val}
                </strong>
                {/* ✅ text-white/60 em vez de #94A3B8 */}
                <span className="text-xs text-white/60">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="animate-[slideRight_0.8s_ease-out]">

          {/* PLAN CARD — card-dark já é fixo/escuro, ok */}
          <div className="card-dark-glass p-9 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div
              className="absolute top-0 left-0 right-0 h-[3px]"
              style={{ background: "linear-gradient(90deg,#F06A00,#FF8C2A,#FFB347)" }}
            />
            <span className="absolute top-5 right-5 bg-gradient-to-r from-[#F06A00] to-[#FF8C2A] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide">
              ⭐ DESTAQUE
            </span>

            <p className="text-xs font-bold tracking-[2px] text-[#F06A00] uppercase mb-4">
              Plano mais popular
            </p>

            {/* ✅ text-white — dentro de card-dark (sempre escuro) */}
            <div className="font-poppins text-[72px] font-black text-white leading-none">350</div>
            <div className="text-xl font-bold text-[#F06A00] mb-5">MEGA</div>

            <div className="py-4 my-4 border-t border-b border-white/[0.08]">
              {/* ✅ text-white/60 em vez de #94A3B8 */}
              <p className="text-xs text-white/60">por apenas</p>
              <p className="font-poppins text-[38px] font-black text-white leading-tight">
                <sup className="text-lg align-super">R$</sup>92
                <sup className="text-lg">,90</sup>
              </p>
              <p className="text-xs text-white/60">por mês</p>
            </div>

            <ul className="space-y-2 mb-6">
              {[
                "100% Fibra Óptica",
                "Wi-Fi Plus 2.4G e 5G",
                "Suporte especializado",
                "Instalação grátis",
                "App Watch incluso",
              ].map((f) => (
                <li
                  key={f}
                  // ✅ text-white/85 em vez de #E2E8F0
                  className="flex items-center gap-2.5 text-sm text-white/85 border-b border-white/[0.04] pb-2 last:border-none"
                >
                  <i className="fas fa-check-circle text-[#22C55E] text-xs w-4" />
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={() => openWhatsApp("Plano Fibra 350M — R$ 92,90/mês")}
              className="btn-orange w-full justify-center"
            >
              <i className="fab fa-whatsapp" /> Contratar agora
            </button>
          </div>

          {/* STARBEM BANNER — fundo roxo fixo, ok */}
          <button
            onClick={() => openWhatsApp("Aplicativo de teleconsulta Starbem")}
            className="mt-5 w-full flex items-center gap-4 bg-gradient-to-r from-[#1a0533] to-[#2d0d5e] border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/60 hover:-translate-y-0.5 transition-all text-left"
          >
            <span className="text-3xl">🏥</span>
            <div className="flex-1">
              {/* ✅ text-white — fundo roxo escuro fixo */}
              <strong className="block text-white text-sm mb-1">
                Teleconsulta Starbem disponível!
              </strong>
              {/* ✅ text-white/60 em vez de #94A3B8 */}
              <span className="text-white/60 text-xs">
                Saúde na palma da mão a partir de R$ 34,90/mês
              </span>
            </div>
            <i className="fas fa-chevron-right text-white/40" />
          </button>

        </div>
      </div>
    </section>
  );
}
