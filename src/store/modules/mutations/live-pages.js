/* LIVE.PINEAPPLE.NET.AU - CONTENT MODULE MUTATIONS */

const newBuildingPageContent = require('@/configs/empty-building-page.js').default

export const SET_NEW_PAGE_CONTENT = (state, content) => {
  Object.assign(state, JSON.parse(JSON.stringify(newBuildingPageContent)))
}

export const SWITCH_VISIBILITY_OF_PAGE = (state, payload) => {
  if (!state.pages) return console.warn('There is no pages')
  const props = Object.keys(payload)
  if (!props.find('pageId') && !props.find('pageIndex')) return console.warn('Error: Invalid params')
  const pageIndex = payload.pageId ? state.pages.findIndex(page => page.id === payload.pageId) : payload.pageIndex

  if (pageIndex === -1 || typeof pageIndex !== 'number') return console.warn('Page not found')
  state.pages[pageIndex].hidden = typeof payload.visibility === 'string' ? payload.visibility === 'hidden' : !payload.visibility
}

export const UPDATE_PAGE_ADDRESS = (state, payload) => {
  state.address[payload.propName] = payload.propValue
}

export const UPDATE_PAGE_NAME = (state, name) => {
  state.name = name
}
