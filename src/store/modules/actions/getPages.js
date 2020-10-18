/*    FOR ROOT STORE    */

export default {
  GET_PAGES: async ({ state, commit }) => {
    try {
      const response = await (await fetch(`${state.host}/content/live-pages`)).json()
      commit('SET_PAGES', response)
      commit('CLEAR_ERROR')
      return true
    } catch (error) {
      console.warn('ERROR:\n', error)
      commit('SET_ERROR')
      return null
    }
  }
}
