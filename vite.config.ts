import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// One HTML file per page, so /servicos/ is a real file on the shared host and
// needs no server rewrites. Add each new page here.
const pages = {
  home: 'index.html',
  servicos: 'servicos/index.html',
}

// https://vite.dev/config/
export default defineConfig({
  // No SPA fallback: an unknown URL is a 404, as it will be on the host
  appType: 'mpa',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  build: {
    rolldownOptions: {
      input: Object.fromEntries(
        Object.entries(pages).map(([name, file]) => [name, resolve(import.meta.dirname, file)]),
      ),
    },
  },
})
