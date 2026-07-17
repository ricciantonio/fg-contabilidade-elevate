## Plano: adicionar Playfair Display

Não posso colar o CSS exatamente como enviado — o `@import url('https://fonts.googleapis.com/...')` em `src/styles.css` quebra o build do Tailwind v4 (Lightning CSS tenta resolver a URL como arquivo local e o preview fica sem estilos). O resultado visual é o mesmo carregando a fonte via `<link>` no head.

### Mudanças

1. **`src/routes/__root.tsx`** — adicionar nos `links` do `head()`:
   - `preconnect` para `https://fonts.googleapis.com`
   - `preconnect` para `https://fonts.gstatic.com` (crossOrigin anonymous)
   - `stylesheet` para `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap`
   (Preconnects do Google Fonts provavelmente já existem — reutilizo.)

2. **`src/styles.css`** — aplicar o conteúdo enviado, **sem** a linha `@import url(...Playfair...)`. Isso adiciona apenas o token `--font-playfair: "Playfair Display", serif;` dentro de `@theme inline`, habilitando a utility `font-playfair` no Tailwind.

Resto do arquivo permanece idêntico ao enviado.

### Uso

Depois disso, aplicar Playfair em qualquer elemento com `className="font-playfair"` (ex.: headings do Hero, About). Me diga se quer que eu já troque headings específicos para Playfair.
