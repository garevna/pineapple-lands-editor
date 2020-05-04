/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */

const state = {
  pageFields: [],
  gallery: false,
  galleryPictures: [],
  galleryAvatars: [],
  selectedImage: '',
  pictureType: 'image'
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
  // imageSrc: (folderName, fileName) => (state, getters, rootState) => `${rootState.host}/${folderName}/${fileName}`
}

const mutations = {
  SET_PAGE_FIELDS (state, content) {
    state.pageFields = Object.keys(content)
  },
  SAVE_PAGE_SECTION (state, payload) {
    Object.keys(payload).forEach((field) => { state.pageFields[field] = payload[field] })
  },
  SHOW_GALLERY (state) {
    state.gallery = true
  },
  HIDE_GALLERY (state) {
    state.gallery = false
  },
  UPDATE_PICTURE_TYPE (state, payload) {
    state.pictureType = payload
  },
  UPDATE_GALLERY_PICTURES (state, payload) {
    state.galleryPictures = payload
  },
  UPDATE_GALLERY_AVATARS (state, payload) {
    state.galleryAvatars = payload
  },
  UPDATE_SELECTED_IMAGE (state, payload) {
    state.selectedImage = payload
  }
}

const actions = {

  async SAVE_IMAGE ({ dispatch }, { name, file, endpoint }) {
    // if (!localStorage.getItem('token')) return
    const formData = new FormData()
    formData.set(name, file)
    try {
      const response = await (await fetch(endpoint, {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('token')
        },
        body: formData
      })).text()
      return response
    } catch (error) { return null }
  },

  async SAVE_TOP_PICTURE ({ getters, commit, dispatch }, file) {
    const response = await dispatch('SAVE_IMAGE', {
      name: 'picture',
      file,
      endpoint: getters.uploadPictureEndpoint
    })
    return response
  },

  async SAVE_AVATAR ({ getters, commit, dispatch }, file) {
    const response = await dispatch('SAVE_IMAGE', {
      name: 'avatar',
      file,
      endpoint: getters.uploadAvatarEndpoint
    })
    return response
  },

  async GET_IMAGES (context, endpoint) {
    const response = await (await fetch(endpoint)).json()
    return response.filter(img => !img.match(/.gitkeep/))
  },

  async GET_ALL_PICTURES ({ getters, commit, dispatch }) {
    const result = await dispatch('GET_IMAGES', getters.picturesEndpoint)
    if (result) commit('UPDATE_GALLERY_PICTURES', result)
  },

  async GET_ALL_AVATARS ({ getters, commit, dispatch }) {
    const result = await dispatch('GET_IMAGES', getters.avatarsEndpoint)
    commit('UPDATE_GALLERY_AVATARS', result)
  },

  async REMOVE_IMAGE (context, filePath) {
    const response = await fetch(filePath, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
  },

  async REMOVE_PICTURE ({ getters, dispatch }, fileName) {
    const filePath = `${getters.picturesEndpoint}/${fileName}`
    dispatch('REMOVE_IMAGE', filePath)
  },

  async REMOVE_AVATAR ({ getters, dispatch }, fileName) {
    const filePath = `${getters.avatarsEndpoint}/${fileName}`
    dispatch('REMOVE_IMAGE', filePath)
  },

  LOG_ERROR ({ commit }, error) {
    commit('ERROR_HANDLER', { moduleName: 'editor', error }, { root: true })
    return null
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
