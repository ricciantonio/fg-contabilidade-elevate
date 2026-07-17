import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";


const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[rgba(218,165,32,0.15)] bg-black/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <a href="#inicio" className="group flex items-center">
          <div className="rounded-xl bg-white/[0.06] p-2 ring-1 ring-inset ring-[rgba(218,165,32,0.15)] transition-all duration-300 group-hover:bg-white/[0.10] group-hover:ring-[rgba(218,165,32,0.30)]">
            <img
              src="/logo-fg.png"
              alt="FG Contabilidade"
              className="h-10 w-auto object-contain sm:h-12 lg:h-14"
            />
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => openWhatsApp()}
            className="group hidden items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-5 py-2.5 text-sm font-semibold text-black shadow-[var(--shadow-gold-sm)] transition-all hover:shadow-[var(--shadow-gold)] hover:brightness-110 md:inline-flex"
            style={{ background: "var(--gradient-gold)" }}
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
            Solicitar Atendimento
          </button>
          <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-[rgba(218,165,32,0.25)] text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-[rgba(218,165,32,0.15)] bg-black/95 backdrop-blur-xl lg:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                openWhatsApp();
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-black"
              style={{ background: "var(--gradient-gold)" }}
            >
              <MessageCircle className="h-4 w-4" /> Solicitar Atendimento
            </button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
