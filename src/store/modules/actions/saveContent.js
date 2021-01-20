/*    FOR CONTENT MODULE OF STORE    */

const saveData = require('@/helpers/postData').default

export const SAVE_CONTENT = async (context, route) => {
  context.commit('SET_PROGRESS', true, { root: true })
  const response = await saveData(`content/${route}`, context.state)
  context.commit('SET_PROGRESS', false, { root: true })
  context.commit(response.status === 200 ? 'SAVE_SUCCESS' : 'SAVE_FAILURE', null, { root: true })
}
