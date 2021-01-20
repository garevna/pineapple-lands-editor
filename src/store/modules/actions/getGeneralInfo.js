/*    FOR ROOT STORE    */

const getData = require('@/helpers/getData').default
const { general } = require('@/configs/host').default

export const GET_GENERAL_INFO = async ({ state, commit }) => {
  commit('SET_PROGRESS', true)
  const response = await getData(general)
  if (response.status !== 200) {
    commit('READ_FAILURE', null, { root: true })
    return
  }
  commit('SET_PROGRESS', false)
  for (const field in response.data) {
    commit('SET_PROPERTY', {
      object: state,
      propertyName: field,
      value: response.data[field]
    })
  }
}
