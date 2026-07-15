import { motion } from "framer-motion";
import { HeartHandshake, Zap, ShieldCheck, Briefcase, UserCog, LifeBuoy } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: HeartHandshake, title: "Atendimento Humanizado", desc: "Relacionamento próximo, escuta atenta e respostas rápidas." },
  { icon: Zap, title: "Agilidade nos Processos", desc: "Fluxos otimizados para você não esperar por informação." },
  { icon: ShieldCheck, title: "Segurança Fiscal", desc: "Conformidade rigorosa com a legislação vigente." },
  { icon: Briefcase, title: "Especialistas em Empresas", desc: "Experiência sólida em contabilidade empresarial." },
  { icon: UserCog, title: "Atendimento Personalizado", desc: "Soluções ajustadas à realidade do seu negócio." },
  { icon: LifeBuoy, title: "Suporte Contínuo", desc: "Time disponível para orientar em cada decisão." },
];

export function Benefits() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="gold-radial pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal direction="fade">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Benefícios</p>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Por que empresas <span className="gold-text">confiam na FG</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} direction="up" delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full overflow-hidden rounded-2xl border border-[rgba(218,165,32,0.18)] bg-gradient-to-b from-white/[0.03] to-transparent p-7 transition-colors hover:border-[rgba(218,165,32,0.5)]"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "var(--gradient-gold-soft)" }}
                  aria-hidden
                />
                <div
                  className="relative grid h-12 w-12 place-items-center rounded-xl border border-[rgba(218,165,32,0.35)] bg-black transition-transform duration-300 group-hover:scale-110"
                  style={{ boxShadow: "inset 0 0 20px rgba(218,165,32,0.15)" }}
                >
                  <it.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="relative mt-5 text-lg font-semibold text-white">{it.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/60">{it.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
