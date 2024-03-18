const strapiBaseUri = process.env.VITE_STRAPI_URL || "http://localhost:1337";
const ssrEnabled = process.env.SSR_ENABLED === 'false' ? false : true;
import { getRedirects } from "./redirects";

export default defineNuxtConfig({
    ssr: ssrEnabled,
    modules: ['@nuxtjs/strapi', 'nuxt-swiper', 'nuxt-gtag', 'nuxt-font-loader', '@nuxtjs/sitemap', '@nuxt/image-edge', ['@nuxtjs/robots', { configPath: 'robots.config.js' }]],
    strapi: {
        url: strapiBaseUri,
        prefix: '/api',
        version: 'v4',
        cookie: {},
        cookieName: 'strapi_jwt',
    },
    swiper: {
      prefix: 'Swiper',
      styleLang: 'css',
    },
    runtimeConfig: {
      public: {
        siteUrl: process.env.VITE_URL || 'http://localhost:3000',
      }
    },
    gtag: {
      id: process.env.NUXT_GTAG,
      loadingStrategy: 'defer',
      enabled: false,
    },
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    css: ['~/assets/css/main.css'],
    image: {
      imagekit: {
        baseURL: 'https://ik.imagekit.io/'+ process.env.IMAGEKIT_ID,
      },
    },
    fontLoader: {
      external: [
        {
          src: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap',
          family: 'Inter',
          class: 'font-inter',
          fallback: 'serif',
        },
      ]
    },
    hooks: {
      'close': async() => { 
        await getRedirects();
      },
    },
});
