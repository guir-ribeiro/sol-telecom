"use client";

import { useState } from "react";
import Image from "next/image";

const addons = [
  { id: "premiere", name: "Premiere", price: "R$ 57,90 / mês", img: "/assets/premier.png"  },
  { id: "telecine", name: "Telecine", price: "R$ 31,90 / mês", img: "/assets/telecine.png" },
  { id: "max",      name: "Max",      price: "R$ 36,41 / mês", img: "/assets/max.png"      },
  { id: "combate",  name: "Combate",  price: "R$ 37,40 / mês", img: "/assets/combate.png"  },
];

export default function Addons() {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (id: string) =>
    setSelected((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);

  return (
    <section id="adicionais" className="py-20 bg-body">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="section-tag">CANAIS ADICIONAIS</div>
          <h2 className="section-title">
            Adicione ao seu <span className="text-[#FF8C2A]">Plano</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {addons.map((addon) => (
            <div
              key={addon.id}
              onClick={() => toggle(addon.id)}
              className="card-themed p-5 cursor-pointer transition-all duration-300 hover:-translate-y-1 group"
              style={{
                outline: selected.includes(addon.id)
                  ? "2px solid rgba(240,106,0,0.6)"
                  : "2px solid transparent",
                boxShadow: selected.includes(addon.id)
                  ? "0 0 20px rgba(240,106,0,0.2)"
                  : "none",
              }}
            >
              <div
                className="rounded-xl p-3 mb-3 flex items-center justify-center"
                style={{ minHeight: "70px" }}
              >
                <Image src={addon.img} alt={addon.name} width={110} height={55} className="object-contain" />
              </div>
              <p className="text-center text-sm font-bold text-body">{addon.name}</p>
              <p className="text-center text-xs text-muted mt-1">{addon.price}</p>

              {selected.includes(addon.id) && (
                <div className="mt-2 text-center">
                  <span className="text-[10px] font-bold text-[#FF8C2A] tracking-wide uppercase">
                    ✓ Selecionado
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
