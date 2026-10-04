import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  server: {
    allowedHosts: [],
  },

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "src/index.html"),
        hotelData: resolve(import.meta.dirname, "src/hotel-data/index.html"),
      },
    },
  },
});
