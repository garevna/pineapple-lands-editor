import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
    values: {
      expand: 'mdi-chevron-down',
      valid: 'mdi-check-bold',
      invalid: 'mdi-alert-outline',
      home: 'mdi-home-circle',
      config: 'mdi-cog',
      search: 'mdi-image-search',
      upload: 'mdi-file-upload',
      first: 'mdi-numeric-1-circle-outline',
      second: 'mdi-numeric-2-circle-outline',
      third: 'mdi-numeric-3-circle-outline',
      fourth: 'mdi-numeric-4-circle-outline',
      fifth: 'mdi-numeric-5-circle-outline',
      delete: 'mdi-delete-forever',
      add: 'mdi-plus-thick'
    }
  },
  theme: {
    themes: {
      light: {
        primary: '#4CAF50',
        secondary: '#75BE00',
        buttons: '#72BF44',
        greentext: '#20731C',
        deepgreen: '#20731C',
        homefone: '#FAFAFA',
        plansfone: '#E5FDD7',
        warning: '#FA0',
        delete: '#a00',
        error: '#900',
        info: '#09b',
        magenta: '#f0f'
      },
      dark: {
        primary: '#4CAF50',
        secondary: '#75BE00',
        buttons: '#72BF44',
        greentext: '#20731C',
        deepgreen: '#20731C',
        homefone: '#FAFAFA',
        plansfone: '#E5FDD7',
        warning: '#FA0',
        delete: '#a00',
        error: '#900',
        info: '#09b',
        magenta: '#f0f'
      }
    }
  }
})
