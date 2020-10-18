/*    FOR ROOT STORE    */

export default {
  SAVE_PAGES: async ({ state, commit }) => {
    try {
      const response = await fetch(`${state.host}/content/live-pages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(state.pages)
      })
      commit('CLEAR_ERROR')
      return response.status
    } catch (err) {
      commit('SET_ERROR')
    }
  }
}
