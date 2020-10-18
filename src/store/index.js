import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

const { pagesSection } = require('./modules/mutations')

const lands = require('@/configs/lands').default
const { fieldTypes, validators, description } = require('@/configs/contactFormFieldsConfig.js').default

const {
  validateToken,
  getGeneralInfo,
  saveGeneralInfo,
  getPages,
  savePages
} = require('./modules/actions').default

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    host: 'https://api.pineapple.net.au',
    // host: 'https://pineapple-net-land.glitch.me',
    generalInfoEndpoint: 'https://api.pineapple.net.au/content/general',
    // generalInfoEndpoint: 'https://pineapple-net-land.glitch.me/content/general',
    officeAddress: '',
    officePhone: '',
    officeEmail: '',
    officeABN: '',
    linkedIn: '',
    faceBook: '',
    contactEndpoint: '',
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    plan: 'residential',
    pages: [],
    selectors: [],
    popup: false,
    popupTitle: '',
    popupText: '',
    authorized: false,
    numberOfLands: 5,
    currentLand: null,
    fieldTypes,
    validators,
    description,
    lands,
    error: null,
    showPageInfo: false
  },
  modules,

  getters: {
    contentHost: (state) => `${state.host}/content`,
    testimonialsHost: (state) => `${state.host}/testimonials`
  },

  mutations: {
    ...pagesSection,
    UPDATE_GENERAL_INFO: (state, payload) => { state[payload.prop] = payload.value },
    SET_CURRENT_LAND: (state, value) => { state.currentLand = value },
    SET_PAGES: (state, payload) => {
      state.pages = Object.assign([], payload)
    },

    ADD_PAGE: (state, pageData) => {
      state.pages.push(pageData)
    },

    HIDE_CURRENT_PAGE: (state) => {
      const id = state.currentLand.slice(5)
      const index = state.pages.findIndex(page => page.id === id)
      if (index < 0) return
      Object.assign(state.pages[index], { hidden: true })
    },

    SET_CURRENT_PAGE_ACTIVE: (state) => {
      const id = state.currentLand.slice(5)
      const index = state.pages.findIndex(page => page.id === id)
      if (index < 0) return
      state.pages[index].hidden = false
    },

    UPDATE_PAGE_ADDRESS: (state, payload) => {
      state.pages[payload.index].address[payload.propName] = payload.propValue
    },

    SHOW_PAGE_INFO: (state) => {
      state.showPageInfo = true
    },

    HIDE_PAGE_INFO: (state) => {
      state.showPageInfo = false
    },

    CHANGE_VIEWPORT: (state) => {
      state.viewportWidth = window.innerWidth
      state.viewportHeight = window.innerHeight
    },

    CHANGE_VIEWPORT_WIDTH: (state, width) => { state.viewportWidth = width },
    CHANGE_VIEWPORT_HEIGHT: (state, height) => { state.viewportHeight = height },

    CHANGE_PLAN: (state, plan) => { state.plan = plan },

    SET_ERROR: (state, error) => {
      state.error = error
    },
    CLEAR_ERROR: (state) => {
      state.error = null
    },
    SET_PROPERTY: (state, payload) => {
      Vue.set(payload.object, payload.propertyName, payload.value)
    },
    DELETE_PROPERTY: (state, payload) => {
      Vue.delete(payload.object, payload.propertyName)
    },
    SHOW_POPUP: (state) => {
      state.popup = true
    },
    HIDE_POPUP: (state) => {
      state.popup = false
    },
    SET_POPUP_TITLE: (state, title) => {
      state.popupTitle = title
    },
    SET_POPUP_TEXT: (state, text) => {
      state.popupText = text
    },
    SET_AUTH: (state, val) => {
      state.authorized = !!val
    }
  },

  actions: {
    ...validateToken,
    ...getGeneralInfo,
    ...saveGeneralInfo,
    ...getPages,
    ...savePages,

    async VALIDATE_TOKEN ({ state, commit }) {
      const token = localStorage.getItem('token')
      if (!token) return commit('SET_AUTH', false)
      try {
        const response = await fetch(`${state.host}/auth/token`, {
          method: 'GET',
          headers: {
            Authorization: token
          },
          body: null
        })
        commit('SET_AUTH', response.status === 200)
      } catch (err) {
        console.warn(err)
        commit('SET_AUTH', false)
      }
    },
    AUTH_FAIL ({ commit }) {
      commit('SET_AUTH', false)
      commit('SET_POPUP_TITLE', 'AUTH FAILURE')
      commit('SET_POPUP_TEXT', 'You are now in demo mode. You have no access to save changes')
      commit('SHOW_POPUP')
    },
    AUTH_SUCCESS ({ commit }) {
      commit('SET_AUTH', true)
      commit('SET_POPUP_TITLE', 'AUTH SUCCESS')
      commit('SET_POPUP_TEXT', 'You have access to save changes')
      commit('SHOW_POPUP')
    },
    SAVE_SUCCESS ({ commit }) {
      commit('SET_POPUP_TITLE', 'SAVE THE DATA')
      commit('SET_POPUP_TEXT', 'Data has been successfully saved')
      commit('SHOW_POPUP')
    },
    SAVE_FAILURE ({ commit }) {
      commit('SET_POPUP_TITLE', 'SAVE THE DATA')
      commit('SET_POPUP_TEXT', 'Error saving the data')
      commit('SHOW_POPUP')
    },
    READ_FAILURE ({ commit }) {
      commit('SET_POPUP_TITLE', 'READ THE DATA')
      commit('SET_POPUP_TEXT', 'Error reading the data')
      commit('SHOW_POPUP')
    },
    ACCESS_DENIED ({ commit }) {
      commit('SET_POPUP_TITLE', 'SAVE THE DATA')
      commit('SET_POPUP_TEXT', 'Access denied')
      commit('SHOW_POPUP')
    }
  }
})
