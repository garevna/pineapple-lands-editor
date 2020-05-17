/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  testimonials: null
}

const getters = {
  host: (state, getters, rootState) => rootState.host,
  db: (state, getters, rootState) => `${rootState.host}/testimonials`
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
  ADD_ITEM (state) {
    state.testimonials.push({
      date: new Date(),
      name: '',
      text: '',
      photo: `${state.host}/avatars/default.png`
    })
  },
  REMOVE_ITEM (state, num) {
    state.testimonials.splice(num, 1)
  },
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
    const response = await fetch(getters.db, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      },
      body: JSON.stringify(state.testimonials)
    })
    return response.status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
