import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],

  loader: {
    ".js": "jsx", // Agrega esta línea para indicar que los archivos .js deben tratarse como JSX
  },
});
