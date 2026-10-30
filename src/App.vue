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
  box-sizing: border-box;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 2rem calc(2rem + 10vh);
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
