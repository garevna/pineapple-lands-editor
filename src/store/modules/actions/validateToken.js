/*    FOR ROOT STORE    */

export default {
  VALIDATE_TOKEN: async ({ state, commit }) => {
    const token = localStorage.getItem('token')
    if (!token) return commit('SET_AUTH', false)
    try {
      const response = await fetch(`${state.host}/auth/token`, {
        method: 'GET',
        headers: {
          Authorization: token
        },
        body: null
      })
      commit('SET_AUTH', response.status === 200)
    } catch (err) {
      console.warn(err)
      commit('SET_AUTH', false)
    }
  }
}
