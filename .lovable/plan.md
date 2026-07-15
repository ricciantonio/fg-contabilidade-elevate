## Problema

Ao clicar nos botões de WhatsApp/Instagram aparece mensagem de "API bloqueada". Isso acontece porque:

1. O link atual usa `wa.me/554330670793` — quando o número não é reconhecido como WhatsApp válido, o `wa.me` redireciona para uma página de erro/bloqueio do WhatsApp. Também, ao abrir via `window.open`, alguns navegadores bloqueiam popups vindos de handlers async.
2. O Instagram é aberto via `<a target="_blank">`, mas o navegador do preview às vezes bloqueia por popup/rastreio.

## O que vou ajustar

### 1. `src/lib/whatsapp.ts`
- Trocar `wa.me` por `https://api.whatsapp.com/send?phone=554330670793&text=...` (endpoint oficial, mais tolerante e evita a página de erro genérica).
- Manter número `554330670793` (confirmado pelo usuário como WhatsApp do fixo).
- Ajustar `openWhatsApp()` para não usar `window.open` (que é bloqueado como popup em alguns contextos) e sim navegar via `window.location.assign` em nova aba usando um `<a>` temporário com `rel="noopener"` — método que passa pela verificação de "gesto do usuário" do navegador.
- Criar helper `openInstagram()` análogo para abrir `https://instagram.com/fgcontabilidadee_` de forma confiável.

### 2. Componentes que chamam Instagram
- `Footer.tsx` e `Contact.tsx`: manter `<a href>` mas garantir `target="_blank"` + `rel="noopener noreferrer"` e usar a URL correta `https://www.instagram.com/fgcontabilidadee_/` (com `www.` e barra final — reduz redirecionamentos que às vezes disparam bloqueio).

### 3. Formulário de Contato
- Mantido: redireciona para WhatsApp com mensagem pronta (conforme resposta do usuário).

## Fora de escopo

- Backend, e-mail, webhook, verificação real do número no WhatsApp. Se o número fixo não estiver ativo no WhatsApp Business, a Meta continuará mostrando "número não disponível" — isso precisa ser resolvido no cadastro do WhatsApp Business, não no código.

## Arquivos alterados

- `src/lib/whatsapp.ts`
- `src/components/landing/Footer.tsx`
- `src/components/landing/Contact.tsx`