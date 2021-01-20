import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
    values: {
      active: 'mdi-eye',
      add: 'mdi-plus-thick',
      buttonConfig: 'mdi-gesture-tap-button',
      close: 'mdi-close',
      config: 'mdi-cog',
      delete: 'mdi-delete-forever',
      expand: 'mdi-chevron-down',
      hidden: 'mdi-eye-off',
      home: 'mdi-home-circle',
      invalid: 'mdi-alert-outline',
      login: 'mdi-login',
      nav: 'mdi-magnify',
      pages: 'mdi-book-open-page-variant',
      search: 'mdi-image-search',
      upload: 'mdi-file-upload',
      valid: 'mdi-check-bold'
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
