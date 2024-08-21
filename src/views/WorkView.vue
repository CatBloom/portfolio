<template>
  <div class="work">
    <PageContent>
      <template #title> Work </template>
      <template #content>
        <p>自作のwebサイトやwebアプリの紹介です。</p>
      </template>
    </PageContent>
    <PageContent>
      <template #sub-title>Portfolio</template>
      <template #content>
        <div class="content">
          <div class="image">
            <img src="https://catbloom-images.s3.ap-northeast-1.amazonaws.com/portfolio.png" />
          </div>
          <div class="info">
            <p>このサイトです。</p>
            <ul class="parent-list">
              <li>TechStack</li>
              <ul>
                <li>Vue.js</li>
                <li>CloudFront</li>
                <li>S3</li>
                <li>Route53</li>
                <li>CodeBuild</li>
              </ul>
              <li>Github</li>
              <ul>
                <li>
                  <a
                    href="https://github.com/CatBloom/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    >portfolio
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </template>
    </PageContent>

    <PageContent>
      <template #sub-title>雀Tools</template>
      <template #content>
        <div class="content">
          <div class="image">
            <img src="https://catbloom-images.s3.ap-northeast-1.amazonaws.com/jantools.png" />
          </div>
          <div class="info">
            <p>麻雀の成績管理ツールです。</p>
            <ul class="parent-list">
              <li>TechStack</li>
              <ul>
                <li>Angular</li>
                <li>Golang</li>
              </ul>
              <li>Link</li>
              <ul>
                <li>
                  <a href="https://jantools.catbloom.net/" target="_blank" rel="noopener noreferrer"
                    >雀Tools
                  </a>
                </li>
              </ul>
              <li>Github</li>
              <ul>
                <li>
                  <a
                    href="https://github.com/CatBloom/jantools"
                    target="_blank"
                    rel="noopener noreferrer"
                    >jantools
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/CatBloom/jantools-api"
                    target="_blank"
                    rel="noopener noreferrer"
                    >jantools-api
                  </a>
                </li>
              </ul>
            </ul>
          </div>
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
  display: flex;
  gap: 2rem;
  .image {
    img {
      width: 500px;
      height: auto;
      border: solid 1px;
    }
  }
  .parent-list {
    margin-top: 1rem;
    list-style: none;
    padding: 0;
  }
}

@media (width < 900px) {
  .content {
    flex-wrap: wrap;
    .image {
      img {
        width: 100%;
      }
    }
  }
}
</style>
