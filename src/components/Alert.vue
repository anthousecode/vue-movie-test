<template>
  <div class="alert" v-if="alert">
    {{ alert }}
    <button @click="removeAlert" class="close-btn">&#215;</button>
  </div>
</template>

<script>
  export default {
    name: "Alert",
    methods: {
      removeAlert() {
        this.$store.commit('setAlert', null)
      }
    },
    computed: {
      alert() {
        return this.$store.getters.getAlert;
      }
    }
  }
</script>

<style scoped lang="sass">

  .alert
    max-width: 300px
    position: fixed
    right: 30px
    top: 30px
    background-color: #58a868
    z-index: 10
    padding: .5rem 1.2rem
    border-radius: .2rem
    color: #fff

  .close-btn
    margin-left: 1rem
    border: none
    color: #fff
    font-size: 1.3rem
    cursor: pointer
    background-color: #58a868

</style>
