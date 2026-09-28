# Aasif Ali — VS Code Style Portfolio

A **fully interactive VS Code clone** portfolio built with React 18, Vite, and Tailwind CSS. No backend, no heavy UI libraries — deployable as a pure static site.

## 🚀 Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static output in dist/
npm run preview    # preview production build
```

## 🗂️ Project Structure

```
src/
├── App.jsx                    # Root — all state, keyboard shortcuts, layout
├── themes.js                  # 5 VS Code theme token sets (CSS variables)
├── index.css                  # Global styles + CSS custom property defaults
├── data/
│   └── content.js             # ← SINGLE SOURCE OF TRUTH for all content
└── components/
    ├── TitleBar.jsx            # Traffic-light dots + window title
    ├── ActivityBar.jsx         # Left icon strip (Explorer/Search/Extensions)
    ├── Sidebar.jsx             # Collapsible file tree (Explorer view)
    ├── SearchPanel.jsx         # Full-text search sidebar panel
    ├── ExtensionsPanel.jsx     # Certifications as VS Code extensions
    ├── Tabs.jsx                # Tab bar with drag-to-reorder + close
    ├── Breadcrumbs.jsx         # Path bar above editor
    ├── EditorPane.jsx          # Line numbers + syntax-highlighted content
    ├── Minimap.jsx             # Scaled file preview (right edge, lg+ screens)
    ├── Terminal.jsx            # Interactive terminal with real commands
    ├── CommandPalette.jsx      # Ctrl+Shift+P fuzzy command/file palette
    └── StatusBar.jsx           # Bottom bar — branch, cursor, lang, theme
```

## ✏️ Adding a New "File"

1. **Open `src/data/content.js`**
2. Add an entry to `sidebarTree`:
   ```js
   { type: 'file', key: 'mypage', label: 'mypage.md', color: '#519aba', indent: 1 }
   ```
3. Add a matching key to `files{}`:
   ```js
   mypage: {
     label: 'mypage.md',
     color: '#519aba',
     lang: 'Markdown',
     plain: 'plain text for search indexing',
     html: `<span class="cm"># mypage.md</span>\n\nYour content here.`
   }
   ```
4. Done — the file will automatically appear in the sidebar, command palette, search, and tab bar.

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + Shift + P` | Command Palette |
| `Ctrl/Cmd + P` | Quick Open (file search) |
| `Ctrl/Cmd + B` | Toggle Sidebar |
| `` Ctrl/Cmd + ` `` | Toggle Terminal |
| `Ctrl/Cmd + Shift + F` | Search in Files |
| `Escape` | Close any modal |

## 🎨 Themes

Switch via Command Palette (`Change Theme`) or terminal (`theme <name>`):
- **Dark+** (default)
- **Light+**
- **Monokai**
- **Dracula**
- **One Dark**

Theme choice is persisted to `localStorage`.

## 💻 Terminal Commands

```bash
whoami              # show identity info
cat contact.txt     # show contact details
ls                  # list all portfolio files
ls projects/        # list project files
open about.md       # open a file in the editor
theme               # list available themes
theme Dracula       # switch to Dracula theme
run                 # mock build/run log
help                # show all commands
clear               # clear terminal
date / pwd / echo   # standard Unix utilities
```

## 🌐 Deployment

This is a pure static site. Any static host works:

**Vercel:**
```bash
npm run build
vercel dist
```

**GitHub Pages:**
```bash
npm run build
# push dist/ to gh-pages branch
```

**Netlify:** Drag & drop `dist/` folder into Netlify dashboard.

## 🔧 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 + CSS Custom Properties |
| Fonts | JetBrains Mono (editor) + Inter (UI) |
| State | React useState/useEffect + localStorage |
| Deploy | Static (no backend) |

---

Built by **Aasif Ali** · [linkedin.com/in/aasif-ali-a58638229](https://linkedin.com/in/aasif-ali-a58638229)

