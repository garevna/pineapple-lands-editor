/*    FOR CONTENT MODULE OF STORE    */

const newBuildingPageContent = require('@/store/empty-building-page.js').default

export default {
  ADD_NEW_PAGE: async ({ commit, dispatch }) => {
    const id = Date.now().toString()
    const route = `live-${id}`

    /*        SET NEW PAGE CONTENT          */
    commit('SET_NEW_PAGE_CONTENT', newBuildingPageContent)

    /*        SET CURRENT LAND VALUE       */
    commit('SET_CURRENT_LAND', route)
    await dispatch('contact/SET_FIELDS_TO_SHOW', newBuildingPageContent.userForm.fieldsToShow, { root: true })

    /*        UPDATE ARRAY OF PAGES         */
    commit('ADD_PAGE', {
      id,
      address: newBuildingPageContent.address,
      hidden: false
    }, { root: true })
    dispatch('SAVE_PAGES', null, { root: true })
  }
}
