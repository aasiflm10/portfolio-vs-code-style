import { contactInfo } from '../data/content.js'

export default function Terminal({ open }) {
  return (
    <div
      className="bg-[#181818] border-t border-vsborder overflow-hidden flex-shrink-0 transition-[height] duration-150"
      style={{ height: open ? '180px' : '0px' }}
    >
      <div className="px-4 py-2.5 overflow-y-auto h-full">
        <div className="text-vsmuted text-[11.5px] mb-2 font-ui">TERMINAL — zsh</div>
        <div className="my-0.5 text-[13px]">
          <span className="text-[#27c93f]">aasif@portfolio</span>{' '}
          <span className="text-vskw">~</span> $ cat contact.txt
        </div>
        <div className="my-0.5 text-[13px]">email:&nbsp;&nbsp;&nbsp;&nbsp;{contactInfo.email}</div>
        <div className="my-0.5 text-[13px]">phone:&nbsp;&nbsp;&nbsp;&nbsp;{contactInfo.phone}</div>
        <div className="my-0.5 text-[13px]">
          linkedin:{' '}
          <a
            className="text-vsprop"
            href={`https://${contactInfo.linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            {contactInfo.linkedin}
          </a>
        </div>
        <div className="my-0.5 text-[13px]">location: {contactInfo.location}</div>
        <div className="my-0.5 text-[13px]">
          <span className="text-[#27c93f]">aasif@portfolio</span>{' '}
          <span className="text-vskw">~</span> $ <span className="opacity-50">_</span>
        </div>
      </div>
    </div>
  )
}
