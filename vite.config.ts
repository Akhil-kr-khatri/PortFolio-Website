import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",           // allow all IPs
    port: 8080,
    strictPort: true,
    allowedHosts: ["all"],     // ✅ allow any domain (fixes Render issue)
    fs: {
      allow: ["."],
    },
  },
  preview: {
    host: "0.0.0.0",           // also allow all hosts in preview mode
    port: 8080,
    allowedHosts: ["all"],     // ✅ ensure Render host is allowed during preview
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
