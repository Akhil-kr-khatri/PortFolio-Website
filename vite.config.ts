import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
    allowedHosts: ["all"],
    fs: {
      allow: ["."],
    },
  },
  preview: {
    host: "0.0.0.0",
    port: 8080,
    allowedHosts: ["all"],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",        // Ensure build output goes to 'dist'
    emptyOutDir: true,     // Clears old builds
    sourcemap: false,
  },
}));
