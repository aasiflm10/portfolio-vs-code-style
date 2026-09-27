export default function ActivityBar() {
  return (
    <div className="hidden sm:flex w-12 flex-shrink-0 bg-vsactivity border-r border-vsborder flex-col items-center pt-2.5 gap-5">
      <div className="w-[22px] h-[22px] opacity-100">
        <svg viewBox="0 0 24 24" fill="none" stroke="#d4d4d4" strokeWidth="1.4">
          <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
        </svg>
      </div>
      <div className="w-[22px] h-[22px] opacity-55">
        <svg viewBox="0 0 24 24" fill="none" stroke="#d4d4d4" strokeWidth="1.4">
          <circle cx="10" cy="10" r="6" />
          <path d="M15 15l6 6" />
        </svg>
      </div>
      <div className="w-[22px] h-[22px] opacity-55">
        <svg viewBox="0 0 24 24" fill="none" stroke="#d4d4d4" strokeWidth="1.4">
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <circle cx="18" cy="12" r="2.5" />
          <path d="M6 8.5v7M8.3 7l7.4 3.8M8.3 17l7.4-3.8" />
        </svg>
      </div>
    </div>
  )
}
