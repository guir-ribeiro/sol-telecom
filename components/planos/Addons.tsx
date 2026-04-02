"use client";

import { useState } from "react";
import Image from "next/image";

const addons = [
  { id: "premiere", name: "Premiere",  price: "R$ 57,90 / mês", img: "/assets/apps/premier.png"  },
  { id: "telecine", name: "Telecine",  price: "R$ 31,90 / mês", img: "/assets/apps/telecine.png" },
  { id: "max",      name: "Max",       price: "R$ 36,41 / mês", img: "/assets/apps/max.png"      },
  { id: "combate",  name: "Combate",   price: "R$ 37,40 / mês", img: "/assets/apps/combate.png"  },
];

export default function Addons() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );

  return (
    <section className="py-20 bg-gradient-to-br from-[#0D1A2E] to-[#111827]">
      <div className="max-w-6xl mx-auto px-5">
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[rgba(240,106,0,0.12)] border border-[rgba(240,106,0,0.3)] text-[#F06A00] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            PERSONALIZE
          </span>
          <h2 className="font-poppins text-4xl font-black text-white mb-3">
            Assinaturas <span className="text-[#F06A00]">Adicionais</span>
          </h2>
          <p className="text-[#94A3B8] text-base max-w-md mx-auto">
            Selecione os adicionais desejados e combine com qualquer plano.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {addons.map((addon) => {
            const checked = selected.includes(addon.id);
            return (
              <button
                key={addon.id}
                onClick={() => toggle(addon.id)}
                className={`relative flex flex-col items-center text-center p-6 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1
                  ${checked
                    ? "border-[#F06A00] bg-[rgba(240,106,0,0.1)]"
                    : "border-[rgba(255,255,255,0.07)] bg-[#141F35] hover:border-[rgba(240,106,0,0.4)]"
                  }
                `}
              >
                {/* CHECK */}
                <div className={`absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center transition-all border-2
                  ${checked
                    ? "bg-[#F06A00] border-[#F06A00]"
                    : "bg-transparent border-[rgba(255,255,255,0.2)]"
                  }
                `}>
                  {checked && <i className="fas fa-check text-white text-[9px]" />}
                </div>

                {/* IMAGE */}
                <div className="relative h-14 w-24 mb-3">
                  <Image
                    src={addon.img}
                    alt={addon.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <span className="font-bold text-white text-sm mb-1">{addon.name}</span>
                <span className="text-[#F06A00] text-sm font-semibold">{addon.price}</span>
              </button>
            );
          })}
        </div>

        {/* SELECTED HINT */}
        {selected.length > 0 && (
          <p className="text-center text-[#94A3B8] text-sm mt-6">
            ✅ {selected.length} adicional(is) selecionado(s) — escolha um plano acima para contratar
          </p>
        )}
      </div>
    </section>
  );
}
