<script setup lang="ts">
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="wrapper">
    <header class="fixed-header">
      <Sidebar />
    </header>
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
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
