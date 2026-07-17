import { motion } from "framer-motion";
import {
  Building2,
  BookOpenCheck,
  FileSpreadsheet,
  Users,
  Calculator,
  ClipboardCheck,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { openWhatsApp } from "@/lib/whatsapp";

const services = [
  { icon: Building2, title: "Abertura de Empresas", desc: "Constituição completa: CNPJ, alvarás e enquadramento tributário." },
  { icon: BookOpenCheck, title: "Contabilidade Empresarial", desc: "Escrituração contábil, balancetes e demonstrações financeiras." },
  { icon: FileSpreadsheet, title: "Escrituração Fiscal", desc: "Apuração e envio de obrigações fiscais dentro do prazo." },
  { icon: Users, title: "Departamento Pessoal", desc: "Folha de pagamento, admissões, férias e rescisões." },
  { icon: Calculator, title: "Planejamento Tributário", desc: "Análise estratégica para reduzir a carga tributária legalmente." },
  { icon: ClipboardCheck, title: "Consultoria Contábil", desc: "Orientação especializada para decisões financeiras seguras." },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal direction="fade">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Serviços</p>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Soluções completas para <span className="gold-text whitespace-nowrap">sua empresa</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
              Do primeiro CNPJ até o planejamento estratégico: cuidamos de tudo para
              o seu negócio operar com segurança.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} direction="up" delay={i * 0.06}>
              <motion.button
                type="button"
                onClick={() => openWhatsApp(`Olá! Gostaria de saber mais sobre ${s.title}.`)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[rgba(218,165,32,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent)] p-7 text-left transition-colors hover:border-[rgba(218,165,32,0.5)]"
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(218,165,32,0.8), transparent)" }}
                  aria-hidden
                />
                <div
                  className="grid h-12 w-12 place-items-center rounded-xl border border-[rgba(218,165,32,0.35)] bg-black transition-transform duration-300 group-hover:scale-110"
                  style={{ boxShadow: "inset 0 0 20px rgba(218,165,32,0.15)" }}
                >
                  <s.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{s.desc}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-70 transition-opacity group-hover:opacity-100">
                  Saiba mais
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
