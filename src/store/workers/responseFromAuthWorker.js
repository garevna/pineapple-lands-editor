/*    WORKER --- FOR ROOT STORE    */

export const RECEIVE_MESSAGE_FROM_AUTH_WORKER = ({ commit, dispatch }, payload) => {
  const { status, /* action, */ result } = payload
  if (status !== 200) {
    commit('AUTH_FAILURE', status, result)
    return
  }

  commit('AUTH_SUCCESS', result)
  commit('SET_PROGRESS', false)
}
