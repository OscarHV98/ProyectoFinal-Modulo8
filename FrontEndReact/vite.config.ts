import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite que Docker acceda al servidor
    port: 8383, // Cambia el puerto al 8383
    strictPort: true, // Asegura que Vite no cambie el puerto si está en uso
  },
})
