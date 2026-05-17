import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages repository URL:
// https://<username>.github.io/arita-restaurant-collection/
// If you rename the repository, update this base value and README.md.
export default defineConfig({
  plugins: [react()],
  base: '/arita-restaurant-collection/'
});
