import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vercel from "vite-plugin-vercel";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
