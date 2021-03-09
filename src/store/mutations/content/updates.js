/* UPDATES - for CONTENT module */

export const updates = {
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
    for (const prop of Object.keys(state)) {
      prop === 'footer' || delete state[prop]
    }
    for (const field in payload) {
      const tmp = typeof payload[field] !== 'object' ? payload[field] : JSON.parse(JSON.stringify(payload[field]))
      Object.assign(state, { [field]: tmp })
    }
  }
}
