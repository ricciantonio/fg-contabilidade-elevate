import { Phone, MessageCircle, Mail, MapPin, Instagram } from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  PHONE_DISPLAY,
  WHATSAPP_DISPLAY,
  EMAIL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  ADDRESS_LINE3,
  openWhatsApp,
} from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="relative border-t border-[rgba(218,165,32,0.18)] bg-black">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-[rgba(218,165,32,0.35)] bg-black text-sm font-bold text-primary">
                FG
              </span>
              <span className="text-base font-semibold text-white">
                FG <span className="gold-text">Contabilidade</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Soluções contábeis com agilidade, precisão e confiança.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Contato</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a href="tel:+554330670793" className="inline-flex items-center gap-2 hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <button onClick={() => openWhatsApp()} className="inline-flex items-center gap-2 hover:text-primary">
                  <MessageCircle className="h-4 w-4 text-primary" /> {WHATSAPP_DISPLAY}
                </button>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 break-all hover:text-primary">
                  <Mail className="h-4 w-4 shrink-0 text-primary" /> {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Endereço</h4>
            <p className="mt-5 inline-flex items-start gap-2 text-sm leading-relaxed text-white/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                {ADDRESS_LINE1}
                <br />
                {ADDRESS_LINE2}
                <br />
                {ADDRESS_LINE3}
              </span>
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Redes Sociais</h4>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-white/70 hover:text-primary"
            >
              <Instagram className="h-4 w-4 text-primary" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <div className="gold-line mt-14" />

        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-xs text-white/50 sm:flex-row">
          <p>© 2026 FG Contabilidade. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <Link
              to="/politica-de-privacidade"
              className="transition-colors hover:text-primary"
            >
              Política de Privacidade
            </Link>
            <span className="hidden text-white/30 sm:inline">|</span>
            <p className="hidden sm:block">Contabilidade em Londrina - PR</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
