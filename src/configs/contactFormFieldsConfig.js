const emailValidator = require('email-validator')

const fieldTypes = {
  text: 'input-with-validation',
  number: 'input-with-validation',
  email: 'input-with-validation',
  phone: 'phone-number',
  state: 'selector',
  postcode: 'input-with-validation',
  list: 'selector',
  combo: 'combobox',
  date: 'date-input',
  time: 'time-input',
  message: 'textarea'
}

const validators = {
  text: val => val.length > 2,
  number: val => val.match(/^[0-9]*$/),
  email: emailValidator.validate,
  phone: null,
  state: null,
  postcode: val => Number(val) && Number(val) >= 3000 && Number(val) < 9999,
  list: null,
  date: null,
  time: null,
  combo: function (val) { return this.available.indexOf(val) !== -1 },
  message: val => val.length >= 5
}

const description = {
  text: 'Simple text',
  number: 'Simple number',
  email: 'Email',
  phone: 'Phone',
  state: 'State',
  postcode: 'Postcode',
  list: 'Select from a list',
  combo: 'Combobox input',
  date: 'Date',
  time: 'Time',
  message: 'Message'
}

export default {
  fieldTypes,
  validators,
  description
}
