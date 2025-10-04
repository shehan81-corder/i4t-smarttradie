import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "i4T SmartTradie",
        short_name: "SmartTradie",
        description: "A simple job management PWA for tradies",
        theme_color: "#0f4c3a",
        background_color: "#0f4c3a",
        display: "fullscreen",
        start_url: "/?fullscreen=true",
        scope: "/",
        orientation: "portrait",
        categories: ["productivity", "business"],
        lang: "en",
        dir: "ltr",
        icons: [
          { src: "icons/icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "icons/icon-512.png", sizes: "512x512", type: "image/png" },
          { src: "icons/icon-512-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
        ]
      },
      workbox: {
        navigateFallbackDenylist: [/^\/api\//],
        runtimeCaching: [
          { urlPattern: ({request}) => request.destination === "document", handler: "NetworkFirst", options: { cacheName: "html-cache" } },
          { urlPattern: ({request}) => ["style","script","worker"].includes(request.destination), handler: "StaleWhileRevalidate", options: { cacheName: "asset-cache" } },
          { urlPattern: ({request}) => request.destination === "image", handler: "CacheFirst", options: { cacheName: "image-cache", expiration: { maxEntries: 50, maxAgeSeconds: 60*60*24*30 } } }
        ]
      }
    })
  ]
})
