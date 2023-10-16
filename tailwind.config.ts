import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  }, daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#efb6a5",

          "secondary": "#f7bfa5",

          "accent": "#d67b59",

          "neutral": "#2c2235",

          "base-100": "#393b56",

          "info": "#8ca9ed",

          "success": "#21915b",

          "warning": "#eace43",

          "error": "#f42f59",
        },
      },
    ],
  },
  plugins: [
    require("daisyui")
  ],
}
export default config
