import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // Asegúrate de que este es tu archivo de entrada
      name: "ShadCNReactUI",
      fileName: (format) => `shadcn-react-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", '@/utils/utils'], // Evita incluir react en el bundle
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});