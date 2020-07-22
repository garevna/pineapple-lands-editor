import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

const emailValidator = require('email-validator')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    host: 'https://api.pineapple.net.au',
    generalInfoEndpoint: 'https://api.pineapple.net.au/content/general',
    officeAddress: '75 Brighton Road, Elwood VIC 3184',
    officePhone: '1300 857 501',
    officeEmail: 'info@pineapple.net.au',
    officeABN: '55 618 934 437',
    linkedIn: 'https://www.linkedin.com/company/pineapplenet/',
    faceBook: 'https://www.facebook.com/PineappleNetAU/',
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
    fieldTypes: {
      text: 'input-with-validation',
      number: 'input-with-validation',
      email: 'input-with-validation',
      phone: 'phone-number',
      state: 'selector',
      postcode: 'input-with-validation',
      list: 'selector',
      combo: 'combobox',
      message: 'textarea'
    },
    validators: {
      text: val => val.length > 2,
      number: val => val.match(/^[0-9]*$/),
      email: emailValidator.validate,
      phone: null,
      state: null,
      postcode: val => Number(val) && Number(val) >= 3000 && Number(val) < 9999,
      list: null,
      combo: function (val) { return this.available.indexOf(val) !== -1 },
      message: val => val.length >= 5
    },
    description: {
      text: 'Simple text',
      number: 'Simple number',
      email: 'Email',
      phone: 'Phone',
      state: 'State',
      postcode: 'Postcode',
      list: 'Select from a list',
      combo: 'Combobox input',
      message: 'Message'
    }
  },
  modules,

  getters: {
    contentHost: (state) => `${state.host}/content`,
    testimonialsHost: (state) => `${state.host}/testimonials`
  },

  mutations: {
    UPDATE_GENERAL_INFO: (state, payload) => { state[payload.prop] = payload.value },
    SET_CURRENT_LAND: (state, num) => { state.currentLand = num },
    UPDATE_PAGES: (state, payload) => {
      state.pages = payload.pages
      state.selectors = payload.selectors
    },
    CHANGE_VIEWPORT: (state) => {
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

    async GET_GENERAL_INFO ({ state, commit }) {
      const generalInfo = await (await fetch(state.generalInfoEndpoint)).json()
      for (const field in generalInfo) {
        commit('SET_PROPERTY', {
          object: state,
          propertyName: field,
          value: generalInfo[field]
        })
      }
    },

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
      commit('SET_POPUP_TEXT', 'You have full access to save changes')
      commit('SHOW_POPUP')
    },
    SAVE_SUCCESS ({ commit }) {
      commit('SET_POPUP_TITLE', 'SAVE DATA')
      commit('SET_POPUP_TEXT', 'Data has been successfully saved')
      commit('SHOW_POPUP')
    },
    SAVE_FAILURE ({ commit }) {
      commit('SET_POPUP_TITLE', 'SAVE DATA')
      commit('SET_POPUP_TEXT', 'Error saving data')
      commit('SHOW_POPUP')
    },
    ACCESS_DENIED ({ commit }) {
      commit('SET_POPUP_TITLE', 'SAVE DATA')
      commit('SET_POPUP_TEXT', 'Access denied')
      commit('SHOW_POPUP')
    }
  }
})
