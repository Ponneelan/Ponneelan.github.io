import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// On GitHub Actions we inject VITE_BASE so the build uses the correct base
// path for project pages (e.g. /portfolio/). Locally this stays "/".
export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
