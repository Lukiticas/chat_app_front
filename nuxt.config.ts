//@ts-ignore
export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: false,
    modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "nuxt-icon", "@sidebase/nuxt-auth", "dayjs-nuxt"],
    auth: {
        baseURL: process.env.BASE_URL,
        globalAppMiddleware: true,
        provider: {
            type: "local",
            endpoints: {
                signIn: { path: "/login", method: "post" },
                signOut: { path: "/logout", method: "post" },
                signUp: { path: "/signup", method: "post" },
                getSession: { path: "/user", method: "get" },
            },
            token: { signInResponseTokenPointer: "/token" },
        },
    },
    dayjs: {
        locales: ["pt-br", "en"],
        plugins: ["relativeTime", "utc", "timezone"],
        defaultLocale: "pt-br",
        defaultTimezone: "America/Sao_Paulo",
    },
    shadcn: {
        prefix: "",
        componentDir: "./components/ui",
    },
    typescript: {
        typeCheck: true,
    },
    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL || "http://localhost:3000",
        },
    },
});
