/*    IMAGES, ICONS, AVATARS --- FOR ROOT STORE    */

const getData = require('@/helpers/getData').default
const { avatar, image, icon } = require('@/configs/host').default
const endpoints = {
  avatar: avatar.get,
  image: image.get,
  icon: icon.get
}

export const GET_IMAGES = async ({ state, commit }, destination) => {
  commit('SET_PROGRESS', true)
  const response = await getData(endpoints[destination])
  commit('SET_PROGRESS', false)
  if (response.status !== 200) {
    commit('READ_FAILURE')
    return []
  }
  return response.data
}
