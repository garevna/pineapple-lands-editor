// const { upload } = require('@/helpers').default
// const { image, icon } = require('@/configs/host').default

const state = {
  pageFields: [],
  gallery: false,
  galleryImages: [],
  selectedImage: null,
  imageURL: null,
  imageType: 'image',
  section: null,
  num: null,
  availableFormFields: ['name', 'email', 'address', 'postcode', 'state', 'phone', 'list', 'number', 'combo', 'message']
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

  async UPLOAD_IMAGE (context, file) {
    // const formData = new FormData()
    // formData.set('picture', file)
    // context.commit('SET_PROGRESS', true, { root: true })
    // const response = await upload(image.upload, image.default, formData)
    // context.commit('SET_PROGRESS', false, { root: true })
    // return response.url
  },

  async UPLOAD_ICON (context, file) {
    // const formData = new FormData()
    // formData.set('icon', file)
    // context.commit('SET_PROGRESS', true, { root: true })
    // const response = await upload(icon.upload, icon.default, formData)
    // context.commit('SET_PROGRESS', false, { root: true })
    // return response.url
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
