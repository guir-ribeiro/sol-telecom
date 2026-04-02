"use client";

import { openWhatsApp } from "@/lib/whatsapp";

const plans = [
  {
    speed: 120, price: "75,80", featured: false,
    features: ["100% Fibra Óptica", "Wi-Fi Plus", "Suporte especializado", "Instalação grátis", "Apps opcionais"],
    watchIncluded: false,
  },
  {
    speed: 350, price: "92,90", featured: true,
    features: ["100% Fibra Óptica", "Wi-Fi Plus", "Suporte especializado", "Instalação grátis"],
    watchIncluded: true,
  },
  {
    speed: 550, price: "102,90", featured: false,
    features: ["100% Fibra Óptica", "Wi-Fi Plus", "Suporte especializado", "Instalação grátis"],
    watchIncluded: true,
  },
  {
    speed: 700, price: "132,90", featured: false,
    features: ["100% Fibra Óptica", "Wi-Fi Plus", "Suporte especializado", "Instalação grátis"],
    watchIncluded: true,
  },
];

export default function Plans() {
  return (
    <section id="planos" className="py-24" style={{ background: "var(--section-alt-bg)" }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <div className="section-tag">ESCOLHA SEU PLANO</div>
          <h2 className="section-title">
            Nossos <span className="text-[#FF8C2A]">Planos</span>
          </h2>
          <p className="text-muted text-base max-w-md mx-auto">
            Fibra óptica para todos os perfis. Escolha o seu e assine agora.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.speed}
              className={`card-dark overflow-hidden flex flex-col transition-all duration-300 relative
                ${plan.featured
                  ? "border-[rgba(255,140,42,0.6)] -translate-y-2 shadow-[0_20px_60px_rgba(240,106,0,0.25)] hover:-translate-y-4"
                  : "hover:-translate-y-2 hover:border-[rgba(240,106,0,0.4)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-[#F06A00] to-[#FF8C2A] text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-2xl tracking-wide">
                  MAIS POPULAR
                </div>
              )}

              <div className={`px-6 py-7 text-center border-b border-white/[0.07]`}
                style={{
                  background: plan.featured
                    ? "linear-gradient(135deg, rgba(240,106,0,0.25), rgba(255,140,42,0.1))"
                    : "rgba(255,255,255,0.04)"
                }}
              >
                <div className="font-poppins text-[60px] font-black text-white leading-none">
                  {plan.speed}
                </div>
                <div className="text-sm font-bold tracking-[2px] text-[#FF8C2A]">MEGA</div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="mb-5">
                  <span className="text-white/50 text-sm">R$ </span>
                  <span className="font-poppins text-3xl font-black text-white">{plan.price}</span>
                  <span className="text-white/50 text-xs">/mês</span>
                </div>

                <ul className="flex-1 space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-white/80 border-b border-white/[0.05] pb-2 last:border-none">
                      <i className="fas fa-check-circle text-[#22C55E] text-xs w-4" />
                      {f}
                    </li>
                  ))}
                  {plan.watchIncluded && (
                    <li className="flex items-center gap-2.5 text-sm text-white/80">
                      <i className="fas fa-check-circle text-[#22C55E] text-xs w-4" />
                      App Watch incluso
                    </li>
                  )}
                </ul>

                <button
                  onClick={() => openWhatsApp(`Plano Fibra ${plan.speed}M — R$ ${plan.price}/mês`)}
                  className={`w-full justify-center ${plan.featured ? "btn-orange" : "btn-ghost"}`}
                >
                  <i className="fab fa-whatsapp" /> Contratar
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
