import { files, sidebarTree } from '../data/content.js'

// Build breadcrumb path for a given file key
function getBreadcrumb(key) {
  const item = sidebarTree.find(i => i.key === key)
  if (!item) return [key]
  if (item.indent === 2) return ['projects', item.label]
  return [item.label]
}

export default function Breadcrumbs({ active }) {
  const f = files[active]
  const crumbs = getBreadcrumb(active)

  return (
    <div
      className="h-[22px] flex items-center px-3 border-b text-[12px] flex-shrink-0 select-none overflow-hidden"
      style={{
        background: 'var(--vs-bg)',
        borderColor: 'var(--vs-border)',
        color: 'var(--vs-muted)',
        fontFamily: 'Inter, sans-serif'
      }}
    >
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center">
          {i > 0 && <span className="mx-1 opacity-50">›</span>}
          <span style={{ color: i === crumbs.length - 1 ? 'var(--vs-text)' : 'var(--vs-muted)' }}>
            {crumb}
          </span>
        </span>
      ))}
    </div>
  )
}

