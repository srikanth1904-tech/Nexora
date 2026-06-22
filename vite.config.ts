import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Using relative paths for assets to fix blank screen issues on deployment
  plugins: [react(), tailwindcss()],
})
