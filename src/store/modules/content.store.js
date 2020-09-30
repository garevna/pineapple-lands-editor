/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const {
  infoSection,
  pagesSection,
  dgtekAsideSection,
  userFormSection,
  howToConnectSection,
  listSection,
  faqSection
} = require('./mutations').default

const userFormInitial = require('@/store/modules/userFormInitial.js').default

const state = {
  browserTabTitle: 'pineapple.net',
  emailSubject: 'pineapple.net.au',
  emailText: 'Thank you for your interest in Pineapple NET! A member of our team will be in touch shortly.',
  mainNavButtons: [],
  mainNavSectors: [],
  top: {},
  info: {},
  aside: {},
  list: {},
  faq: {},
  plans: {},
  testimonials: {},
  greenSection: {},
  howToConnect: {},
  internetPlans: {},
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

  /* INFO */
  ...infoSection.default,

  /* LIVE - PAGES */
  ...pagesSection.default,

  /* DGTEK ASIDE */
  ...dgtekAsideSection.default,

  /* USER FORM */
  ...userFormSection.default,

  /* HOW TO CONNECT */
  ...howToConnectSection.default,

  /* FAQ */
  ...faqSection.default,

  /* LIST */
  ...listSection.default,

  /* ========================== INTERNET PLANS ========================== */
  UPDATE_INTERNET_PLANS_CONTENT: (state, payload) => { state.internetPlans[payload.prop] = payload.value },
  UPDATE_INTERNET_PLANS: (state, payload) => { state.plans[payload.prop] = payload.value },

  /* ======================= TESTIMONIALS ======================= */
  UPDATE_TESTIMONIALS: (state, payload) => { state.testimonials[payload.prop] = payload.value },

  /* ======================= DISCLAIMER ========================== */
  UPDATE_DISCLAIMER: (state, payload) => { state.disclaimer[payload.prop] = payload.value },

  /* ======================= FOOTER ========================== */
  UPDATE_FOOTER: (state, payload) => { state.footer[payload.prop] = payload.value },

  UPDATE_ALL: (state, payload) => {
    for (const field in payload) {
      if (typeof payload[field] !== 'object') {
        state[field] = payload[field] || state[field]
      } else {
        if (Array.isArray(payload[field])) {
          state[field] = Object.assign([], payload[field])
        } else {
          state[field] = Object.assign({}, payload[field])
        }
      }
    }
  },
  CLEAR_ALL: (state) => {
    state.browserTabTitle = 'pineapple.net'
    state.emailSubject = 'pineapple.net.au'
    state.emailText = 'Thank you for your interest in Pineapple NET! A member of our team will be in touch shortly.'
    state.mainNavButtons = []
    state.mainNavSectors = []
    state.top = null
    state.info = null
    state.aside = null
    state.list = null
    state.faq = null
    state.plans = null
    state.testimonials = null
    state.greenSection = null
    state.howToConnect = null
    state.internetPlans = null
    state.footer.text = 'Leave your inquiry and we\'ll get back to you within 24 hours on business days'
    state.footer.title = 'READY TO GET STARTED?'
    state.userForm = null
  }
}

const actions = {
  async GET_CONTENT ({ getters, commit, dispatch }, route) {
    if (!route) return
    commit('CLEAR_ALL')
    try {
      const response = await (await fetch(`${getters.pageContentEndpoint}/${route}`)).json()
      commit('UPDATE_ALL', response)
      commit('contact/UPDATE_EMAIL_SUBJECT', response.emailSubject, { root: true })
      commit('contact/UPDATE_EMAIL_TEXT', response.emailText, { root: true })
      commit('SET_CURRENT_LAND', route, { root: true })
      if (!response.userForm) response.userForm = userFormInitial
      await dispatch('contact/SET_FIELDS_TO_SHOW', response.userForm.fieldsToShow, { root: true })
      return response.browserTabTitle
    } catch (error) {
      console.warn('ERROR:\n', error)
      return null
    }
  },

  async SAVE_CONTENT ({ state, getters, dispatch }, route) {
    const response = await fetch(`${getters.pageContentEndpoint}/${route}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      },
      body: JSON.stringify(state)
    })
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
