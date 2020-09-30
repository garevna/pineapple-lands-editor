/* ASIDE - CONTENT MODULE MUTATIONS */

export default {
  UPDATE_INFO: (state, payload) => { state.info[payload.prop] = payload.value },

  UPDATE_OFFER: (state, payload) => {
    state.info.offer = payload
  },
  ADD_OFFER: (state) => {
    state.info.offer.push({ blackText: 'information about', greenText: 'offer' })
  },
  REMOVE_OFFER: (state, num) => {
    state.info.offer.splice(num, 1)
  },

  UPDATE_OFFER_GREEN_TEXT: (state, payload) => {
    if (!state.info.offer[payload.num]) state.info.offer.push({ blackText: 'information about', greenText: payload.value })
    else state.info.offer[payload.num].greenText = payload.value
  },
  UPDATE_OFFER_BLACK_TEXT: (state, payload) => {
    if (!state.info.offer[payload.num]) state.info.offer.push({ blackText: payload.value, greenText: 'offer' })
    else state.info.offer[payload.num].blackText = payload.value
  }
}
