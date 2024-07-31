<template>
  <button class="button" :class="{ buttonDark: isDarkMode }" @click="navigate">{{ label }}</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { defineProps, ref } from 'vue';
import { useDarkModeStore } from '../stores/dark-mode';
import { storeToRefs } from 'pinia';

const darkModeStore = useDarkModeStore();
const { isDarkMode } = storeToRefs(darkModeStore);

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  routePath: {
    type: String,
    required: true,
  },
});

const router = useRouter();
const navigate = () => {
  router.push({ path: props.routePath });
};
</script>

<style scoped lang="scss">
.button {
  border: none;
  padding: 1rem 2rem;
  text-align: center;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  background-color: $light-background-color;
  color: $light-font-color;
  &:hover {
    transition: 0.3s;
    background-color: darken($light-background-color, 10%);
  }
}

.buttonDark {
  background-color: $dark-background-color;
  color: $dark-font-color;
  &:hover {
    background-color: lighten($dark-background-color, 10%);
  }
}
</style>
