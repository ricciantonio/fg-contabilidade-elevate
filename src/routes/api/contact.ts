import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(8).max(30),
  email: z.string().trim().email().max(160),
  message: z.string().trim().min(5).max(1000),
});

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
          console.error("[/api/contact] missing api keys");
          return Response.json({ ok: false, error: "server_misconfigured" }, { status: 500 });
        }

        let json: unknown;
        try {
          json = await request.json();
        } catch {
          return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
        }

        const parsed = schema.safeParse(json);
        if (!parsed.success) {
          return Response.json({ ok: false, error: "invalid_input" }, { status: 400 });
        }
        const data = parsed.data;

        const html = `
          <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111">
            <h2 style="color:#DAA520;margin:0 0 16px">Novo pedido de orçamento</h2>
            <p><strong>Nome:</strong> ${escapeHtml(data.name)}</p>
            <p><strong>Empresa:</strong> ${escapeHtml(data.company)}</p>
            <p><strong>Telefone:</strong> ${escapeHtml(data.phone)}</p>
            <p><strong>E-mail:</strong> ${escapeHtml(data.email)}</p>
            <p><strong>Mensagem:</strong></p>
            <p style="white-space:pre-wrap;background:#f7f7f7;padding:12px;border-left:3px solid #DAA520">${escapeHtml(
              data.message,
            )}</p>
          </div>
        `;

        // TODO: verificar o domínio contabilidadefg.com.br na Resend e trocar o `from`
        // para algo como "FG Contabilidade <contato@contabilidadefg.com.br>".
        // O endereço onboarding@resend.dev só entrega em caixas do dono da conta Resend.
        const body = {
          from: "FG Contabilidade <onboarding@resend.dev>",
          to: ["escritorio@contabilidadefg.com.br"],
          reply_to: data.email,
          subject: `Novo orçamento - ${data.name}`,
          html,
        };

        try {
          const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "X-Connection-Api-Key": RESEND_API_KEY,
            },
            body: JSON.stringify(body),
          });

          if (!res.ok) {
            const errorBody = await res.text();
            console.error(`[/api/contact] resend failed [${res.status}]: ${errorBody}`);
            return Response.json(
              { ok: false, error: "send_failed", status: res.status },
              { status: 502 },
            );
          }

          return Response.json({ ok: true });
        } catch (err) {
          console.error("[/api/contact] fetch error", err);
          return Response.json({ ok: false, error: "network_error" }, { status: 502 });
        }
      },
    },
  },
});
