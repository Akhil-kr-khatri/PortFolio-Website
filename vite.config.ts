import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",          // Allow all IPs
    port: 8080,
    strictPort: true,
    allowedHosts: ["all"],    // ✅ Critical fix for Render deployment
    fs: {
      allow: ["."],
    },
  },
  preview: {
    host: "0.0.0.0",
    port: 8080,
    allowedHosts: ["all"],    // ✅ Allow Render host during preview mode
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
