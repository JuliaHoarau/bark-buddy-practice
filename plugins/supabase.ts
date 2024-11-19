import { createClient } from '@supabase/supabase-js';

export default defineNuxtPlugin(() => {
  // Access runtime configuration for Supabase credentials
  const config = useRuntimeConfig();

  // Initialize Supabase client
  const supabase = createClient(config.public.supabaseUrl, config.public.supabaseKey);

  return {
    provide: {
      supabase, // Make the client available globally as $supabase
    },
  };
});
