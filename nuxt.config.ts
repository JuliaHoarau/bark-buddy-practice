// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  css: ['@/assets/main.css'], // Include global CSS
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL, // Supabase URL from .env
      supabaseKey: process.env.SUPABASE_KEY, // Supabase key from .env
    },
  },
    postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
});
