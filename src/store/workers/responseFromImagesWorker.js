/*    WORKER --- FOR ROOT STORE    */

export const RECEIVE_MESSAGE_FROM_IMAGES_WORKER = ({ commit, dispatch }, payload) => {
  const { status, result } = payload
  if (status !== 200) return null
  commit('media/SET_IMAGES', result)
  commit('SET_IMAGES_READY', true)
  return result
}
