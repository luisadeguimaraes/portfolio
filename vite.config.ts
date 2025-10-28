import { defineConfig } from 'vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



// vite.config.ts
export default defineConfig({
  // ... other config
  build: {
    outDir: 'docs', // <-- Change 'dist' to 'docs'
  },
});

//commenting for change 