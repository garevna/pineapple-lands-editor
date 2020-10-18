/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */

const state = {
  plans: {
    residential: [
      { upload: 50, download: 50, price: 50, selected: false },
      { upload: 150, download: 150, price: 69, selected: false },
      { upload: 500, download: 500, price: 140, selected: false },
      { upload: 1000, download: 1000, price: 250, selected: false }
    ],
    business: [
      { upload: 150, download: 150, price: 150, selected: false },
      { upload: 500, download: 500, price: 240, selected: false },
      { upload: 1000, download: 1000, price: 500, selected: false }
    ]
  }
}

const getters = {
  plan: (state, getters, rootState) => rootState.plan,
  tarif: (state, getters) => state.plans[getters.plan].find(item => item.selected),
  authorized: (state, getters, rootState) => rootState.authorized,
  endpoint: (state, getters, rootState) => `${rootState.host}/content/plans`
}

const mutations = {
  CHANGE_PLAN (state, payload) {
    state.plans[payload.plan][payload.index][payload.prop] = payload.value
  }
}

const actions = {

  async GET_DATA ({ state, getters, commit }) {
    const { plans } = await (await fetch(getters.endpoint)).json()
    for (const plan in plans) {
      plans[plan].forEach((item, index) => {
        for (const prop in item) {
          commit('CHANGE_PLAN', {
            plan,
            index,
            prop,
            value: item[prop]
          })
        }
      })
    }
    return state.plans
  },

  async SAVE_PLANS ({ state, getters }) {
    if (!getters.authorized) return 401
    // if (location && location.hostname !== 'pa.pineapple.net.au') return 403

    const response = await fetch(getters.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      },
      body: JSON.stringify(state.plans)
    })
    return response.status
  },

  SELECT_PLAN ({ commit }, payload) {
    commit('CHANGE_PLAN', payload, { root: true })
  },

  SELECT_TARIF ({ state, getters }, tarifIndex) {
    state.plans.residential.forEach((tarif) => { tarif.selected = false })
    state.plans.business.forEach((tarif) => { tarif.selected = false })
    state.plans[getters.plan][tarifIndex].selected = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
