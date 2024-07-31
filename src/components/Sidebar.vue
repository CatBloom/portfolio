<template>
  <nav :class="{ dark: isDarkMode }">
    <ul>
      <li><RouterLink to="/">TOP</RouterLink></li>
      <li><RouterLink to="/profile">Profile</RouterLink></li>
      <li><RouterLink to="/work">Work</RouterLink></li>
      <li><RouterLink to="/skilset">Skilset</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
    </ul>

    <div class="toggle">
      <DarkModeToggle @click="toggleDarkMode" />
    </div>
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  flex-flow: column;
  text-align: center;
  ul {
    margin: 0;
    padding-left: 2rem;
    line-height: 2.5rem;
    li {
      text-align: left;
      list-style: none;
    }
  }
}

.toggle {
  position: absolute;
  top: 8rem;
  right: 2.3rem;
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
