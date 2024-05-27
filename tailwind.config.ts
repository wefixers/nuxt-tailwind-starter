import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

import forms from '@tailwindcss/forms'
import animate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

export default <Partial<Config>>{
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [
    forms({ strategy: 'class' }),
    animate,
    typography,
  ],
}
