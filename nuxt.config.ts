// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            title: 'CRSpradlin Terminal',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'Software Developer, Christopher Spradlin\'s Interactive Personal Site' }
            ]
        }
    },
    modules: ['nuxt-icon'],
    ssr: false,
    build: {
        loaders: {
            scss: {
                implements: require('sass')
            }
        }
    },
    buildModules: ['@nuxtjs/tailwindcss']
});
