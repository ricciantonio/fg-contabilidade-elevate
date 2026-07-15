import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal direction="fade">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Sobre nós</p>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Contabilidade que <span className="gold-text">impulsiona empresas</span>
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-white/70 sm:text-lg">
            <p>
              Na FG Contabilidade oferecemos soluções completas para empresas que buscam
              organização financeira, segurança fiscal e atendimento próximo.
            </p>
            <p>
              Nosso compromisso é simplificar a contabilidade, reduzir burocracias e proporcionar
              tranquilidade para que nossos clientes possam focar no crescimento dos seus negócios.
            </p>
          </div>
        </Reveal>
        <Reveal direction="scale" delay={0.35}>
          <div className="gold-line mx-auto mt-14 w-40" />
        </Reveal>
      </div>
    </section>
  );
}
