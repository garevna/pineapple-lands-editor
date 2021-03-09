/*    WORKER --- FOR ROOT STORE    */

const mutations = {
  images: 'media/SET_IMAGE',
  icons: 'media/SET_ICON',
  avatars: 'media/SET_AVATAR'
}

export const RECEIVE_MESSAGE_FROM_FILES_WORKER = ({ state, commit, dispatch }, payload) => {
  const { status, action, store, key, result } = payload

  console.log('RECEIVE_MESSAGE_FROM_FILES_WORKER:\n', status, action, store, key, result)

  if (status !== 200) {
    return commit(action === 'save' ? 'SAVE_FAILURE' : 'READ_FAILURE', result)
  }

  if (action === 'save') return

  if (action === 'get' && Object.keys(mutations).indexOf(store) !== -1) {
    commit(mutations[store], { fileName: key, link: result })
  }
  return result
}
