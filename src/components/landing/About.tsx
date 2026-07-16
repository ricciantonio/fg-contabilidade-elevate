import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
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

        <div className="mt-14">
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
