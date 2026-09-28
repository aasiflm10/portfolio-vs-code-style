import { useState, useEffect, useRef } from 'react'
import { sidebarTree, files } from '../data/content.js'
import { themeNames } from '../themes.js'

// ─── Build command list ───────────────────────────────────────────────────────
function buildCommands({ onOpen, onTheme, onToggleSidebar, onToggleTerminal }) {
  const fileItems = sidebarTree
    .filter(i => i.type === 'file')
    .map(i => ({
      id: `open:${i.key}`,
      label: i.label,
      description: `Open ${i.label}`,
      icon: '📄',
      group: 'Files',
      action: () => onOpen(i.key)
    }))

  const themeItems = themeNames.map(t => ({
    id: `theme:${t}`,
    label: `Theme: ${t}`,
    description: 'Switch color theme',
    icon: '🎨',
    group: 'Themes',
    action: () => onTheme(t)
  }))

  const commandItems = [
    {
      id: 'cmd:sidebar',
      label: 'Toggle Sidebar',
      description: 'Ctrl+B',
      icon: '⎋',
      group: 'View',
      action: onToggleSidebar
    },
    {
      id: 'cmd:terminal',
      label: 'Toggle Terminal',
      description: 'Ctrl+`',
      icon: '>_',
      group: 'View',
      action: onToggleTerminal
    },
    {
      id: 'cmd:shortcuts',
      label: 'Keyboard Shortcuts',
      description: 'Show all shortcuts',
      icon: '⌨',
      group: 'Help',
      action: null, // handled inline
      isShortcuts: true
    },
  ]

  return [...fileItems, ...themeItems, ...commandItems]
}

// ─── Fuzzy match ──────────────────────────────────────────────────────────────
function fuzzyMatch(str, query) {
  if (!query) return true
  const s = str.toLowerCase()
  const q = query.toLowerCase()
  let si = 0
  for (let qi = 0; qi < q.length; qi++) {
    si = s.indexOf(q[qi], si)
    if (si === -1) return false
    si++
  }
  return true
}

const SHORTCUTS = [
  ['Ctrl+Shift+P / Cmd+Shift+P', 'Command Palette'],
  ['Ctrl+P / Cmd+P',             'Quick Open (file search)'],
  ['Ctrl+B / Cmd+B',             'Toggle Sidebar'],
  ['Ctrl+` / Cmd+`',             'Toggle Terminal'],
  ['Ctrl+Shift+F',               'Search in files'],
  ['Escape',                     'Close modal'],
]

export default function CommandPalette({
  mode, onClose, onOpen, onTheme, onToggleSidebar, onToggleTerminal, currentTheme
}) {
  const [query,   setQuery]   = useState(mode === 'quick' ? '' : '')
  const [sel,     setSel]     = useState(0)
  const [showSC,  setShowSC]  = useState(false)
  const inputRef = useRef(null)

  const allCmds = buildCommands({ onOpen, onTheme, onToggleSidebar, onToggleTerminal })

  const filtered = allCmds.filter(c =>
    fuzzyMatch(c.label, query) || fuzzyMatch(c.description || '', query)
  )

  useEffect(() => { inputRef.current?.focus() }, [])
  useEffect(() => { setSel(0) }, [query])

  function handleKey(e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSel(s => Math.min(s + 1, filtered.length - 1)) }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setSel(s => Math.max(s - 1, 0)) }
    if (e.key === 'Enter') {
      e.preventDefault()
      const item = filtered[sel]
      if (item) execute(item)
    }
    if (e.key === 'Escape') onClose()
  }

  function execute(item) {
    if (item.isShortcuts) { setShowSC(true); return }
    item.action?.()
    onClose()
  }

  const title = mode === 'quick' ? 'Go to File…' : 'Command Palette'
  const placeholder = mode === 'quick' ? 'Type to search files…' : 'Type a command or file name…'

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="rounded-lg shadow-2xl overflow-hidden flex flex-col"
        style={{
          width: 'min(620px, 95vw)',
          maxHeight: '80vh',
          background: 'var(--vs-sidebar)',
          border: '1px solid var(--vs-border)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Input */}
        <div className="flex items-center px-4 border-b" style={{ borderColor: 'var(--vs-border)' }}>
          <span style={{ color: 'var(--vs-muted)' }} className="mr-2 text-sm">›</span>
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKey}
            placeholder={placeholder}
            className="flex-1 bg-transparent outline-none py-3 text-[14px] font-mono"
            style={{ color: 'var(--vs-text)' }}
          />
          <span
            className="text-[11px] px-1 rounded ml-2 cursor-pointer hover:opacity-80"
            style={{ color: 'var(--vs-muted)', background: 'var(--vs-bg)', fontFamily: 'Inter, sans-serif' }}
            onClick={onClose}
          >
            Esc
          </span>
        </div>

        {/* Shortcuts overlay */}
        {showSC ? (
          <div className="overflow-y-auto p-4 flex-1">
            <div className="text-[12px] mb-3 font-semibold" style={{ color: 'var(--vs-muted)', fontFamily: 'Inter, sans-serif' }}>
              KEYBOARD SHORTCUTS
            </div>
            {SHORTCUTS.map(([keys, desc]) => (
              <div key={keys} className="flex justify-between py-1.5 border-b text-[13px]" style={{ borderColor: 'var(--vs-border)' }}>
                <span style={{ color: 'var(--vs-text)' }}>{desc}</span>
                <span
                  className="px-1.5 py-0.5 rounded text-[11px] font-mono"
                  style={{ background: 'var(--vs-bg)', color: 'var(--vs-kw)' }}
                >
                  {keys}
                </span>
              </div>
            ))}
            <button
              onClick={() => setShowSC(false)}
              className="mt-3 text-[12px] hover:underline"
              style={{ color: 'var(--vs-muted)' }}
            >
              ← Back
            </button>
          </div>
        ) : (
          <div className="overflow-y-auto flex-1">
            {filtered.length === 0 && (
              <div className="px-4 py-3 text-[13px]" style={{ color: 'var(--vs-muted)' }}>
                No results for "{query}"
              </div>
            )}

            {/* Group items */}
            {['Files', 'Themes', 'View', 'Help'].map(group => {
              const items = filtered.filter(c => c.group === group)
              if (items.length === 0) return null
              return (
                <div key={group}>
                  <div
                    className="px-4 py-1 text-[11px] font-semibold"
                    style={{ color: 'var(--vs-muted)', background: 'var(--vs-bg)', fontFamily: 'Inter, sans-serif' }}
                  >
                    {group.toUpperCase()}
                  </div>
                  {items.map((item, gi) => {
                    const globalIdx = filtered.indexOf(item)
                    const isSelected = globalIdx === sel
                    return (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 px-4 py-2 cursor-pointer text-[13px]"
                        style={{
                          background: isSelected ? 'var(--vs-sel)' : 'transparent',
                          color: 'var(--vs-text)',
                          borderLeft: isSelected ? '2px solid var(--vs-statusbar)' : '2px solid transparent'
                        }}
                        onMouseEnter={() => setSel(globalIdx)}
                        onClick={() => execute(item)}
                      >
                        <span className="text-base w-5 text-center flex-shrink-0">{item.icon}</span>
                        <span className="flex-1 font-mono">{item.label}</span>
                        {item.description && (
                          <span className="text-[11px]" style={{ color: 'var(--vs-muted)' }}>
                            {item.description}
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

