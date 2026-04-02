// export const WHATSAPP_NUMBER = "5588981841482";

// export function getSelectedAddons(): string[] {
//   if (typeof window === "undefined") return [];
//   return Array.from(
//     document.querySelectorAll<HTMLInputElement>(
//       '#addons input[type="checkbox"]:checked'
//     )
//   ).map((i) => i.value);
// }

// export function buildWhatsAppURL(plano: string, addons: string[]): string {
//   const msg =
//     `Olá! Tenho interesse em contratar:\n` +
//     `📦 Plano: ${plano}\n` +
//     (addons.length
//       ? `➕ Adicionais: ${addons.join(", ")}\n`
//       : `➕ Adicionais: nenhum\n`) +
//     `\nPode me ajudar com a contratação?`;

//   return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
// }

// export function openWhatsApp(plano: string): void {
//   const addons = getSelectedAddons();
//   const url = buildWhatsAppURL(plano, addons);
//   window.open(url, "_blank");
// }


export const WHATSAPP_NUMBER = "5588981841482";

/* ============================================
   HELPERS INTERNOS
   ============================================ */

function buildURL(msg: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function getSelectedAddons(): string[] {
  if (typeof window === "undefined") return [];
  return Array.from(
    document.querySelectorAll<HTMLInputElement>(
      '#addons input[type="checkbox"]:checked'
    )
  ).map((i) => i.value);
}

/* ============================================
   PLANOS — mensagem de contratação
   ============================================ */

export function openWhatsApp(plano: string): void {
  const addons = getSelectedAddons();

  const msg =
    `Olá! Tenho interesse em contratar:\n` +
    `📦 Plano: ${plano}\n` +
    (addons.length
      ? `➕ Adicionais: ${addons.join(", ")}\n`
      : `➕ Adicionais: nenhum\n`) +
    `\nPode me ajudar com a contratação?`;

  window.open(buildURL(msg), "_blank");
}

/* ============================================
   SUPORTE — mensagem de atendimento
   ============================================ */

export function openWhatsAppSupport(assunto: string): void {
  const msg =
    `Olá! Preciso de atendimento.\n` +
    `📋 Assunto: ${assunto}\n\n` +
    `Pode me ajudar?`;

  window.open(buildURL(msg), "_blank");
}
