/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  testimonials: null
}

const getters = {
  host: (state, getters, rootState) => rootState.host,
  db: (state, getters) => `${getters.host}/testimonials`
}

const mutations = {
  UPDATE_CONTENT (state, payload) {
    state.testimonials = payload
  },
  UPDATE_PHOTO (state, payload) {
    state.testimonials[payload.num].photo = payload.value
  }
}

const actions = {
  async GET_CONTENT ({ getters, commit }) {
    const content = await (await fetch(getters.db)).json()
    commit('UPDATE_CONTENT', content)
  },

  async SAVE_CONTENT ({ state, getters }) {
    try {
      const response = await fetch(`${getters.contentEndpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(state.testimonials)
      })
    } catch (error) {
      console.log('ERROR', error)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
