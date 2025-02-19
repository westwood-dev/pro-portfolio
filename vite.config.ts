import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [
    react(),
    {
      name: 'handle-media',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.startsWith('/videos/') || req.url?.startsWith('/images/')) {
            const filePath = resolve(process.cwd(), 'public', req.url)
            if (fs.existsSync(filePath)) {
              res.setHeader('Content-Type', `${req.url.startsWith('/videos/') ? 'video' : 'image'}/${filePath.split('.').pop()}`)
              return fs.createReadStream(filePath).pipe(res)
            }
          }
          next()
        })
      }
    }
  ],
  base: '/', 
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'content': resolve(__dirname, './content')
    }
  },
  assetsInclude: ['**/*.md', '**/*.pdf', '**/*.mp4', '**/*.png', '**/*.jpg', '**/*.gif'],
  build: {
    rollupOptions: {
      input: {
        main: '/index.html'
      }
    }
  },
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
}))
