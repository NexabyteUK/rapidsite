import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015',
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['react-helmet-async'],
          'css-vendor': ['clsx'],
        },
        chunkFileNames: (chunkInfo) => {
          return chunkInfo.name === 'vendor' 
            ? 'assets/vendor.[hash].js'
            : 'assets/[name].[hash].js'
        },
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name].[hash][extname]'
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/\.(css)$/.test(assetInfo.name)) {
            return 'assets/[name].[hash].css'
          }
          return `assets/[name].[hash].${ext}`
        },
      },
    },
    chunkSizeWarningLimit: 500,
    reportCompressedSize: true,
    cssCodeSplit: true,
    sourcemap: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
  },
  server: {
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  },
})