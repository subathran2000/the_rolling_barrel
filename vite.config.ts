import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 3000
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@theme": path.resolve(__dirname, "./src/theme"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@types": path.resolve(__dirname, "./src/types"),
    },
  },
});
