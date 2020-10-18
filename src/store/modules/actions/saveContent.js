/*    FOR CONTENT MODULE OF STORE    */

export default {
  SAVE_CONTENT: async ({ state, getters, dispatch }, route) => {
    const response = await fetch(`${getters.pageContentEndpoint}/${route}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      },
      body: JSON.stringify(state)
    })
    return response.status
  }
}
