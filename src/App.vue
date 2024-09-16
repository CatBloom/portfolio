<template>
  <div class="wrapper" :class="{ dark: isDarkMode }">
    <header class="header">
      <PageHeader />
    </header>
    <main class="content">
      <RouterView />
    </main>
    <footer class="footer"></footer>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  min-height: 100vh;
  height: 100%;
}

.content {
  padding: 2rem;
  display: flex;
  justify-content: center;
}

.footer {
  height: 10vh;
}
</style>

<script setup lang="ts">
import PageHeader from './components/PageHeader.vue';
import { RouterView } from 'vue-router';
import { useDarkModeStore } from './stores/dark-mode';
import { storeToRefs } from 'pinia';

const darkModeStore = useDarkModeStore();
const { isDarkMode } = storeToRefs(darkModeStore);
</script>
