import { Reveal } from "./Reveal";
import { ADDRESS_FULL } from "@/lib/whatsapp";

export function MapEmbed() {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_FULL)}&output=embed`;
  return (
    <section className="relative py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal direction="up">
          <div className="overflow-hidden rounded-3xl border border-[rgba(218,165,32,0.25)] shadow-[var(--shadow-gold-sm)]">
            <iframe
              title="Localização FG Contabilidade"
              src={src}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full grayscale-[0.35] contrast-110"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
