import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  BookOpenCheck,
  FileSpreadsheet,
  Users,
  Calculator,
  ClipboardCheck,
  ArrowUpRight,
  Check,
  X,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { openWhatsApp } from "@/lib/whatsapp";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Service = {
  icon: typeof Building2;
  title: string;
  desc: string;
  longDesc: string;
  benefits: string[];
};

const services: Service[] = [
  {
    icon: Building2,
    title: "Abertura de Empresas",
    desc: "Constituição completa: CNPJ, alvarás e enquadramento tributário.",
    longDesc:
      "Cuidamos de todo o processo de constituição da sua empresa, desde a definição da natureza jurídica até a emissão do CNPJ, inscrições estadual e municipal, alvarás e enquadramento tributário mais vantajoso para o seu negócio.",
    benefits: [
      "Análise do melhor regime tributário (MEI, Simples, Lucro Presumido ou Real)",
      "Registro na Junta Comercial e obtenção do CNPJ",
      "Inscrições municipal, estadual e alvará de funcionamento",
      "Emissão de certificado digital e configuração fiscal inicial",
    ],
  },
  {
    icon: BookOpenCheck,
    title: "Contabilidade Empresarial",
    desc: "Escrituração contábil, balancetes e demonstrações financeiras.",
    longDesc:
      "Escrituração contábil completa e organizada conforme as normas brasileiras de contabilidade, com relatórios gerenciais claros que apoiam a tomada de decisão e mantêm sua empresa sempre em conformidade.",
    benefits: [
      "Escrituração contábil digital (ECD) e fiscal (ECF)",
      "Balancetes mensais e demonstrações financeiras (DRE, Balanço)",
      "Relatórios gerenciais personalizados para tomada de decisão",
      "Suporte contínuo com contador dedicado",
    ],
  },
  {
    icon: FileSpreadsheet,
    title: "Escrituração Fiscal",
    desc: "Apuração e envio de obrigações fiscais dentro do prazo.",
    longDesc:
      "Apuração precisa de tributos federais, estaduais e municipais, com envio de todas as obrigações acessórias no prazo, evitando multas e mantendo sua empresa em dia com o fisco.",
    benefits: [
      "Apuração de ICMS, ISS, PIS, COFINS, IRPJ e CSLL",
      "Envio de SPED Fiscal, EFD-Contribuições e demais obrigações",
      "Emissão e conferência de guias de recolhimento",
      "Monitoramento constante de mudanças na legislação",
    ],
  },
  {
    icon: Users,
    title: "Departamento Pessoal",
    desc: "Folha de pagamento, admissões, férias e rescisões.",
    longDesc:
      "Gestão completa do departamento pessoal da sua empresa, garantindo o cumprimento das obrigações trabalhistas e previdenciárias com agilidade, precisão e sigilo.",
    benefits: [
      "Processamento de folha de pagamento e holerites",
      "Admissões, rescisões, férias e 13º salário",
      "eSocial, FGTS, INSS e demais obrigações trabalhistas",
      "Suporte em fiscalizações e questões trabalhistas",
    ],
  },
  {
    icon: Calculator,
    title: "Planejamento Tributário",
    desc: "Análise estratégica para reduzir a carga tributária legalmente.",
    longDesc:
      "Estudo aprofundado da estrutura da sua empresa para identificar oportunidades legais de economia tributária, com estratégias personalizadas que aumentam a competitividade e a lucratividade.",
    benefits: [
      "Análise comparativa entre regimes tributários",
      "Identificação de créditos e benefícios fiscais",
      "Reorganização societária quando vantajosa",
      "Redução legal e segura da carga tributária",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Consultoria Contábil",
    desc: "Orientação especializada para decisões financeiras seguras.",
    longDesc:
      "Assessoria contábil e financeira sob medida, com profissionais experientes que apoiam gestores e empresários na tomada de decisões estratégicas com segurança e visão de longo prazo.",
    benefits: [
      "Análise de viabilidade de novos investimentos",
      "Orientação em fusões, aquisições e sucessões",
      "Diagnóstico financeiro e indicadores de performance",
      "Apoio em auditorias e due diligence",
    ],
  },
];

export function Services() {
  const [selected, setSelected] = useState<Service | null>(null);

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
            <Reveal
              key={s.title}
              direction={i % 2 === 0 ? "left" : "right"}
              duration={0.6}
              delay={(i % 3) * 0.15}
            >
              <motion.button
                type="button"
                onClick={() => setSelected(s)}
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

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent
          className="max-w-lg overflow-hidden border-2 border-primary/60 bg-white p-0 text-slate-900 shadow-2xl [&>button]:hidden"
        >
          {selected && (
            <>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Fechar"
                className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-primary hover:text-primary"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="max-h-[85vh] overflow-y-auto px-6 py-7 sm:px-8 sm:py-8">
                <DialogHeader className="space-y-3 text-left">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-xl border border-primary/40 bg-primary/10"
                  >
                    <selected.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                  </div>
                  <DialogTitle className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    {selected.title}
                  </DialogTitle>
                  <DialogDescription className="text-[15px] leading-relaxed text-slate-600">
                    {selected.longDesc}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                    Principais benefícios
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {selected.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-700">
                        <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-primary/15">
                          <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    openWhatsApp(`Olá! Gostaria de solicitar atendimento sobre ${selected.title}.`);
                    setSelected(null);
                  }}
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4A017] to-[#F4C430] px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-primary/25 transition hover:shadow-xl hover:shadow-primary/40 hover:brightness-105"
                >
                  Solicitar Atendimento
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
