/*    WORKER --- FOR ROOT STORE    */

const actions = {
  images: 'media/SET_IMAGES',
  icons: 'media/SET_ICONS',
  avatars: 'media/SET_AVATARS',
  static: 'media/SET_STATIC_URLS'
}

const setReady = {
  images: 'SET_IMAGES_READY',
  icons: 'SET_ICONS_READY',
  avatars: 'SET_AVATARS_READY',
  static: null
}

export const RECEIVE_MESSAGE_FROM_MEDIA_WORKER = ({ commit, dispatch }, payload) => {
  const { status, action, result } = payload
  if (status !== 200) return null
  if (Object.keys(actions).indexOf(action) !== -1) {
    commit(actions[action], result)
    if (setReady[action]) commit(setReady[action], true)
  }
  return result
}
