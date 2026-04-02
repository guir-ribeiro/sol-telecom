const advs = [
  { icon: "🎁", title: "Instalação",  sub: "100% Grátis"   },
  { icon: "💰", title: "Custo",       sub: "Benefício"     },
  { icon: "📶", title: "Wi-Fi",       sub: "2.4G e 5G"     },
  { icon: "🔗", title: "100% Fibra",  sub: "Óptica"        },
  { icon: "🎧", title: "Atendimento", sub: "Especializado" },
  { icon: "🎮", title: "Otimizada",   sub: "Para games"    },
];

export default function Advantages() {
  return (
    <section className="py-24 bg-body">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <div className="section-tag">POR QUÊ NOS ESCOLHER</div>
          <h2 className="section-title">
            Vantagens de ser{" "}
            <span className="text-[#FF8C2A]">Sol Telecom</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {advs.map((adv, i) => (
            <div
              key={i}
              className="card-themed p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)] group"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "rgba(240,106,0,0.15)",
                  border: "1px solid rgba(240,106,0,0.3)",
                  boxShadow: "0 4px 16px rgba(240,106,0,0.1)",
                }}
              >
                {adv.icon}
              </div>
              <strong className="block text-sm font-bold text-body mb-1">{adv.title}</strong>
              <small className="text-xs text-muted">{adv.sub}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
