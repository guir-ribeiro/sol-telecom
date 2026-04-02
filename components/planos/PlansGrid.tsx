"use client";

import { openWhatsApp } from "@/lib/whatsapp";

const plans = [
  {
    speed:    "120",
    price:    "75,80",
    featured: false,
    badge:    null,
    features: [
      "100% Fibra Óptica",
      "Wi-Fi Plus 2.4G e 5G",
      "Suporte especializado",
      "Instalação grátis",
      "Sem fidelidade",
    ],
  },
  {
    speed:    "350",
    price:    "92,90",
    featured: true,
    badge:    "MAIS POPULAR",
    features: [
      "100% Fibra Óptica",
      "Wi-Fi Plus 2.4G e 5G",
      "Suporte especializado",
      "Instalação grátis",
      "Sem fidelidade",
      "App Watch incluso",
    ],
  },
  {
    speed:    "550",
    price:    "102,90",
    featured: false,
    badge:    null,
    features: [
      "100% Fibra Óptica",
      "Wi-Fi Plus 2.4G e 5G",
      "Suporte especializado",
      "Instalação grátis",
      "Sem fidelidade",
      "App Watch incluso",
    ],
  },
  {
    speed:    "700",
    price:    "132,90",
    featured: false,
    badge:    "MELHOR VELOCIDADE",
    features: [
      "100% Fibra Óptica",
      "Wi-Fi Plus 2.4G e 5G",
      "Suporte especializado",
      "Instalação grátis",
      "Sem fidelidade",
      "App Watch incluso",
    ],
  },
];

export default function PlansGrid() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-5">
      {/* HEADER */}
      <div className="text-center mb-14">
        <span className="inline-block bg-[rgba(240,106,0,0.12)] border border-[rgba(240,106,0,0.3)] text-[#F06A00] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
          ESCOLHA SEU PLANO
        </span>
        <h2 className="font-poppins text-4xl md:text-5xl font-black text-white mb-3">
          Nossos <span className="text-[#F06A00]">Planos</span>
        </h2>
        <p className="text-[#94A3B8] text-base max-w-md mx-auto">
          Fibra óptica para todos os perfis. Escolha o seu e assine agora.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.speed}
            className={`relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2
              ${plan.featured
                ? "border-[rgba(108,63,197,0.5)] shadow-[0_20px_60px_rgba(108,63,197,0.2)] -translate-y-2"
                : "border-[rgba(255,255,255,0.07)] hover:border-[rgba(240,106,0,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              }
              bg-gradient-to-br from-[#141F35] to-[#0D1A2E]
            `}
          >
            {/* BADGE */}
            {plan.badge && (
              <div className={`absolute top-0 right-0 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-2xl tracking-wider
                ${plan.featured
                  ? "bg-gradient-to-r from-[#6C3FC5] to-[#8B5CF6]"
                  : "bg-gradient-to-r from-[#F06A00] to-[#FF8C2A]"
                }
              `}>
                {plan.badge}
              </div>
            )}

            {/* HEADER */}
            <div className={`text-center px-6 pt-8 pb-6 border-b border-[rgba(255,255,255,0.06)]
              ${plan.featured
                ? "bg-[rgba(108,63,197,0.1)]"
                : "bg-[rgba(240,106,0,0.08)]"
              }
            `}>
              <div className="font-poppins text-7xl font-black text-white leading-none">
                {plan.speed}
              </div>
              <div className={`text-sm font-bold tracking-widest mt-1
                ${plan.featured ? "text-[#A78BFA]" : "text-[#F06A00]"}
              `}>
                MEGA
              </div>
            </div>

            {/* BODY */}
            <div className="flex flex-col flex-1 p-6">
              {/* PRICE */}
              <div className="mb-5">
                <span className="text-[#94A3B8] text-sm">R$ </span>
                <span className="font-poppins text-4xl font-black text-white">
                  {plan.price}
                </span>
                <span className="text-[#94A3B8] text-sm">/mês</span>
              </div>

              {/* FEATURES */}
              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-[#E2E8F0] border-b border-[rgba(255,255,255,0.04)] pb-2 last:border-0"
                  >
                    <i className="fas fa-check-circle text-green-500 text-xs w-3.5" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() =>
                  openWhatsApp(`Plano Fibra ${plan.speed}M — R$ ${plan.price}/mês`)
                }
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5
                  ${plan.featured
                    ? "bg-gradient-to-r from-[#6C3FC5] to-[#8B5CF6] shadow-[0_4px_20px_rgba(108,63,197,0.4)] hover:shadow-[0_8px_30px_rgba(108,63,197,0.6)]"
                    : "bg-gradient-to-r from-[#F06A00] to-[#FF8C2A] shadow-[0_4px_20px_rgba(240,106,0,0.4)] hover:shadow-[0_8px_30px_rgba(240,106,0,0.6)]"
                  }
                `}
              >
                <i className="fab fa-whatsapp" />
                Contratar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
