import Link from "next/link";

export default function Topbar() {
  return (
    // ✅ Fundo fixo azul escuro nos dois temas — comportamento correto
    <div
      className="py-2 text-sm z-50 hidden md:block"
      style={{ background: "var(--topbar-bg, linear-gradient(to right, #0a3a6e, #0D4C8B))" }}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between gap-3">

        {/* Instagram */}
        <div className="flex items-center gap-2">
          <a
            href="https://www.instagram.com/soltelecom.fibra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white text-xs font-semibold px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-all"
          >
            <i className="fab fa-instagram text-base" style={{
              background: "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }} />
            @soltelecom.fibra
          </a>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 flex-wrap">
          {[
            { href: "/suporte",          label: "Atendimento",    icon: "fa-headset"      },
            { href: "https://soltelecom.sgp.tsmx.com.br/accounts/central/login/",  label: "Área do cliente", icon: "fa-user"         },
            { href: "/area-do-cliente",  label: "2ª Via do boleto", icon: "fa-file-invoice" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              // ✅ text-white correto aqui — fundo sempre escuro
              className="bg-white/10 border border-white/15 text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-white/25 hover:border-white/30 transition-all whitespace-nowrap"
            >
              <i className={`fas ${item.icon} mr-1`} />
              {item.label}
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
