/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  testimonials: null
}

const getters = {
  authorized: (state, getters, rootState) => rootState.authorized,
  host: (state, getters, rootState) => rootState.host,
  db: (state, getters, rootState) => `${rootState.host}/testimonials`,
  staticEndpoint: (state, getters, rootState) => `${rootState.host}/avatars`,
  uploadEndpoint: (state, getters, rootState) => `${rootState.host}/testimonials/avatar`,
  avatarsEndpoint: (state, getters, rootState) => `${rootState.host}/testimonials/avatars` /* get all avatars, delete avatar */
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
      photo: `${getters.staticEndpoint}/default.png`
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
  async GET_CONTENT ({ getters, commit }) {
    const content = await (await fetch(getters.db)).json()
    commit('UPDATE_CONTENT', content)
  },

  async SAVE_CONTENT ({ state, getters }) {
    if (!getters.authorized) return 401
    if (location && location.hostname !== 'pa.pineapple.net.au') return 403

    const response = await fetch(getters.db, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      },
      body: JSON.stringify(state.testimonials)
    })
    return response.status
  },

  async UPLOAD_AVATAR ({ state, getters }, file) {
    const formData = new FormData()
    formData.set('avatar', file)
    let response = null
    try {
      response = await fetch(getters.uploadEndpoint, {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('token')
        },
        body: formData
      })
      const url = await response.text()
      return url
    } catch (error) { return `${getters.staticEndpoint}/default.png` }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
