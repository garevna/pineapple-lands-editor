/* DGTEK ASIDE - CONTENT MODULE MUTATIONS */

export default {

  UPDATE_ASIDE: (state, payload) => { state.aside[payload.prop] = payload.value },
  ADD_ASIDE_ITEM: (state) => {
    state.aside.items.push({ black: '[ Relevant ]', red: '[ Information ]' })
  },
  REMOVE_ASIDE_ITEM: (state, num) => {
    state.aside.items.splice(num, 1)
  },

  UPDATE_ASIDE_RED_TEXT: (state, payload) => {
    if (!state.aside.items[payload.num]) state.aside.items.push({ black: 'information about', red: payload.value })
    else state.aside.items[payload.num].red = payload.value
  },
  UPDATE_ASIDE_BLACK_TEXT: (state, payload) => {
    if (!state.aside.items[payload.num]) state.aside.items.push({ black: payload.value, red: '[ Information ]' })
    else state.aside.items[payload.num].black = payload.value
  },
  UPDATE_ASIDE_SMALL_TEXT: (state, payload) => {
    state.aside.smallText.splice(payload.num, 1, payload.value)
  }
}
