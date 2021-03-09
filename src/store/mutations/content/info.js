/* ASIDE - CONTENT MODULE MUTATIONS */

export const infoSectionMutations = {
  UPDATE_INFO: (state, payload) => { state.info[payload.prop] = payload.value },

  // UPDATE_OFFER: (state) => {
  //   state.info.offer = state.info.offer.map((item, index) => Object.assign({}, item, { id: Date.now() + index }))
  // },
  ADD_OFFER: (state) => {
    state.info.offer.map(item => item.greenText)
    state.info.offer.push({
      blackText: 'information about',
      greenText: 'offer'
    })
  },
  REMOVE_OFFER: (state, num) => {
    state.info.offer.splice(num, 1)
  },

  UPDATE_OFFER_GREEN_TEXT: (state, payload) => {
    Object.assign(state.info.offer[payload.num], { greenText: payload.value })
  },
  UPDATE_OFFER_BLACK_TEXT: (state, payload) => {
    Object.assign(state.info.offer[payload.num], { blackText: payload.value })
  }
}
