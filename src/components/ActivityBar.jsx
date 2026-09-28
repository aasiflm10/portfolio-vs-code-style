// Activity bar — left strip with panel-switch icons
const icons = {
  explorer: {
    title: 'Explorer (Ctrl+Shift+E)',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
      </svg>
    )
  },
  search: {
    title: 'Search (Ctrl+Shift+F)',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="10" cy="10" r="6" />
        <path d="M15 15l6 6" />
      </svg>
    )
  },
  git: {
    title: 'Source Control',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="18" cy="12" r="2.5" />
        <path d="M6 8.5v7M8.3 7l7.4 3.8M8.3 17l7.4-3.8" />
      </svg>
    )
  },
  run: {
    title: 'Run & Debug',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <polygon points="5,3 19,12 5,21" />
        <circle cx="19" cy="19" r="3" strokeWidth="1.5" />
        <line x1="16.5" y1="19" x2="21.5" y2="19" />
        <line x1="19" y1="16.5" x2="19" y2="21.5" />
      </svg>
    )
  },
  extensions: {
    title: 'Certifications & Extensions',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="3" y="3" width="8" height="8" rx="1" />
        <rect x="13" y="3" width="8" height="8" rx="1" />
        <rect x="3" y="13" width="8" height="8" rx="1" />
        <path d="M13 17h8M17 13v8" />
      </svg>
    )
  }
}

const PANELS = ['explorer', 'search', 'extensions']

export default function ActivityBar({ activePanel, onClick }) {
  return (
    <div
      className="hidden sm:flex w-12 flex-shrink-0 flex-col items-center pt-2 gap-1 border-r"
      style={{ background: 'var(--vs-activity)', borderColor: 'var(--vs-border)' }}
    >
      {/* Top icons — panel switchers */}
      {PANELS.map(panel => (
        <button
          key={panel}
          onClick={() => onClick(panel)}
          title={icons[panel].title}
          className="w-10 h-10 flex items-center justify-center rounded transition-colors hover:opacity-100"
          style={{
            color: activePanel === panel ? 'var(--vs-text)' : 'var(--vs-muted)',
            borderLeft: activePanel === panel ? '2px solid var(--vs-text)' : '2px solid transparent',
            opacity: activePanel === panel ? 1 : 0.6
          }}
        >
          {icons[panel].svg}
        </button>
      ))}

      {/* Divider */}
      <div className="w-6 border-t my-1" style={{ borderColor: 'var(--vs-border)' }} />

      {/* Static icons (git, run) */}
      {['git', 'run'].map(panel => (
        <button
          key={panel}
          title={icons[panel].title}
          className="w-10 h-10 flex items-center justify-center rounded transition-colors"
          style={{ color: 'var(--vs-muted)', opacity: 0.5 }}
        >
          {icons[panel].svg}
        </button>
      ))}

      {/* Bottom — profile avatar */}
      <div className="mt-auto mb-2">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
          style={{ background: 'var(--vs-statusbar)', color: '#fff' }}
          title="Aasif Ali"
        >
          A
        </div>
      </div>
    </div>
  )
}

