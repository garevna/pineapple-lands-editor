export default {
  /* ========================== INTERNET PLANS ========================== */
  UPDATE_INTERNET_PLANS_CONTENT: (state, payload) => Object.assign(state.internetPlans, { [payload.prop]: payload.value }),
  UPDATE_INTERNET_PLANS: (state, payload) => Object.assign(state.plans, { [payload.prop]: payload.value }),

  /* ======================= TESTIMONIALS ======================= */
  UPDATE_TESTIMONIALS: (state, payload) => Object.assign(state.testimonials, { [payload.prop]: payload.value }),

  /* ======================= DISCLAIMER ========================== */
  UPDATE_DISCLAIMER: (state, payload) => Object.assign(state.disclaimer, { [payload.prop]: payload.value }),

  /* ======================= FOOTER ========================== */
  UPDATE_FOOTER: (state, payload) => Object.assign(state.footer, { [payload.prop]: payload.value }),

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
    for (const prop of Object.keys(state)) prop === 'footer' || delete state[prop]
    // state.browserTabTitle = state.browserTabTitle || 'Pineapple NET'
    // state.emailSubject = state.emailSubject || 'Pineapple NET'
    // state.emailText = state.emailText || 'Thank you for your interest in Pineapple NET! A member of our team will be in touch shortly.'
    // state.mainNavButtons = []
    // state.mainNavSectors = []
    // state.footer.text = state.footer.text || 'Leave your inquiry and we\'ll get back to you within 24 hours on business days'
    // state.footer.title = state.footer.title || 'READY TO GET STARTED?'
  }
}
