/*    FOR CONTENT MODULE OF STORE    */

const getData = require('@/helpers/getData').default

export const GET_CONTENT = async ({ getters, commit, dispatch }, route) => {
  commit('SET_PROGRESS', true, { root: true })
  if (!route) return
  commit('CLEAR_ALL')
  const response = await getData(`content/${route}`)
  if (response.status !== 200) {
    commit('READ_FAILURE', null, { root: true })
    return null
  }
  commit('SET_PROGRESS', false, { root: true })
  commit('UPDATE_ALL', response.data)
  await dispatch('contact/SET_FIELDS_TO_SHOW', response.data.userForm.fieldsToShow, { root: true })

  if (route.toString().indexOf('live-') !== -1) return true

  commit('SET_CURRENT_LAND', route, { root: true })

  return response.data.browserTabTitle
}
