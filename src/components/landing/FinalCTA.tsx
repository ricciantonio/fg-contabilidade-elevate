import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { openWhatsApp } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal direction="scale">
          <div
            className="relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16 sm:py-20"
            style={{ background: "var(--gradient-gold)" }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(0,0,0,0.4), transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.4), transparent 50%)",
              }}
              aria-hidden
            />
            <div className="relative mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Vamos cuidar da contabilidade da sua empresa?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-black/80 sm:text-lg">
                Mais de 250 empresas já confiam na FG Contabilidade para manter seus negócios organizados, seguros e
                preparados para crescer.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => openWhatsApp()}
                  className="group inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-neutral-900"
                >
                  Solicitar Atendimento
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => openWhatsApp("Olá! Gostaria de falar com a FG Contabilidade.")}
                  className="inline-flex items-center gap-2 rounded-full border border-black/30 bg-black/10 px-6 py-3.5 text-sm font-semibold text-black backdrop-blur-sm transition-all hover:bg-black/20"
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar no WhatsApp
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
