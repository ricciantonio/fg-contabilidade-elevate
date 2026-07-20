# Envio de e-mail via Resend (mantendo WhatsApp)

## O que fica igual
O redirect pro WhatsApp continua acontecendo ao enviar o formulário.

## O que adiciono
Envio paralelo por e-mail pra `escritorio@contabilidadefg.com.br` via Resend.

## Passos

1. **Conectar Resend** pelo connector da Lovable — abre um fluxo pra você autorizar. Isso disponibiliza `RESEND_API_KEY` como variável de ambiente no servidor, sem colar chave manualmente.
2. **Criar `src/routes/api/contact.ts`** (POST) que:
   - Valida os campos com Zod (mesmas regras do formulário).
   - Chama a Resend via gateway (`https://connector-gateway.lovable.dev/resend/emails`) com `Authorization: Bearer LOVABLE_API_KEY` e `X-Connection-Api-Key: RESEND_API_KEY`.
   - `to: escritorio@contabilidadefg.com.br`, `reply_to` = e-mail do lead, `subject` = "Novo orçamento - {Nome}", HTML simples com todos os campos.
   - Retorna `{ ok: true }` ou erro logado.
3. **Atualizar `Contact.tsx`**: no `onSubmit`, disparar `fetch('/api/contact', ...)` fire-and-forget **antes** do `openWhatsApp` (não bloqueia o redirect). Toast discreto em caso de erro.

## Importante sobre o remetente
Inicialmente o `from` será `FG Contabilidade <onboarding@resend.dev>` (endereço de teste da Resend). **Limitação:** esse remetente só entrega em caixas do próprio dono da conta Resend. Pra receber de forma confiável em `escritorio@contabilidadefg.com.br`, é preciso verificar o domínio `contabilidadefg.com.br` na Resend (adicionar DNS SPF/DKIM) e trocar o `from` pra algo tipo `contato@contabilidadefg.com.br`. Deixo isso como TODO comentado no código; te oriento no DNS quando quiser fazer.
