import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: true,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
    /* Desktop/iCloud + stora bildmappar kan mätta fsevents och hänga Vite. */
    watch: {
      usePolling: true,
      interval: 1000,
      ignored: [
        "**/src/assets/site/duotone/**",
        "**/src/assets/site/masters/**",
        "**/.shots/**",
        "**/dist/**",
        "**/node_modules/**",
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
  define: {
    'global': 'globalThis',  // Add this line to handle global variables
  },
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.JPG", "**/*.jpeg", "**/*.JPEG", "**/*.svg"],
});
