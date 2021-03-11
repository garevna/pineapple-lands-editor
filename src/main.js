/* eslint-disable */

// import Vue from 'vue'
import Vue from '@/VueExtended'
import App from './App.vue'
import './registerServiceWorker'
import router from './router.js'
import store from './store'
import vuetify from './plugins/vuetify'

import '@/sass/fonts.scss'
import '@/sass/variables.scss'

Vue.prototype.__storage = localStorage

import Popup from '@/components/editor/Popup.vue'
Vue.component('popup', Popup)

import Spinner from '@/components/editor/Spinner.vue'
Vue.component('Spinner', Spinner)

Vue.config.productionTip = false

Vue.prototype.__commit = function (mutation, data) {
  this.commit(mutation, data)
}.bind(store)

Vue.prototype.__dispatch = function (action, data) {
  this.dispatch(action, data)
}.bind(store)

Vue.prototype.$openExternalLink = function (link) {
  window.open(link, '_blank')
}

const vue = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
