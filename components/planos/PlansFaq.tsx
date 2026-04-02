"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Como funciona a instalação?",
    a: "A instalação é 100% gratuita e feita por nossa equipe técnica especializada. Após a contratação, agendamos a visita em horário conveniente para você.",
  },
  {
    q: "Os planos têm fidelidade?",
    a: "Não! Nenhum de nossos planos possui fidelidade. Você pode cancelar quando quiser, sem multas ou burocracias.",
  },
  {
    q: "O Wi-Fi Plus está incluso em todos os planos?",
    a: "Sim. Todos os planos já incluem roteador com Wi-Fi Plus dual-band (2.4GHz e 5GHz) sem custo adicional.",
  },
  {
    q: "A velocidade é simétrica?",
    a: "Sim! Upload e download na mesma velocidade contratada. Nada de velocidade de upload reduzida.",
  },
  {
    q: "Como adiciono um serviço de streaming ao meu plano?",
    a: "É simples! Selecione os adicionais desejados nesta página e ao clicar em Contratar, sua mensagem já vai com tudo para nosso time no WhatsApp.",
  },
  {
    q: "Qual a diferença entre os planos?",
    a: "A principal diferença é a velocidade. Todos incluem os mesmos benefícios base. Para uso doméstico leve, o 120M atende bem. Para streamings e home office, 350M ou acima é o ideal.",
  },
  {
    q: "Vocês atendem em qual região?",
    a: "Atendemos diversas regiões. Fale com nossa equipe no WhatsApp para verificar se já chegamos até você!",
  },
];

export default function PlansFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-[#0D1A2E] to-[#0B1120]">
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="inline-block bg-[rgba(240,106,0,0.12)] border border-[rgba(240,106,0,0.3)] text-[#F06A00] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="font-poppins text-4xl font-black text-white mb-3">
            Perguntas <span className="text-[#F06A00]">Frequentes</span>
          </h2>
          <p className="text-[#94A3B8]">Tire suas dúvidas antes de assinar.</p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all duration-300
                ${open === i
                  ? "border-[rgba(240,106,0,0.4)] bg-[rgba(240,106,0,0.06)]"
                  : "border-[rgba(255,255,255,0.07)] bg-[#141F35]"
                }
              `}
            >
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-white text-sm pr-4">
                  {faq.q}
                </span>
                <i className={`fas fa-chevron-down text-[#F06A00] text-xs transition-transform duration-300 shrink-0
                  ${open === i ? "rotate-180" : ""}
                `} />
              </button>

              {open === i && (
                <div className="px-5 pb-4 text-[#94A3B8] text-sm leading-relaxed border-t border-[rgba(255,255,255,0.06)] pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
