/*    WORKER --- FOR ROOT STORE    */

export const RECEIVE_MESSAGE_FROM_ICONS_WORKER = ({ commit, dispatch }, payload) => {
  const { status, result } = payload
  if (status !== 200) return null
  commit('media/SET_ICONS', result)
  commit('SET_ICONS_READY', true)
  return result
}
