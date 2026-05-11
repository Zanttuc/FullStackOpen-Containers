import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // allow the container host so the dev server accepts requests proxied from nginx
    allowedHosts: ["todo-frontend"],
  },
  test: {
    environment: "jsdom",
  },
});
