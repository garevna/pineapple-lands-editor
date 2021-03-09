/*    WORKER --- FOR ROOT STORE    */

export const RECEIVE_MESSAGE_FROM_LIVE_WORKER = ({ commit, dispatch }, payload) => {
  const { status, action, key, result } = payload
  if (status !== 200) {
    commit(action === 'get' ? 'READ_FAILURE' : 'SAVE_FAILURE', `Error code: ${status}\nResource: ${key}\n${result}`)
    return
  }
  if (action === 'get') {
    if (key === 'list') {
      commit('SET_PAGES', result)
      commit('SET_LIVE_LIST_READY', true)
      commit('SET_PAGE_CONTENT_READY', false)
      commit('SET_CURRENT_LAND', null)
    } else {
      commit('content/UPDATE_ALL', result, { root: true })
      if (result.userForm) {
        dispatch('contact/SET_FIELDS_TO_SHOW', result.userForm.fieldsToShow, { root: true })
      }
      commit('SET_CURRENT_LAND', key === 'home' ? 'live' : `live-${key}`)
      commit('SET_PAGE_CONTENT_READY', true)
    }
    return
  }
  if (action === 'put') commit('SAVE_SUCCESS')
  else console.error('Can\'t resolve unknown action')
}
