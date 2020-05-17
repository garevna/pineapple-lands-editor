/* eslint-disable */

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router.js'
import store from './store'
import vuetify from './plugins/vuetify'

import '@/sass/fonts.scss'
// import '@/sass/variables.scss'

Vue.config.productionTip = false

const vue = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
