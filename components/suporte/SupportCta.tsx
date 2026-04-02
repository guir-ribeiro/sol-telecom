"use client";

import Link from "next/link";
import { openWhatsApp } from "@/lib/whatsapp";

export default function SupportCta() {
  return (
    <section className="py-20 bg-body">
      <div className="max-w-6xl mx-auto px-5">
        <div
          className="relative overflow-hidden rounded-3xl py-16 px-10 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(37,211,102,0.1), rgba(37,211,102,0.04))",
            border: "1px solid rgba(37,211,102,0.2)",
          }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(37,211,102,0.08), transparent 70%)",
            }}
          />

          <div className="relative">
            <span className="text-5xl block mb-5">💬</span>

            <h2 className="font-poppins text-3xl font-black text-body mb-3">
              Ainda tem dúvidas?
            </h2>
            <p className="text-muted text-base mb-8 max-w-md mx-auto">
              Nossa equipe está pronta para te atender agora mesmo. É só mandar
              uma mensagem!
            </p>

            <div className="flex gap-3 justify-center flex-wrap">
              <button
                onClick={() => openWhatsApp("Atendimento geral — dúvidas")}
                className="btn-whatsapp"
              >
                <i className="fab fa-whatsapp" /> Falar no WhatsApp
              </button>
              <Link href="/planos" className="btn-ghost">
                Ver planos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
