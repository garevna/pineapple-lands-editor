// const { getData, postData } = require('@/helpers').default
// const { internetPlans } = require('@/configs/host').default

const state = {
  plans: {
    residential: [
      { upload: 0, download: 0, price: 0.0, selected: false },
      { upload: 0, download: 0, price: 0.0, selected: false },
      { upload: 0, download: 0, price: 0.0, selected: false },
      { upload: 0, download: 0, price: 0.0, selected: false }
    ],
    business: [
      { upload: 0, download: 0, price: 0.0, selected: false },
      { upload: 0, download: 0, price: 0.0, selected: false },
      { upload: 0, download: 0, price: 0.0, selected: false }
    ]
  }
}

const getters = {
  plan: (state, getters, rootState) => rootState.plan,
  tarif: (state, getters) => state.plans && getters.plan && state.plans[getters.plan] ? state.plans[getters.plan].find(item => item.selected) : null,
  authorized: (state, getters, rootState) => rootState.authorized
}

const mutations = {
  SET_PLANS (state, payload) {
    const { plans } = payload
    state.plans = plans
  },
  CHANGE_PLAN (state, payload) {
    const { prop, value } = payload.prop
    state.plans[payload.plan][payload.index][prop] = value
  }
}

const actions = {
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
