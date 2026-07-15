import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { EMAIL, PHONE_DISPLAY } from "@/lib/whatsapp";

const TITLE = "Política de Privacidade | FG Contabilidade";
const DESCRIPTION =
  "Conheça a Política de Privacidade da FG Contabilidade. Saiba como coletamos, usamos e protegemos seus dados pessoais, em conformidade com a LGPD.";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/politica-de-privacidade" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative overflow-hidden pt-24 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10 gold-radial opacity-60" aria-hidden />

        <div className="mx-auto max-w-4xl px-5 pb-24 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Legal</p>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Política de <span className="gold-text">Privacidade</span>
            </h1>
            <p className="mt-4 text-sm text-white/60">
              <strong>Última atualização:</strong> 15/07/2026
            </p>
          </div>

          <div className="mt-14 space-y-10 rounded-3xl border border-[rgba(218,165,32,0.2)] bg-gradient-to-b from-white/[0.03] to-transparent p-8 sm:p-12">
            <section>
              <p className="leading-relaxed text-white/80">
                A <strong className="text-white">FG Contabilidade</strong>, inscrita no CNPJ nº{" "}
                <strong className="text-white">33.871.865/0001-82</strong>, com sede na Av. São João, 2431, Antares, Londrina - PR, CEP 86036-030, respeita a privacidade dos usuários deste site e está comprometida em proteger os dados pessoais coletados, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).
              </p>
            </section>

            <PolicySection number={1} title="Dados que coletamos">
              <p className="text-white/80">
                Ao preencher o formulário de contato/orçamento em nosso site, podemos coletar as seguintes informações:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-white/80 marker:text-primary">
                <li>Nome</li>
                <li>Nome da empresa</li>
                <li>Telefone</li>
                <li>E-mail</li>
                <li>Mensagem enviada</li>
              </ul>
            </PolicySection>

            <PolicySection number={2} title="Finalidade da coleta">
              <p className="text-white/80">Os dados informados são utilizados exclusivamente para:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-white/80 marker:text-primary">
                <li>Responder às solicitações de orçamento e atendimento;</li>
                <li>Entrar em contato via WhatsApp, telefone ou e-mail;</li>
                <li>Enviar informações sobre nossos serviços contábeis, quando solicitado.</li>
              </ul>
              <p className="mt-4 text-white/80">Não utilizamos os dados para finalidades diferentes das descritas acima.</p>
            </PolicySection>

            <PolicySection number={3} title="Compartilhamento de dados">
              <p className="text-white/80">
                Os dados coletados não são vendidos, alugados ou compartilhados com terceiros para fins comerciais. Podem ser compartilhados apenas quando necessário para prestação do serviço solicitado (ex.: envio da mensagem via WhatsApp) ou por obrigação legal.
              </p>
            </PolicySection>

            <PolicySection number={4} title="Armazenamento e segurança">
              <p className="text-white/80">
                Adotamos medidas técnicas e administrativas razoáveis para proteger os dados pessoais contra acessos não autorizados, perda, alteração ou vazamento.
              </p>
            </PolicySection>

            <PolicySection number={5} title="Direitos do titular dos dados">
              <p className="text-white/80">Conforme a LGPD, você tem direito a:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-white/80 marker:text-primary">
                <li>Confirmar a existência de tratamento dos seus dados;</li>
                <li>Acessar, corrigir ou atualizar seus dados;</li>
                <li>Solicitar a exclusão dos dados coletados;</li>
                <li>Revogar o consentimento a qualquer momento.</li>
              </ul>
              <p className="mt-4 text-white/80">
                Para exercer esses direitos, entre em contato pelo e-mail{" "}
                <a href={`mailto:${EMAIL}`} className="font-semibold text-primary hover:underline">
                  {EMAIL}
                </a>{" "}
                ou pelo telefone{" "}
                <a href="tel:+554330670793" className="font-semibold text-primary hover:underline">
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
            </PolicySection>

            <PolicySection number={6} title="Cookies">
              <p className="text-white/80">
                Este site pode utilizar cookies para melhorar a experiência de navegação. Você pode desativar os cookies nas configurações do seu navegador a qualquer momento.
              </p>
            </PolicySection>

            <PolicySection number={7} title="Alterações nesta política">
              <p className="text-white/80">
                Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos a revisão desta página com regularidade.
              </p>
            </PolicySection>

            <PolicySection number={8} title="Contato">
              <p className="text-white/80">Em caso de dúvidas sobre esta Política de Privacidade, entre em contato:</p>
              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="group inline-flex items-center gap-3 text-white/80 transition-colors hover:text-primary"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-[rgba(218,165,32,0.3)] bg-black">
                      <Mail className="h-4 w-4 text-primary" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wider text-white/50">E-mail</span>
                      <span className="font-semibold text-white group-hover:text-primary">{EMAIL}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+554330670793"
                    className="group inline-flex items-center gap-3 text-white/80 transition-colors hover:text-primary"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-[rgba(218,165,32,0.3)] bg-black">
                      <Phone className="h-4 w-4 text-primary" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wider text-white/50">Telefone</span>
                      <span className="font-semibold text-white group-hover:text-primary">{PHONE_DISPLAY}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <div className="inline-flex items-center gap-3 text-white/80">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-[rgba(218,165,32,0.3)] bg-black">
                      <MapPin className="h-4 w-4 text-primary" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wider text-white/50">Endereço</span>
                      <span className="font-semibold text-white">Av. São João, 2431, Antares, Londrina - PR, CEP 86036-030</span>
                    </span>
                  </div>
                </li>
              </ul>
            </PolicySection>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(218,165,32,0.3)] bg-black px-6 py-3 text-sm font-semibold text-white transition-all hover:border-primary hover:text-primary"
            >
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function PolicySection({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-white sm:text-2xl">
        <span className="gold-text">{number}.</span> {title}
      </h2>
      <div className="gold-line mt-4 w-12" />
      <div className="mt-5">{children}</div>
    </section>
  );
}
