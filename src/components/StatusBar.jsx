import { files } from '../data/content.js'

export default function StatusBar({ active, onToggleTerminal }) {
  return (
    <div
      className="h-6 flex items-center px-3 gap-4 bg-vsstatusbar text-white text-xs font-ui flex-shrink-0"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <span>⎇ main</span>
      <span>✓ no problems</span>
      <span className="flex-1" />
      <span>{files[active].label}</span>
      <button className="text-white text-xs" onClick={onToggleTerminal}>
        ⌗ Terminal
      </button>
    </div>
  )
}
