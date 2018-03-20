import Vue from 'vue'
import Vuex from 'vuex'
import {firebaseMutations, firebaseAction} from 'vuexfire'
import {dbLightsRef} from '@/firebase.config'

Vue.use(Vuex)

const state = {
  lights: {
    colors: {
      '0': 'blue'
    },
    counter: 0,
    index: 0
  }
}

const getters = {
  currentColor: state => state.lights.colors[state.lights.index],
  counter: state => state.lights.counter
}

const mutations = {
  ...firebaseMutations
}

const actions = {
  nuxtServerInit({dispatch}, context) {
    console.log('nuxtServerInit')
  },
  nuxtClientInit({dispatch}, context) {
    console.log('nuxtClientInit')
    this.dispatch('setLightsRef', dbLightsRef)
  },
  changeRandom() {
    return this.$axios.put('/random.json', Math.random())
      .catch(e => console.log(e))
  },
  setLightsRef: firebaseAction(({bindFirebaseRef}, {ref}) => bindFirebaseRef('lights', ref))
}

const store = () => {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions
  })
}

export default store
