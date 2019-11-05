<template>

  <div class="container">
    <div class="no-favorite-content">
      <h3>Вы еще не добавили фильмы в избранное</h3>
      <div class="button-wrap">
        <router-link to="/" class="btn btn-a" >Добавить фильмы</router-link>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "NoFavorite"
  }
</script>

<style scoped lang="sass">

  .btn-a
    padding: .6rem 1rem
    height: auto

  .container
    width: 100vw
    height: 50vh
    display: grid

    .no-favorite-content
      justify-self: center
      align-self: center

      .button-wrap
        display: flex
        justify-content: center

</style>
