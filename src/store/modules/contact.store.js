/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const emailValidator = require('email-validator')

const state = {
  contactFormFields: {
    name: {
      type: 'input-with-validation',
      placeholder: 'Full name*',
      validator: val => val.length > 2,
      configured: false,
      value: '',
      error: false,
      show: false
    },
    email: {
      type: 'input-with-validation',
      placeholder: 'Email*',
      validator: emailValidator.validate,
      configured: false,
      value: '',
      error: false,
      show: false
    },
    phone: {
      type: 'phone-number',
      placeholder: 'Phone*',
      configured: false,
      value: '',
      error: false,
      show: false
    },
    address: {
      type: 'input-with-validation',
      placeholder: 'Address*',
      validator: val => val.length > 5,
      configured: false,
      value: '',
      error: false,
      show: false
    },
    postcode: {
      type: 'input-with-validation',
      placeholder: 'Postcode*',
      validator: val => Number(val) && Number(val) >= 3000 && Number(val) < 9999,
      configured: false,
      value: '',
      error: false,
      show: false
    },
    state: {
      type: 'selector',
      placeholder: 'State*',
      available: ['VIC', 'NSW', 'ACT', 'QLD', 'SA', 'WA', 'TAS', 'NT'],
      configured: true,
      validator: function (val) { console.log(this.available); return this.available.indexOf(val) !== -1 },
      value: '',
      error: false,
      show: false
    },
    list: {
      type: 'selector',
      placeholder: '?..',
      available: [],
      configured: true,
      value: '',
      error: false,
      show: false
    },
    number: {
      type: 'input-with-validation',
      placeholder: '?..',
      validator: val => val.match(/^[0-9]*$/),
      configured: true,
      value: '',
      error: false,
      show: false
    },
    combo: {
      type: 'combobox',
      placeholder: '...',
      available: [],
      validator: function (val) { return this.available.indexOf(val) !== -1 },
      configured: true,
      value: '',
      error: false,
      show: false
    },
    message: {
      type: 'textarea',
      placeholder: 'Enquiry',
      configured: false,
      value: '',
      error: false,
      show: false
    }
  }
}

const getters = {
  endpoint: (state, getters, rootState) => rootState.contactEndpoint,
  pages: (state, getters, rootState) => rootState.pages.filter(item => item !== 'Contact Us'),
  selectors: (state, getters, rootState) => rootState.selectors.filter(item => item !== '#contact')
}

const mutations = {
  UPDATE_USER_INFO: (state, payload) => {
    state.contactFormFields[payload.field].value = payload.value
  },
  UPDATE_EMAIL_SUBJECT: (state, payload) => { state.emailSubject = payload },
  UPDATE_EMAIL_TEXT: (state, payload) => { state.emailText = payload },
  SET_FIELDS_TO_SHOW: (state, payload) => { state.fieldsToShow = payload },
  UPDATE_FIELD: (state, payload) => {
    state.contactFormFields[payload.field][payload.prop] = payload.value
  },
  CREATE_MESSAGE: (state) => {
    // const phoneValue = state.ucontactFormFields.phone.show ? `<h4>Phone: ${state.contactFormFields.phone.value}</h4>` : ''
    // const addressValue = state.contactFormFields.address.show ? `<p>Address: ${state.contactFormFields.address.value}</p>` : ''
    // const postcodeValue = state.contactFormFields.postcode.show ? `<p>Postcode: ${state.contactFormFields.postcode.value}</p>` : ''
    // const stateValue = state.contactFormFields.state.show ? `<p>State: ${state.contactFormFields.state.value}</p>` : ''
    // const listValue = state.contactFormFields.list.show ? `<p>${state.contactFormFields.list.placeholder}: ${state.contactFormFields.list.value}</p>` : ''
    // const numberValue = state.contactFormFields.number.show ? `<p>${state.contactFormFields.number.placeholder}: ${state.contactFormFields.number.value}</p>` : ''
    // const comboValue = state.contactFormFields.combo.show ? `<p>${state.contactFormFields.combo.placeholder}: ${state.contactFormFields.combo.value}</p>` : ''
    let details = ''
    for (const field in state.contactFormFields) {
      details += state.contactFormFields[field].show ? `<p>${state.contactFormFields[field].placeholder}: ${state.contactFormFields[field].value}</p>` : ''
    }
    state.messageForMail = `
      <p>${state.emailText}</p>
      <h3>Name: ${state.contactFormFields.name.value}</h3>
      <h4>Email: ${state.contactFormFields.email.value}</h4>
      <fieldset>
        <legend>Details:</legend>
        ${details}
      </fieldset>
      <h4>Message:</h4>
      <p>${state.userInfo.message.split('\n').join('<br>')}</p>
    `
  },
  CLEAR_ALL_FIELDS: (state) => {
    for (const field in state.contactFormFields) {
      state.contactFormFields[field].value = ''
      state.contactFormFields[field].error = false
    }
  }
}

const actions = {

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
