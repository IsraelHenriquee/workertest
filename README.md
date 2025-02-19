# Cloudflare Worker Test

Este é um projeto de teste usando Cloudflare Workers.

## Funcionalidades

- Processamento de requisições HTTP
- Integração com APIs externas
- Demonstração de ambientes de desenvolvimento e produção

## Como usar

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Para desenvolvimento local:
```bash
wrangler dev
```

4. Para fazer deploy em desenvolvimento:
```bash
wrangler deploy --env development
```

5. Para fazer deploy em produção:
```bash
wrangler deploy --env production
```

## Ambientes

- Desenvolvimento: https://hello-worker-dev.[seu-worker].workers.dev
- Produção: https://hello-worker-prod.[seu-worker].workers.dev
