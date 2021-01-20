/*    LIVE PAGES --- FOR ROOT STORE    */

const getData = require('@/helpers/getData').default
const { pages } = require('@/configs/host').default

export const GET_PAGES = async ({ state, commit }) => {
  commit('SET_PROGRESS', true)
  const response = await getData(pages)
  if (response.status !== 200) {
    commit('READ_FAILURE')
    return
  }
  commit('SET_PROGRESS', false)
  commit('SET_PAGES', response.data)
}
