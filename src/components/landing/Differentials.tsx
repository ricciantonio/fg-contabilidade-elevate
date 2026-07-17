import { TrendingUp, Building2, FileText, ShieldCheck } from "lucide-react";
import { BrazilMap } from "./BrazilMap";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

type Stat = {
  icon: typeof TrendingUp;
  end: number;
  prefix: string;
  suffix: string;
  decimals?: number;
  separator?: boolean;
  label: string;
};

const stats: Stat[] = [
  {
    icon: TrendingUp,
    end: 500,
    prefix: "+",
    suffix: "Mi",

    label: "de receitas apuradas em 2025",
  },
  {
    icon: Building2,
    end: 250,
    prefix: "+",
    suffix: "",
    separator: true,
    label: "empresas atendidas mensalmente",
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* LEFT: Mapa do Brasil em tamanho grande */}
          <Reveal direction="left">
            <div className="flex items-center justify-center">
              <BrazilMap className="w-full max-w-[360px] sm:max-w-[480px] lg:max-w-[560px]" />
            </div>
          </Reveal>

          {/* RIGHT: Heading + cards 2x2 */}
          <div className="flex flex-col justify-center">
            <Reveal direction="right" delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Diferenciais</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Números que <span className="gold-text">comprovam</span> nossa experiência
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} direction="scale" duration={0.7} delay={0.15 + i * 0.08}>
                  <div className="flex h-full flex-col rounded-2xl border border-slate-100/80 bg-white p-6 shadow-lg shadow-black/5 transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <stat.icon className="h-6 w-6 text-primary" strokeWidth={2} />
                    </div>
                    <p className="mt-5 text-3xl font-bold tracking-tight gold-text">
                      <CountUp
                        end={stat.end}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        decimals={stat.decimals ?? 0}
                        separator={stat.separator}
                        duration={2000}
                      />
                    </p>
                    <p className="mt-1 text-sm font-medium leading-snug text-slate-600">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
