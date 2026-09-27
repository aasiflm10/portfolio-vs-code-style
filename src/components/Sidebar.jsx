import { sidebarTree } from '../data/content.js'

export default function Sidebar({ activeKey, onOpen, show }) {
  return (
    <div
      className={`
        bg-vssidebar border-r border-vsborder overflow-y-auto w-[230px] flex-shrink-0
        fixed sm:static top-[34px] sm:top-0 bottom-6 sm:bottom-auto left-0 z-10
        transition-[margin-left] duration-150
        ${show ? 'ml-0' : '-ml-[230px] sm:ml-0'}
      `}
      style={{ boxShadow: show ? '2px 0 10px rgba(0,0,0,.4)' : 'none' }}
    >
      <h4 className="text-vsmuted font-ui text-[11px] tracking-wide font-semibold px-3.5 pt-2.5 pb-1.5">
        PORTFOLIO
      </h4>
      <div className="pb-3">
        {sidebarTree.map((item, i) =>
          item.type === 'folder' ? (
            <div key={i} className="px-2.5 py-0.5 text-[#cccccc] text-[13px]">
              <span className="inline-block w-3">▾</span>
              {item.label}
            </div>
          ) : (
            <div
              key={item.key}
              onClick={() => onOpen(item.key)}
              className={`
                py-0.5 pr-3.5 text-[13px] text-[#cccccc] cursor-pointer whitespace-nowrap
                hover:bg-vshover
                ${activeKey === item.key ? 'bg-vssel' : ''}
              `}
              style={{ paddingLeft: `${item.indent * 14 + 8}px` }}
            >
              <span
                className="inline-block w-2 h-2 mr-2 rounded-[1px]"
                style={{ background: item.color }}
              />
              {item.label}
            </div>
          )
        )}
      </div>
    </div>
  )
}
