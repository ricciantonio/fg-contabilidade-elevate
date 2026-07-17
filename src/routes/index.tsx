import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Benefits } from "@/components/landing/Benefits";
import { Differentials } from "@/components/landing/Differentials";
import { Services } from "@/components/landing/Services";
import { InvoiceRequests } from "@/components/landing/InvoiceRequests";
import { Institutional } from "@/components/landing/Institutional";
import { Testimonials } from "@/components/landing/Testimonials";
import { Contact } from "@/components/landing/Contact";
import { MapEmbed } from "@/components/landing/MapEmbed";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { ScrollFade } from "@/components/landing/ScrollFade";

const TITLE = "FG Contabilidade | Contabilidade em Londrina - PR";
const DESCRIPTION =
  "FG Contabilidade oferece soluções contábeis completas para empresas em Londrina e região. Mais de 200 empresas atendidas com agilidade, confiança, atendimento personalizado e suporte especializado.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "contabilidade Londrina, escritório contábil, abertura de empresas, planejamento tributário, departamento pessoal, FG Contabilidade" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AccountingService",
          name: "FG Contabilidade",
          description: DESCRIPTION,
          telephone: "+55-43-3067-0793",
          email: "escritorio@contabilidadefg.com.br",
          image: "/favicon.ico",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. São João, 2431",
            addressLocality: "Londrina",
            addressRegion: "PR",
            postalCode: "86036-030",
            addressCountry: "BR",
          },
          areaServed: "Londrina e região - PR",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "17:00",
            },
          ],
          sameAs: ["https://instagram.com/fgcontabilidadee_"],
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <ScrollFade><About /></ScrollFade>
        <ScrollFade><Benefits /></ScrollFade>
        <ScrollFade><Differentials /></ScrollFade>
        <ScrollFade><Services /></ScrollFade>
        <ScrollFade><InvoiceRequests /></ScrollFade>
        <ScrollFade><Institutional /></ScrollFade>
        <ScrollFade><Testimonials /></ScrollFade>
        <ScrollFade><Contact /></ScrollFade>
        <ScrollFade><MapEmbed /></ScrollFade>
        <ScrollFade><FinalCTA /></ScrollFade>
      </main>
      <Footer />
    </div>
  );
}
