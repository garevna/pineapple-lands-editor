/*    FOR ROOT STORE    */

export default {
  GET_GENERAL_INFO: async ({ state, commit }) => {
    const generalInfo = await (await fetch(state.generalInfoEndpoint)).json()
    for (const field in generalInfo) {
      commit('SET_PROPERTY', {
        object: state,
        propertyName: field,
        value: generalInfo[field]
      })
    }
  }
}
