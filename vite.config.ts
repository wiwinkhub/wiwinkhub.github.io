import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use VITE_BASE_PATH from environment for GitHub Pages, fallback to '/'
  // For GitHub Pages repo deployment: set VITE_BASE_PATH=/repo-name/
  // For custom domain or username.github.io: use default '/'
  base: process.env.VITE_BASE_PATH || '/',
  server: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: true,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
