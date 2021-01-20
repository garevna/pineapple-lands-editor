/*    FOR ROOT STORE    */

const postData = require('@/helpers/postData').default
const { general } = require('@/configs/host').default
const { scheme } = require('@/configs/generalInfo')

export const SAVE_GENERAL_INFO = async ({ state, commit }) => {
  for (const prop in scheme) {
    scheme[prop] = state[prop]
  }
  commit('SET_PROGRESS', true)
  const response = await postData(general, scheme)
  commit('SET_PROGRESS', false)
  commit(response.status === 200 ? 'SAVE_SUCCESS' : 'SAVE_FAILURE')
}
