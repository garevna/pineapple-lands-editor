/* eslint-disable */

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router.js'
import store from './store'
import vuetify from './plugins/vuetify'

import '@/sass/fonts.scss'
import '@/sass/variables.scss'

import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
Vue.component('vue-phone-number-input', VuePhoneNumberInput)

import Popup from '@/components/editor/Popup.vue'
Vue.component('popup', Popup)

Vue.config.productionTip = false

const vue = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
