<template>
  <div class="top">
    <span class="typing-animation"> {{ typingText }} </span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

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

<style>
.top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
  font-size: 3rem;

  .typing-animation::after {
    content: '|';
    animation: flashing 1s linear infinite;
    opacity: 0;
  }
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
