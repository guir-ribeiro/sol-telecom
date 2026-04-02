"use client";

import { useState } from "react";
import { openWhatsApp } from "@/lib/whatsapp";

const faqs = [
  {
    q: "Como faço para contratar a Sol Telecom?",
    a: () => (
      <>
        É simples! Clique em{" "}
        <button
          onClick={() => openWhatsApp("Quero contratar um plano")}
          className="text-[#FF8C2A] underline underline-offset-2 hover:text-[#F06A00] transition-colors"
        >
          Falar no WhatsApp
        </button>{" "}
        e nossa equipe vai te auxiliar na escolha do melhor plano, verificar a
        cobertura no seu endereço e agendar a instalação — que é 100% gratuita.
      </>
    ),
  },
  {
    q: "Qual o prazo para instalação após a contratação?",
    a: () => (
      <>
        Após a confirmação do pedido, nossa equipe técnica entra em contato para
        agendar a instalação. Em geral, o prazo é de até 3 dias úteis, podendo
        variar de acordo com a disponibilidade da sua região.
      </>
    ),
  },
  {
    q: "Tem fidelidade no contrato?",
    a: () => (
      <>
        Não! A Sol Telecom não exige fidelidade. Você pode cancelar ou alterar
        seu plano a qualquer momento sem multas. Nossa confiança está na
        qualidade do serviço que prestamos.
      </>
    ),
  },
  {
    q: "A velocidade contratada é garantida?",
    a: () => (
      <>
        Trabalhamos com fibra óptica 100%, o que garante uma conexão muito mais
        estável e próxima da velocidade contratada. Se precisar testar, acesse o{" "}
        <a
          href="https://www.speedtest.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FF8C2A] underline underline-offset-2 hover:text-[#F06A00] transition-colors"
        >
          Speedtest
        </a>{" "}
        e nos envie o resultado pelo WhatsApp.
      </>
    ),
  },
  {
    q: "Como solicitar a 2ª via do boleto?",
    a: () => (
      <>
        Você pode solicitar pelo{" "}
        <button
          onClick={() => openWhatsApp("Solicitar 2ª via de boleto")}
          className="text-[#FF8C2A] underline underline-offset-2 hover:text-[#F06A00] transition-colors"
        >
          WhatsApp
        </button>{" "}
        ou acessar diretamente a{" "}
        <a
          href="/area-do-cliente"
          className="text-[#FF8C2A] underline underline-offset-2 hover:text-[#F06A00] transition-colors"
        >
          Área do Cliente
        </a>
        . Tenha em mãos seu CPF ou número do contrato para agilizar o atendimento.
      </>
    ),
  },
  {
    q: "O que faço se a internet cair?",
    a: () => (
      <>
        Primeiro tente reiniciar o roteador (desligue, aguarde 30 segundos e
        ligue novamente). Se o problema persistir, fale com nossa equipe pelo{" "}
        <button
          onClick={() => openWhatsApp("Suporte técnico — Sem conexão")}
          className="text-[#FF8C2A] underline underline-offset-2 hover:text-[#F06A00] transition-colors"
        >
          WhatsApp
        </button>{" "}
        e resolveremos o mais rápido possível.
      </>
    ),
  },
];

export default function SupportFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24" style={{ background: "var(--section-alt-bg)" }}>
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center mb-14">
          <div className="section-tag">PERGUNTAS FREQUENTES</div>
          <h2 className="section-title">
            Dúvidas <span className="text-[#FF8C2A]">comuns</span>
          </h2>
          <p className="text-muted text-base max-w-md mx-auto">
            Respostas rápidas para as perguntas mais frequentes dos nossos clientes.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="card-themed overflow-hidden transition-all duration-300"
                style={{
                  borderColor: isOpen ? "rgba(240,106,0,0.35)" : undefined,
                }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-body">{faq.q}</span>
                  <i
                    className="fas fa-chevron-down text-[#F06A00] text-sm shrink-0 transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>

                <div
                  className="overflow-hidden transition-all duration-400 ease-in-out"
                  style={{ maxHeight: isOpen ? "200px" : "0px" }}
                >
                  <p className="px-6 pb-5 text-sm text-muted leading-relaxed">
                    {faq.a()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
