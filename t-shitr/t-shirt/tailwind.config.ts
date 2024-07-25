import type { Config } from 'tailwindcss'

import { backgroundImage, colors } from './src/themes/colors'
import { fontSize, fontWeight } from './src/themes/fontStyle'
import { spacing } from './src/themes/spacing'

export const themeConfig = {
  extend: {
    backgroundImage,
    fontSize,
    fontWeight,
    colors,
    spacing,
  },
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/themes/**.{js,ts,jsx,tsx,mdx}',
  ],
  theme: themeConfig,
  plugins: [],
}
export default config
