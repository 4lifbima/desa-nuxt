<template>
  <div class="bg-white text-gray-900 dark:bg-dark-base dark:text-gray-100 transition-colors duration-300">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { initDarkMode } = useDarkMode()

onMounted(() => {
  initDarkMode()
})
</script>
