/*    WORKER --- FOR ROOT STORE    */

export const RECEIVE_MESSAGE_FROM_AVATARS_WORKER = ({ commit, dispatch }, payload) => {
  const { result } = payload
  commit('media/SET_AVATARS', result)
  commit('SET_AVATARS_READY', true)
  return result
}
