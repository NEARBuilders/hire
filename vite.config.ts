import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vercel from "vite-plugin-vercel";
import ssr from "vike/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ssr({
      prerender: true,
    }),
    vercel({
      rewrites: [
        {
          source: "/((?!api/.*).*)",
          destination: "/index.html"
        }
      ]
    })
  ],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
