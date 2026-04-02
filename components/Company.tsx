"use client";

import Link from "next/link";
import { openWhatsApp } from "@/lib/whatsapp";

const features = [
  { icon: "fa-shield-alt",     label: "SLA e disponibilidade garantida" },
  { icon: "fa-network-wired",  label: "IP fixo disponível"              },
  { icon: "fa-headset",        label: "Suporte técnico prioritário"     },
  { icon: "fa-bolt",           label: "Alta velocidade simétrica"       },
  { icon: "fa-file-contract",  label: "Planos personalizados"           },
];

export default function Company() {
  return (
    <section className="py-20 bg-body">
      <div className="max-w-6xl mx-auto px-5">
        <div
          className="relative overflow-hidden rounded-3xl p-14 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border"
          style={{
            background: "rgba(13, 76, 139, 0.1)",
            borderColor: "rgba(13, 76, 139, 0.3)",
          }}
        >
          <div
            className="absolute -top-1/2 -right-1/5 w-96 h-96 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(13,76,139,0.2), transparent 70%)" }}
          />

          <div className="relative">
            <div className="section-tag">SOLUÇÕES CORPORATIVAS</div>
            {/* ✅ text-body — adapta ao tema */}
            <h2 className="font-poppins text-4xl font-black leading-tight mb-4 text-body">
              Para sua <span className="text-[#F06A00]">Empresa</span>
            </h2>
            <p className="text-muted text-base leading-relaxed mb-7">
              Deixe a conexão da sua empresa nas mãos de quem entende. Planos
              corporativos com IP fixo, SLA garantido e suporte prioritário.
            </p>
            <div className="flex gap-3 flex-wrap">
              <button onClick={() => openWhatsApp("Plano para empresa")} className="btn-orange">
                <i className="fab fa-whatsapp" /> Falar com especialista
              </button>
              <Link href="/empresas" className="btn-ghost">Ver página</Link>
            </div>
          </div>

          <div className="relative flex flex-col gap-3">
            {features.map((f) => (
              <div
                key={f.label}
                // ✅ card-themed para os itens de feature
                className="card-themed flex items-center gap-3 px-4 py-3.5 rounded-xl"
              >
                <i className={`fas ${f.icon} text-[#F06A00] text-lg w-6`} />
                <span className="text-sm font-medium text-body">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
