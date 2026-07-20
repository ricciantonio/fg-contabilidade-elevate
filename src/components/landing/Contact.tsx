import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { MapPin, Phone, MessageCircle, Mail, Instagram, Clock, Loader2, Check } from "lucide-react";
import {
  openWhatsApp,
  whatsappUrl,
  PHONE_DISPLAY,
  WHATSAPP_DISPLAY,
  EMAIL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  ADDRESS_LINE3,
} from "@/lib/whatsapp";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  company: z.string().trim().min(1, "Informe sua empresa").max(120),
  phone: z.string().trim().min(8, "Telefone inválido").max(30),
  email: z.string().trim().email("E-mail inválido").max(160),
  message: z.string().trim().min(5, "Escreva uma breve mensagem").max(1000),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Envia e-mail via /api/contact (fire-and-forget) e redireciona pro WhatsApp.
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status));
      })
      .catch((err) => {
        console.error("Falha ao enviar e-mail de contato", err);
        toast.error("Não foi possível enviar o e-mail. Continuaremos pelo WhatsApp.");
      });

    const text = [
      "Olá! Gostaria de solicitar um orçamento.",
      "",
      `Nome: ${data.name}`,
      `Empresa: ${data.company}`,
      `Telefone: ${data.phone}`,
      `E-mail: ${data.email}`,
      "",
      `Mensagem: ${data.message}`,
    ].join("\n");
    openWhatsApp(text);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contato" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal direction="fade">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Contato</p>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="font-playfair mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Fale <span className="gold-text">com nossos especialistas</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal direction="left">
            <div className="relative h-full overflow-hidden rounded-3xl border border-[rgba(218,165,32,0.25)] bg-gradient-to-b from-white/[0.03] to-transparent p-8 sm:p-10">
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl"
                style={{ background: "var(--gradient-gold-soft)" }}
                aria-hidden
              />
              <h3 className="relative text-2xl font-bold text-white">
                FG <span className="gold-text">Contabilidade</span>
              </h3>
              <div className="gold-line mt-6 w-16" />

              <ul className="relative mt-8 space-y-6">
                <ContactItem icon={MapPin} label="Endereço">
                  {ADDRESS_LINE1}
                  <br />
                  {ADDRESS_LINE2}
                  <br />
                  {ADDRESS_LINE3}
                </ContactItem>
                <ContactItem icon={Phone} label="Telefone" href={`tel:+554330670793`}>
                  {PHONE_DISPLAY}
                </ContactItem>
                <ContactItem icon={MessageCircle} label="WhatsApp" href={whatsappUrl()} external>
                  {WHATSAPP_DISPLAY}
                </ContactItem>
                <ContactItem icon={Mail} label="E-mail" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </ContactItem>
                <ContactItem icon={Instagram} label="Instagram" href={INSTAGRAM_URL} external>
                  {INSTAGRAM_HANDLE}
                </ContactItem>
                <ContactItem icon={Clock} label="Horário">
                  Segunda a Sexta
                  <br />
                  08h às 18h
                </ContactItem>
              </ul>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative h-full overflow-hidden rounded-3xl border border-[rgba(218,165,32,0.25)] bg-gradient-to-b from-white/[0.03] to-transparent p-8 sm:p-10"
              noValidate
            >
              <h3 className="text-2xl font-bold text-white">Solicite seu orçamento</h3>
              <p className="mt-2 text-sm text-white/60">Preencha e enviaremos o retorno rapidamente.</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Field label="Nome" error={errors.name?.message}>
                  <input {...register("name")} className={inputCls} placeholder="Seu nome" autoComplete="name" />
                </Field>
                <Field label="Empresa" error={errors.company?.message}>
                  <input
                    {...register("company")}
                    className={inputCls}
                    placeholder="Nome da empresa"
                    autoComplete="organization"
                  />
                </Field>
                <Field label="Telefone" error={errors.phone?.message}>
                  <input
                    {...register("phone")}
                    className={inputCls}
                    placeholder="(00) 00000-0000"
                    inputMode="tel"
                    autoComplete="tel"
                  />
                </Field>
                <Field label="E-mail" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    className={inputCls}
                    placeholder="voce@empresa.com"
                    type="email"
                    autoComplete="email"
                  />
                </Field>
                <Field label="Mensagem" error={errors.message?.message} className="sm:col-span-2">
                  <textarea
                    {...register("message")}
                    rows={4}
                    className={`${inputCls} resize-none`}
                    placeholder="Conte um pouco sobre a sua empresa..."
                  />
                </Field>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold text-black shadow-[var(--shadow-gold-sm)] transition-all hover:shadow-[var(--shadow-gold)] hover:brightness-110 disabled:opacity-60"
                style={{ background: "var(--gradient-gold)" }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
                  </>
                ) : sent ? (
                  <>
                    <Check className="h-4 w-4" /> Enviado
                  </>
                ) : (
                  <>Solicitar Orçamento</>
                )}
              </motion.button>
              <p className="mt-3 text-center text-xs text-white/50">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pronta.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-[rgba(218,165,32,0.2)] bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/40";

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/60">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}

function ContactItem({
  icon: Icon,
  label,
  children,
  href,
  external,
  onClick,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[rgba(218,165,32,0.3)] bg-black">
        <Icon className="h-4 w-4 text-primary" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wider text-white/50">{label}</p>
        <p className="mt-0.5 text-sm text-white/90 leading-relaxed break-words">{children}</p>
      </div>
    </div>
  );
  if (href) {
    return (
      <li>
        <a
          href={href}
          onClick={onClick}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="block rounded-xl transition-colors hover:bg-white/[0.02]"
        >
          {content}
        </a>
      </li>
    );
  }
  return <li>{content}</li>;
}
