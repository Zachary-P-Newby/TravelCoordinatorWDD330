import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  server: {
    allowedHosts: ["https://travelcoordinatorwdd330.onrender.com/"],
  },

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        hotelSearch: resolve(__dirname,"src/hotel-search/index.html",),
        hotelDetails: resolve(__dirname,"src/hotel-details/index.html",),
        flights: resolve(__dirname, "src/flights/index.html"),
        weather: resolve(__dirname, "src/weather/index.html"),

      },
    },
  },
});
