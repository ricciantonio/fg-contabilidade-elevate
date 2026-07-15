## Objetivo
Criar uma nova rota `/politica-de-privacidade` com o conteúdo fornecido pelo usuário, formatado e estilizado de acordo com a identidade visual do site (fundo preto, detalhes dourados, tipografia Inter), e adicionar um link no rodapé apontando para essa página.

## Escopo
- **Nova rota:** `src/routes/politica-de-privacidade.tsx` (TanStack Router converte o ponto em `/`, gerando a URL `/politica-de-privacidade`).
- **Layout:** reutilizar o `Navbar` e o `Footer` da landing para manter consistência de navegação.
- **Estilo:** fundo `bg-background`, texto branco, títulos com destaque dourado (`gold-text`), seções espaçadas, container centralizado `max-w-4xl`.
- **Metadados:** `head()` com title, description, og:title, og:description e canonical.
- **Rodapé:** adicionar link "Política de Privacidade" no `Footer` apontando para `/politica-de-privacidade` usando `<Link>` do TanStack Router.

## Conteúdo da página
Texto fornecido pelo usuário será estruturado em:
- Cabeçalho com título "Política de Privacidade" e data de atualização.
- Seções numeradas de 1 a 8, conforme o conteúdo enviado.
- Listas de itens onde aplicável (dados coletados, direitos do titular, etc.).
- Informações de contato destacadas no final.

## Arquivos alterados
1. `src/routes/politica-de-privacidade.tsx` — novo arquivo.
2. `src/components/landing/Footer.tsx` — adicionar link "Política de Privacidade".

## Fora de escopo
- Não haverá alteração em backend, banco de dados ou formulários.
- Não serão geradas imagens ou assets novos.

## Validação
Após implementação, verificar se:
- A rota `/politica-de-privacidade` carrega sem erros.
- O link no rodapé navega corretamente.
- O build/typecheck passa sem falhas.
