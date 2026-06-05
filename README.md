# brechobalone-pilot

Site institucional do [Brechó Balonê](https://brechobalone.com.br) — brechó premium de Fernanda Bassi, Porto Alegre/RS.

## Stack

- **Next.js 16** (App Router, static export)
- **React 19** + TypeScript
- **Tailwind CSS v4** com tokens customizados via `@theme`
- Deploy via **Netlify** (CI/CD no push para `main`)

## Decisões de arquitetura

**Static export** — sem server-side rendering. O site é totalmente estático (`output: "export"`), o que elimina cold starts, simplifica o deploy e reduz custo operacional a zero no Netlify Free.

**Tailwind v4 com design tokens** — toda a paleta e tipografia ficam centralizados em `globals.css` via `@theme {}`. Trocar a identidade visual do site inteiro é uma edição de 8 linhas.

**Scroll animations sem biblioteca** — `useInView` customizado com `IntersectionObserver`. Sem dependência extra, sem bundle bloat, comportamento controlado via classes CSS (`fade-up`, `fade-up-delay-*`).

**`--webpack` obrigatório** — o diretório contém caracteres NFD (`[Júlia]`) que causam panic no Turbopack. Workaround aplicado nos scripts `dev` e `build`.

## Desenvolvimento local

```bash
npm install
npm run dev      # Next.js com --webpack (ver nota acima)
```

O app sobe em [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Dev server com hot reload |
| `npm run build` | Build estático para `out/` |
| `npm run lint` | ESLint |

## Estrutura

```
src/
  app/
    globals.css       # Tokens de design (paleta, tipografia, animações)
    layout.tsx        # Metadados SEO, Open Graph, fontes
    page.tsx          # Composição das seções + marquees
  components/
    Header.tsx        # Navbar responsiva com menu mobile
    Hero.tsx          # Seção inicial com imagem e CTAs
    Marquee.tsx       # Faixa rolante reutilizável (keywords / marcas)
    Catalogo.tsx      # CTA do catálogo online + phone mockup
    Espacos.tsx       # Mini Museu Balonê e Espaço Boho
    Galeria.tsx       # Grid de fotos da loja com hover overlay
    Quote.tsx         # Seção manifesto editorial
    Depoimentos.tsx   # Cards de avaliações
    Sobre.tsx         # História da loja + stats
    Visite.tsx        # Horários, endereço e contatos
    Footer.tsx
    WhatsAppFloat.tsx # Botão fixo de contato
  hooks/
    useInView.ts      # IntersectionObserver para scroll animations
public/
  images/             # Fotos da loja e do catálogo
```

## Deploy

O Netlify detecta push na `main` e roda `npm run build`. O diretório `out/` é publicado diretamente. Configuração em `netlify.toml` (headers de segurança incluídos).

DNS apontando para Netlify via delegação de nameservers no Registro.br.
