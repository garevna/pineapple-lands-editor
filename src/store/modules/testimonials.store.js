/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const { getData, postData, upload } = require('@/helpers').default
const { testimonials, avatar } = require('@/configs/host').default

const state = {
  testimonials: null
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
      photo: avatar.default
    })
  },
  REMOVE_ITEM (state, num) {
    state.testimonials = state.testimonials.filter((item, index) => index !== num)
  },
  UPDATE_CONTENT (state, payload) {
    state.testimonials = payload
  }
}

const actions = {
  async GET_CONTENT ({ commit }) {
    commit('SET_PROGRESS', true, { root: true })
    const response = await getData(testimonials)
    commit('SET_PROGRESS', false, { root: true })
    if (response.status !== 200) {
      commit('READ_FAILURE', null, { root: true })
      return
    }
    commit('UPDATE_CONTENT', response.data)
  },

  async SAVE_CONTENT ({ state, getters, commit }) {
    if (!getters.authorized) return 401
    commit('SET_PROGRESS', true, { root: true })
    const response = await postData('testimonials', state.testimonials)
    commit('SET_PROGRESS', false, { root: true })
    commit(response.status === 200 ? 'SAVE_SUCCESS' : 'SAVE_FAILURE', null, { root: true })
  },

  async UPLOAD_AVATAR (context, file) {
    const formData = new FormData()
    formData.set('avatar', file)
    context.commit('SET_PROGRESS', true, { root: true })
    const response = await upload(avatar.upload, avatar.default, formData)
    context.commit('SET_PROGRESS', false, { root: true })
    return response.url
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
