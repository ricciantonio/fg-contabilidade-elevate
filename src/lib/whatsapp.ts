export const WHATSAPP_NUMBER = "554330670793";
export const WHATSAPP_DISPLAY = "+55 43 3067-0793";
export const PHONE_DISPLAY = "(43) 3067-0793";
export const EMAIL = "escritorio@contabilidadefg.com.br";
export const INSTAGRAM_URL = "https://www.instagram.com/fgcontabilidadee_/";
export const INSTAGRAM_HANDLE = "instagram.com/fgcontabilidadee_";
export const ADDRESS_LINE1 = "Av. São João, 2431";
export const ADDRESS_LINE2 = "Antares, Londrina - PR";
export const ADDRESS_LINE3 = "CEP 86036-030, Brasil";
export const ADDRESS_FULL = "Av. São João, 2431 - Antares, Londrina - PR, 86036-030, Brasil";

function openExternal(url: string) {
  if (typeof window === "undefined") return;
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function whatsappUrl(message = "Olá! Gostaria de solicitar atendimento com a FG Contabilidade.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message?: string) {
  openExternal(whatsappUrl(message));
}

export function openInstagram() {
  openExternal(INSTAGRAM_URL);
}
