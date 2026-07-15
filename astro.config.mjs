import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://luiscruz-1.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
