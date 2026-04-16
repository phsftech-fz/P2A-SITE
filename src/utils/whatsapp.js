const DEFAULT_MSG = encodeURIComponent("Olá! Gostaria de falar com a P2A Tech.");

/**
 * Apenas dígitos (DDI + DDD + número). Sobrescreva com VITE_WHATSAPP_NUMBER no .env
 * ou altere o fallback abaixo.
 */
const WHATSAPP_FALLBACK = "5551993560244";

export function whatsappHref() {
  const raw = import.meta.env.VITE_WHATSAPP_NUMBER ?? WHATSAPP_FALLBACK;
  const digits = String(raw).replace(/\D/g, "") || WHATSAPP_FALLBACK;
  return `https://wa.me/${digits}?text=${DEFAULT_MSG}`;
}

