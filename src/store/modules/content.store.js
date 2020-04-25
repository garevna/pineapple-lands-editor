/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  top: {
    header: 'Heading Title',
    text: 'Some text will be here... Some text will be here... Some text will be here... Some text will be here... Some text will be here...',
    button: 'CTA'
  },
  info: {
    header: 'Heading Title',
    text: 'Some text will be here... Some text will be here... Some text will be here... Some text will be here... Some text will be here...',
    offer: [
      {
        blackText: 'information about',
        greenText: 'offer'
      },
      {
        blackText: 'information about',
        greenText: 'offer'
      }
    ]
  },
  userForm: {
    title: 'Title about offer',
    messagePlaceholder: '',
    button: 'CTA'
  },
  howToConnect: {
    header: 'Title around Optic Fibre',
    text: 'Some text here... Some text here... Some text here... Some text here...',
    items: [
      {
        title: 'Benefit 1',
        text: 'Some text here... Some text here... Some text here... Some text here...'
      },
      {
        title: 'Benefit 2',
        text: 'Some text here... Some text here... Some text here... Some text here...'
      },
      {
        title: 'Benefit 3',
        text: 'Some text here... Some text here... Some text here... Some text here...'
      }
    ]
  },
  testimonials: {
    header: 'Title around reviews',
    button: 'CTA'
  },
  footer: {
    topHead: 'READY TO GET STARTED?',
    topText: 'Leave your inquiry and we\'ll get back to you within 24 hours on business days'
  }
}

const getters = {
  editorEndpoint: (state, getters, rootState) => `${rootState.host}/content`
}

const mutations = {
  MAP_POINTS: (state, points) => { state.points = JSON.parse(JSON.stringify(points)) },
  MAP_POLYGONS: (state, polygons) => { state.polygons = JSON.parse(JSON.stringify(polygons)) }
}

const actions = {
  async GET_MAP_DATA ({ getters, commit }) {
    const [polygons, points] = await Promise.all((await Promise.all([
      fetch(getters.polygonsEndpoint),
      fetch(getters.pointsEndpoint)
    ])).map(response => response.json()))
    commit('MAP_POINTS', points)
    commit('MAP_POLYGONS', polygons)
    return true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
