/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  userInfo: {
    name: '',
    email: '',
    address: '',
    postCode: '',
    state: '',
    phone: '',
    message: ''
  }
}

const getters = {
  endpoint: (state, getters, rootState) => rootState.contactEndpoint,
  pages: (state, getters, rootState) => rootState.pages.filter(item => item !== 'Contact Us'),
  selectors: (state, getters, rootState) => rootState.selectors.filter(item => item !== '#contact')
}

const mutations = {
  UPDATE_USER_INFO: (state, payload) => { state.user[payload.prop] = payload.value }
}

const actions = {

  async SEND_MESSAGE ({ getters, commit }, file) {
    // const result = await (await fetch(getters.endpoint)).text()
    return true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
