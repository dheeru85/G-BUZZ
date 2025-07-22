import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path' // Add this import

export default defineConfig({
  plugins: [react()],
  // Add this resolve section
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})