import { useState } from 'react'
import { sidebarTree } from '../data/content.js'

// File-type icon colors matching the reference screenshots
function FileIcon({ color }) {
  return (
    <span
      className="inline-block w-3 h-3 flex-shrink-0 rounded-[2px]"
      style={{ background: color }}
    />
  )
}

function FolderIcon({ open }) {
  return (
    <span className="text-[#dcb67a] text-[11px] mr-0.5">
      {open ? '▾' : '▸'}
    </span>
  )
}

export default function Sidebar({ activeKey, onOpen, folderState, setFolderState }) {
  function toggleFolder(key) {
    setFolderState(prev => ({ ...prev, [key]: !prev[key] }))
  }

  // Build a nested-aware list: items under a closed folder are hidden
  let insideProjects = false

  return (
    <div className="h-full overflow-y-auto select-none" style={{ background: 'var(--vs-sidebar)' }}>
      {/* Section header */}
      <div
        className="px-3 pt-2 pb-1 text-[11px] font-semibold tracking-widest flex items-center gap-1 cursor-pointer"
        style={{ color: 'var(--vs-muted)', fontFamily: 'Inter, sans-serif' }}
        onClick={() => toggleFolder('root')}
      >
        <FolderIcon open={folderState.root !== false} />
        PORTFOLIO
      </div>

      {folderState.root !== false && (
        <div className="pb-3">
          {sidebarTree.map((item, i) => {
            if (item.type === 'folder') {
              const isOpen = folderState[item.key] !== false
              if (item.key === 'projects') insideProjects = true
              return (
                <div
                  key={i}
                  className="flex items-center gap-1 py-0.5 px-2.5 cursor-pointer text-[13px]"
                  style={{ color: 'var(--vs-text)', paddingLeft: '8px' }}
                  onClick={() => toggleFolder(item.key)}
                >
                  <FolderIcon open={isOpen} />
                  <span>{item.label}</span>
                </div>
              )
            }

            // Hide files inside collapsed 'projects' folder
            if (item.indent === 2 && folderState.projects === false) return null

            const isActive = item.key === activeKey
            return (
              <div
                key={item.key}
                onClick={() => onOpen(item.key)}
                className="flex items-center gap-2 py-0.5 pr-4 text-[13px] cursor-pointer whitespace-nowrap transition-colors"
                style={{
                  paddingLeft: `${item.indent * 14 + 4}px`,
                  color: 'var(--vs-text)',
                  background: isActive ? 'var(--vs-sel)' : 'transparent',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'var(--vs-hover)' }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
              >
                <FileIcon color={item.color} />
                <span style={{ color: isActive ? 'var(--vs-text)' : 'var(--vs-text)', opacity: isActive ? 1 : 0.85 }}>
                  {item.label}
                </span>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

