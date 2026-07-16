import { Reveal } from "./Reveal";
import sociosAsset from "@/assets/socios.png.asset.json";

export function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <Reveal direction="fade">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Quem somos
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Contabilidade que <span className="gold-text">impulsiona empresas</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-10 lg:gap-16">
          <Reveal direction="up" delay={0.15} className="w-1/2 shrink-0 sm:w-full sm:max-w-[400px]">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-[2rem] bg-[var(--gradient-gold-soft)] blur-3xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-3xl border border-[rgba(218,165,32,0.3)] bg-black shadow-[var(--shadow-gold)]">
                <img
                  src={sociosAsset.url}
                  alt="Felipe Garcia e Gevanildo Zeferino, sócios da FG Contabilidade"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ boxShadow: "inset 0 0 80px rgba(218,165,32,0.15)" }}
                />
              </div>
              <div className="mt-4 flex justify-between px-2 text-sm text-white/80">
                <span>
                  <span className="font-semibold text-white">Felipe Garcia</span>
                  <span className="block text-xs text-white/50">Sócio-fundador</span>
                </span>
                <span className="text-right">
                  <span className="font-semibold text-white">Gevanildo Zeferino</span>
                  <span className="block text-xs text-white/50">Sócio-fundador</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.25}>
            <div className="space-y-5 text-base leading-relaxed text-white/70 sm:text-lg">
              <p>
                A <span className="font-semibold text-white">FG Contabilidade</span> nasceu
                da união entre <span className="font-semibold text-white">Felipe Garcia</span>{" "}
                e <span className="font-semibold text-white">Gevanildo Zeferino</span>, dois
                profissionais apaixonados por contabilidade e comprometidos com o sucesso
                dos seus clientes.
              </p>
              <p>
                Combinamos experiência técnica, atendimento próximo e visão estratégica para
                oferecer soluções contábeis, fiscais e tributárias completas para empresas
                de Londrina e região.
              </p>
              <p>
                Acreditamos que uma contabilidade bem feita vai muito além de números: é a
                base para decisões inteligentes, crescimento sustentável e tranquilidade
                para o empresário focar no que realmente importa — o seu negócio.
              </p>
              <div className="gold-line w-40" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
