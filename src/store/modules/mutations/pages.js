/* LIVE.PINEAPPLE.NET.AU - ROOT MODULE MUTATIONS */

export const SET_PAGES = (state, payload) => {
  state.pages = payload
}

export const ADD_PAGE = (state, pageData) => {
  state.pages.unshift(pageData)
}

export const HIDE_CURRENT_PAGE = (state, id) => {
  const index = state.pages.findIndex(page => page.id === id)
  if (index < 0) return
  Object.assign(state.pages[index], { hidden: true })
}

export const SET_CURRENT_PAGE_ACTIVE = (state) => {
  const id = state.currentLand.slice(5)
  const index = state.pages.findIndex(page => page.id === id)
  if (index < 0) return
  state.pages[index].hidden = false
}

export const UPDATE_PAGE_ADDRESS = (state, payload) => {
  state.pages[payload.index].address[payload.propName] = payload.propValue
}

export const SHOW_PAGE_INFO = (state) => {
  state.showPageInfo = true
}

export const HIDE_PAGE_INFO = (state) => {
  state.showPageInfo = false
}
