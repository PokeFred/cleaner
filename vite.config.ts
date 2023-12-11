import {defineConfig} from "vite"
import {svelte} from "@sveltejs/vite-plugin-svelte"

export default defineConfig({
    server: {
        host: "127.0.0.1",
        port: 3000,
        strictPort: true
    },
    build: {
        outDir: "build"
    },
    plugins: [svelte()]
})
