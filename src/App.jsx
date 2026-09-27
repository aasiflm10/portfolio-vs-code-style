import { useState } from 'react'
import TitleBar from './components/TitleBar.jsx'
import ActivityBar from './components/ActivityBar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Tabs from './components/Tabs.jsx'
import EditorPane from './components/EditorPane.jsx'
import Terminal from './components/Terminal.jsx'
import StatusBar from './components/StatusBar.jsx'

export default function App() {
  const [open, setOpen] = useState(['about'])
  const [active, setActive] = useState('about')
  const [sidebarShown, setSidebarShown] = useState(false)
  const [terminalOpen, setTerminalOpen] = useState(false)

  function openFile(key) {
    setOpen((prev) => (prev.includes(key) ? prev : [...prev, key]))
    setActive(key)
    setSidebarShown(false) // auto-close on mobile after picking a file
  }

  function closeTab(key) {
    setOpen((prev) => {
      const next = prev.filter((k) => k !== key)
      if (next.length === 0) {
        setActive('about')
        return ['about']
      }
      if (active === key) setActive(next[next.length - 1])
      return next
    })
  }

  return (
    <div className="flex flex-col h-[100dvh]">
      <TitleBar onMenuClick={() => setSidebarShown((s) => !s)} />

      <div className="flex flex-1 min-h-0">
        <ActivityBar />
        <Sidebar activeKey={active} onOpen={openFile} show={sidebarShown} />

        <div className="flex-1 min-w-0 flex flex-col min-h-0">
          <Tabs open={open} active={active} onSelect={setActive} onClose={closeTab} />
          <EditorPane active={active} />
        </div>
      </div>

      <Terminal open={terminalOpen} />
      <StatusBar active={active} onToggleTerminal={() => setTerminalOpen((t) => !t)} />
    </div>
  )
}
