/* UPDATES - for CONTENT module */

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
    for (const prop of Object.keys(state)) {
      prop === 'footer' || delete state[prop]
    }
  }
}
