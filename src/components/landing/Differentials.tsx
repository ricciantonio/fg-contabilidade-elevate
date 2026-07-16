import { TrendingUp, Building2, FileText, ShieldCheck, Users } from "lucide-react";
import { BrazilMap } from "./BrazilMap";
import { Reveal } from "./Reveal";

const stats = [
  {
    icon: TrendingUp,
    value: "+4.5Bi",
    label: "de receitas apuradas em 2025",
  },
  {
    icon: Building2,
    value: "+1000",
    label: "empresas atendidas mensalmente",
  },
  {
    icon: FileText,
    value: "+5500",
    label: "folhas de pagamento mensalmente",
  },
  {
    icon: ShieldCheck,
    value: "+50000",
    label: "processos de regularização",
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* LEFT */}
          <Reveal direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Diferenciais
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Por que escolher a{" "}
              <span className="gold-text">FG Contabilidade?</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              Combinamos experiência, tecnologia e um atendimento próximo para
              entregar resultados consistentes para seu negócio.
            </p>
          </Reveal>

          {/* CENTER/RIGHT */}
          <Reveal direction="right" delay={0.15}>
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-center lg:justify-end">
              {/* Black card */}
              <div className="order-2 flex w-full max-w-[220px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-black px-6 py-7 text-center shadow-2xl shadow-black/50 sm:order-1 sm:w-auto">
                <Users className="h-8 w-8 text-[#FF9500]" strokeWidth={2} />
                <p className="mt-3 text-4xl font-bold text-[#FF9500]">+50</p>
                <p className="mt-1 text-sm font-medium text-white/80">
                  colaboradores
                </p>
              </div>

              {/* Map */}
              <div className="order-1 w-full sm:order-2 sm:w-auto">
                <BrazilMap />
              </div>
            </div>
          </Reveal>
        </div>

        {/* BOTTOM: 2x2 grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} direction="up" delay={0.1 + i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 text-slate-900 shadow-lg shadow-black/5 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF9500]/10">
                  <stat.icon className="h-5 w-5 text-[#FF9500]" strokeWidth={2.5} />
                </div>
                <p className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium leading-snug text-slate-600">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
