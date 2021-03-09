/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  contactFormFields: []
}

const getters = {
  endpoint: (state, getters, rootState) => rootState.contactEndpoint,
  pages: (state, getters, rootState) => rootState.pages.filter(item => item !== 'Contact Us'),
  selectors: (state, getters, rootState) => rootState.selectors.filter(item => item !== '#contact'),
  types: (state, getters, rootState) => rootState.fieldTypes,
  validators: (state, getters, rootState) => rootState.validators
}

const mutations = {
  UPDATE_USER_INFO: (state, payload) => {
    state.contactFormFields[payload.num].value = payload.value
  },
  UPDATE_EMAIL_SUBJECT: (state, payload) => { state.emailSubject = payload },
  UPDATE_EMAIL_TEXT: (state, payload) => { state.emailText = payload },
  UPDATE_FIELD: (state, payload) => {
    state.contactFormFields[payload.num][payload.prop] = payload.value
  },
  SET_ERROR: (state, payload) => {
    state.contactFormFields[payload.num].error = payload.value
  },
  CLEAR_ALL_FIELDS: (state) => {
    for (const index in state.contactFormFields) {
      state.contactFormFields[index].value = ''
      state.contactFormFields[index].error = false
    }
  },
  SET_FIELDS_TO_SHOW (state, payload) {
    state.contactFormFields = Object.assign([], payload)
  }
}

const actions = {

  SET_FIELDS_TO_SHOW ({ commit, getters }, payload) {
    const contactFormFields = payload.map((field) => {
      return {
        type: getters.types[field.type],
        placeholder: field.placeholder,
        required: field.required,
        value: '',
        validator: getters.validators[field.type],
        error: false,
        available: field.type === 'state' ? ['VIC', 'NSW', 'ACT', 'QLD', 'SA', 'WA', 'TAS', 'NT'] : field.available || null
      }
    })
    commit('SET_FIELDS_TO_SHOW', contactFormFields)
  },

  UPDATE_USER_FORM_CONFIGURATION ({ commit, rootState }) {
    const fields = rootState.content.userForm.fieldsToShow
    for (const field in fields) {
      commit('UPDATE_FIELD', { field, prop: 'show', value: true })
      if (fields[field].placeholder) {
        commit('UPDATE_FIELD', { field, prop: 'placeholder', value: fields[field].placeholder })
      }
      if (fields[field].available) {
        commit('UPDATE_FIELD', { field, prop: 'available', value: fields[field].available })
      }
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
