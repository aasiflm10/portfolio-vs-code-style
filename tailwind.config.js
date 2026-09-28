/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
        ui: ['Inter', 'sans-serif']
      },
      colors: {
        // These are fallback static colors; live theme is driven by CSS vars (see index.css)
        vsbg:          'var(--vs-bg, #1e1e1e)',
        vssidebar:     'var(--vs-sidebar, #252526)',
        vstitlebar:    'var(--vs-titlebar, #323233)',
        vsactivity:    'var(--vs-activity, #333333)',
        vsstatusbar:   'var(--vs-statusbar, #007acc)',
        vstabinactive: 'var(--vs-tabinactive, #2d2d2d)',
        vsborder:      'var(--vs-border, #3c3c3c)',
        vstext:        'var(--vs-text, #d4d4d4)',
        vsmuted:       'var(--vs-muted, #858585)',
        vscomment:     'var(--vs-comment, #6a9955)',
        vskw:          'var(--vs-kw, #569cd6)',
        vsstr:         'var(--vs-str, #ce9178)',
        vsfn:          'var(--vs-fn, #dcdcaa)',
        vsprop:        'var(--vs-prop, #9cdcfe)',
        vsnum:         'var(--vs-num, #b5cea8)',
        vstype:        'var(--vs-type, #4ec9b0)',
        vssel:         'var(--vs-sel, #37373d)',
        vshover:       'var(--vs-hover, #2a2d2e)',
        vslinenum:     'var(--vs-linenum, #858585)',
        vsminimap:     'var(--vs-minimap, #252526)',
      }
    }
  },
  plugins: []
}

