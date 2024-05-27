import en from './locales/en.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  availableLocales: ['en'],
  messages: {
    en,
  },
}))
