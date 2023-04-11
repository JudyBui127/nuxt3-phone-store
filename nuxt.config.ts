// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/tailwind.css'],
  app: {
    head: {
      title: "Phone Store",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})

