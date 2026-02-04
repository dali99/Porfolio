import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Porfolio/',
  build: {
    outDir: 'docs', // 👈 IMPORTANT
  },
  plugins: [react()],
})
