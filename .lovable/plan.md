## Alterações na landing page

### 1. Hero (início)
- Substituir a imagem do logo (`fg-logo.jpg`) pela foto dos sócios (`socios-fg.jpg`) no card da direita.
- Manter o card/borda dourada, mas ajustar o `object-contain`/padding para a foto aparecer bem enquadrada.
- Remover os brilhos de fundo do Hero:
  - Remover o `<div className="gold-radial" />`
  - Remover o `<Particles />`
  - Remover a marca d'água central do logo (`opacity-[0.06]`)
  - Remover o blur dourado `absolute -inset-6 ... bg-[var(--gradient-gold-soft)] blur-3xl` atrás do card da imagem

### 2. Seção "Quem somos" (About)
- Remover completamente o bloco da imagem dos sócios (coluna da esquerda com foto + legendas Felipe Garcia / Gevanildo Zeferino).
- Deixar apenas o texto ocupando o espaço (sem nada no lugar da foto por enquanto).

### 3. Tipografia
- Trocar a fonte principal para **Roboto**:
  - Adicionar `<link>` do Google Fonts (Roboto) no `<head>` em `src/routes/__root.tsx`.
  - Atualizar `--font-sans` em `src/styles.css` para `"Roboto", system-ui, ...`.

### Detalhes técnicos
- Arquivos afetados: `src/components/landing/Hero.tsx`, `src/components/landing/About.tsx`, `src/styles.css`, `src/routes/__root.tsx`.
- A foto `src/assets/socios-fg.jpg` já existe e será reutilizada no Hero (import ESM).
- Nenhuma alteração de lógica/backend.