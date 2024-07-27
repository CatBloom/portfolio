import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useDarkModeStore = defineStore('dark-mode', () => {
  const isDarkMode = ref(sessionStorage.getItem('dark-mode') === 'dark');
  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value;
    sessionStorage.setItem('dark-mode', isDarkMode.value ? 'dark' : 'light');
  }
  return { isDarkMode, toggleDarkMode };
});
