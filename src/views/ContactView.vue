<template>
  <div class="contact">
    <PageContent>
      <template #title> Contact </template>
    </PageContent>

    <PageContent>
      <template #content>
        <div class="content">
          <p>ご相談、ご感想など、お気軽にご連絡ください。</p>
          <p>
            お問い合わせは 【catbloom.web@gmail.com】・
            <a href="https://github.com/CatBloom" target="_blank" rel="noopener noreferrer">
              Github
            </a>
            でお待ちしております。
          </p>
        </div>
      </template>
    </PageContent>
  </div>
</template>

<script setup lang="ts">
import PageContent from '../components/PageContent.vue';
</script>

<style scoped lang="scss">
.content {
  text-align: center;
}
</style>
