/* LIVE.PINEAPPLE.NET.AU - CONTENT MODULE MUTATIONS */

export default {

  REMOVE_PAGE: (state, pageNum) => {
    if (!state.pages || typeof pageNum !== 'number') return console.log('There is no page to remove')
    state.pages.splice(pageNum, 1)
  },

  ADD_LIVE_ASIDE_OFFER: (state, pageNum) => {
    state.pages[pageNum].info.offer.push({ blackText: 'information about', greenText: 'offer' })
  },
  REMOVE_LIVE_ASIDE_OFFER: (state, payload) => {
    state.pages[payload.pageNum].info.offer.splice(payload.num, 1)
  },

  UPDATE_LIVE_ASIDE_GREEN_TEXT: (state, payload) => {
    if (!state.pages[payload.pageNum].info.offer[payload.num]) {
      state.pages[payload.pageNum].info.offer.push({ blackText: 'information about', greenText: payload.value })
    } else state.pages[payload.pageNum].info.offer[payload.num].greenText = payload.value
  },
  UPDATE_LIVE_ASIDE_BLACK_TEXT: (state, payload) => {
    if (!state.pages[payload.pageNum].info.offer[payload.num]) {
      state.pages[payload.pageNum].info.offer.push({ blackText: payload.value, greenText: 'offer' })
    } else state.pages[payload.pageNum].info.offer[payload.num].blackText = payload.value
  },

  UPDATE_PAGE_SECTION: (state, payload) => {
    if (!state.pages || typeof payload.pageNum !== 'number') return console.error('The page to be updated is not defined')
    if (!payload.sectionName) return console.error('The section of the page to be updated is not defined')
    if (!payload.propName) return console.error('The property to be updated is not defined')

    state.pages[payload.pageNum][payload.sectionName][payload.propName] = payload.propValue
  },

  // UPDATE_PAGE_FOOTER: (state, payload) => { state.pages[payload.pageNum].footer[payload.propName] = payload.propValue },

  CREATE_NEW_PAGE: (state, payload) => { state.pages.push(payload) }
}
