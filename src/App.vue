<template>
  <div class="container">
    <app-alert></app-alert>
    <app-header></app-header>
    <div class="app-wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
import appHeader from '@/components/Header.vue'
import AppAlert from '@/components/Alert.vue'
export default {
  components: {
    appHeader, AppAlert
  },
  created() {
    this.$store.dispatch('getMovies');
  }
}

</script>

<style lang="sass">

  body
    margin: 0

  *
    font-family: sans-serif

  .app-wrapper
    margin: 0 1rem

  .btn
    background-color: #42b983
    border-radius: .2rem
    color: #fff
    font-size: .8rem
    border: none
    height: 29px
    padding: 0 .6rem
    transition: background-color .3s ease, box-shadow .3s ease
    cursor: pointer
    &:hover
      background-color: darken(#42b983, 10%)
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.15)

</style>
