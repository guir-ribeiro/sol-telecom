"use client";

import Link from "next/link";
import Image from "next/image";
import { openWhatsApp } from "@/lib/whatsapp";

const plans = [
  { label: "120 Mega — R$ 75,80", plan: "Plano Fibra 120M — R$ 75,80/mês" },
  { label: "350 Mega — R$ 92,90", plan: "Plano Fibra 350M — R$ 92,90/mês" },
  { label: "550 Mega — R$ 102,90", plan: "Plano Fibra 550M — R$ 102,90/mês" },
  { label: "700 Mega — R$ 132,90", plan: "Plano Fibra 700M — R$ 132,90/mês" },
];

export default function Footer() {
  return (
    <footer className="bg-[#070D1A] border-t border-white/[0.06] pt-14">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/[0.06]">
          {/* BRAND */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative w-40 h-16">
                <Image
                  src="/assets/logo.png"
                  alt="Sol Telecom"
                  fill
                  sizes="160px"
                  className="object-contain object-left"
                  quality={100}
                />
              </div>
            </Link>


            <p className="text-[#94A3B8] text-sm leading-relaxed mb-5 max-w-xs">
              Internet fibra óptica com velocidade real, atendimento especializado e preço justo.
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://www.instagram.com/soltelecom.fibra"
                target="_blank"
                rel="noopener"
                className="w-10 h-10 bg-white/[0.06] border border-white/10 rounded-xl flex items-center justify-center text-[#94A3B8] hover:bg-[#F06A00] hover:border-[#F06A00] hover:text-white transition-all"
              >
                <i className="fab fa-instagram text-base" />
              </a>
              <button
                onClick={() => openWhatsApp("Contato via WhatsApp")}
                className="w-10 h-10 bg-white/[0.06] border border-white/10 rounded-xl flex items-center justify-center text-[#94A3B8] hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all"
              >
                <i className="fab fa-whatsapp text-base" />
              </button>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-poppins text-sm font-bold text-white mb-5">Links</h4>
            <div className="flex flex-col gap-2.5">
              {["/planos", "/cobertura", "/empresas", "/suporte", "/area-do-cliente"].map((href, i) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[#94A3B8] text-sm hover:text-[#F06A00] hover:pl-1 transition-all"
                >
                  {["Planos", "Cobertura", "Para Empresas", "Atendimento", "2ª Via do Boleto"][i]}
                </Link>
              ))}
            </div>
          </div>

          {/* PLANS */}
          <div>
            <h4 className="font-poppins text-sm font-bold text-white mb-5">Planos</h4>
            <div className="flex flex-col gap-2.5">
              {plans.map((p) => (
                <button
                  key={p.plan}
                  onClick={() => openWhatsApp(p.plan)}
                  className="text-[#94A3B8] text-sm text-left hover:text-[#F06A00] hover:pl-1 transition-all"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* QUICK */}
          <div>
            <h4 className="font-poppins text-sm font-bold text-white mb-5">Acesso rápido</h4>
            <div className="flex flex-col gap-2">
              <Link href="/area-do-cliente" className="btn-orange text-xs px-4 py-2">
                📄 2ª Via do Boleto
              </Link>
              <a
                href="https://www.speedtest.net/"
                target="_blank"
                rel="noopener"
                className="btn-orange text-xs px-4 py-2"
              >
                ⚡ Teste de Velocidade
              </a>
              <button
                onClick={() => openWhatsApp("Suporte técnico")}
                className="btn-orange text-xs px-4 py-2"
              >
                🛠️ Suporte Técnico
              </button>
            </div>
          </div>
        </div>

        <div className="py-5 flex items-center justify-between flex-wrap gap-3">
          <small className="text-[#94A3B8] text-xs">
            © {new Date().getFullYear()} Sol Telecom. Todos os direitos reservados.
          </small>
          <small className="text-[#94A3B8] text-xs">
            Internet Fibra Óptica de Qualidade
          </small>
        </div>
      </div>
    </footer>
  );
}
