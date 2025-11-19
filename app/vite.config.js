import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // For local testing set '/'.
  // For final GitHub Pages deploy set '/redux/' (repo name, case-sensitive).
  base: '/redux/', 
  plugins: [react()],
})
