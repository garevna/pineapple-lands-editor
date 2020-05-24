/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {}

const getters = {
  pageContentEndpoint: (state, getters, rootState) => `${rootState.host}/content`,
  testimonialsEndpoint: (state, getters, rootState) => `${rootState.host}/testimonials`
}

const mutations = {
  UPDATE_PAGE_NUM: (state, payload) => { state.pageNum = payload },
  UPDATE_TOP: (state, payload) => { console.log(payload.prop, payload.value); state.top[payload.prop] = payload.value },
  UPDATE_INFO: (state, payload) => { state.info[payload.prop] = payload.value },

  UPDATE_OFFER: (state, payload) => {
    state.info.offer = payload
  },
  ADD_OFFER: (state) => {
    state.info.offer.push({ blackText: 'information about', greenText: 'offer' })
    state.info = JSON.parse(JSON.stringify(state.info))
  },
  REMOVE_OFFER: (state, num) => {
    state.info.offer.splice(num, 1)
    state.info = JSON.parse(JSON.stringify(state.info))
  },

  UPDATE_OFFER_GREEN_TEXT: (state, payload) => {
    if (!state.info.offer[payload.num]) state.info.offer.push({ blackText: 'information about', greenText: payload.value })
    else state.info.offer[payload.num].greenText = payload.value
  },
  UPDATE_OFFER_BLACK_TEXT: (state, payload) => {
    if (!state.info.offer[payload.num]) state.info.offer.push({ blackText: payload.value, greenText: 'offer' })
    else state.info.offer[payload.num].blackText = payload.value
  },

  /* ========================== USER FORM ========================== */
  UPDATE_USER_FORM: (state, payload) => { state.userForm[payload.prop] = payload.value },

  /* ======================= HOW TO CONNECT ======================= */
  UPDATE_CONNECT: (state, payload) => { state.howToConnect[payload.prop] = payload.value },
  ADD_CONNECT_ITEM: (state) => state.howToConnect.items.push({ title: 'Benefit ...', text: '...' }),
  REMOVE_CONNECT_ITEM: (state, num) => {
    state.howToConnect.items = state.howToConnect.items.filter((item, index) => index !== num)
  },
  UPDATE_CONNECT_ITEM: (state, payload) => { state.howToConnect.items[payload.num][payload.prop] = payload.value },

  /* ======================= TESTIMONIALS ======================= */
  UPDATE_TESTIMONIALS: (state, payload) => { state.testimonials[payload.prop] = payload.value },

  /* =========================== FAQ =========================== */
  UPDATE_FAQ: (state, payload) => { state.faq[payload.prop] = payload.value },
  UPDATE_FAQ_ITEM: (state, payload) => { state.faq.items[payload.num][payload.prop] = payload.value },
  ADD_FAQ_ITEM: (state) => { state.faq.items.push({ question: 'Question?', answer: 'Answer...' }) },
  DELETE_FAQ_ITEM: (state, num) => { state.faq.items.splice(num, 1) },

  /* ======================= LIST ========================== */
  UPDATE_LIST: (state, payload) => { state.list[payload.prop] = payload.value },
  UPDATE_LIST_ITEM: (state, payload) => { state.list.items[payload.num][payload.prop] = payload.value },
  ADD_LIST_ITEM: (state) => {
    state.list.items.push({
      title: 'item',
      icon: 'https://garevna.github.io/fibreinternet-melbournecbd.pineapple.com.au/svg/icon-1.svg',
      text: 'text...'
    })
    // state.list = JSON.parse(JSON.stringify(state.list))
  },
  REMOVE_LIST_ITEM: (state, num) => {
    state.list.items.splice(num, 1)
    // state.list = JSON.parse(JSON.stringify(state.list))
  },

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
