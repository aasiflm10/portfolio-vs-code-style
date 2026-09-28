import { useState, useRef, useEffect, useCallback } from 'react'
import { contactInfo, files } from '../data/content.js'
import { themeNames } from '../themes.js'

// ─── Terminal command engine ─────────────────────────────────────────────────
function runCommand(cmd, { onOpen, onThemeChange, currentTheme }) {
  const parts = cmd.trim().split(/\s+/)
  const base  = parts[0]
  const args  = parts.slice(1)

  if (!cmd.trim()) return []

  if (base === 'help') {
    return [
      { type: 'out', text: 'Available commands:' },
      { type: 'out', text: '  whoami              — show identity' },
      { type: 'out', text: '  cat contact.txt     — show contact info' },
      { type: 'out', text: '  ls                  — list portfolio files' },
      { type: 'out', text: '  ls projects/        — list project files' },
      { type: 'out', text: '  open <file>         — open a file in editor' },
      { type: 'out', text: '  theme               — list available themes' },
      { type: 'out', text: '  theme <name>        — switch theme' },
      { type: 'out', text: '  run                 — mock build/run log' },
      { type: 'out', text: '  clear               — clear terminal' },
    ]
  }

  if (base === 'whoami') {
    return [
      { type: 'out', text: 'aasif-ali' },
      { type: 'out', text: 'Software Engineer — AI & GenAI | Hyderabad, India' },
      { type: 'out', text: 'Email: ' + contactInfo.email },
    ]
  }

  if (base === 'cat' && args[0] === 'contact.txt') {
    return [
      { type: 'out', text: `email:    ${contactInfo.email}` },
      { type: 'out', text: `phone:    ${contactInfo.phone}` },
      { type: 'out', text: `linkedin: ${contactInfo.linkedin}` },
      { type: 'out', text: `leetcode: ${contactInfo.leetcode}` },
      { type: 'out', text: `location: ${contactInfo.location}` },
    ]
  }

  if (base === 'ls') {
    const dir = args[0]
    if (!dir || dir === '.') {
      return [
        { type: 'out', text: 'about.md     skills.json   experience.js' },
        { type: 'out', text: 'projects/    education.md  contact.js' },
      ]
    }
    if (dir === 'projects/' || dir === 'projects') {
      return [
        { type: 'out', text: 'network-agent.js   vegas-platform.js   clinical-data.js' },
      ]
    }
    return [{ type: 'err', text: `ls: ${dir}: No such directory` }]
  }

  if (base === 'open') {
    const fileMap = {
      'about.md': 'about', 'skills.json': 'skills', 'experience.js': 'experience',
      'network-agent.js': 'network', 'vegas-platform.js': 'vegas',
      'clinical-data.js': 'clinical', 'education.md': 'education', 'contact.js': 'contact',
      'contact.txt': 'contact',
    }
    const key = fileMap[args[0]]
    if (key) {
      onOpen(key)
      return [{ type: 'out', text: `Opening ${args[0]}...` }]
    }
    if (args[0] === 'resume.pdf') {
      return [{ type: 'out', text: 'Downloading Aasif_Ali_Resume.pdf... (no file attached, add to public/)' }]
    }
    return [{ type: 'err', text: `open: ${args[0]}: File not found` }]
  }

  if (base === 'theme') {
    if (!args[0]) {
      return [
        { type: 'out', text: 'Available themes: ' + themeNames.join(', ') },
        { type: 'out', text: `Current: ${currentTheme}` },
      ]
    }
    const match = themeNames.find(t => t.toLowerCase() === args.join(' ').toLowerCase())
    if (match) {
      onThemeChange(match)
      return [{ type: 'out', text: `Theme changed to: ${match}` }]
    }
    return [{ type: 'err', text: `Unknown theme. Try: ${themeNames.join(', ')}` }]
  }

  if (base === 'run') {
    return [
      { type: 'out', text: '$ vite build' },
      { type: 'out', text: 'vite v5.3.1 building for production...' },
      { type: 'out', text: '✓ 42 modules transformed.' },
      { type: 'out', text: 'dist/index.html          0.46 kB' },
      { type: 'out', text: 'dist/assets/index.js   187.23 kB │ gzip: 54.12 kB' },
      { type: 'out', text: '✓ built in 1.24s' },
    ]
  }

  if (base === 'pwd') {
    return [{ type: 'out', text: '/home/aasif/portfolio' }]
  }

  if (base === 'echo') {
    return [{ type: 'out', text: args.join(' ') }]
  }

  if (base === 'date') {
    return [{ type: 'out', text: new Date().toString() }]
  }

  if (base === 'clear') {
    return [{ type: 'clear' }]
  }

  return [{ type: 'err', text: `zsh: command not found: ${base}. Type 'help' for commands.` }]
}

