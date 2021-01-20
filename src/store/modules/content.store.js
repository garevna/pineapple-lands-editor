/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const {
  info,
  livePages,
  dgtekAside,
  userForm,
  howToConnect,
  list,
  faq,
  updates
} = require('./mutations').default

const {
  GET_CONTENT,
  SAVE_CONTENT
  // addNewPage,
  // setNewPageContent
} = require('./actions').default

// const userFormInitial = require('@/configs/userFormInitial.js').default

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

const mutations = {
  UPDATE_PAGE_NUM: (state, payload) => { state.pageNum = payload },
  UPDATE_TOP: (state, payload) => { state.top[payload.prop] = payload.value },
  UPDATE_BROWSER_TAB_TITLE: (state, val) => { state.browserTabTitle = val },
  UPDATE_EMAIL_SUBJECT: (state, val) => { state.emailSubject = val },
  UPDATE_EMAIL_TEXT: (state, val) => { state.emailText = val },
  UPDATE_MAIN_NAV: (state, payload) => {
    state.mainNavButtons = Object.assign([], payload.mainNavButtons)
    state.mainNavSectors = Object.assign([], payload.mainNavSectors)
  },

  /* INFO */
  ...info.default,

  /* LIVE - PAGES */
  ...livePages,

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

  /* CONTENT OF LAND UPDATES */
  ...updates.default
}

const actions = {
  GET_CONTENT,
  SAVE_CONTENT
  // ...addNewPage,
  // ...setNewPageContent
}

export default {
  namespaced: true,
  state,
  // getters,
  actions,
  mutations
}
