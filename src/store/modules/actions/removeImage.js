/*    IMAGES, ICONS, AVATARS --- FOR ROOT STORE    */

const { removePicture } = require('@/helpers/removeImage')
const { avatar, image, icon } = require('@/configs/host').default
const endpoints = {
  avatar: avatar.delete,
  image: image.delete,
  icon: icon.delete
}

export const DELETE_IMAGE = async (context, payload) => {
  if (!payload.file) return
  context.commit('SET_PROGRESS', true)
  const response = await removePicture(`${endpoints[payload.destination]}/${payload.file}`)

  context.commit(response.status !== 200 ? 'DELETE_FAILURE' : 'DELETE_SUCCESS')

  context.commit('SET_PROGRESS', false)
}
