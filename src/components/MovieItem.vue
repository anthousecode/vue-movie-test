<template>
  <div class="movie-item">
    <div class="movie-img">
      <img :src="`http://image.tmdb.org/t/p/w185/${item.poster_path}`" :alt="item.poster_path">
    </div>
    <div class="movie-content">
      <div class="movie-rating">{{ item.vote_average }}</div>
      <h3 class="movie-title">{{item.title}}</h3>
      <h4 class="movie-date">Date: {{item.release_date}}</h4>
      <p class="movie-description" v-cut-description>{{item.overview}}</p>
      <button class="movie-add-favorite btn" @click="addToFavorite( item.id )">Добавить в избранное</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MovieItem",
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    data() {
      return {

      }
    },
    methods: {
      addToFavorite(id) {
        this.$store.commit('setFavorites', id);
        this.$store.commit('setAlert', 'Фильм добавлен в избранное')
      }
    }
  }
</script>

<style scoped lang="sass">

  .movie-item
    padding: .7rem
    background-color: #ededed
    display: grid
    grid-template-columns: max-content 1fr
    grid-gap: 1rem
    border-radius: .2rem
    transition: background-color .3s ease, box-shadow .3s ease
    &:hover
      background-color: #dddddd
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.15)

    .movie-img
      display: grid

      img
        max-width: 100%
        border-radius: .2rem

    .movie-content
      display: grid
      grid-template-rows: max-content max-content max-content 1fr
      position: relative
      .movie-rating
        position: absolute
        right: 0
        top: -18px
        background-color: #F5D933
        padding: .5rem
        border-radius: .2rem
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.15)
        font-weight: 600

      .movie-title
        max-width: 90%
        margin-top: 1rem
        margin-bottom: .5rem

      .movie-date
        margin: .5rem 0
        color: #777
        font-weight: 400
        font-size: .9rem

      .movie-description
        color: #333
        font-weight: 500
        font-size: 1rem

      .movie-add-favorite
        justify-self: end
        align-self: end


</style>
