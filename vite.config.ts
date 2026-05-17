import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/java-interview-questions/',
  build: {
    sourcemap: false,
  },
  plugins: [
    react()
  ],
})
