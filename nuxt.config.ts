//@ts-ignore
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
    shadcn: {
        prefix: '',
        componentDir: './components/ui'
    },
    typescript: {
        typeCheck: true
    }
})
