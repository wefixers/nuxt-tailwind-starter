<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.',
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<template>
  <main class="grid min-h-full px-6 py-24 place-items-center sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold text-pink-600">
        404
      </p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div class="flex items-center justify-center mt-10 gap-x-6">
        <a href="/" class="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">
          Go back home
        </a>
      </div>
    </div>
  </main>
</template>
