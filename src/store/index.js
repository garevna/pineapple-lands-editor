import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

import {
  RECEIVE_MESSAGE_FROM_AUTH_WORKER,
  RECEIVE_MESSAGE_FROM_COMMON_WORKER,
  RECEIVE_MESSAGE_FROM_LANDS_WORKER,
  RECEIVE_MESSAGE_FROM_LIVE_WORKER,
  RECEIVE_MESSAGE_FROM_MEDIA_WORKER,
  RECEIVE_MESSAGE_FROM_FILES_WORKER,
  RECEIVE_MESSAGE_FROM_IMAGES_WORKER,
  RECEIVE_MESSAGE_FROM_ICONS_WORKER,
  RECEIVE_MESSAGE_FROM_AVATARS_WORKER
} from '@/store/workers'

import { ready } from '@/store/state/ready'
import { setReady } from '@/store/mutations/root/ready'

const lands = require('@/configs/lands').default
const generalInfo = require('@/configs/generalInfo').default
const {
  fieldTypes,
  validators,
  description
} = require('@/configs/contactFormFieldsConfig.js').default

const {
  viewport,
  pages,
  popups
} = require('@/store/mutations/root')

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    authorized: false,
    progress: false,
    ...generalInfo,
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
    showPageInfo: false,
    ...ready
  },

  modules,

  mutations: {
    ...setReady,
    ...viewport,
    ...pages,
    ...popups,

    SET_PROGRESS: (state, value) => {
      state.progress = value
    },

    UPDATE_GENERAL_INFO: (state, payload) => {
      for (const prop in payload) {
        state[prop] = payload[prop]
      }
    },

    SET_CURRENT_LAND: (state, value) => { state.currentLand = value },

    CHANGE_PLAN: (state, plan) => { state.plan = plan },

    SET_PROPERTY: (state, payload) => {
      Vue.set(payload.object, payload.propertyName, payload.value)
    },
    DELETE_PROPERTY: (state, payload) => {
      Vue.delete(payload.object, payload.propertyName)
    }
  },

  actions: {
    RECEIVE_MESSAGE_FROM_AUTH_WORKER,
    RECEIVE_MESSAGE_FROM_COMMON_WORKER,
    RECEIVE_MESSAGE_FROM_LANDS_WORKER,
    RECEIVE_MESSAGE_FROM_LIVE_WORKER,
    RECEIVE_MESSAGE_FROM_MEDIA_WORKER,
    RECEIVE_MESSAGE_FROM_FILES_WORKER,
    RECEIVE_MESSAGE_FROM_IMAGES_WORKER,
    RECEIVE_MESSAGE_FROM_ICONS_WORKER,
    RECEIVE_MESSAGE_FROM_AVATARS_WORKER
  }
})

export default store
