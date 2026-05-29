import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'   // ← ADD THIS
import path from 'path'

// vite.config.js
export default {
  build: {
    assetsInlineLimit: 0,  // ← never inline images as base64
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
      }
    }
  }
}