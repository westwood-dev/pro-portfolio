import { Link } from '#build/components';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['@nuxt/content', '@nuxt/icon', '@nuxtjs/seo'],

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
    },
  },

  icon: {
    clientBundle: {
      icons: [
        'material-symbols:dark-mode',
        'material-symbols:light-mode',
        'material-symbols:arrow-outward',
        'material-symbols:arrow-forward',
      ],
    },
  },

  ssr: true,

  nitro: {
    preset: 'github_pages',
  },

  site: {
    url: 'https://williamwestwood.com',
    name: 'William Westwood',
    description:
      'William Westwood is a developer and designer based in London, UK.',
    defaultLocale: 'en',
  },
});