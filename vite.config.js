import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/maplestory-tools/",
  server: {
    open: true,
    port: 3001,
  },
  plugins: [react()],
});
