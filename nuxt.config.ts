// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    typeCheck: false,
  },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/eslint', '@nuxtjs/plausible', '@nuxtjs/seo', '@nuxthub/core'],
  site: {
    url: 'https://mildchaosideas.com',
    name: 'Mild Chaos Ideas',
    description:
      'Discover delightfully devious (but totally harmless) ways to add a sprinkle of chaos to everyday life.',
    defaultLocale: 'en',
    identity: {
      type: 'Organization',
    },
    twitter: '@mildchaosideas',
    ogImage: '/og-image.png',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },
  robots: {
    enabled: true,
    disallow: '',
    sitemap: 'https://mildchaosideas.com/sitemap.xml',
  },
  sitemap: {
    enabled: true,
    urls: [],
    defaults: {
      changefreq: 'daily',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
  },
  ogImage: {
    enabled: true,
    defaults: {
      alt: 'Mild Chaos Ideas - Harmless pranks and fun ideas',
    },
  },
  plausible: {
    // Prevent tracking on localhost
    ignoredHostnames: ['localhost'],
    apiHost: 'https://plausible.shad-group.com',
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
})