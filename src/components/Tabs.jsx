import { files } from '../data/content.js'

export default function Tabs({ open, active, onSelect, onClose }) {
  return (
    <div className="flex bg-vstabinactive border-b border-vsborder overflow-x-auto flex-shrink-0">
      {open.map((key) => {
        const f = files[key]
        const isActive = key === active
        return (
          <div
            key={key}
            onClick={() => onSelect(key)}
            className={`
              flex items-center gap-2 px-3 text-[12.5px] whitespace-nowrap flex-shrink-0
              border-r border-vsborder cursor-pointer
              ${isActive ? 'bg-vsbg text-white border-t-2 border-t-vsstatusbar pt-1.5 pb-2' : 'text-vsmuted py-2'}
            `}
          >
            <span className="w-2 h-2 rounded-[1px] flex-shrink-0" style={{ background: f.color }} />
            {f.label}
            <span
              className="opacity-60 hover:opacity-100 text-sm px-0.5"
              onClick={(e) => {
                e.stopPropagation()
                onClose(key)
              }}
            >
              ×
            </span>
          </div>
        )
      })}
    </div>
  )
}
