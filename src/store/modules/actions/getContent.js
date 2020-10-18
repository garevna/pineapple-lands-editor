/*    FOR CONTENT MODULE OF STORE    */

const userFormInitial = require('@/store/modules/userFormInitial.js').default

export default {
  GET_CONTENT: async ({ getters, commit, dispatch }, route) => {
    if (!route) return
    commit('CLEAR_ALL')
    try {
      const response = await (await fetch(`${getters.pageContentEndpoint}/${route}`)).json()
      commit('UPDATE_ALL', response)
      commit('contact/UPDATE_EMAIL_SUBJECT', response.emailSubject, { root: true })
      commit('contact/UPDATE_EMAIL_TEXT', response.emailText, { root: true })
      commit('SET_CURRENT_LAND', route, { root: true })
      if (!response.userForm) response.userForm = userFormInitial
      await dispatch('contact/SET_FIELDS_TO_SHOW', response.userForm.fieldsToShow, { root: true })
      commit('CLEAR_ERROR', null, { root: true })
      return response.browserTabTitle
    } catch (error) {
      console.warn('ERROR:\n', error)
      commit('SET_ERROR', error, { root: true })
      return null
    }
  }
}
