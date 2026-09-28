import { useEffect, useRef, useState } from 'react'
import { files } from '../data/content.js'

// Strip HTML tags from content to get line count
function stripHtml(html) {
  return html.replace(/<[^>]+>/g, '')
}

export default function EditorPane({ active, onCursorChange }) {
  const f = files[active]
  const lines = stripHtml(f.html).split('\n')
  const editorRef = useRef(null)

  // Track scroll for syncing with minimap (future), and cursor pos
  function handleClick(e) {
    // Estimate line from click position
    const el = editorRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const lineHeight = 24 // approx px
    const scrollTop = el.scrollTop
    const clickY = e.clientY - rect.top + scrollTop
    const line = Math.max(1, Math.floor(clickY / lineHeight) + 1)
    onCursorChange?.({ line: Math.min(line, lines.length), col: 1 })
  }

  return (
    <div
      ref={editorRef}
      className="flex-1 overflow-y-auto overflow-x-auto min-h-0"
      style={{ background: 'var(--vs-bg)' }}
      onClick={handleClick}
    >
      <div className="flex min-h-full">
        {/* Line numbers gutter */}
        <div
          className="select-none text-right pr-4 pl-4 pt-5 pb-5 text-[13px] leading-6 flex-shrink-0"
          style={{
            color: 'var(--vs-linenum)',
            minWidth: '52px',
            borderRight: '1px solid var(--vs-border)',
            userSelect: 'none'
          }}
        >
          {lines.map((_, i) => (
            <div key={i} style={{ lineHeight: '24px' }}>{i + 1}</div>
          ))}
        </div>

        {/* Code content */}
        <div className="flex-1 px-6 pt-5 pb-10">
          <pre
            className="m-0 font-mono text-[13.5px] whitespace-pre-wrap"
            style={{ color: 'var(--vs-text)', lineHeight: '24px' }}
            dangerouslySetInnerHTML={{ __html: f.html }}
          />
        </div>
      </div>
    </div>
  )
}

