/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  top: {
    header: 'Heading Title',
    text: 'Some text will be here... Some text will be here... Some text will be here... Some text will be here... Some text will be here...',
    button: 'CTA',
    pictureURL: 'https://garevna.github.io/pineapple-land/img/family-medium-1.png'
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
  faq: {
    header: 'We’ve Answered Some Common Questions',
    button: 'Get in Touch',
    items: [
      {
        question: 'How can you sell fibre internet in Melbourne?',
        answer: 'Pineapple Net retail a new and independent fibre optic network operated by a local company called DGtek.<br>Over this superior network, we can offer speeds up to 1Gbps and provide our customers with an unbelievably reliable internet connection.<br>Their network was switched on in 2016. Currently, it is only available in Melbourne.<br>We make this network available to Melbourne’s homes and businesses. We’re the friendly face that will help you get set up and keep you happy as you send data at blistering speeds over fibre thanks to DGtek.'
      },
      {
        question: 'Is This NBN Fibre?',
        answer: 'Absolutely not. DGtek fibre is lightyears ahead of the NBN.<br>It’s cheaper, faster and honestly, little guys like us, who want to bring something different to Australia’s internet game could never afford to sell this service on the NBN.<br>DGtek has no CVC, which means you always get the speeds you paid for.<br>DGtek’s network is much newer than the connection type that our coverage area is stuck with.  In stark contrast to the 30 year old infrastructure the NBN bought of Telstra, DGtek’s fibre is all brand new.<br>We like that we can help our customers, escape the constant repairs and maintenance of the NBN whilst getting every other benefits of fibre. And we like that we hardly ever need to troubleshoot problems or deal with outages that are beyond our control.'
      },
      {
        question: 'How Reliable is Pineapple Net Internet?',
        answer: 'The figures don’t lie. Since 2016, DGtek’s fibre network has maintained a 99.9% uptime.<br>Fibre has greater tensile strength and durability than copper and HFC technologies. It works better than copper in hot conditions - the Australian summer- and it’s a cleaner connection to the home.<br>You can remove that extra box the NBN gave you from the kitchen bench.<br>DGtek is pedantic about their installs. They use better than best practice, and it’s a welcome change for most of our customers who only recently went through the NBN’s contractor horror show.<br>We’ll sum up by saying, it’s extremely reliable.'
      },
      {
        question: 'How Can Pineapple Net Sell Faster Speeds For Cheaper Than The NBN?',
        answer: 'If we charged what other ISPs charged we’d feel bad.<br>By not reselling the NBN, we’ve seriously cut back on overheads.<br>It’s a lot cheaper to retail DGtek. The pricing is simpler and predictable and there are no download taxes, rebates or schemes.<br>That’s why we can supply internet cheaper, and we pass our savings down to you. It’s the Pineapple thing to do.'
      },
      {
        question: 'Do I Need Fibre?',
        answer: 'Of course, you don’t need fibre, just like you didn’t need ADSL before it. Remember when the internet was all static webpages and emails? Back then dial-up did the job just fine. But the internet changed, and a similar change is happening now.'
      }
    ]
  },
  footer: {
    topHead: 'READY TO GET STARTED?',
    topText: 'Leave your inquiry and we\'ll get back to you within 24 hours on business days'
  }
}

const getters = {
  contentEndpoint: (state, getters, rootState) => `${rootState.host}/content/1`
}

const mutations = {
  UPDATE_TOP: (state, payload) => { state.top[payload.prop] = payload.value },
  UPDATE_INFO: (state, payload) => { state.info[payload.prop] = payload.value },

  ADD_OFFER: (state) => state.info.offer.push({ blackText: 'information about', greenText: 'offer' }),
  REMOVE_OFFER: (state, payload) => state.info.offer.splice(payload.num, 1),
  UPDATE_OFFER: (state, payload) => {
    state.info.offer[payload.num].greenText = payload.greenText
    state.info.offer[payload.num].blackText = payload.blackText
  },
  FILTER_OFFERS: (state) => {
    state.info.offer = state.info.offer.filter(item => item.greenText || item.blackText)
  },

  UPDATE_USER_FORM: (state, payload) => { state.userForm[payload.prop] = payload.value },

  UPDATE_CONNECT: (state, payload) => { state.howToConnect[payload.prop] = payload.value },
  ADD_CONNECT_ITEM: (state) => state.howToConnect.items.push({ title: 'Benefit ...', text: '...' }),
  REMOVE_CONNECT_ITEM: (state, payload) => state.howToConnect.items.splice(payload.num, 1),
  UPDATE_CONNECT_ITEM: (state, payload) => { state.howToConnect.items[payload.num][payload.prop] = payload.value },

  UPDATE_TESTIMONIALS: (state, payload) => { state.testimonials[payload.prop] = payload.value },
  UPDATE_FAQ: (state, payload) => { state.faq[payload.prop] = payload.value },
  UPDATE_FAQ_ITEM: (state, payload) => { state.faq.items[payload.num][payload.prop] = payload.value },
  UPDATE_FOOTER: (state, payload) => { state.footer[payload.prop] = payload.value },

  UPDATE_ALL: (state, payload) => { Object.assign(state, payload) }
}

const actions = {
  async GET_CONTENT ({ getters, commit, dispatch }) {
    try {
      const response = await (await fetch(getters.contentEndpoint)).json()
      commit('UPDATE_ALL', response)
      return response
    } catch (error) {
      console.log('ERROR:\n', error)
      return null
    }
  },
  SET_PAGE_FIELDS ({ commit }, payload) {
    commit('UPDATE_ALL', payload)
  },

  async SAVE_CONTENT (context, endpoint) {
    const content = { ...state }
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      },
      body: JSON.stringify(content)
    })
    return response.status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
