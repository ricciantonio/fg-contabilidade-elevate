## Objetivo

Substituir o glow atual (4 cantos pulsantes) por um efeito ambiente cinematográfico no Hero, inspirado no site da Ingrid Tenorio — mas com identidade própria da FG (dourado, não laranja) e composição diferente para não parecer cópia.

## Referência x nossa versão

**Ingrid (referência):**
- Halo laranja concentrado atrás da foto (direita)
- Vignette escuro à esquerda
- Moldura fina laranja ao redor da foto com glow externo

**FG (nossa versão — diferente):**
- Halo dourado **atrás e ao redor** da foto dos sócios (lado direito), com falloff radial suave
- Segundo glow dourado mais discreto **abaixo do CTA à esquerda**, criando eixo diagonal (referência tem só 1 foco; nós temos 2 assimétricos)
- Vignette preto nas bordas superior e inferior para reforçar profundidade
- Moldura da foto com **borda dourada sutil + shadow externo dourado** (glow envolvendo o card da foto)
- Sem pulso agressivo — animação de "breathing" muito lenta (10-12s), opacidade variando pouco, para dar vida sem distrair

## O que vai mudar

1. **`src/components/landing/HeroGlow.tsx`** — reescrever:
   - Remover os 4 blocos de canto
   - Adicionar 1 halo grande atrás da área da foto (direita, ~60vw, blur alto, dourado quente `rgba(218,165,32,...)`)
   - Adicionar 1 halo secundário menor abaixo-esquerda, para equilibrar
   - Adicionar vignette top/bottom via gradiente linear preto
   - Animação `hero-glow-breathe` lenta (opacidade 0.7↔1.0, sem scale exagerado)

2. **`src/styles.css`**:
   - Substituir keyframe `hero-glow-pulse` por `hero-glow-breathe` (mais sutil)
   - Manter registro em `@theme inline`

3. **`src/components/landing/Hero.tsx`**:
   - No wrapper da foto dos sócios: adicionar `ring-1 ring-gold/40` + `shadow-[0_0_80px_rgba(218,165,32,0.35)]` para o glow ao redor do card
   - Manter `<HeroGlow />` no topo da section

## Critérios de aceitação

- Hero tem contraste dramático: laterais escuras, foto e CTA "iluminados" por luz dourada quente
- Foto dos sócios tem moldura com glow dourado externo
- Efeito é diferente da Ingrid: dois focos assimétricos + moldura brilhante (Ingrid tem 1 foco)
- Animação é lenta e sutil, não distrai a leitura
- Respeita `prefers-reduced-motion`
- Funciona em mobile e desktop
