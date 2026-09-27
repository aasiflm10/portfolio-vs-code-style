export default function TitleBar({ onMenuClick }) {
  return (
    <div className="h-[34px] flex items-center gap-2 px-3 bg-vstitlebar border-b border-vsborder flex-shrink-0"
         style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
      <div className="flex gap-1.5">
        <span className="w-[11px] h-[11px] rounded-full bg-[#ff5f56]" />
        <span className="w-[11px] h-[11px] rounded-full bg-[#ffbd2e]" />
        <span className="w-[11px] h-[11px] rounded-full bg-[#27c93f]" />
      </div>
      <button
        className="text-vsmuted text-base px-2 sm:hidden"
        onClick={onMenuClick}
        aria-label="Toggle file explorer"
      >
        ☰
      </button>
      <span className="mx-auto text-vsmuted text-xs font-ui">aasif-ali — portfolio</span>
    </div>
  )
}
