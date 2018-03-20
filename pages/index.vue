<template>
  <div id="app" :style="{backgroundColor:currentColor}">
    <button @click="onClick">Changer</button>
    <h1>{{counter}} changements</h1>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'app',
    computed: {
      ...mapGetters([
        'currentColor',
        'counter'
      ])
    },
    methods: {
      ...mapActions({
        changeRandom: 'changeRandom'
      }),
      onClick() {
        this.changeRandom()
      }
    }
  }
</script>

<style scoped>
  #app {
    height: 100vh;
    width: 100%;
    padding:20px;
  }
  button {
    height: 70px;
    width: 73px;
    border-radius: 50%;
  }
  h1 {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
</style>
