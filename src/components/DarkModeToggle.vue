<template>
  <div class="toggle" @click="clickEvent">
    <div v-if="isDarkMode">
      <IconLight />
    </div>
    <div v-else>
      <IconDark />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconLight from './icons/IconLight.vue';
import IconDark from './icons/IconDark.vue';
import { useDarkModeStore } from '../stores/dark-mode';
import { storeToRefs } from 'pinia';

const darkModeStore = useDarkModeStore();
const { isDarkMode } = storeToRefs(darkModeStore);
const emit = defineEmits(['click']);

function clickEvent() {
  emit('click');
}
</script>

<style scoped lang="scss">
.toggle {
  display: flex;
  cursor: pointer;
}
</style>
