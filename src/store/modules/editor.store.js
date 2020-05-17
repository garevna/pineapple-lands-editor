const state = {
  pageFields: [],
  gallery: false,
  galleryImages: [],
  selectedImage: null,
  imageURL: null,
  imageType: 'image',
  section: null,
  num: null
}

const getters = {
  hostEndpoint: (state, getters, rootState) => `${rootState.host}`,
  contentEndpoint: (state, getters, rootState) => `${rootState.host}/content/1`,
  uploadPictureEndpoint: (state, getters, rootState) => `${rootState.host}/content/picture`,
  uploadAvatarEndpoint: (state, getters, rootState) => `${rootState.host}/testimonials/avatar`,
  staticPictureEndpoint: (state, getters, rootState) => `${rootState.host}/images`,
  staticAvatarEndpoint: (state, getters, rootState) => `${rootState.host}/avatars`,
  picturesEndpoint: (state, getters, rootState) => `${rootState.host}/content/images`, /* get all images, delete image */
  avatarsEndpoint: (state, getters, rootState) => `${rootState.host}/testimonials/avatars` /* get all avatars, delete avatar */
}

const mutations = {
  SET_PAGE_FIELDS (state, content) {
    state.pageFields = Object.keys(content)
  },
  SAVE_PAGE_SECTION (state, payload) {
    Object.keys(payload).forEach((field) => { state.pageFields[field] = payload[field] })
  }
}

const actions = {

  async UPLOAD_IMAGE ({ state, getters }, file) {
    const name = state.imageType === 'image' ? 'picture' : 'avatar'
    const formData = new FormData()
    formData.set(name, file)
    let response = null
    try {
      response = await (await fetch(getters.uploadEndpoint, {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('token')
        },
        body: formData
      })).text()
      return response
    } catch (error) { return null }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
