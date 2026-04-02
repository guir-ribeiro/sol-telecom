const items = [
  { icon: "🎁", title: "Instalação",      sub: "100% Grátis"          },
  { icon: "📶", title: "Wi-Fi Plus",      sub: "2.4G e 5G"            },
  { icon: "🔗", title: "100% Fibra",      sub: "Óptica"               },
  { icon: "🎧", title: "Atendimento",     sub: "Especializado"        },
  { icon: "📄", title: "Sem Fidelidade",  sub: "Cancele quando quiser" },
  { icon: "⚡", title: "Velocidade",      sub: "Simétrica"            },
];

export default function WhatsIncluded() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-5">
      <div className="text-center mb-14">
        <span className="inline-block bg-[rgba(240,106,0,0.12)] border border-[rgba(240,106,0,0.3)] text-[#F06A00] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
          INCLUSO EM TODOS OS PLANOS
        </span>
        <h2 className="font-poppins text-4xl font-black text-white mb-3">
          O que você <span className="text-[#F06A00]">sempre recebe</span>
        </h2>
        <p className="text-[#94A3B8] text-base max-w-md mx-auto">
          Independente do plano escolhido, esses benefícios sempre vêm junto.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-gradient-to-br from-[#141F35] to-[#0D1A2E] border border-[rgba(255,255,255,0.07)] rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(240,106,0,0.3)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
          >
            <div className="w-14 h-14 bg-[rgba(240,106,0,0.1)] border border-[rgba(240,106,0,0.2)] rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
              {item.icon}
            </div>
            <strong className="block text-sm font-bold text-white mb-1">
              {item.title}
            </strong>
            <small className="text-xs text-[#94A3B8]">{item.sub}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
