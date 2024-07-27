<template>
  <div class="wrapper" :class="{ dark: isDarkMode }">
    <header class="fixed-header">
      <Sidebar />
    </header>
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: 6rem 1fr;
  height: 100vh;
}

.fixed-header {
  top: 30%;
  align-self: flex-start;
  position: sticky;
  padding: 1rem 1rem 1rem 2rem;
}

.content {
  padding: 2rem;
}
</style>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
import { RouterView } from 'vue-router';
import { useDarkModeStore } from './stores/dark-mode';
import { storeToRefs } from 'pinia';

const darkModeStore = useDarkModeStore();
const { isDarkMode } = storeToRefs(darkModeStore);
</script>
