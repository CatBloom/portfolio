<template>
  <nav>
    <RouterLink to="/">TOP</RouterLink>
    <RouterLink to="/profile">Profile</RouterLink>
    <RouterLink to="/work">Work</RouterLink>
    <RouterLink to="/skilset">Skilset</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-flow: column;
  gap: 1rem;
  width: 100%;
  a {
    color: rgb(150, 132, 174);
    text-decoration: none;
    transition: 0.4s;
  }
}
</style>
