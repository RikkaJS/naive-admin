<script setup lang="ts">
const themeStore = useThemeStore()

// https://github.com/vueuse/head
useHead({
  title: import.meta.env.VITE_APP_TITLE,
  meta: [
    { name: 'description', content: 'Vite Starter Template' },
    {
      name: 'theme-color',
      content: () => themeStore.isDark ? themeStore.themeColor : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
})
</script>

<template>
  <VAppProvider>
    <RouterView />
  </VAppProvider>
</template>
