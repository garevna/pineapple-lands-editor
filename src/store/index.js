import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // host: 'https://garevna.github.io/pineapple.net',
    // landhost: 'https://garevna.github.io/pineapple-land',
    host: 'http://192.168.0.102:8080',
    landhost: 'http://192.168.0.102:8080',
    officeAddress: '75 Brighton Road, Elwood VIC 3184',
    officePhone: '1300 857 501',
    officeEmail: 'info@pineapple.net.au',
    officeABN: '55 618 934 437',
    linkedIn: 'https://www.linkedin.com/company/pineapplenet/',
    faceBook: 'https://www.facebook.com/PineappleNetAU/',
    contactEndpoint: '',
    viewport: 'lg',
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    plan: 'residential',
    pages: ['Home', 'About Us', 'Residential', 'Business', 'Connect', 'Contact Us', 'Sign In'],
    selectors: ['#top', '#about', '#plans', '#plans', '#connect', '#contact', null]
  },
  modules,

  getters: {
    familyPicture: (state) => {
      const size = state.viewportWidth < 600 ? 'small' : state.viewportWidth < 1440 ? 'medium' : 'large'
      const num = location.hash ? location.hash.slice(1) : '1'
      console.log(`${state.landhost}/img/family-${size}-${num}.png`)
      return `${state.landhost}/img/family-${size}-${num}.png`
    }
  },

  mutations: {
    CHANGE_VIEWPORT: (state) => {
      state.viewport = window.innerWidth >= 1904 ? 'xl'
        : window.innerWidth >= 1264 ? 'lg'
          : window.innerWidth >= 960 ? 'md'
            : window.innerWidth >= 600 ? 'sm' : 'xs'
      state.viewportWidth = window.innerWidth
      state.viewportHeight = window.innerHeight
    },
    CHANGE_VIEWPORT_WIDTH: (state, width) => { state.viewportWidth = width },
    CHANGE_VIEWPORT_HEIGHT: (state, height) => { state.viewportHeight = height },

    CHANGE_PLAN: (state, plan) => { state.plan = plan },

    ERROR_HANDLER: (state, { moduleName, error }) => {
      state.errorsLog.push({
        module: moduleName,
        error,
        time: new Date().getTime()
      })
    },
    ERRORS_CLEAR: (state) => {
      state.errorsLog = []
    },
    SET_PROPERTY: (state, payload) => {
      Vue.set(payload.object, payload.propertyName, payload.value)
    },
    DELETE_PROPERTY: (state, payload) => {
      Vue.delete(payload.object, payload.propertyName)
    }
  },
  actions: {
  }
})
