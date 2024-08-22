import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  server:{
    
    proxy: {
      "/api": "http://localhost:8000",
        
      },
    },
  
  plugins: [react()],
 
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
})