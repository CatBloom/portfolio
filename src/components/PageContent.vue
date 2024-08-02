<template>
  <div class="page-content">
    <h2 class="title">
      <slot name="title"></slot>
    </h2>
    <h3 class="sub-titile">
      <slot name="sub-title"></slot>
    </h3>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-content {
  margin-top: 2rem;
}
.title {
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
}
.sub-titile {
  font-weight: bold;
  font-size: 1.5rem;
}
.content {
  margin-top: 1rem;
  font-size: 1rem;
}
</style>
