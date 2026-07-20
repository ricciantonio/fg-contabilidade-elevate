import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    name: "Luis Borela",
    text: "Ótima equipe contábil. Gevanildo e Felipe dispensam comentários, profissionais no que fazem estão sempre dispostos a nos auxiliar com a burocracia diária das empresas.",
  },
  {
    name: "Camila Ribeiro",
    text: "Profissionais extremamente competentes. Reduziram nossa carga tributária com total segurança e clareza.",
  },
  {
    name: "Diego Martins",
    text: "Desde a abertura da empresa contamos com a FG. Suporte impecável e comunicação transparente em cada etapa.",
  },
  {
    name: "Isabella Domingues",
    text: "Atendimento de excelência e muito profissionalismo!",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal direction="fade">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Depoimentos</p>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="font-playfair mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              O que nossos <span className="gold-text">clientes dizem</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} direction="up" delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full overflow-hidden rounded-2xl border border-[rgba(218,165,32,0.18)] bg-gradient-to-b from-white/[0.03] to-transparent p-8 transition-colors hover:border-[rgba(218,165,32,0.45)]"
              >
                <Quote className="h-8 w-8 text-primary/40" />
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/80">"{t.text}"</p>
                <div className="mt-6 border-t border-[rgba(218,165,32,0.15)] pt-4">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/55">{t.company}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
