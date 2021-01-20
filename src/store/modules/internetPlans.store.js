const { getData, postData } = require('@/helpers').default
const { internetPlans } = require('@/configs/host').default

const state = {
  plans: {
    residential: [
      { upload: 0, download: 0, price: 0, selected: false },
      { upload: 0, download: 0, price: 9, selected: false },
      { upload: 0, download: 0, price: 0, selected: false },
      { upload: 0, download: 0, price: 0, selected: false }
    ],
    business: [
      { upload: 0, download: 0, price: 0, selected: false },
      { upload: 0, download: 0, price: 0, selected: false },
      { upload: 0, download: 0, price: 0, selected: false }
    ]
  }
}

const getters = {
  plan: (state, getters, rootState) => rootState.plan,
  tarif: (state, getters) => state.plans[getters.plan].find(item => item.selected),
  authorized: (state, getters, rootState) => rootState.authorized
}

const mutations = {
  SET_PLANS (state, plans) {
    state.plans = plans
  },
  CHANGE_PLAN (state, payload) {
    state.plans[payload.plan][payload.index][payload.prop] = payload.value
  }
}

const actions = {

  async GET_DATA ({ state, getters, commit }) {
    commit('SET_PROGRESS', true, { root: true })
    const response = await getData(internetPlans)
    if (response.status !== 200) {
      commit('READ_FAILURE', null, { root: true })
      return
    }
    commit('SET_PROGRESS', false, { root: true })
    commit('SET_PLANS', response.data)
  },

  async SAVE_PLANS ({ state, getters, commit }) {
    if (!getters.authorized) {
      commit('ACCESS_DENIED', null, { root: true })
      return
    }
    const response = await postData(internetPlans, state.plans)
    commit(response.status === 200 ? 'SAVE_SUCCESS' : 'SAVE_FAILURE', null, { root: true })
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
