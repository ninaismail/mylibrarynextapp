import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "zillaslab": "var(--font-zillaslab)",
      },
      aspectRatio: {
        '3 / 4': '3/4'
      },
      colors: {
        'primary': '#dc8920',
        'background': '#f2dcb1'
      }
    },
  },
  plugins: [],
}
export default config
