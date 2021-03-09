/* READINESS - ROOT MODULE MUTATIONS */

export const setReady = {
  SET_PAGE_CONTENT_READY: (state, value) => { state.pageContentReady = value },
  SET_GENERAL_INFO_READY: (state, value) => { state.generalInfoReady = value },
  SET_PLANS_READY: (state, value) => { state.internetPlansReady = value },
  SET_TESTIMONIALS_READY: (state, value) => { state.testimonialsReady = value },
  SET_LIVE_LIST_READY: (state, value) => { state.liveListReady = value },

  SET_IMAGES_READY: (state, value) => { state.imagesReady = value },
  SET_ICONS_READY: (state, value) => { state.iconsReady = value },
  SET_AVATARS_READY: (state, value) => { state.avatarsReady = value },

  SET_IMAGE_READY: (state, payload) => {
    // const recordNum = state.imageReady.findIndex(item => item.image === payload.image)
    // const { image, ready } = payload
    // recordNum === -1 ? state.imageReady.push({ image, ready }) : state.imageReady.splice(recordNum, 1, { image, ready })
    Object.assign(state.imageReady, { [payload.fileName]: payload.ready })
  },
  SET_ICON_READY: (state, payload) => {
    // const recordNum = state.iconReady.findIndex(item => item.icon === payload.icon)
    // const { icon, ready } = payload
    // recordNum === -1 ? state.iconReady.push({ icon, ready }) : state.iconReady.splice(recordNum, 1, { icon, ready })
    Object.assign(state.iconReady, { [payload.fileName]: payload.ready })
  },
  SET_AVATAR_READY: (state, payload) => {
    // const recordNum = state.avatarReady.findIndex(item => item.avatar === payload.avatar)
    // const { avatar, ready } = payload
    // recordNum === -1 ? state.avatarReady.push({ avatar, ready }) : state.avatarReady.splice(recordNum, 1, { avatar, ready })
    Object.assign(state.avatarReady, { [payload.fileName]: payload.ready })
  }
}
