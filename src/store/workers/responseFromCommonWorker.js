/*    WORKER --- FOR ROOT STORE    */

const mutations = {
  general: 'UPDATE_GENERAL_INFO',
  testimonials: 'testimonials/UPDATE_CONTENT',
  plans: 'internetPlans/SET_PLANS'
}

const setReady = {
  general: 'SET_GENERAL_INFO_READY',
  testimonials: 'SET_TESTIMONIALS_READY',
  plans: 'SET_PLANS_READY'
}

export const RECEIVE_MESSAGE_FROM_COMMON_WORKER = ({ commit, dispatch }, payload) => {
  const { status, action, key, result } = payload
  if (status !== 200) return commit(action === 'get' ? 'READ_FAILURE' : 'SAVE_FAILURE', result)
  if (action === 'put') return commit('SAVE_SUCCESS')
  if (action === 'get') {
    commit(mutations[key], result, { root: true })
    commit(setReady[key], true, { root: true })
  }
}
