## Diagnóstico

- A imagem no `<img>` aponta pra `/__l5e/assets-v1/.../socios-fg.jpg` (CDN de assets do Lovable).
- Testes do meu lado (curl no host do preview + headless browser) retornam **HTTP 200** e a imagem renderiza corretamente.
- Mesmo assim, no seu navegador aparece **ícone de imagem quebrada**, mesmo após hard reload, só no preview.
- A outra imagem do site (`fg-logo.jpg`) carrega normal — e ela é servida direto pelo Vite a partir de `src/assets/`, sem passar pelo `/__l5e/`.

Ou seja: o problema é específico da rota `/__l5e/` no seu ambiente (provavelmente extensão do navegador, proxy corporativo, ou algum filtro de rede bloqueando esse path). A correção mais confiável é parar de depender do CDN pra essa foto e servi-la igual à logo.

## Mudanças

1. Baixar o binário atual do CDN (`socios-fg.jpg`, 159 KB) e salvar em `src/assets/socios-fg.jpg`.
2. Em `src/components/landing/About.tsx`:
   - Trocar `import sociosAsset from "@/assets/socios-fg.jpg.asset.json"` por `import sociosImg from "@/assets/socios-fg.jpg"`.
   - No `<img>`, trocar `src={sociosAsset.url}` por `src={sociosImg}`.
3. Remover o pointer que não é mais necessário: `lovable-assets delete --file src/assets/socios-fg.jpg.asset.json` (remove do CDN e apaga o `.asset.json`).
4. Rodar `bun run build` e um screenshot rápido pra confirmar que a foto continua aparecendo.

Nenhuma outra parte da página é alterada — mesmo layout, mesmo tamanho (`max-w-[400px] object-contain`), mesmas legendas.

## Detalhes técnicos

- `src/assets/*.jpg` importado via ESM vira uma URL hash-eada servida pelo próprio app (ex.: `/assets/socios-fg-<hash>.jpg` em produção, `/src/assets/socios-fg.jpg` em dev) — mesmo caminho que a `fg-logo.jpg` já usa com sucesso.
- Isso mantém o arquivo dentro do bundle do projeto (159 KB), o que é aceitável já que a logo (também ~JPG) já é servida assim.
- Se preferir manter no CDN em vez de trazer pro repo, uma alternativa seria re-upload gerando um novo `asset_id` — mas isso não resolve caso o bloqueio seja no path `/__l5e/*` genérico. Por isso a proposta padrão é trazer o arquivo pro repo.