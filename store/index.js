import Vue from 'vue'
import Vuex from 'vuex'
import Axios from '@/axios.config'
//import {dbLightsRef} from '@/firebase.config'


import {firebaseMutations, firebaseAction} from 'vuexfire'

Vue.use(Vuex)

const state = {
  lights:{
    color:{
    '-L79RWLFdxW_VYZlFzoD':{
        values:['white'],
        index:0
      }
    }
  },
  color:[]
}

const getters = {
  getLights:state => state.lights,
  getColor:state => state.color,
  currentColor: state => {
  const firstColorKey = Object.keys(state.lights.color)[0]
  const firstColor = state.lights.color[firstColorKey]
  return  firstColor.values[firstColor.index]
}
}

const mutations = {
  ...firebaseMutations
}

const actions = {
  // nuxtServerInit({dispatch}, context) {
  //   console.log('nuxtServerInit')
  //   return dispatch('setLightsRef',dbLightsRef)
  // },
  addColor: ({commit}, color) => {
    Axios.post('/color.json', color)
      .catch(e => console.log(e))
  },
  changeColorIndex({state,commit}) {
    const firstColorKey = Object.keys(state.lights.color)[0]
    const firstColor = state.lights.color[firstColorKey]
    let firstColorIndex = 0

    if (firstColor.index < firstColor.values.length -1) {
      firstColorIndex = firstColor.index + 1
    }

    Axios.put('/color/'+firstColorKey+'/index.json', firstColorIndex)
      .catch(e => console.log(e))
  },
  setLightsRef: firebaseAction(({bindFirebaseRef}, {ref}) => {
    bindFirebaseRef('lights', ref)
  }),
  setColorRef: firebaseAction(({bindFirebaseRef}, {ref}) => {
    bindFirebaseRef('color', ref)
  })
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
