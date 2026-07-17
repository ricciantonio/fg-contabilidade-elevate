import { Clock, FileText } from "lucide-react";
import { Reveal } from "./Reveal";

export function InvoiceRequests() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal direction="scale">
          <div
            className="relative overflow-hidden rounded-3xl border border-[rgba(218,165,32,0.3)] p-8 sm:p-12"
            style={{ background: "linear-gradient(135deg, rgba(218,165,32,0.08), rgba(0,0,0,0.9) 60%)" }}
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl"
              style={{ background: "var(--gradient-gold-soft)" }}
              aria-hidden
            />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-5">
                <div
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <FileText className="h-6 w-6 text-black" strokeWidth={2.2} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Notas Fiscais</p>
                  <h2 className="font-playfair mt-2 text-2xl font-bold text-white sm:text-3xl">
                    Solicitações de Notas Fiscais
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                    Atendemos solicitações de segunda a sexta-feira, das 08h às 17h. Solicitações realizadas fora desse
                    horário serão registradas e processadas no próximo dia útil.
                  </p>
                </div>
              </div>
              <div className="inline-flex shrink-0 items-center gap-3 rounded-2xl border border-[rgba(218,165,32,0.3)] bg-black/60 px-5 py-4 backdrop-blur-sm">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-white/60">Horário de atendimento</p>
                  <p className="text-sm font-semibold text-white">Seg a Sex · 08h às 17h</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
