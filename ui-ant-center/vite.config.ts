import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { tempo } from "tempo-devtools/dist/vite";

// 👇 Chỉ cần nếu dùng tempo-devtools
const conditionalPlugins: [string, Record<string, any>][] = [];
if (process.env.TEMPO === "true") {
  conditionalPlugins.push(["tempo-devtools/swc", {}]);
}

// 👇 THAY ĐỔI: thêm base cho GitHub Pages
const basePath = process.env.NODE_ENV === "development"
  ? "/"
  : process.env.VITE_BASE_PATH || "/TestRespository/"; // đổi thành tên repo của bạn

export default defineConfig({
  base: basePath,

  optimizeDeps: {
    entries: ["src/main.tsx", "src/tempobook/**/*"],
  },

  plugins: [
    react({
      plugins: conditionalPlugins,
    }),
    tempo(),
  ],

  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    allowedHosts: true,
  },
});
