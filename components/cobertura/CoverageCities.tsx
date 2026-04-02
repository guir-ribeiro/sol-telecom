const cities = [
  {
    name:   "Itatira",
    state:  "CE",
    status: "active",
    tag:    "Disponível agora",
    desc:   "Atendimento completo com fibra óptica e suporte especializado.",
    icon:   "🌆",
  },
  {
    name:   "Caiçara",
    state:  "CE",
    status: "active",
    tag:    "Disponível agora",
    desc:   "Atendimento completo com fibra óptica e suporte especializado.",
    icon:   "🏘️",
  },
  {
    name:   "Canindé",
    state:  "CE",
    status: "soon",
    tag:    "Em breve",
    desc:   "Estamos expandindo! Em breve a Sol Telecom chega em Canindé.",
    icon:   "🚀",
  },
];

export default function CoverageCities() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#0D1A2E] to-[#111827]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <span className="inline-block bg-[rgba(240,106,0,0.12)] border border-[rgba(240,106,0,0.3)] text-[#F06A00] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            CIDADES
          </span>
          <h2 className="font-poppins text-4xl font-black text-white mb-3">
            Onde a Sol Telecom <span className="text-[#F06A00]">atende</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cities.map((city) => (
            <div
              key={city.name}
              className={`relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1
                ${city.status === "active"
                  ? "bg-gradient-to-br from-[#141F35] to-[#0D1A2E] border-[rgba(240,106,0,0.2)] hover:border-[rgba(240,106,0,0.5)] hover:shadow-[0_16px_40px_rgba(240,106,0,0.1)]"
                  : "bg-gradient-to-br from-[#0D1A2E] to-[#0a1628] border-[rgba(13,76,139,0.3)] hover:border-[rgba(13,76,139,0.6)] hover:shadow-[0_16px_40px_rgba(13,76,139,0.15)]"
                }
              `}
            >
              {/* STATUS BADGE */}
              <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full
                ${city.status === "active"
                  ? "bg-[rgba(34,197,94,0.15)] text-green-400 border border-[rgba(34,197,94,0.3)]"
                  : "bg-[rgba(13,76,139,0.3)] text-[#60A5FA] border border-[rgba(13,76,139,0.4)]"
                }
              `}>
                {city.status === "active" ? "✅ Disponível" : "🔵 Em breve"}
              </span>

              {/* ICON */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4
                ${city.status === "active"
                  ? "bg-[rgba(240,106,0,0.1)] border border-[rgba(240,106,0,0.2)]"
                  : "bg-[rgba(13,76,139,0.2)] border border-[rgba(13,76,139,0.3)]"
                }
              `}>
                {city.icon}
              </div>

              <h3 className="font-poppins text-2xl font-black text-white mb-0.5">
                {city.name}
              </h3>
              <span className="text-xs text-[#94A3B8] font-medium">{city.state}</span>

              <p className="text-[#94A3B8] text-sm mt-3 leading-relaxed">
                {city.desc}
              </p>

              {/* FEATURES — só para ativas */}
              {city.status === "active" && (
                <ul className="mt-4 flex flex-col gap-2">
                  {["Fibra óptica 100%", "Wi-Fi Plus incluso", "Instalação grátis"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-[#E2E8F0]">
                      <i className="fas fa-check-circle text-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
