// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    build: {
        loaders: {
            scss: {
                implements: require('sass')
            }
        }
    },
    buildModules: ['@nuxtjs/tailwindcss'],
})
