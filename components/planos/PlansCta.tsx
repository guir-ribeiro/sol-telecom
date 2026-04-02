"use client";

import { openWhatsApp } from "@/lib/whatsapp";

export default function PlansCta() {
  return (
    <section className="py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-[rgba(240,106,0,0.25)] bg-gradient-to-br from-[rgba(240,106,0,0.12)] to-[rgba(240,106,0,0.04)] p-14 text-center">
          {/* GLOW */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(240,106,0,0.1),transparent_70%)] pointer-events-none" />

          <h2 className="font-poppins text-4xl font-black text-white mb-3 relative">
            Pronto para <span className="text-[#F06A00]">assinar?</span>
          </h2>
          <p className="text-[#94A3B8] text-base mb-8 relative">
            Fale agora com nosso time e tenha internet de qualidade hoje mesmo.
          </p>

          <div className="flex gap-3 justify-center flex-wrap relative">
            <button
              onClick={() => openWhatsApp("Quero assinar um plano")}
              className="flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold px-8 py-3.5 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <i className="fab fa-whatsapp text-lg" />
              Falar no WhatsApp
            </button>
            <button
              onClick={() => openWhatsApp("Verificar cobertura na minha região")}
              className="flex items-center gap-2 border border-[rgba(255,255,255,0.2)] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <i className="fas fa-map-marker-alt" />
              Verificar cobertura
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
