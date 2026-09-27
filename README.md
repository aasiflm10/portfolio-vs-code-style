# Aasif Ali — Portfolio (React + Tailwind)

A VS Code–style portfolio: file explorer sidebar, tabs, syntax-highlighted
"code" content, and a toggleable terminal panel.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

Output goes to `dist/` — deploy that folder to Vercel, Netlify, GitHub Pages, etc.

## Where to edit things

- **Content** (name, skills, experience, projects, contact info) — all in
  `src/data/content.js`. This is the only file you need to touch to update
  what's on the site.
- **Colors / theme** — `tailwind.config.js`, under `theme.extend.colors`
  (the `vs*` palette). Change these to retheme the whole site at once.
- **Sidebar file list** — `sidebarTree` in `src/data/content.js`. Add a new
  entry there and a matching key in the `files` object to add a new "file".
- **Layout / behavior** — each panel is its own component in
  `src/components/` (`TitleBar`, `ActivityBar`, `Sidebar`, `Tabs`,
  `EditorPane`, `Terminal`, `StatusBar`), wired together in `src/App.jsx`.

## Stack

Vite + React 18 + Tailwind CSS 3. No other runtime dependencies.
# portfolio-vs-code-style
