/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {}

const getters = {
  pageContentEndpoint: (state, getters, rootState) => `${rootState.host}/content`,
  testimonialsEndpoint: (state, getters, rootState) => `${rootState.host}/testimonials`
}

const mutations = {
  UPDATE_PAGE_NUM: (state, payload) => { state.pageNum = payload },
  UPDATE_TOP: (state, payload) => { state.top[payload.prop] = payload.value },
  UPDATE_INFO: (state, payload) => { state.info[payload.prop] = payload.value },

  ADD_OFFER: (state) => state.info.offer.push({ blackText: 'information about', greenText: 'offer' }),
  REMOVE_OFFER: (state, payload) => state.info.offer.splice(payload.num, 1),
  UPDATE_OFFER: (state, payload) => {
    state.info.offer[payload.num].greenText = payload.greenText
    state.info.offer[payload.num].blackText = payload.blackText
  },
  FILTER_OFFERS: (state) => {
    state.info.offer = state.info.offer.filter(item => item.greenText || item.blackText)
  },

  UPDATE_USER_FORM: (state, payload) => { state.userForm[payload.prop] = payload.value },

  UPDATE_CONNECT: (state, payload) => { state.howToConnect[payload.prop] = payload.value },
  ADD_CONNECT_ITEM: (state) => state.howToConnect.items.push({ title: 'Benefit ...', text: '...' }),
  REMOVE_CONNECT_ITEM: (state, payload) => state.howToConnect.items.splice(payload.num, 1),
  UPDATE_CONNECT_ITEM: (state, payload) => { state.howToConnect.items[payload.num][payload.prop] = payload.value },

  UPDATE_TESTIMONIALS: (state, payload) => { state.testimonials[payload.prop] = payload.value },
  UPDATE_FAQ: (state, payload) => { state.faq[payload.prop] = payload.value },
  UPDATE_FAQ_ITEM: (state, payload) => { state.faq.items[payload.num][payload.prop] = payload.value },
  ADD_FAQ_ITEM: (state) => { state.faq.items.push({ question: '', answer: '' }) },
  DELETE_FAQ_ITEM: (state, num) => { state.faq.items.splice(num, 1) },
  UPDATE_FOOTER: (state, payload) => { state.footer[payload.prop] = payload.value },

  UPDATE_ALL: (state, payload) => { Object.assign(state, payload) }
}

const actions = {
  async GET_CONTENT ({ getters, commit, dispatch }, route) {
    try {
      const response = await (await fetch(`${getters.pageContentEndpoint}/${route}`)).json()
      commit('UPDATE_ALL', response)
      return response
    } catch (error) {
      console.warn('ERROR:\n', error)
      return null
    }
  },
  // SET_PAGE_FIELDS ({ commit }, payload) {
  //   commit('UPDATE_ALL', payload)
  // },

  async SAVE_CONTENT ({ state, getters, dispatch }, route) {
    console.log(JSON.parse(JSON.stringify(state)))
    const response = await fetch(`${getters.pageContentEndpoint}/${route}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      },
      body: JSON.stringify(state)
    })
    console.log(response.status)
    return response.status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
