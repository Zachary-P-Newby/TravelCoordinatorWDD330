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
        main: resolve(import.meta.dirname, "src/index.html"),
        hotelSearch: resolve(import.meta.dirname, "src/hotel-search/index.html"),
        hotelDetails: resolve(import.meta.dirname, "src/hotel-details/index.html"),
        flights: resolve(import.meta.dirname, "src/flights/index.html"),
        destination: resolve(import.meta.dirname, "src/destination/index.html"),
        currentLocation: resolve(import.meta.dirname, "src/current-location/index.html")
      },
    },
  },
});
