"use client";

import { openWhatsAppSupport } from "@/lib/whatsapp";

const topics = [
  { icon: "🔧", title: "Suporte Técnico",      desc: "Sem conexão, internet lenta ou instabilidade na rede.",        assunto: "Suporte técnico — Sem conexão ou internet lenta"               },
  { icon: "🚀", title: "Contratar Plano",       desc: "Quero assinar um plano de internet fibra óptica.",             assunto: "Quero contratar um plano de internet fibra óptica"             },
  { icon: "📄", title: "2ª Via do Boleto",      desc: "Solicitar segunda via de fatura ou boleto de pagamento.",      assunto: "Solicitar 2ª via de boleto"                                    },
  { icon: "💬", title: "Dúvidas sobre o Plano", desc: "Informações sobre seu plano atual, velocidade ou cobrança.",  assunto: "Dúvida sobre meu plano ou cobrança"                            },
  { icon: "📍", title: "Verificar Cobertura",   desc: "Quero saber se a Sol Telecom atende na minha rua ou bairro.", assunto: "Verificar cobertura na minha região"                           },
  { icon: "📺", title: "Serviços Adicionais",   desc: "Adicionar Premiere, Telecine, Max, Combate ou Starbem.",      assunto: "Adicionar serviço extra — Premiere, Telecine, Max ou Combate" },
  { icon: "🏠", title: "Mudança de Endereço",   desc: "Transferir a instalação para um novo endereço.",              assunto: "Solicitar mudança de endereço"                                 },
  { icon: "⚡", title: "Upgrade de Plano",       desc: "Quero aumentar a velocidade ou trocar de plano.",             assunto: "Fazer upgrade de plano — quero mais velocidade"               },
  { icon: "💡", title: "Outro assunto",          desc: "Envie sua mensagem e nossa equipe te responde em breve.",     assunto: "Outra solicitação ou dúvida geral"                             },
];

export default function SupportTopics() {
  return (
    <section id="topicos" className="py-24 bg-body">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <div className="section-tag">COMO PODEMOS AJUDAR?</div>
          <h2 className="section-title">
            Selecione o <span className="text-[#FF8C2A]">assunto</span>
          </h2>
          <p className="text-muted text-base max-w-md mx-auto">
            Clique no assunto e já abrimos a conversa no WhatsApp com o contexto certo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((t) => (
            <button
              key={t.title}
              onClick={() => openWhatsAppSupport(t.assunto)}
              className="card-themed flex items-start gap-4 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(240,106,0,0.4)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)] group"
            >
              <div
                className="w-12 h-12 min-w-[48px] rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "rgba(240,106,0,0.15)",
                  border: "1px solid rgba(240,106,0,0.2)",
                }}
              >
                {t.icon}
              </div>

              <div className="flex-1 min-w-0">
                <strong className="block text-sm font-bold text-body mb-1">{t.title}</strong>
                <span className="text-xs text-muted leading-relaxed">{t.desc}</span>
              </div>

              <i className="fas fa-chevron-right text-xs text-muted mt-1 transition-all duration-300 group-hover:text-[#F06A00] group-hover:translate-x-1 shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
