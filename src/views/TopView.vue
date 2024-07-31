<template>
  <div class="top">
    <div class="typing-animation">
      {{ typingText }}
    </div>
    <div class="top-button">
      <template v-for="button in routeButtons">
        <Button :label="button.label" :routePath="button.path" />
      </template>
    </div>
    <div>
      <DarkModeToggle @click="toggleDarkMode" />
    </div>
  </div>
</template>

<script setup>
import Button from '../components/Button.vue';
import DarkModeToggle from '../components/DarkModeToggle.vue';
import { useDarkModeStore } from '../stores/dark-mode';
import { storeToRefs } from 'pinia';
import { ref, onMounted } from 'vue';

const darkModeStore = useDarkModeStore();
const { toggleDarkMode } = darkModeStore;

const routeButtons = [
  { label: 'Profile', path: '/profile' },
  { label: 'Work', path: '/work' },
  { label: 'Skill', path: '/skill' },
  { label: 'Contact', path: '/contact' },
];

const typingText = ref('');
const typing = (sentence) => {
  Array.from(sentence).forEach((char, index) => {
    setTimeout(() => {
      typingText.value += char;
    }, 200 * ++index);
  });
};

onMounted(() => {
  typing('Catbloom’s Portfolio!');
});
</script>

<style scoped lang="scss">
.top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
  font-size: 3rem;
  flex-flow: column;

  .typing-animation::after {
    content: '|';
    animation: flashing 1s linear infinite;
    opacity: 0;
  }
}

.top-button {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 3rem;
}

@keyframes flashing {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
