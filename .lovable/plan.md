
# FG Contabilidade — Landing Page Premium

Landing page única (rota `/`) em preto + dourado, com Framer Motion, tipografia Inter, totalmente responsiva e otimizada para SEO/performance.

## Stack e dependências

- Instalar `framer-motion` e `react-hook-form` + `zod` (validação do formulário).
- Fonte Inter via `<link>` no `__root.tsx` (Google Fonts, com preconnect).
- Ícones via `lucide-react` (já disponível).
- Imagem hero gerada com `imagegen` (escritório corporativo sofisticado, tons dourados/pretos), salva em `src/assets/`.

## Design system (`src/styles.css`)

Sobrescrever tokens para o tema preto/dourado:
- `--background: #000000`
- `--foreground: #FFFFFF`
- `--primary: #DAA520` (dourado principal), `--primary-foreground: #000000`
- `--accent: #B8860B` (dourado secundário)
- `--muted: #0a0a0a`, `--border: rgba(218,165,32,0.15)`
- Tokens extras: `--gold-glow`, `--gradient-gold`, `--shadow-gold`.
- Fonte padrão: Inter. Utility `.gold-text` (gradient), `.gold-line` (linha fina), `.glow` (brilho suave).

## Estrutura de arquivos

```
src/
  routes/
    index.tsx              # landing (substitui placeholder)
  components/
    landing/
      Navbar.tsx           # fixa, backdrop-blur, links + CTA WhatsApp
      Hero.tsx             # partículas douradas (canvas leve), selos, 2 CTAs, imagem
      About.tsx
      Benefits.tsx         # 6 cards com ícones dourados + hover
      Differentials.tsx    # 2 colunas: lista + ilustração
      Services.tsx         # 6 cards premium
      InvoiceRequests.tsx  # seção destacada horário atendimento NF
      Institutional.tsx    # mensagem institucional
      Testimonials.tsx     # 3 depoimentos 5 estrelas
      Contact.tsx          # card info + formulário validado
      MapEmbed.tsx         # iframe Google Maps (endereço)
      FinalCTA.tsx         # fundo dourado
      Footer.tsx           # 4 colunas
      Particles.tsx        # partículas douradas hero
      Reveal.tsx           # wrapper motion (fade/slide/scale on scroll)
  assets/
    hero-office.jpg        # gerada
    differentials.jpg      # gerada (ilustração corporativa)
  lib/
    whatsapp.ts            # helper openWhatsApp(message)
```

## Comportamento

- **WhatsApp**: todos CTAs (`Solicitar Atendimento`, `Falar no WhatsApp`, `Solicitar Orçamento`) abrem `https://wa.me/554330670793?text=...` em nova aba.
- **Formulário**: validação Zod (nome, empresa, telefone, email, mensagem). Submit monta mensagem e abre WhatsApp (preparado para trocar por webhook depois — comentário no código).
- **Animações**: componente `Reveal` com `whileInView` + `viewport={{ once: true }}` — fade-in, slide-left, slide-right, scale. Hover em cards com `whileHover`.
- **Partículas**: canvas 2D leve no hero (~40 pontos dourados flutuando), pausado em `prefers-reduced-motion`.
- **Navbar**: fixa, transparente com blur, muda opacidade após scroll. Links âncora suaves (`#sobre`, `#servicos`, etc.) — as seções continuam na mesma rota conforme especificado no brief.
- **Mapa**: iframe do Google Maps com o endereço, `loading="lazy"`, cantos arredondados e sombra dourada.

## SEO e head (`src/routes/index.tsx`)

`head()` com:
- title: `FG Contabilidade | Contabilidade em Londrina - PR`
- description conforme brief
- og:title, og:description, og:type=website, og:image (hero-office), twitter:card
- JSON-LD `AccountingService` com endereço, telefone, horário, geo (Londrina).
- Canonical relativo `/`.

`__root.tsx`: adicionar preconnect + link Inter; manter shell.

## Performance

- `loading="lazy"` + `decoding="async"` em todas imagens não-hero; hero com `fetchpriority="high"`.
- Imagens geradas como JPG.
- Framer Motion apenas em componentes de seção (tree-shakeable).
- Sem bibliotecas pesadas extras.

## Responsividade

- Mobile-first, breakpoints `sm/md/lg`.
- Grids colapsam para 1 coluna; navbar vira menu hambúrguer (Sheet do shadcn).
- Hero empilha em mobile, imagem abaixo do texto.

## Fora do escopo (não faremos agora)

- Envio real de email/webhook do formulário (deixado com TODO claro; abre WhatsApp por enquanto).
- Backend / Lovable Cloud (não necessário para esta landing).

Ao aprovar, implemento tudo em uma única passada.
