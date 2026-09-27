import { files } from '../data/content.js'

export default function EditorPane({ active }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 sm:px-7 sm:py-5.5 min-h-0">
      <pre
        className="m-0 whitespace-pre-wrap leading-[1.7] text-[13.5px] font-mono"
        dangerouslySetInnerHTML={{ __html: files[active].html }}
      />
    </div>
  )
}
