Plano de correção do carregamento da imagem na seção "Quem Somos":

1. Editar `src/components/landing/About.tsx`:
   - Remover a linha de import do asset gerenciado:
     ```
     import escritorioAsset from "@/assets/escritorio-fg-contabilidade.png.asset.json";
     ```
   - Substituir o `src` da imagem de:
     ```
     src={escritorioAsset.url}
     ```
     para:
     ```
     src="/escritorio-fg-contabilidade.png"
     ```

2. Verificar o build (`bun run build:dev`) para garantir que não há erros de compilação após a remoção do import.

Observação: a imagem deve estar presente em `/public/escritorio-fg-contabilidade.png` no repositório para que a URL absoluta funcione corretamente no deploy da Vercel.