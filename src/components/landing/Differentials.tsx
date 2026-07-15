import { Check } from "lucide-react";
import differentialsImg from "@/assets/differentials.jpg";
import { Reveal } from "./Reveal";

const items = [
  "Mais de 200 empresas atendidas",
  "Atendimento rápido",
  "Equipe especializada",
  "Precisão nos processos",
  "Atendimento focado no crescimento do seu negócio",
  "Transparência",
  "Compromisso com resultados",
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal direction="left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Diferenciais</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Por que escolher a <span className="gold-text">FG Contabilidade?</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
            Combinamos experiência, tecnologia e um atendimento próximo para entregar
            resultados consistentes para o seu negócio.
          </p>

          <ul className="mt-10 space-y-4">
            {items.map((item, i) => (
              <Reveal as="li" key={item} direction="up" delay={i * 0.05}>
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <Check className="h-3.5 w-3.5 text-black" strokeWidth={3} />
                  </span>
                  <span className="text-base text-white/85">{item}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Reveal>

        <Reveal direction="right" delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-[var(--gradient-gold-soft)] blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-[rgba(218,165,32,0.25)] shadow-[var(--shadow-gold)]">
              <img
                src={differentialsImg}
                alt="Gráfico dourado de crescimento representando resultados corporativos"
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -right-4 -bottom-4 hidden rounded-2xl border border-[rgba(218,165,32,0.3)] bg-black/85 px-5 py-4 backdrop-blur-xl sm:block">
              <p className="text-3xl font-bold gold-text">+200</p>
              <p className="text-xs text-white/60">empresas atendidas</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
