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
        vsbg: '#1e1e1e',
        vssidebar: '#252526',
        vstitlebar: '#323233',
        vsactivity: '#333333',
        vsstatusbar: '#007acc',
        vstabinactive: '#2d2d2d',
        vsborder: '#3c3c3c',
        vstext: '#d4d4d4',
        vsmuted: '#858585',
        vscomment: '#6a9955',
        vskw: '#569cd6',
        vsstr: '#ce9178',
        vsfn: '#dcdcaa',
        vsprop: '#9cdcfe',
        vsnum: '#b5cea8',
        vstype: '#4ec9b0',
        vssel: '#37373d',
        vshover: '#2a2d2e'
      }
    }
  },
  plugins: []
}
