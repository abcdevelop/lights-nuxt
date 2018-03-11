<template>
  <div id="app" :style="{backgroundColor:currentColor}">
    <button @click="onClick">Changer</button>
  </div>
</template>

<script>
 // import {mapGetters, mapActions} from 'vuex'
  import {dbLightsRef,dbColorRef} from '@/firebase.config'
  import store from '@/store/index'

  export default {
    name: 'app',
    created() {
      store().dispatch('setLightsRef',dbLightsRef)
      store().dispatch('dbColorRef',dbColorRef)
    },
    computed: {
//      ...mapGetters([
//        'currentColor'
//      ]),
      currentColor: () => {
        //console.log(store().getters.currentColor)
        return store().getters.currentColor
      }
    },
    methods: {
//      ...mapActions([
//        'addColor',
//        'changeColorIndex'
//      ]),
      onClick() {
        // this.addColor({values: ['green', 'orange', 'red'], index: 2})
        //this.changeColorIndex()
        //console.log(store().getters.currentColor)
        store().dispatch('changeColorIndex')
      }
    }
  }
</script>

<style>
  #app {
    height: 100vh;
    width: 100%;
  }

  button {
    height: 70px;
  }
</style>
