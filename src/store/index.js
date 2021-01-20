import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

const {
  viewport,
  pages,
  popups
} = require('./modules/mutations').default

const lands = require('@/configs/lands').default

const { fieldTypes, validators, description } = require('@/configs/contactFormFieldsConfig.js').default

const {
  GET_GENERAL_INFO,
  SAVE_GENERAL_INFO,
  GET_PAGES,
  SAVE_PAGES,
  GET_IMAGES,
  DELETE_IMAGE
} = require('./modules/actions').default

const generalInfo = require('@/configs/generalInfo').default
const { validateToken } = require('@/helpers').default

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authorized: false,
    progress: false,
    ...generalInfo,
    contactEndpoint: '',
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    plan: 'residential',
    pages: [],
    selectors: [],
    popup: {
      open: false,
      title: '',
      text: '',
      action: false,
      label: ''
    },
    currentLand: null,
    fieldTypes,
    validators,
    description,
    lands,
    error: null,
    showPageInfo: false
  },
  modules,

  mutations: {
    ...viewport,
    ...pages,
    ...popups,

    SET_PROGRESS: (state, value) => {
      state.progress = value
    },

    UPDATE_GENERAL_INFO: (state, payload) => { state[payload.prop] = payload.value },
    SET_CURRENT_LAND: (state, value) => { state.currentLand = value },

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
    }
  },

  actions: {
    GET_GENERAL_INFO,
    SAVE_GENERAL_INFO,
    GET_PAGES,
    SAVE_PAGES,
    GET_IMAGES,
    DELETE_IMAGE,

    async VALIDATE_TOKEN ({ state, commit, dispatch }) {
      commit('SET_PROGRESS', true)
      const response = await validateToken()
      commit('SET_PROGRESS', false)
      commit(response.status !== 200 ? 'AUTH_FAILURE' : 'AUTH_SUCCESS')
    }
  }
})
