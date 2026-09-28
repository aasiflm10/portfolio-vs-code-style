import { useState, useRef } from 'react'
import { files } from '../data/content.js'

// Strip HTML to get searchable plain text
function getPlainText(f) {
  return (f.plain || f.html.replace(/<[^>]+>/g, '')).toLowerCase()
}

function highlight(text, query) {
  if (!query) return text
  const idx = text.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return text
  return (
    <>
      {text.slice(0, idx)}
      <mark className="search-match">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  )
}

export default function SearchPanel({ onOpen }) {
  const [query, setQuery]   = useState('')
  const [results, setRes]   = useState([])
  const inputRef = useRef(null)

  function search(q) {
    setQuery(q)
    if (q.trim().length < 2) { setRes([]); return }
    const matches = []
    Object.entries(files).forEach(([key, f]) => {
      const plain = getPlainText(f)
      const ql = q.toLowerCase()
      if (plain.includes(ql)) {
        // Find matching snippets
        const rawLines = f.html.replace(/<[^>]+>/g, '').split('\n')
        const snippets = rawLines
          .filter(l => l.toLowerCase().includes(ql))
          .slice(0, 3)
          .map(l => l.trim())
        matches.push({ key, label: f.label, color: f.color, snippets, count: snippets.length })
      }
    })
    setRes(matches)
  }

  return (
    <div className="h-full flex flex-col overflow-hidden" style={{ background: 'var(--vs-sidebar)' }}>
      {/* Header */}
      <div className="px-3 pt-3 pb-2 text-[11px] font-semibold tracking-widest flex-shrink-0"
        style={{ color: 'var(--vs-muted)', fontFamily: 'Inter, sans-serif' }}>
        SEARCH
      </div>

      {/* Input */}
      <div className="px-3 flex-shrink-0">
        <input
          ref={inputRef}
          value={query}
          onChange={e => search(e.target.value)}
          placeholder="Search in portfolio…"
          className="w-full px-3 py-1.5 rounded text-[13px] outline-none font-mono border"
          style={{
            background: 'var(--vs-bg)',
            color: 'var(--vs-text)',
            borderColor: 'var(--vs-border)',
          }}
          autoFocus
          spellCheck={false}
        />
        {query.length > 0 && query.length < 2 && (
          <p className="text-[11px] mt-1" style={{ color: 'var(--vs-muted)' }}>
            Type at least 2 characters
          </p>
        )}
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto mt-2">
        {results.length === 0 && query.length >= 2 && (
          <div className="px-4 py-2 text-[12px]" style={{ color: 'var(--vs-muted)' }}>
            No matches found.
          </div>
        )}

        {results.map(r => (
          <div key={r.key} className="mb-2">
            {/* File name row */}
            <div
              className="flex items-center gap-2 px-3 py-1 cursor-pointer text-[13px] hover:opacity-80"
              style={{ color: 'var(--vs-text)' }}
              onClick={() => onOpen(r.key)}
            >
              <span className="w-2 h-2 rounded-[2px] flex-shrink-0" style={{ background: r.color }} />
              <span className="font-semibold">{r.label}</span>
              <span className="text-[11px] ml-auto" style={{ color: 'var(--vs-muted)' }}>
                {r.count} match{r.count !== 1 ? 'es' : ''}
              </span>
            </div>

            {/* Snippets */}
            {r.snippets.map((snip, si) => (
              <div
                key={si}
                className="px-6 py-0.5 text-[12px] cursor-pointer hover:opacity-80 truncate"
                style={{ color: 'var(--vs-muted)' }}
                onClick={() => onOpen(r.key)}
                title={snip}
              >
                {highlight(snip, query)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

