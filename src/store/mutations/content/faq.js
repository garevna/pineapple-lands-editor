/* FAQ - CONTENT MODULE MUTATIONS */

export const faqSectionMutations = {
  UPDATE_FAQ: (state, payload) => {
    state.faq[payload.prop] = payload.value
  },

  UPDATE_FAQ_ITEM: (state, payload) => {
    state.faq.items[payload.num][payload.prop] = payload.value
  },

  ADD_FAQ_ITEM: (state) => {
    state.faq.items.push({ question: 'Question?', answer: 'Answer...' })
  },

  DELETE_FAQ_ITEM: (state, num) => { state.faq.items.splice(num, 1) }
}
