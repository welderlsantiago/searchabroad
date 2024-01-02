import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//.svg reader to integrate them as a react component
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
})
