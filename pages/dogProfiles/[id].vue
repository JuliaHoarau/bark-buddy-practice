<template>
  <!-- Check if dog data exists and display it -->
  <div v-if="dog">
    <img :src="dog.profileImage" alt="Photo of {{ dog.dogName }}" />
    <h1>{{ dog.dogName }}</h1>
    <p>Age: {{ dog.age }}</p>
    <p>Breed: {{ dog.breed }}</p>
    <p>Temperament: {{ dog.temperament }}</p>
    <p>Body blade length: {{ dog.bodyBladeLength }}</p>
    <p>Leg blade length: {{ dog.legBladeLength }}</p>
    
    <p>Notes: {{ dog.notes }}</p>
  </div>

  <!-- Show a loading message while fetching data -->
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script lang="ts" setup>
// Import the Supabase client from the Nuxt app
const { $supabase } = useNuxtApp();

// Access the route parameters to get the dog's ID
const route = useRoute();

// Import the Dog interface
import type { Dog } from '~/plugins/types/supabase';

const { data: dog, error } = await $supabase
  .from<Dog>('dogProfile')
  .select('*')
  .eq('dogProfileID', route.params.id)
  .single();


// Handle errors
if (error) {
  console.error('Error fetching dog:', error.message);
}
</script>
