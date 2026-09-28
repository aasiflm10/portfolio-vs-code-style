import { files } from '../data/content.js'

const langColors = {
  JavaScript: '#cbcb41',
  JSON: '#cbcb41',
  Markdown: '#519aba',
  TypeScript: '#3b78c4',
}

export default function StatusBar({ active, onToggleTerminal, cursorPos, theme }) {
  const f = files[active]
  const lang = f.lang || 'Plain Text'

  return (
    <div
      className="h-6 flex items-center px-3 gap-4 text-xs flex-shrink-0 select-none overflow-hidden"
      style={{
        background: 'var(--vs-statusbar)',
        color: '#fff',
        fontFamily: 'Inter, sans-serif',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)'
      }}
    >
      {/* Left: branch */}
      <span className="flex items-center gap-1 opacity-90">
        <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
          <path fillRule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 019 8.5H7a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 017 7h2a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25z"/>
        </svg>
        main
      </span>

      <span className="opacity-70 hidden sm:inline">✓ 0 errors, 0 warnings</span>

      {/* Spacer */}
      <span className="flex-1" />

      {/* Right side */}
      <span className="opacity-90 hidden md:inline">
        Ln {cursorPos?.line ?? 1}, Col {cursorPos?.col ?? 1}
      </span>
      <span className="opacity-90 hidden sm:inline">UTF-8</span>
      <span className="opacity-90">
        {lang}
      </span>
      <span className="opacity-90 hidden md:inline" title={`Theme: ${theme}`}>
        {theme}
      </span>
      <button
        className="opacity-90 hover:opacity-100 transition-opacity"
        onClick={onToggleTerminal}
        title="Toggle Terminal (Ctrl+`)"
      >
        ⌗ Terminal
      </button>
    </div>
  )
}

