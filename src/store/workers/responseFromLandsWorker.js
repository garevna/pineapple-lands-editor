/*    WORKER --- FOR ROOT STORE    */

export const RECEIVE_MESSAGE_FROM_LANDS_WORKER = ({ commit, dispatch }, payload) => {
  const { status, action, store, key, result } = payload

  if (status !== 200) {
    console.log('SAVE_FAILURE', `Status: ${status}\nAction: ${action}\nStore: ${store}\nKey: ${key}\nResult: ${result}`)
    commit('SAVE_FAILURE', `Status: ${status}\nAction: ${action}\nStore: ${store}\nKey: ${key}\nResult: ${result}`)
    return
  }

  if (action === 'get' || action === 'store') {
    commit('content/UPDATE_ALL', result, { root: true })
    commit('SET_CURRENT_LAND', key)
    commit('SET_PAGE_CONTENT_READY', true)
    if (result.userForm) {
      dispatch('contact/SET_FIELDS_TO_SHOW', result.userForm.fieldsToShow, { root: true })
    }
  } else commit('SAVE_SUCCESS')
}
