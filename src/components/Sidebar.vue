<template>
  <nav :class="{ dark: isDarkMode }">
    <RouterLink to="/">TOP</RouterLink>
    <RouterLink to="/profile">Profile</RouterLink>
    <RouterLink to="/work">Work</RouterLink>
    <RouterLink to="/skilset">Skilset</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <DarkModeToggle @click="toggleDarkMode" />
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  flex-flow: column;
  gap: 1rem;
  width: 100%;
}
</style>

<script setup lang="ts">
import DarkModeToggle from './DarkModeToggle.vue';
import { storeToRefs } from 'pinia';
import { useDarkModeStore } from '../stores/dark-mode';

const darkModeStore = useDarkModeStore();
const { isDarkMode } = storeToRefs(darkModeStore);
const { toggleDarkMode } = darkModeStore;
</script>
