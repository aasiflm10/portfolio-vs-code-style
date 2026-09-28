import { files } from '../data/content.js'

// Strip HTML tags to get raw text for minimap rendering
function getLines(html) {
  return html.replace(/<[^>]+>/g, '').split('\n')
}

// Generate pseudo-random widths seeded by line content (for visual variety)
function lineWidth(str, max = 80) {
  if (!str.trim()) return 0
  const len = Math.min(str.length, max)
  return Math.max(10, (len / max) * 100)
}

export default function Minimap({ active }) {
  const f = files[active]
  const lines = getLines(f.html)

  return (
    <div
      className="hidden lg:flex flex-col w-[90px] flex-shrink-0 overflow-hidden relative border-l"
      style={{ background: 'var(--vs-minimap)', borderColor: 'var(--vs-border)' }}
      title="Minimap"
    >
      {/* Viewport indicator */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'rgba(255,255,255,0.03)', borderLeft: '1px solid rgba(255,255,255,0.08)' }}
      />

      <div className="p-2 flex flex-col gap-0 overflow-hidden">
        {lines.slice(0, 120).map((line, i) => {
          const width = lineWidth(line)
          if (width === 0) return <div key={i} style={{ height: '4px' }} />
          return (
            <div
              key={i}
              className="minimap-line"
              style={{ width: `${width}%`, marginBottom: '1px' }}
            />
          )
        })}
      </div>
    </div>
  )
}

