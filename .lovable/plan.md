## Objetivo
Criar um efeito de luz dourada animada e pulsante nos cantos da seção Hero, reforçando a identidade premium preto + dourado do site.

## O que será feito

1. **Criar componente `HeroGlow.tsx`**
   - Local: `src/components/landing/HeroGlow.tsx`
   - Quatro blocos de gradiente radial posicionados nos cantos (top-left, top-right, bottom-left, bottom-right).
   - Cores na paleta dourada (`#daa520`, `#b8860b`) com opacidade baixa para não competir com o conteúdo.
   - Animação de pulso contínuo com duração longa (~6-10s) e fases deslocadas entre os cantos para efeito orgânico.

2. **Adicionar keyframes no `src/styles.css`**
   - Keyframe `hero-glow-pulse` que alterna opacidade e escala sutilmente.
   - Aplicado via utility `.animate-hero-glow`.
   - Respeita `prefers-reduced-motion`: se o usuário tiver redução de movimento, a animação é desativada.

3. **Integrar no `Hero.tsx`**
   - Inserir `<HeroGlow />` como primeiro filho da `<section>`, com `absolute inset-0 -z-10 pointer-events-none`.
   - Manter a marca d'água da logo e a foto dos sócios sem alterações.

4. **Verificar responsividade**
   - Ajustar tamanho/intensidade dos glows para mobile (menores e mais suaves) e desktop.

## Entregáveis
- `src/components/landing/HeroGlow.tsx`
- Atualização de `src/styles.css` com keyframes e utility
- Atualização de `src/components/landing/Hero.tsx`

## Critérios de aceitação
- Hero exibe glows dourados sutis pulsando nos cantos.
- Animação é suave e não distrai do conteúdo.
- Funciona em desktop e mobile.
- Respeita `prefers-reduced-motion`.