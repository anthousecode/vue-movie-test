<template>

  <div class="favorites">
    <div v-if="favorites.length">
      <div class="movie-wrapper">
        <movie-item v-for="(item, idx) of favorites" :key="idx" :item="item"></movie-item>
      </div>
    </div>
    <div v-else>
      <no-favorite></no-favorite>
    </div>
  </div>

</template>

<script>
  import MovieItem from "../components/MovieItem";
  import NoFavorite from '../components/NoFavorite'
  export default {
    name: "Favorite",
    components: { NoFavorite, MovieItem },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {
      favorites() {
        return this.$store.getters.getFavorites;
      }
    },
  }
</script>

<style scoped lang="sass">

  .favorites
    margin: 3rem 0

  .movie-wrapper
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-gap: 2rem

  @media (max-width: 1260px)
    .movie-wrapper
      grid-template-columns: 1fr 1fr

  @media (max-width: 900px)
    .movie-wrapper
      grid-template-columns: 1fr

</style>