// ─── Terminal Panel ──────────────────────────────────────────────────────────
export default function Terminal({ open, onToggle, onOpen, onThemeChange, currentTheme }) {
  const [history,  setHistory]  = useState([
    { type: 'out', text: 'Welcome to aasif@portfolio. Type help for available commands.' }
  ])
  const [input,    setInput]    = useState('')
  const [cmdHist,  setCmdHist]  = useState([])
  const [histIdx,  setHistIdx]  = useState(-1)
  const inputRef  = useRef(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  function submit(e) {
    e.preventDefault()
    const cmd = input.trim()
    if (!cmd) return

    const outputs = runCommand(cmd, { onOpen, onThemeChange, currentTheme })

    if (outputs.some(o => o.type === 'clear')) {
      setHistory([])
    } else {
      setHistory(prev => [
        ...prev,
        { type: 'cmd', text: cmd },
        ...outputs
      ])
    }

    setCmdHist(prev => [cmd, ...prev])
    setHistIdx(-1)
    setInput('')
  }

  function handleKeyDown(e) {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(histIdx + 1, cmdHist.length - 1)
      setHistIdx(next)
      setInput(cmdHist[next] ?? '')
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = Math.max(histIdx - 1, -1)
      setHistIdx(next)
      setInput(next === -1 ? '' : cmdHist[next] ?? '')
    }
  }

  return (
    <div
      className="flex-shrink-0 border-t overflow-hidden transition-all duration-200"
      style={{
        height: open ? '200px' : '0px',
        background: '#181818',
        borderColor: 'var(--vs-border)'
      }}
    >
      {/* Terminal header */}
      <div
        className="flex items-center gap-3 px-4 py-1 border-b text-[11px] select-none flex-shrink-0"
        style={{ borderColor: 'var(--vs-border)', color: 'var(--vs-muted)', fontFamily: 'Inter, sans-serif' }}
      >
        <span style={{ color: 'var(--vs-text)' }}>TERMINAL</span>
        <span>zsh</span>
        <span className="flex-1" />
        <button onClick={onToggle} className="hover:opacity-100 opacity-60 text-base leading-none" title="Close terminal (Ctrl+`)">×</button>
      </div>

      {/* Output area */}
      <div className="overflow-y-auto px-4 py-2" style={{ height: 'calc(200px - 28px - 28px)' }}>
        {history.map((line, i) => (
          <div key={i} className="text-[12.5px] leading-5 font-mono">
            {line.type === 'cmd' && (
              <span>
                <span style={{ color: '#27c93f' }}>aasif@portfolio</span>{' '}
                <span style={{ color: 'var(--vs-kw)' }}>~</span>{' '}
                <span style={{ color: 'var(--vs-text)' }}>$ {line.text}</span>
              </span>
            )}
            {line.type === 'out' && (
              <span style={{ color: 'var(--vs-text)' }}>{line.text}</span>
            )}
            {line.type === 'err' && (
              <span style={{ color: '#f87171' }}>{line.text}</span>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input row */}
      <form onSubmit={submit} className="flex items-center px-4 py-1.5 border-t" style={{ borderColor: 'var(--vs-border)' }}>
        <span style={{ color: '#27c93f' }} className="text-[12.5px] font-mono flex-shrink-0">aasif@portfolio</span>
        <span style={{ color: 'var(--vs-kw)' }} className="text-[12.5px] font-mono mx-1 flex-shrink-0">~</span>
        <span style={{ color: 'var(--vs-text)' }} className="text-[12.5px] font-mono mr-1 flex-shrink-0">$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-[12.5px] font-mono caret-white"
          style={{ color: 'var(--vs-text)' }}
          spellCheck={false}
          autoComplete="off"
          autoCapitalize="off"
        />
        <span className="cursor-blink text-[12.5px] font-mono" style={{ color: 'var(--vs-text)' }}>█</span>
      </form>
    </div>
  )
}

