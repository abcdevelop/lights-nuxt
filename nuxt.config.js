const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#3B8070'},

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: 'https://infos-tools.firebaseio.com/lights'
    // See https://github.com/nuxt-community/axios-module#options
    //baseURL: process.env.BASE_URL || 'https://infos-tools.firebaseio.com/lights',
    //instance.defaults.headers.get['Accepts'] : 'application/json'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
  env: {
    //   baseURL: process.env.BASE_URL || 'https://mynuxtblog.firebaseio.com',
    //   fbAPIKey: '',
    //   HOST:'0.0.0.0',
    //   NODE_ENV:'production',
    //   NPM_CONFIG_PRODUCTION:false
  }
}
