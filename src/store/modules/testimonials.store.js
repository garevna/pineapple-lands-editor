/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

// const { upload } = require('@/helpers').default
// const { testimonials, avatar } = require('@/configs/host').default

const state = {
  testimonials: []
}

const getters = {
  authorized: (state, getters, rootState) => rootState.authorized
}

const mutations = {
  UPDATE_NAME (state, payload) {
    state.testimonials[payload.num].name = payload.value
  },
  UPDATE_TEXT (state, payload) {
    state.testimonials[payload.num].text = payload.value
  },
  UPDATE_DATE (state, payload) {
    state.testimonials[payload.num].date = payload.value
  },
  UPDATE_PHOTO (state, payload) {
    state.testimonials[payload.num].photo = payload.value
  },
  ADD_ITEM (state) {
    state.testimonials.push({
      date: new Date(),
      name: '',
      text: '',
      photo: null
    })
  },
  REMOVE_ITEM (state, num) {
    state.testimonials = state.testimonials.filter((item, index) => index !== num)
  },
  UPDATE_CONTENT (state, payload) {
    state.testimonials = payload
  }
}

// const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations
  // actions
}
