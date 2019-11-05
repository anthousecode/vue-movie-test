<template>
  <div class="home">

    <div class="sort">
      <p>Sort:</p>
      <button v-if="!sort" class="btn" @click="sortMovies">▲</button>
      <button v-if="sort" class="btn" @click="sortMovies">▼</button>
    </div>
    <div class="movie-wrapper">
      <movie-item v-for="(item, idx) of movies" :key="idx" :item="item"></movie-item>
    </div>

  </div>
</template>

<script>
  import MovieItem from "../components/MovieItem";
  export default {
    name: "Home",
    components: { MovieItem },
    data() {
      return {
        sort: false,
      }
    },
    methods: {
      sortMovies() {
        this.sort = !this.sort;
        this.$store.commit('reverseMovies');
      }
    },
    computed: {
      movies() { return this.$store.getters.getMovies; }
    },
  }
</script>

<style scoped lang="sass">

  .home
    margin-bottom: 3rem

  .sort
    border-bottom: 1px solid #ccc
    margin-bottom: 2rem
    display: grid
    grid-template-columns: max-content max-content
    grid-gap: .5rem
    justify-content: end

    p
      align-self: center

    button
      align-self: center
      height: 24px

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
