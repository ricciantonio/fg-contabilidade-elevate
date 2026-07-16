import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star, MapPin } from "lucide-react";
import sociosImg from "@/assets/socios-fg.jpg";
import { openWhatsApp } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:min-h-screen lg:pt-40"
    >
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(218,165,32,0.35)] bg-white/[0.02] px-4 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(218,165,32,0.9)]" />
            Contabilidade Premium em Londrina - PR
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            FG <span className="gold-text">Contabilidade</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-lg font-medium text-white/85 sm:text-xl"
          >
            Soluções contábeis com agilidade, precisão e confiança.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-white/60"
          >
            Cuidamos da contabilidade da sua empresa para que você possa focar no que
            realmente importa: crescer o seu negócio com segurança, organização e
            tranquilidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(218,165,32,0.3)] bg-black/40 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
              <Star className="h-4 w-4 fill-primary text-primary" />
              Mais de 200 empresas atendidas
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(218,165,32,0.3)] bg-black/40 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-primary" />
              Londrina - PR
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button
              onClick={() => openWhatsApp()}
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-black shadow-[var(--shadow-gold-sm)] transition-all hover:shadow-[var(--shadow-gold)] hover:brightness-110"
              style={{ background: "var(--gradient-gold)" }}
            >
              Solicitar Atendimento
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => openWhatsApp("Olá! Gostaria de falar com a FG Contabilidade.")}
              className="group inline-flex items-center gap-2 rounded-full border border-[rgba(218,165,32,0.4)] bg-black/60 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-primary hover:bg-black"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              Falar no WhatsApp
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-[rgba(218,165,32,0.3)] bg-black shadow-[var(--shadow-gold)]">
            <img
              src={sociosImg}
              alt="Felipe Garcia e Gevanildo Zeferino, sócios da FG Contabilidade"
              width={1080}
              height={1350}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl" style={{ boxShadow: "inset 0 0 80px rgba(218,165,32,0.15)" }} />
          </div>


          <div className="absolute -bottom-4 left-4 right-4 hidden rounded-2xl border border-[rgba(218,165,32,0.3)] bg-black/80 px-5 py-4 backdrop-blur-xl sm:block">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white/60">Felipe Garcia</p>
                <p className="text-sm font-semibold text-white">CRC PR-069513/O-4</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-white/60">Gevanildo Zeferino</p>
                <p className="text-sm font-semibold text-white">CRC PR-060903/O-9</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
