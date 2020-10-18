/*    FOR ROOT STORE    */

export default {
  SAVE_GENERAL_INFO: async ({ state, commit }) => {
    const {
      officeAddress,
      officePhone,
      officeEmail,
      officeABN,
      linkedIn,
      faceBook
    } = state
    const response = await fetch(state.generalInfoEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      },
      body: JSON.stringify({
        officeAddress,
        officePhone,
        officeEmail,
        officeABN,
        linkedIn,
        faceBook
      })
    })
    return response.status
  }
}
