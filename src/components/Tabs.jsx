import { useRef, useState } from 'react'
import { files } from '../data/content.js'

export default function Tabs({ open, active, onSelect, onClose, onReorder }) {
  const [dragIdx, setDragIdx]   = useState(null)
  const [overIdx, setOverIdx]   = useState(null)

  function handleDragStart(e, idx) {
    setDragIdx(idx)
    e.dataTransfer.effectAllowed = 'move'
  }
  function handleDragOver(e, idx) {
    e.preventDefault()
    setOverIdx(idx)
  }
  function handleDrop(e, idx) {
    e.preventDefault()
    if (dragIdx !== null && dragIdx !== idx) onReorder(dragIdx, idx)
    setDragIdx(null)
    setOverIdx(null)
  }
  function handleDragEnd() {
    setDragIdx(null)
    setOverIdx(null)
  }

  return (
    <div
      className="flex overflow-x-auto flex-shrink-0 border-b"
      style={{ background: 'var(--vs-tabinactive)', borderColor: 'var(--vs-border)' }}
    >
      {open.map((key, idx) => {
        const f = files[key]
        const isActive = key === active
        const isDragging = dragIdx === idx
        const isOver = overIdx === idx

        return (
          <div
            key={key}
            draggable
            onDragStart={e => handleDragStart(e, idx)}
            onDragOver={e => handleDragOver(e, idx)}
            onDrop={e => handleDrop(e, idx)}
            onDragEnd={handleDragEnd}
            onClick={() => onSelect(key)}
            className={`
              flex items-center gap-1.5 px-3 text-[12.5px] whitespace-nowrap flex-shrink-0
              border-r cursor-pointer transition-colors group
              ${isDragging ? 'opacity-50' : ''}
              ${isOver && !isDragging ? 'border-l-2' : ''}
            `}
            style={{
              borderColor: 'var(--vs-border)',
              borderLeftColor: isOver && !isDragging ? 'var(--vs-statusbar)' : undefined,
              background: isActive ? 'var(--vs-bg)' : 'var(--vs-tabinactive)',
              color: isActive ? 'var(--vs-text)' : 'var(--vs-muted)',
              borderTop: isActive ? '1px solid var(--vs-statusbar)' : '1px solid transparent',
              paddingTop: isActive ? '7px' : '8px',
              paddingBottom: '8px',
            }}
          >
            {/* File color dot */}
            <span
              className="w-2 h-2 rounded-[2px] flex-shrink-0"
              style={{ background: f.color }}
            />

            {/* Label */}
            <span>{f.label}</span>

            {/* Close button */}
            <button
              className="w-4 h-4 flex items-center justify-center rounded text-xs opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:bg-white/10 transition-all"
              onClick={e => { e.stopPropagation(); onClose(key) }}
              title="Close tab"
            >
              ×
            </button>
          </div>
        )
      })}
    </div>
  )
}

