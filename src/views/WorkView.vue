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
              <li>Repository</li>
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
            <p>麻雀の成績管理アプリです。</p>
            <p>
              元々はAngular+Heroku+PostgreSQLで作成されたアプリでしたが、
              <br />
              運用コストや最近の流行りを意識し、React+Lambda+DynamoDBを使用したアプリにリプレースしました。
            </p>
            <ul class="parent-list">
              <li>TechStack</li>
              <ul>
                <li>React</li>
                <li>Golang</li>
                <li>Echo</li>
                <li>Lambda</li>
                <li>APIGateway</li>
                <li>DynamoDB etc...</li>
              </ul>
              <li>Link</li>
              <ul>
                <li>
                  <a href="https://jantools.catbloom.net/" target="_blank" rel="noopener noreferrer"
                    >雀Tools
                  </a>
                </li>
              </ul>
              <li>Repository</li>
              <ul>
                <li>
                  <a
                    href="https://github.com/CatBloom/jantools-v2"
                    target="_blank"
                    rel="noopener noreferrer"
                    >jantools-v2
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/CatBloom/jantools-api-v2"
                    target="_blank"
                    rel="noopener noreferrer"
                    >jantools-api-v2
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
