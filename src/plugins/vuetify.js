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
      nav: 'mdi-magnify',
      upload: 'mdi-file-upload',
      pages: 'mdi-book-open-page-variant',
      delete: 'mdi-delete-forever',
      add: 'mdi-plus-thick',
      buttonConfig: 'mdi-gesture-tap-button',
      hidden: 'mdi-eye-off',
      active: 'mdi-eye'
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
