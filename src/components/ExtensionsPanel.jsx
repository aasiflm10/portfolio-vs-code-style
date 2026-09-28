// Extensions panel — styled as VS Code extensions but showing certifications/awards
const extensions = [
  {
    id: 'aws-ccp',
    name: 'AWS Certified Cloud Practitioner',
    publisher: 'Amazon Web Services',
    description: 'Validates cloud fluency and foundational AWS knowledge.',
    version: '2024',
    icon: '☁️',
    tag: 'CERTIFIED',
    tagColor: '#f97316',
    enabled: true,
  },
  {
    id: 'gdsc',
    name: 'GDSC Core Member',
    publisher: 'Google Developer Student Clubs',
    description: 'Core member driving community events and tech workshops.',
    version: '2022–2023',
    icon: '🔵',
    tag: 'MEMBER',
    tagColor: '#3b82f6',
    enabled: true,
  },
  {
    id: 'leetcode',
    name: 'LeetCode Problem Solver',
    publisher: 'LeetCode',
    description: 'Active competitive programmer. View profile: leetcode.com/u/aasif_ali',
    version: 'active',
    icon: '⚡',
    tag: 'ACTIVE',
    tagColor: '#eab308',
    enabled: true,
  },
  {
    id: 'verizon-prod',
    name: 'Verizon Production Engineer',
    publisher: 'Incedo Inc.',
    description: 'Shipped two production platforms serving 800+ Verizon employees and handling 12,000+ requests/day.',
    version: 'Jan 2025–',
    icon: '🔴',
    tag: 'LIVE',
    tagColor: '#22c55e',
    enabled: true,
  },
  {
    id: 'fastapi-ext',
    name: 'FastAPI Expert',
    publisher: 'Community Recognized',
    description: 'High-throughput async FastAPI microservices with Pydantic, background tasks, and observability.',
    version: '^0.115',
    icon: '⚙️',
    tag: 'PROFICIENT',
    tagColor: '#8b5cf6',
    enabled: true,
  },
  {
    id: 'langchain-ext',
    name: 'LangChain / LangGraph Builder',
    publisher: 'AI Community',
    description: 'Agentic LLM workflows, RAG pipelines, stateful graph execution.',
    version: '^0.3',
    icon: '🤖',
    tag: 'EXPERT',
    tagColor: '#06b6d4',
    enabled: true,
  },
]

function ExtensionCard({ ext }) {
  return (
    <div
      className="flex gap-3 px-3 py-3 border-b hover:opacity-90 cursor-default transition-opacity"
      style={{ borderColor: 'var(--vs-border)' }}
    >
      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center text-xl flex-shrink-0 rounded"
        style={{ background: 'var(--vs-bg)' }}>
        {ext.icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[13px] font-semibold truncate" style={{ color: 'var(--vs-text)' }}>
            {ext.name}
          </span>
          <span
            className="text-[9px] px-1 py-0.5 rounded font-bold flex-shrink-0"
            style={{ background: ext.tagColor + '22', color: ext.tagColor, fontFamily: 'Inter, sans-serif' }}
          >
            {ext.tag}
          </span>
        </div>
        <div className="text-[11px] mb-1" style={{ color: 'var(--vs-muted)' }}>
          {ext.publisher} · v{ext.version}
        </div>
        <div className="text-[11.5px] leading-4" style={{ color: 'var(--vs-muted)' }}>
          {ext.description}
        </div>
      </div>

      {/* Status dot */}
      <div className="flex-shrink-0">
        <span
          className="inline-block w-2 h-2 rounded-full mt-1"
          style={{ background: ext.enabled ? '#22c55e' : '#6b7280' }}
          title={ext.enabled ? 'Active' : 'Inactive'}
        />
      </div>
    </div>
  )
}

export default function ExtensionsPanel() {
  return (
    <div className="h-full flex flex-col overflow-hidden" style={{ background: 'var(--vs-sidebar)' }}>
      {/* Header */}
      <div className="px-3 pt-3 pb-2 flex-shrink-0">
        <div className="text-[11px] font-semibold tracking-widest mb-2"
          style={{ color: 'var(--vs-muted)', fontFamily: 'Inter, sans-serif' }}>
          CERTIFICATIONS & EXTENSIONS
        </div>
        <div className="px-2 py-1 rounded border text-[12px]"
          style={{ background: 'var(--vs-bg)', borderColor: 'var(--vs-border)', color: 'var(--vs-muted)' }}>
          🔍 Search extensions…
        </div>
      </div>

      {/* Installed header */}
      <div className="px-3 py-1 text-[11px] font-semibold"
        style={{ color: 'var(--vs-muted)', fontFamily: 'Inter, sans-serif' }}>
        INSTALLED — {extensions.length}
      </div>

      {/* Cards */}
      <div className="flex-1 overflow-y-auto">
        {extensions.map(ext => <ExtensionCard key={ext.id} ext={ext} />)}
      </div>
    </div>
  )
}

