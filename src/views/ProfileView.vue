<template>
  <div class="profile">
    <PageContent>
      <template #title> Profile </template>
    </PageContent>

    <PageContent>
      <template #sub-title> AboutMe </template>
      <template #content>
        <ul>
          <li>Name</li>
          <p>Catbloom</p>
          <li>Hobby</li>
          <p>アプリ制作、麻雀</p>
          <li>Introduction</li>
          <p>
            子供の頃からパソコンやプログラミングに親しむ機会が多く、将来は漠然と「エンジニアになるのだろう」と思っていました。
            <br />
            仕事では、主にWebアプリ制作をメインで行なっていて、フロントエンド・バックエンド・インフラと幅広く携わっています。
          </p>
        </ul>
      </template>
    </PageContent>

    <PageContent>
      <template #sub-title> Experience </template>
      <template #content>
        <table class="content_table">
          <tbody>
            <tr>
              <td>2016/03</td>
              <td>長野商業高等学校卒業</td>
            </tr>
            <tr>
              <td>2016/04 - 2020/12</td>
              <td>実家の飲食業で働きながら、個人アプリ制作やWEB制作をしておりました。</td>
            </tr>
            <tr>
              <td>2020/12 - 2022/09</td>
              <td>
                株式会社日本アルシス
                <br />
                農工業向けの業務管理システムの開発を行っていました。VB.NETで作成したBtoB向け販売管理デスクトップアプリケーションを
                Angularを利用したWEBアプリへの移行業務を担当しました。
              </td>
            </tr>
            <tr>
              <td>2023/01 - 現在</td>
              <td>
                株式会社マーケットエンタープライズ
                <br />
                ネット型リユース事業のWEB新規開発・保守を行っています。
                また、インフラ構築・監視を行うチームにも所属し、各サービスの障害対応を行なっています。
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </PageContent>
  </div>
</template>

<script setup lang="ts">
import PageContent from '../components/PageContent.vue';
</script>

<style scoped lang="scss">
ul {
  margin-left: 1rem;
  padding: 0;
  li {
    margin-top: 1rem;
    font-weight: 500;
    list-style: none;
    font-size: 1.3rem;
  }
  p {
    margin-top: 1rem;
    margin-left: 4rem;
  }
}

.content_table {
  border-spacing: 1rem;
}
</style>
