"use client";

import Link from "next/link";
import { openWhatsApp } from "@/lib/whatsapp";

export default function CoverageCTA() {
  return (
    <section className="py-20 px-5" style={{ background: "var(--section-alt-bg)" }}>
      <div className="max-w-6xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl py-16 px-10 text-center"
          style={{
            background: "var(--coverage-bg)",
            border: "1px solid var(--coverage-border)",
          }}
        >
          {/* Glow central */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(240,106,0,0.12), transparent 70%)" }}
          />

          <div className="relative">
            <div className="section-tag mb-4">COBERTURA</div>
            <h2 className="font-poppins text-4xl font-black text-body mb-3">
              Verifique a cobertura{" "}
              <span className="text-[#FF8C2A]">na sua região</span>
            </h2>
            <p className="text-muted text-base mb-8 max-w-md mx-auto">
              Fale com nosso time e descubra se a Sol Telecom já chegou até você.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => openWhatsApp("Verificar cobertura")} className="btn-whatsapp">
                <i className="fab fa-whatsapp" /> Verificar cobertura
              </button>
              <Link href="/cobertura" className="btn-ghost">
                Ver mapa de cobertura
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
