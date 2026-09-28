import { useState, useEffect, useRef, useCallback } from 'react'
import TitleBar       from './components/TitleBar.jsx'
import ActivityBar    from './components/ActivityBar.jsx'
import Sidebar        from './components/Sidebar.jsx'
import Tabs           from './components/Tabs.jsx'
import Breadcrumbs    from './components/Breadcrumbs.jsx'
import EditorPane     from './components/EditorPane.jsx'
import Minimap        from './components/Minimap.jsx'
import Terminal       from './components/Terminal.jsx'
import StatusBar      from './components/StatusBar.jsx'
import CommandPalette from './components/CommandPalette.jsx'
import SearchPanel    from './components/SearchPanel.jsx'
import ExtensionsPanel from './components/ExtensionsPanel.jsx'
import { themes }     from './themes.js'

// ─── localStorage helpers ────────────────────────────────────────────────────
function lsGet(key, fallback) {
  try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v) }
  catch { return fallback }
}
function lsSet(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)) } catch {}
}

// ─── Apply theme tokens to :root ─────────────────────────────────────────────
function applyTheme(name) {
  const tokens = themes[name] || themes['Dark+']
  const root = document.documentElement
  Object.entries(tokens).forEach(([k, v]) => root.style.setProperty(k, v))
}

export default function App() {
  // ── Persisted state ──────────────────────────────────────────────────────
  const [openTabs,     setOpenTabs]     = useState(() => lsGet('vs-open',    ['about']))
  const [activeTab,    setActiveTab]    = useState(() => lsGet('vs-active',  'about'))
  const [sidebarShown, setSidebarShown] = useState(() => lsGet('vs-sidebar', true))
  const [terminalOpen, setTerminalOpen] = useState(() => lsGet('vs-terminal', false))
  const [theme,        setThemeState]   = useState(() => lsGet('vs-theme',   'Dark+'))
  const [folderState,  setFolderState]  = useState(() => lsGet('vs-folders', { root: true, projects: true }))
  const [activePanel,  setActivePanel]  = useState('explorer')

  // ── Ephemeral UI state ───────────────────────────────────────────────────
  const [cmdOpen,      setCmdOpen]      = useState(false)
  const [quickOpen,    setQuickOpen]    = useState(false)
  const [cursorPos,    setCursorPos]    = useState({ line: 1, col: 1 })
  const [isMobile,     setIsMobile]     = useState(() => window.innerWidth < 768)

  // ── Persist ───────────────────────────────────────────────────────────────
  useEffect(() => lsSet('vs-open',    openTabs),     [openTabs])
  useEffect(() => lsSet('vs-active',  activeTab),    [activeTab])
  useEffect(() => lsSet('vs-sidebar', sidebarShown), [sidebarShown])
  useEffect(() => lsSet('vs-terminal',terminalOpen), [terminalOpen])
  useEffect(() => lsSet('vs-theme',   theme),        [theme])
  useEffect(() => lsSet('vs-folders', folderState),  [folderState])

  // ── Theme ─────────────────────────────────────────────────────────────────
  useEffect(() => { applyTheme(theme) }, [theme])

  function setTheme(name) {
    setThemeState(name)
    applyTheme(name)
  }

  // ── Resize listener ───────────────────────────────────────────────────────
  useEffect(() => {
    function onResize() { setIsMobile(window.innerWidth < 768) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // ── File operations ───────────────────────────────────────────────────────
  const openFile = useCallback((key) => {
    setOpenTabs(prev => prev.includes(key) ? prev : [...prev, key])
    setActiveTab(key)
    if (window.innerWidth < 768) setSidebarShown(false)
  }, [])

  const closeTab = useCallback((key) => {
    setOpenTabs(prev => {
      const next = prev.filter(k => k !== key)
      if (next.length === 0) { setActiveTab('about'); return ['about'] }
      if (activeTab === key) setActiveTab(next[Math.max(0, prev.indexOf(key) - 1)] ?? next[0])
      return next
    })
  }, [activeTab])

  const reorderTabs = useCallback((from, to) => {
    setOpenTabs(prev => {
      const arr = [...prev]
      const [item] = arr.splice(from, 1)
      arr.splice(to, 0, item)
      return arr
    })
  }, [])

  // ── Global keyboard shortcuts ─────────────────────────────────────────────
  useEffect(() => {
    function onKey(e) {
      const mod = e.ctrlKey || e.metaKey
      if (mod && e.shiftKey && e.key === 'P') { e.preventDefault(); setCmdOpen(v => !v); setQuickOpen(false) }
      if (mod && !e.shiftKey && e.key === 'p') { e.preventDefault(); setQuickOpen(v => !v); setCmdOpen(false) }
      if (mod && e.key === 'b') { e.preventDefault(); setSidebarShown(v => !v) }
      if (mod && (e.key === 'j' || e.key === '`')) { e.preventDefault(); setTerminalOpen(v => !v) }
      if (mod && e.shiftKey && e.key === 'F') {
        e.preventDefault()
        setActivePanel('search')
        setSidebarShown(true)
      }
      if (e.key === 'Escape') { setCmdOpen(false); setQuickOpen(false) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // ── Activity bar panel toggle ─────────────────────────────────────────────
  function handleActivityClick(panel) {
    if (panel === activePanel && sidebarShown) {
      setSidebarShown(false)
    } else {
      setActivePanel(panel)
      setSidebarShown(true)
    }
  }

  const sidebarWidth = isMobile ? '100%' : '230px'

  return (
    <div
      className="flex flex-col"
      style={{ height: '100dvh', overflow: 'hidden', background: 'var(--vs-bg)', color: 'var(--vs-text)' }}
    >
      <TitleBar
        onMenuClick={() => setSidebarShown(s => !s)}
        onCmdPalette={() => { setCmdOpen(true); setQuickOpen(false) }}
        theme={theme}
      />

      <div className="flex flex-1 min-h-0 overflow-hidden relative">
        {/* Activity bar — hidden on mobile */}
        <ActivityBar activePanel={activePanel} onClick={handleActivityClick} />

        {/* Sidebar panel */}
        {sidebarShown && (
          <div
            className="flex-shrink-0 border-r overflow-hidden"
            style={{
              width: sidebarWidth,
              borderColor: 'var(--vs-border)',
              background: 'var(--vs-sidebar)',
              // On mobile: overlay absolutely
              ...(isMobile ? {
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                zIndex: 50,
                boxShadow: '4px 0 20px rgba(0,0,0,0.4)',
              } : {})
            }}
          >
            {activePanel === 'explorer' && (
              <Sidebar
                activeKey={activeTab}
                onOpen={openFile}
                folderState={folderState}
                setFolderState={setFolderState}
              />
            )}
            {activePanel === 'search' && (
              <SearchPanel onOpen={openFile} />
            )}
            {activePanel === 'extensions' && (
              <ExtensionsPanel />
            )}
          </div>
        )}

        {/* Mobile overlay backdrop */}
        {isMobile && sidebarShown && (
          <div
            className="absolute inset-0 z-40"
            style={{ background: 'rgba(0,0,0,0.3)' }}
            onClick={() => setSidebarShown(false)}
          />
        )}

        {/* Main editor area */}
        <div className="flex-1 min-w-0 flex flex-col min-h-0">
          <Tabs
            open={openTabs}
            active={activeTab}
            onSelect={setActiveTab}
            onClose={closeTab}
            onReorder={reorderTabs}
          />
          <Breadcrumbs active={activeTab} />
          <div className="flex flex-1 min-h-0 overflow-hidden">
            <EditorPane active={activeTab} onCursorChange={setCursorPos} />
            <Minimap active={activeTab} />
          </div>
        </div>
      </div>

      <Terminal
        open={terminalOpen}
        onToggle={() => setTerminalOpen(v => !v)}
        onOpen={openFile}
        onThemeChange={setTheme}
        currentTheme={theme}
      />
      <StatusBar
        active={activeTab}
        onToggleTerminal={() => setTerminalOpen(v => !v)}
        cursorPos={cursorPos}
        theme={theme}
      />

      {/* Command palette / Quick open overlays */}
      {(cmdOpen || quickOpen) && (
        <CommandPalette
          mode={quickOpen && !cmdOpen ? 'quick' : 'command'}
          onClose={() => { setCmdOpen(false); setQuickOpen(false) }}
          onOpen={openFile}
          onTheme={setTheme}
          onToggleSidebar={() => setSidebarShown(v => !v)}
          onToggleTerminal={() => setTerminalOpen(v => !v)}
          currentTheme={theme}
        />
      )}
    </div>
  )
}

