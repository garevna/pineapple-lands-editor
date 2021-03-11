// const { getData, postData } = require('@/helpers').default
// const { internetPlans } = require('@/configs/host').default

const state = {
  plans: {
    residential: [
      { name: 'Budget', upload: 50, download: 50, price: 50, tariffId: 'residential-50', selected: false },
      { name: 'Boost', upload: 150, download: 150, price: 69, tariffId: 'residential-150', selected: false },
      { name: 'Budget', upload: 250, download: 250, price: 99, tariffId: 'residential-250', selected: false },
      { name: 'Budget', upload: 500, download: 500, price: 140, tariffId: 'residential-500', selected: false },
      { name: 'Budget', upload: 1000, download: 1000, price: 250, tariffId: 'residential-1000', selected: false }
    ],
    business: [
      { upload: 150, download: 150, price: 150, tariffId: 'commercial-150', selected: false },
      { upload: 250, download: 250, price: 200, tariffId: 'commercial-250', selected: false },
      { upload: 500, download: 500, price: 240, tariffId: 'commercial-500', selected: false },
      { upload: 1000, download: 1000, price: 500, tariffId: 'commercial-1000', selected: false }
    ]
  }
}

const getters = {
  plan: (state, getters, rootState) => rootState.plan,
  tarif: (state, getters) => state.plans && getters.plan && state.plans[getters.plan] ? state.plans[getters.plan].find(item => item.selected) : null,
  authorized: (state, getters, rootState) => rootState.authorized
}

const { emptyTariff } = require('@/configs/emptyTariff')

const mutations = {
  SET_PLANS (state, payload) {
    const { plans } = payload
    const residential = plans.residential.map(item => Object.assign({}, emptyTariff, item))
    const business = plans.business.map(item => Object.assign({}, emptyTariff, item))
    Object.assign(state.plans, { residential, business })
  },
  SET_RESIDENTIAL (state, payload) {
    const { index, prop, value } = payload
    state.plans.residential[index][prop] = value
  },
  SET_BUSINESS (state, payload) {
    const { index, prop, value } = payload
    state.plans.business[index][prop] = value
  },
  CHANGE_PLAN (state, payload) {
    const { prop, value } = payload.prop
    state.plans[payload.plan][payload.index][prop] = value
  },
  INSERT_AFTER (state, payload) {
    const { index, plan } = payload
    state.plans[plan].splice(index + 1, 0, emptyTariff)
  },
  REMOVE_TARIFF (state, payload) {
    const { index, plan } = payload
    state.plans[plan].splice(index, 1)
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
