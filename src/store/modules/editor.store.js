const state = {
  pageFields: [],
  gallery: false,
  galleryImages: [],
  selectedImage: null,
  imageURL: null,
  imageType: 'image',
  section: null,
  num: null,
  availableFormFields: ['name', 'email', 'address', 'postcode', 'state', 'phone', 'list', 'number', 'combo', 'message'],
  configs: [
    [
      {
        title: 'Top of the page',
        value: '#top'
      },
      {
        title: 'Benefits',
        value: '#benefits'
      },
      {
        title: 'Contact form',
        value: '#contact'
      },
      {
        title: 'How To Connect',
        value: '#how-to-connect'
      },
      {
        title: 'Internet Plans',
        value: '#plans'
      },
      {
        title: 'Reviews',
        value: '#testimonials'
      },
      {
        title: 'FAQs',
        value: '#faq'
      },
      {
        title: 'Footer',
        value: '#footer'
      }
    ],
    [
      {
        title: 'Top of the page',
        value: '#top'
      },
      {
        title: 'Reviews',
        value: '#testimonials'
      },
      {
        title: 'Contact form',
        value: '#contact'
      },
      {
        title: 'FAQs',
        value: '#faq'
      },
      {
        title: 'Footer',
        value: '#footer'
      }
    ],
    [
      {
        title: 'Top of the page',
        value: '#top'
      },
      {
        title: 'List (just after top)',
        value: '#list'
      },
      {
        title: 'Powered by DGtek',
        value: '#dgtek'
      },
      {
        title: 'How To Connect',
        value: '#how-to-connect'
      },
      {
        title: 'Reviews',
        value: '#testimonials'
      },
      {
        title: 'Internet Plans',
        value: '#plans'
      },
      {
        title: 'FAQs',
        value: '#faq'
      },
      {
        title: 'Footer with contact form',
        value: '#footer'
      }
    ],
    [
      {
        title: 'Top of the page',
        value: '#top'
      },
      {
        title: 'Contact form',
        value: '#contact'
      },
      {
        title: 'How To Connect',
        value: '#how-to-connect'
      },
      {
        title: 'Internet Plans',
        value: '#plans'
      },
      {
        title: 'Reviews',
        value: '#testimonials'
      },
      {
        title: 'FAQs',
        value: '#faq'
      },
      {
        title: 'Footer with contact form',
        value: '#footer'
      }
    ]
  ]
}

const getters = {
  hostEndpoint: (state, getters, rootState) => `${rootState.host}`,
  contentEndpoint: (state, getters, rootState) => `${rootState.host}/content`,

  uploadImageEndpoint: (state, getters, rootState) => `${rootState.host}/content/picture`,
  staticImageEndpoint: (state, getters, rootState) => `${rootState.host}/images`,
  imagesEndpoint: (state, getters, rootState) => `${rootState.host}/content/images`, /* get all images, delete image */

  uploadIconEndpoint: (state, getters, rootState) => `${rootState.host}/content/icon`,
  staticIconEndpoint: (state, getters, rootState) => `${rootState.host}/icons`,
  iconsEndpoint: (state, getters, rootState) => `${rootState.host}/content/icons` /* get all images, delete image */
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

  async UPLOAD_FILE ({ state, getters }, payload) {
    const formData = new FormData()
    formData.set(payload.destination === 'image' ? 'picture' : 'icon', payload.file)
    let response = null
    const endpoint = payload.destination === 'image' ? 'uploadImageEndpoint' : 'uploadIconEndpoint'
    try {
      response = await (await fetch(getters[endpoint], {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('token')
        },
        body: formData
      })).text()
      return response
    } catch (error) { return null }
  },

  async UPLOAD_IMAGE ({ state, dispatch }, file) {
    const url = await dispatch('UPLOAD_FILE', {
      destination: 'image',
      file
    })
    return url
  },
  async UPLOAD_ICON ({ state, dispatch }, file) {
    const url = await dispatch('UPLOAD_FILE', {
      destination: 'icon',
      file
    })
    return url
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
