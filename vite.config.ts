import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      includeAssets: ["logo.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "Web Application",
        short_name: "Web App",
        description: "Amazing React Application",
        theme_color: "#000",
        display: "fullscreen",
        start_url: "/",
        prefer_related_applications: true,
        icons: [
          {
            src: "logo_192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  test: {
    css: true,
    environment: "jsdom",
    globals: true,
    setupFiles: "src/tests/main.tsx",
  },
});
