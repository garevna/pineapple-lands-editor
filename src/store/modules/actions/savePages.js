/*    FOR ROOT STORE    */

const { postData } = require('@/helpers').default
const { pages } = require('@/configs/host').default

export const SAVE_PAGES = async ({ state, commit }) => {
  if (!state.pages.length) {
    commit('SAVE_FAILURE')
    return
  }
  commit('SET_PROGRESS', true)
  await postData(pages, state.pages)
  commit('SET_PROGRESS', false)
}
