# Brechó Balonê — Site Piloto

Site institucional do **Brechó Balonê** (Fê Bassi), em Porto Alegre / RS.
Projeto em evolução — esta primeira versão traz uma home simples com
apresentação da loja.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)

## Desenvolvimento

```bash
npm install
npm run dev
```

O app fica disponível em [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run start` — roda o build
- `npm run lint` — ESLint

## Estrutura

```
src/
  app/          # App Router (layout, page, globals.css)
  components/   # Header, Hero, Sobre, Visite, Footer
public/images/  # Imagens da loja
```
