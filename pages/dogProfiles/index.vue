<script setup lang="ts">
// Import necessary Vue utilities
import { ref, onMounted } from 'vue';
import { ChevronRightIcon } from '@heroicons/vue/24/solid';

// Create a reactive variable to hold the list of dog profiles
const dogProfiles = ref([]);

// Access the globally provided $supabase client
const { $supabase } = useNuxtApp();

// Fetch all dog profiles from Supabase
async function fetchDogProfiles() {
  const { data, error } = await $supabase.from('dogProfile').select('*');
  if (error) {
    console.error('Error fetching dog profiles:', error.message);
  } else {
    dogProfiles.value = data; // Assign data to the reactive variable
  }
}

// Fetch data when the component is mounted
onMounted(() => {
  fetchDogProfiles();
});
</script>

<template>
  <section class="p-5 max-w-screen">
    <h1 class="text-xl">Pet Profiles</h1>

    <!-- Loop through and display each dog's name with a link to their profile -->
    <div
      v-for="dog in dogProfiles"
      :key="dog.dogProfileID"
      class="container flex flex-row mt-10 rounded-lg"
    >
      <router-link
        :to="{ name: 'dogProfiles-id', params: { id: dog.dogProfileID } }"
        class="flex flex-row w-full items-center"
      >
        <div>
          <img
            :src="dog.profileImage"
            alt="Photo of {{ dog.dogName }}"
            class="rounded-full w-[60px] aspect-square object-cover"
          />
        </div>
        <div class="flex flex-col ml-5 w-full">
          <h2 class="text-base font-semibold mb-2">{{ dog.dogName }}</h2>
          <div class="flex flex-row  text-sm w-auto text-zinc-700 items-baseline">
            <div class="flex flex-row space-x-3">
            <p>{{ dog.breed }}</p>
            <!-- TODO: add if statement for months -->
            <p>{{ dog.age }} years</p>
            <p>{{ dog.weight }}kg</p>
            <p>{{ dog.temperament }}</p>
          </div>
          <div class=" ml-auto">
            <ChevronRightIcon class="h-3 w-6" />
          </div>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>
