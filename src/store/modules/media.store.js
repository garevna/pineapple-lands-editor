const state = {
  images: {},
  icons: {},
  avatars: {},
  staticEndpoints: {
    images: '',
    icons: '',
    avatars: ''
  }
}

const getters = {
  getImageLink: (state) => function (filePath) {
    const key = Object.keys(state.images).find(item => filePath.indexOf(item) !== -1)
    return state.images[key]
  },
  getIconLink: (state) => (filePath) => {
    const key = Object.keys(state.icons).find(item => filePath.indexOf(item) !== -1)
    return state.icons[key]
  },
  getAvatarLink: (state) => (filePath) => {
    const key = Object.keys(state.avatars).find(item => filePath.indexOf(item) !== -1)
    return state.avatars[key]
  },
  getRequestInitiatorId: (state) => (() => {
    let id = 1
    return () => id++
  })()
}

const mutations = {
  SET_IMAGES: (state, payload) => {
    state.images = payload
  },
  SET_ICONS: (state, payload) => {
    state.icons = payload
  },
  SET_AVATARS: (state, payload) => {
    state.avatars = payload
  },
  SET_IMAGE: (state, payload) => {
    if (!state.images[payload.fileName]) Object.assign(state.images, { [payload.fileName]: payload.link })
  },
  SET_ICON: (state, payload) => {
    if (!state.icons[payload.fileName]) Object.assign(state.icons, { [payload.fileName]: payload.link })
  },
  SET_AVATAR: (state, payload) => {
    if (!state.avatars[payload.fileName]) Object.assign(state.avatars, { [payload.fileName]: payload.link })
  },
  SET_STATIC_URLS: (state, payload) => {
    for (const key of Object.keys(payload)) {
      if (Object.keys(state.staticEndpoints).indexOf(key) === -1) {
        console.log('Invalid key: ', key)
        continue
      }
      Object.assign(state.staticEndpoints, { [key]: payload[key] })
    }
  }
}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
