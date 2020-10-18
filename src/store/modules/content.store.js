/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const {
  info,
  pages,
  dgtekAside,
  userForm,
  howToConnect,
  list,
  faq,
  other
} = require('./mutations').default

const {
  getContent,
  saveContent,
  addNewPage,
  setNewPageContent
} = require('./actions').default

const userFormInitial = require('@/store/modules/userFormInitial.js').default

const state = {
  browserTabTitle: 'pineapple.net',
  emailSubject: 'pineapple.net.au',
  emailText: 'Thank you for your interest in Pineapple NET! A member of our team will be in touch shortly.',
  mainNavButtons: [],
  mainNavSectors: [],
  footer: {
    text: 'Leave your inquiry and we\'ll get back to you within 24 hours on business days',
    title: 'READY TO GET STARTED?'
  },
  userForm: {}
}

const getters = {
  pageContentEndpoint: (state, getters, rootState) => `${rootState.host}/content`,
  testimonialsEndpoint: (state, getters, rootState) => `${rootState.host}/testimonials`
}

const mutations = {
  UPDATE_PAGE_NUM: (state, payload) => { state.pageNum = payload },
  UPDATE_TOP: (state, payload) => { state.top[payload.prop] = payload.value },
  UPDATE_MAIN_NAV: (state, payload) => {
    state.mainNavButtons = Object.assign([], payload.map(item => item.text))
    state.mainNavSectors = Object.assign([], payload.map(item => item.goto))
  },

  /* INFO */
  ...info.default,

  /* LIVE - PAGES */
  ...pages.default,

  /* DGTEK ASIDE */
  ...dgtekAside.default,

  /* USER FORM */
  ...userForm.default,

  /* HOW TO CONNECT */
  ...howToConnect.default,

  /* FAQ */
  ...faq.default,

  /* LIST */
  ...list.default,

  ...other.default
}

const actions = {
  ...getContent,
  ...saveContent,
  ...addNewPage,
  ...setNewPageContent
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
