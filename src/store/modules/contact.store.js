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
  CREATE_MESSAGE: (state) => {
    let details = ''
    let message = ''
    for (const field of state.contactFormFields) {
      if (field.type === 'message') {
        message = `
          <h4>Message:</h4>
          <p>${field.value.split('\n').join('<br>')}</p>
        `
      } else details += `<p>${field.placeholder}: ${field.value}</p>`
    }

    state.messageForMail = `
      <p>${state.emailText}</p>
      <fieldset>
        <legend>Details:</legend>
        ${details}
      </fieldset>
      ${message}
    `
  },
  SET_ERROR: (state, payload) => {
    state.contactFormFields[payload.num].error = payload.value
  },
  CLEAR_ALL_FIELDS: (state) => {
    for (const index in state.contactFormFields) {
      state.contactFormFields[index].value = ''
      state.contactFormFields[index].error = false
    }
  }
}

const actions = {

  SET_FIELDS_TO_SHOW ({ state, getters }, payload) {
    state.contactFormFields = payload.map((field) => {
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
  },
  async SEND_EMAIL ({ state, commit }) {
    let error = false
    for (const field in state.contactFormFields) {
      error = error || state.contactFormFields[field].error || state.contactFormFields[field].value.length === 0
    }
    if (error) return false

    commit('CREATE_MESSAGE')
    const response = await (await fetch(state.mailEndpoint, {
      method: 'POST',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subject: state.emailSubject,
        email: state.contactFormFields.email,
        message: state.messageForMail
      })
    })).json()
    commit('CLEAR_ALL_FIELDS')
    return true
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
