/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  pages: [],
  testimonials: {}
}
const getters = {
  pageContentEndpoint: (state, getters, rootState) => `${rootState.host}/content`,
  testimonialsEndpoint: (state, getters, rootState) => `${rootState.host}/testimonials`,
  numberOfLands: (state, getters, rootState) => rootState.numberOfLands
}
const mutations = {
  UPDATE_PAGE_CONTENT: (state, payload) => {
    state.pages[payload.num] = Object.assign({}, JSON.parse(JSON.stringify(payload.value)))
  },
  UPDATE_TESTIMONIALS: (state, payload) => {
    state.testimonials = Object.assign([], JSON.parse(JSON.stringify(payload)))
  }
}
const actions = {
  async CREATE_RESERVE ({ getters, commit }) {
    for (let route = 1; route <= getters.numberOfLands; route++) {
      const response = await (await fetch(`${getters.pageContentEndpoint}/${route}`)).json()
      commit('UPDATE_PAGE_CONTENT', { num: route, value: response })
    }
    const response = await (await fetch(`${getters.testimonialsEndpoint}`)).json()
    commit('UPDATE_TESTIMONIALS', response)
  },

  RESTORE_FROM_RESERVE ({ state, getters, commit }, payload) {
    if (payload === 'testimonials') {
      commit('testimonials/UPDATE_CONTENT', state.testimonials, { root: true })
    } else {
      if (typeof payload !== 'number' || payload < 1 || payload > getters.numberOfLands) return
      commit('content/UPDATE_ALL', state.pages[payload], { root: true })
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
