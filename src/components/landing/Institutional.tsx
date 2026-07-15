import { Rocket, Target } from "lucide-react";
import { Reveal } from "./Reveal";

export function Institutional() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal direction="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Nossa missão</p>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            FG <span className="gold-text">Contabilidade</span>
          </h2>
          <p className="mt-4 text-lg font-medium text-white/85 sm:text-xl">
            Soluções contábeis com agilidade, precisão e confiança.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[rgba(218,165,32,0.2)] bg-white/[0.02] p-6 text-left">
              <Target className="h-6 w-6 text-primary" />
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                Atendimento focado no crescimento do seu negócio. Conte com a FG Contabilidade
                para cuidar da sua empresa como se fosse nossa.
              </p>
            </div>
            <div className="rounded-2xl border border-[rgba(218,165,32,0.2)] bg-white/[0.02] p-6 text-left">
              <Rocket className="h-6 w-6 text-primary" />
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                Nossa missão é oferecer tranquilidade para que você tenha tempo de fazer sua
                empresa crescer.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
