import escritorioAsset from "@/assets/escritorio-fg-contabilidade.png.asset.json";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="quem-somos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="up" delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-[rgba(218,165,32,0.2)]">
              <img
                src={escritorioAsset.url}
                alt="Escritório FG Contabilidade"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal direction="fade">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Quem somos</p>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="font-playfair mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Contabilidade que <span className="gold-text">impulsiona empresas</span>
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.25}>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-white/70 sm:text-lg">
                <p>
                  A <span className="font-semibold text-white">FG Contabilidade</span> nasceu da união entre{" "}
                  <span className="font-semibold text-white">Felipe Garcia</span> e{" "}
                  <span className="font-semibold text-white">Gevanildo Zeferino</span>, com o propósito de oferecer uma
                  contabilidade moderna, estratégica e comprometida com o sucesso de seus clientes.
                </p>
                <p>
                  Mais do que atender às obrigações fiscais, entregamos soluções contábeis que proporcionam segurança,
                  organização e informações confiáveis para apoiar a tomada de decisões e o crescimento sustentável das
                  empresas. Nosso compromisso é atuar com excelência, transparência e confiança em cada atendimento.
                </p>
                <div className="gold-line w-40" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
