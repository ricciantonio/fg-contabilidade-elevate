## Objetivo

Fazer o projeto rodar no Vercel (domínio `www.contabilidadefg.com.br`), eliminando o erro `EnvFileReadError / FUNCTION_INVOCATION_FAILED`.

## Causa

O projeto usa `@lovable.dev/vite-tanstack-config`, que por padrão empacota o servidor com o **preset Cloudflare Workers** via Nitro. O Vercel executa esse artefato como Serverless Function e o runtime tenta ler um arquivo `.env` embutido no bundle que não existe — daí `failed to load env vars: EnvFileReadError` em toda rota, inclusive `/favicon.ico`.

## Plano

1. **Forçar o preset de build para Vercel**
   Ajustar `vite.config.ts` para passar `preset: "vercel"` ao Nitro do TanStack Start. Fica algo como:
   ```ts
   export default defineConfig({
     tanstackStart: {
       server: { entry: "server" },
     },
     nitro: { preset: "vercel" },
   });
   ```
   (validando o nome exato do campo aceito por `@lovable.dev/vite-tanstack-config`; se o wrapper não expor `nitro`, usar `NITRO_PRESET=vercel` como Environment Variable de build no Vercel — alternativa oficial do Nitro).

2. **Configurar o Vercel corretamente**
   - Build Command: `bun run build` (ou `npm run build`) — o padrão do template.
   - Output Directory: deixar padrão (Nitro/Vercel preset gera `.vercel/output` automaticamente, formato Build Output API v3, que o Vercel reconhece nativamente).
   - Node.js Version: 20.x.
   - Framework Preset no Vercel: **Other** (não escolher "Vite" ou "Next"; o preset Nitro já entrega o layout esperado).

3. **Variáveis de ambiente no Vercel**
   Hoje o projeto não usa segredos server-side (não há `.env` nem chamadas a `process.env.*` fora do template). Mesmo assim, cadastrar em **Vercel → Settings → Environment Variables** (Production + Preview) qualquer variável futura — nunca comitar `.env`. Se o preset Vercel exigir alguma variável específica em build (ex.: `NITRO_PRESET=vercel`), adicionar aqui como Build & Runtime.

4. **Remover suposições de Cloudflare no código**
   Verificar `src/server.ts` e middlewares para garantir que nada dependa de APIs exclusivas de Workers (ex.: `env` injetado por request no estilo Workers). O template atual só faz wrapping SSR genérico — deve rodar sem alteração, mas confirmo lendo o arquivo antes do deploy.

5. **Redeploy no Vercel e validar**
   - Fazer push / trigger de novo build.
   - Testar `/`, `/politica-de-privacidade`, `/favicon.png`, `/logo-fg.png`.
   - Conferir logs de Function no Vercel: não deve mais aparecer `EnvFileReadError`.

6. **Fallback se o preset Vercel não for aceito pelo wrapper**
   Caso `@lovable.dev/vite-tanstack-config` não permita trocar o preset (é um wrapper opinativo do Lovable para Cloudflare), as opções são:
   - a) Definir `NITRO_PRESET=vercel` como env var de build no Vercel — o Nitro respeita essa variável mesmo quando o preset é fixado em código, na maioria das versões.
   - b) Substituir `@lovable.dev/vite-tanstack-config` pela configuração direta do `@tanstack/react-start/plugin/vite` + `nitro-vite-plugin` com `preset: "vercel"`. É reversível, mas afasta o projeto do template Lovable e pode dificultar futuras atualizações.

## Detalhes técnicos

- Nitro presets: https://nitro.build/deploy/providers/vercel — o preset `vercel` gera `.vercel/output` no formato Build Output API v3; o Vercel detecta e serve automaticamente, sem `vercel.json`.
- O erro `EnvFileReadError` é do runtime do Nitro Vercel preset quando o arquivo `.env` referenciado no build não é copiado para a função. Trocar o preset para o correto resolve o read spurious; o preset Cloudflare gera um bundle que o Vercel não sabe executar como esperado.
- Não precisa criar `.env` no repositório — segredos ficam no painel do Vercel.

## Riscos

- Manter dois ambientes (Lovable + Vercel) implica retestar cada mudança em ambos. O Lovable continuará publicando em `fg-shine-portal.lovable.app` automaticamente, o Vercel só atualiza quando você fizer push/redeploy.
- Se o wrapper Lovable atualizar e sobrescrever o preset, o build pode voltar a quebrar no Vercel.

Me confirme para eu prosseguir com a alteração de `vite.config.ts` (passo 1) e a leitura de `src/server.ts` (passo 4). Depois disso você faz o redeploy no Vercel e me diz o resultado dos logs.
