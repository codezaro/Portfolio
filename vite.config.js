// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { defineConfig } from 'vite';

// export defineConfig({
//   // Specify CSS file handling options
//   css: {
//     // Extract CSS into separate files (set to `false` to inline CSS into JS files)
//     extract: true,
//   },
// });

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Specify Vite configuration options
  plugins: [react()],
  base: "/Portfolio/",
  css: {
    // Specify CSS file handling options
    extract: true, // Extract CSS into separate files (set to `false` to inline CSS into JS files)
  },
});
