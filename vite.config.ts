import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
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
