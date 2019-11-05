<template>

  <header class="header">
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/favorites">Избранное</router-link>
    </nav>
  </header>

</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped lang="sass">
  .header
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    background-color: #f0f0f0


  nav
    padding: 30px

    a
      font-weight: bold
      color: #2c3e50

      &.router-link-exact-active
        color: #42b983

</style>
