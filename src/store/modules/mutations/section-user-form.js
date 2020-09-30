/* USER FORM - CONTENT MODULE MUTATIONS */

export default {
  UPDATE_USER_FORM: (state, payload) => { state.userForm[payload.prop] = payload.value },
  UPDATE_USER_FORM_FIELD_OPTION: (state, payload) => {
    state.userForm.fieldsToShow[payload.num][payload.option] = payload.value
  },

  UPDATE_USER_FORM_FIELDS: (state, payload) => {
    state.userForm.fieldsToShow = payload.map(field => ({
      type: field.type,
      placeholder: field.placeholder,
      required: field.required,
      available: field.available
    }))
  },

  UPDATE_LIVE_PAGE_USER_FORM: (state, payload) => {
    if (!state.pages || !payload.pageNum) return console.error('Page is not defined')
    state.pages[payload.pageNum].userForm[payload.prop] = payload.value
  },

  UPDATE_LIVE_PAGE_USER_FORM_FIELD_OPTION: (state, payload) => {
    state.pages[payload.pageNum].userForm.fieldsToShow[payload.num][payload.option] = payload.value
  },

  UPDATE_LIVE_PAGE_USER_FORM_FIELDS: (state, payload) => {
    state.pages[payload.pageNum].userForm.fieldsToShow = payload.fields.map(field => ({
      type: field.type,
      placeholder: field.placeholder,
      required: field.required,
      available: field.available
    }))
    console.log(state.pages[payload.pageNum].userForm.fieldsToShow)
  }
}
