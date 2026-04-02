"use client";

import { openWhatsApp } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <button
      onClick={() => openWhatsApp("Contato via WhatsApp")}
      aria-label="Falar no WhatsApp"
      className="fixed bottom-7 right-7 w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-[0_6px_30px_rgba(37,211,102,0.5)] z-[9999] transition-all hover:scale-110 hover:shadow-[0_10px_40px_rgba(37,211,102,0.7)]"
      style={{ animation: "pulseWa 2.5s infinite" }}
    >
      <i className="fab fa-whatsapp text-white text-3xl" />
    </button>
  );
}
