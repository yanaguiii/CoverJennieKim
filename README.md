# @coverjenniekim — site oficial

Site pessoal da **Julia**, cover tributo da **Jennie (BLACKPINK)**. Um portfólio digital com apresentação, trabalhos em vídeo/foto, linha do tempo da trajetória no mundo cover (da descoberta do BLACKPINK à era solo da Jennie) e canais de contato para booking.

> Projeto de fã, sem afiliação oficial com YG Entertainment, BLACKPINK ou Jennie Kim.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | [Nuxt 3](https://nuxt.com) (Vue 3 + Vite) |
| Renderização | **SPA** (`ssr: false`) — tudo no cliente, sem backend |
| Smooth scroll | [Lenis](https://github.com/darkroomengineering/lenis) |
| Animações de entrada | `IntersectionObserver` (classes `.reveal`) |
| Tipografia | `Playfair Display` (display/italic) + `Inter` (UI) via Google Fonts |
| Estilos | CSS puro com variáveis CSS, `<style scoped>` externalizado por componente |

Sem Tailwind, sem CSS-in-JS, sem frameworks de UI.

---

## Rodando localmente

Pré-requisito: **Node 18+** (testado em Node 24).

```bash
# instalar dependências
npm install

# dev server (http://localhost:3000) com HMR
npm run dev

# build de produção → .output/
npm run build

# preview do build
npm run preview

# gerar arquivos estáticos (SPA estática p/ hospedar em CDN/Netlify/Vercel)
npm run generate
```

---

## Estrutura de pastas

```
.
├── app.vue                   # shell raiz (nav + <NuxtPage/> + footer + noise overlay)
├── nuxt.config.ts            # config Nuxt — ssr:false, fontes, meta tags
├── pages/
│   └── index.vue             # single page — monta as seções na ordem
├── components/               # cada componente tem seu .vue + .css
│   ├── AppNav.vue  + AppNav.css
│   ├── AppFooter.vue + AppFooter.css
│   ├── HeroSection.vue + HeroSection.css
│   ├── MarqueeBar.vue + MarqueeBar.css
│   ├── WorkSection.vue + WorkSection.css
│   ├── StorySection.vue + StorySection.css
│   ├── QuoteSection.vue + QuoteSection.css
│   └── ReelSection.vue + ReelSection.css
├── plugins/
│   ├── lenis.client.ts       # instancia Lenis no client e expõe $lenis
│   └── reveal.client.ts      # IntersectionObserver p/ classes .reveal
├── assets/
│   └── css/main.css          # reset, variáveis, helpers globais
├── public/
│   ├── favicon.svg
│   └── (coloque aqui suas mídias: /work/foto.jpg, /reel.mp4, etc.)
```

### Como os componentes se conectam

```
app.vue
 ├── AppNav        (fixed, mix-blend-mode difference, scroll p/ seções via Lenis)
 ├── NuxtPage → pages/index.vue
 │    ├── HeroSection    (#top)   ─ título gigante, retrato com parallax de mouse
 │    ├── MarqueeBar              ─ faixa rolante de nomes de músicas
 │    ├── WorkSection    (#work)  ─ grid bento de 6 cards de portfólio
 │    ├── QuoteSection            ─ citação em display type
 │    ├── StorySection   (#story) ─ timeline da trajetória cover
 │    ├── MarqueeBar reverse      ─ segunda faixa, sentido oposto
 │    └── ReelSection    (#reel)  ─ player do vídeo principal
 └── AppFooter     (#contact)     ─ título gigante "get in touch" + socials + WhatsApp
```

---

## Convenções

### CSS

- **Variáveis globais** em `assets/css/main.css`:
  - `--c-bg`, `--c-bg-2` — fundos pretos
  - `--c-ink`, `--c-muted` — texto
  - `--c-red`, `--c-red-deep` — vermelho da marca (`#d6001c`)
  - `--c-line` — bordas sutis
  - `--f-sans`, `--f-display` — fontes
  - `--ease` — curva padrão de transições
- **Nomenclatura BEM**: `.block`, `.block__element`, `.block--modifier`.
- **Scoped por componente**: cada `.vue` referencia seu `.css` via `<style scoped src="./X.css">` — o Vue aplica sufixo `data-v-xxx` automaticamente, sem risco de colisão entre componentes.
- **Helpers globais no main.css**: `.container`, `.eyebrow`, `.display`, `.red`, `.reveal`, `.noise`.

### Animações

- **Smooth scroll**: o plugin [`plugins/lenis.client.ts`](plugins/lenis.client.ts) inicia o Lenis e registra o loop de `requestAnimationFrame`. Outros componentes acessam via `const { $lenis } = useNuxtApp()` e chamam `$lenis.scrollTo(elemento, { offset, duration })`.
- **Entrada on-scroll**: adicione a classe `.reveal` em qualquer elemento. O plugin [`plugins/reveal.client.ts`](plugins/reveal.client.ts) usa `IntersectionObserver` para adicionar `.is-in` quando entra na viewport — o fade/translate está definido no `main.css`.

---

## Adicionando suas mídias

Coloque arquivos em `public/` (acessíveis em `/arquivo.ext` no browser).

### Portfólio (seção Work)

Edite o array `works` no topo de [`components/WorkSection.vue`](components/WorkSection.vue):

```ts
const works = [
  {
    id: 1,
    title: 'LIKE JENNIE',
    place: 'São Paulo · 2025',
    tag: 'stage',
    span: 'wide',               // 'wide' | 'tall' | 'small'
    media: '/work/evento-1.jpg', // imagem, gif ou .mp4/.webm/.mov
    accent: true                 // opcional: destaque vermelho
  },
  // ...
]
```

O componente detecta automaticamente se o arquivo é vídeo (por extensão) e renderiza `<video autoplay muted loop playsinline>`.

### Reel principal

Em [`components/ReelSection.vue`](components/ReelSection.vue), troque `videoSrc: null` pelo caminho (ex: `'/reel.mp4'`).

### História / timeline

Edite o array `chapters` no topo de [`components/StorySection.vue`](components/StorySection.vue) para adicionar/editar capítulos.

### Navegação e rodapé

- Logo e itens do menu: [`components/AppNav.vue`](components/AppNav.vue).
- Contatos/redes: [`components/AppFooter.vue`](components/AppFooter.vue). WhatsApp já configurado para `+55 21 96699-7227` via [wa.me](https://wa.me).

---

## Ajustes rápidos de identidade

| Quero mudar... | Arquivo | Onde |
|---|---|---|
| Cor vermelha principal | `assets/css/main.css` | `--c-red: #d6001c` |
| Fontes | `nuxt.config.ts` | `link` do Google Fonts + `--f-sans`/`--f-display` |
| Título do hero | `components/HeroSection.vue` | `<h1 class="hero__title">` |
| Citação destacada | `components/QuoteSection.vue` | dentro de `<blockquote>` |
| Velocidade do smooth scroll | `plugins/lenis.client.ts` | `duration: 1.2` |
| Velocidade das marquees | `MarqueeBar.css` | `animation: slide 40s ...` |

---

## Deploy

Como é um SPA puro, qualquer host estático serve. Recomendado:

```bash
npm run generate
# faz upload da pasta .output/public/ para Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.
```

---

## Licença

Código do site: uso pessoal/educacional. Todas as marcas, imagens, músicas e referências a BLACKPINK, Jennie Kim e YG Entertainment pertencem aos seus respectivos detentores.
