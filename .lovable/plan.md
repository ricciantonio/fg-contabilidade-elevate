## Plano de correção

1. **Remover a dependência da configuração manual**
   - Ajustar `vite.config.ts` para selecionar automaticamente o preset `vercel` quando o build estiver rodando na Vercel, mantendo o preset padrão no Lovable.
   - Evitar que uma variável `NITRO_PRESET` ausente ou vazia gere um artefato incompatível.

2. **Revisar a entrada SSR**
   - Manter o wrapper atual de erros, mas garantir que a assinatura/exportação usada seja compatível com o adaptador gerado para Vercel.
   - Preservar logs do erro original para que futuros crashes apareçam nos Runtime Logs, em vez de somente `FUNCTION_INVOCATION_FAILED`.

3. **Validar o build no mesmo alvo da Vercel**
   - Gerar o build com o ambiente da Vercel simulado.
   - Inspecionar o artefato de saída, o entrypoint da função e as referências a arquivos `.env` para confirmar que não há leitura de arquivo inexistente no runtime.

4. **Verificar a aplicação**
   - Executar a saída produzida localmente e testar a rota `/` e os assets principais.
   - Confirmar resposta HTTP válida e ausência de crash na inicialização.

5. **Orientar o redeploy**
   - Informar exatamente quais configurações de Build/Output devem permanecer na Vercel e solicitar um redeploy sem cache após a correção.