"use client";

import { useEffect, useState } from "react";
import { openWhatsApp } from "@/lib/whatsapp";

function useIsOpen() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const now  = new Date();
    const day  = now.getDay();
    const time = now.getHours() + now.getMinutes() / 60;
    const weekday  = day >= 1 && day <= 5 && time >= 8 && time < 18;
    const saturday = day === 6 && time >= 8 && time < 12;
    setIsOpen(weekday || saturday);
  }, []);
  return isOpen;
}

const schedule = [
  { day: "Segunda a Sexta", hours: "08h às 18h", open: true  },
  { day: "Sábado",          hours: "08h às 12h", open: true  },
  { day: "Domingo",         hours: "Fechado",    open: false },
  { day: "Feriados",        hours: "Fechado",    open: false },
];

export default function SupportChannels() {
  const isOpen = useIsOpen();

  return (
    <section className="py-24" style={{ background: "var(--section-alt-bg)" }}>
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-tag">CANAIS DE ATENDIMENTO</div>
          <h2 className="section-title">
            Como <span className="text-[#FF8C2A]">falar com a gente</span>
          </h2>
          <p className="text-muted text-base max-w-md mx-auto">
            Escolha o canal de sua preferência e fale com nossa equipe agora mesmo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">

          {/* WHATSAPP */}
          <div
            className="card-dark flex flex-col items-center text-center p-8 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
            style={{ borderColor: "rgba(37,211,102,0.25)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#25D366] to-[#128C7E]" />

            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-5 text-3xl transition-transform duration-300 group-hover:scale-110"
              style={{
                background: "rgba(37,211,102,0.15)",
                border: "1px solid rgba(37,211,102,0.3)",
                color: "#25D366",
              }}
            >
              <i className="fab fa-whatsapp" />
            </div>

            {/* Badge online */}

            <h3 className="font-poppins text-xl font-black text-white mb-3">WhatsApp</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
              Nosso canal principal. Tire dúvidas, solicite suporte técnico,
              contrate planos e muito mais — tudo pelo WhatsApp.
            </p>

            <button
              onClick={() => openWhatsApp("Atendimento geral via WhatsApp")}
              className="btn-whatsapp w-full justify-center"
            >
              <i className="fab fa-whatsapp" /> Iniciar conversa
            </button>
          </div>

          {/* INSTAGRAM */}
          <div
            className="card-dark flex flex-col items-center text-center p-8 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
            style={{ borderColor: "rgba(220,39,67,0.2)" }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[3px]"
              style={{ background: "linear-gradient(90deg,#f09433,#e6683c,#dc2743,#bc1888)" }}
            />

            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-5 text-3xl transition-transform duration-300 group-hover:scale-110"
              style={{
                background: "rgba(220,39,67,0.12)",
                border: "1px solid rgba(220,39,67,0.25)",
              }}
            >
              <i
                className="fab fa-instagram"
                style={{
                  background: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#bc1888)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              />
            </div>

            <h3 className="font-poppins text-xl font-black text-white mb-3">Instagram</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
              Siga a Sol Telecom para novidades e promoções exclusivas. Você também
              pode nos enviar uma mensagem direta.
            </p>

            <a
              href="https://www.instagram.com/soltelecom.fibra"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full justify-center"
            >
              <i className="fab fa-instagram" /> @soltelecom.fibra
            </a>
          </div>

          {/* HORÁRIO */}
          <div
            className="card-dark flex flex-col items-center text-center p-8 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
            style={{ borderColor: "rgba(240,106,0,0.2)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F06A00] to-[#FF8C2A]" />

            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-5 text-3xl transition-transform duration-300 group-hover:scale-110"
              style={{
                background: "rgba(240,106,0,0.15)",
                border: "1px solid rgba(240,106,0,0.3)",
                color: "#F06A00",
              }}
            >
              <i className="fas fa-clock" />
            </div>

            <h3 className="font-poppins text-xl font-black text-white mb-4">Expediente</h3>

            <table className="w-full mb-6 text-left">
              <tbody>
                {schedule.map((row) => (
                  <tr key={row.day} className="border-b border-white/[0.05] last:border-none">
                    <td className="py-2 text-xs text-white/50 pr-4">{row.day}</td>
                    <td
                      className={`py-2 text-xs font-bold text-right ${
                        row.open ? "text-[#22C55E]" : "text-[#EF4444]"
                      }`}
                    >
                      {row.hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              onClick={() => openWhatsApp("Suporte técnico urgente")}
              className="btn-orange w-full justify-center"
            >
              <i className="fas fa-bolt" /> Suporte urgente
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
