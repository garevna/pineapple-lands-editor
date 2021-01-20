export const SHOW_POPUP = (state, payload) => {
  state.popup = {
    title: payload.title || '',
    text: payload.text || '',
    label: payload.label || '',
    action: false,
    open: true
  }
}

export const HIDE_POPUP = (state) => {
  state.popup.open = false
}

export const SET_AUTH = (state, val) => {
  state.authorized = !!val
}

export const AUTH_FAILURE = (state) => {
  state.authorized = false
  state.popup = {
    title: 'ACCESS DENIED',
    text: 'You are now in demo mode. You have no access to save changes',
    color: '#900',
    open: true
  }
}

export const AUTH_SUCCESS = (state) => {
  state.authorized = true
  state.popup = {
    title: 'ACCESS GRANTED',
    text: 'You have full access to save changes',
    color: '#20731C',
    open: true
  }
}

export const SAVE_SUCCESS = (state) => {
  state.popup = {
    title: 'SAVE THE DATA',
    text: 'Data has been successfully saved',
    color: '#20731C',
    open: true
  }
}

export const SAVE_FAILURE = (state) => {
  state.popup = {
    title: 'SAVE THE DATA',
    text: 'Operation failed',
    color: '#900',
    open: true
  }
}

export const READ_FAILURE = (state) => {
  state.popup = {
    title: 'READ THE DATA',
    text: 'Operation failed',
    color: '#900',
    open: true
  }
}

export const ACCESS_DENIED = (state) => {
  state.popup = {
    title: 'SAVE THE DATA',
    text: 'Access denied',
    color: '#900',
    open: true
  }
}

export const DIALOG_DELETE = (state) => {
  state.popup = {
    title: 'CONFIRM DELETE',
    text: 'Are you sure you want to delete this?',
    color: '#900',
    action: false,
    label: 'Delete',
    open: true
  }
}

export const DELETE_FAILURE = (state) => {
  state.popup = {
    title: 'DELETE',
    text: 'Operation failed',
    color: '#900',
    open: true
  }
}

export const DELETE_SUCCESS = (state) => {
  state.popup = {
    title: 'DELETE',
    text: 'Deletion has been performed successfully',
    color: '#20731C',
    open: true
  }
}

export const CONFIRM_ACTION = (state) => {
  state.popup.action = true
  state.popup.open = false
}

export const INVALID_FILE_TYPE = (state) => {
  state.popup = {
    title: 'Invalid file type',
    text: 'File must be an image of any type such as: jpg, png, gif...',
    color: '#f50',
    open: true
  }
}

export const INVALID_FILE_SIZE = (state) => {
  state.popup = {
    title: 'Invalid file size',
    text: 'File is too large',
    open: true
  }
}

export const USER_FORM_ERROR = (state) => {
  state.popup = {
    title: 'Error',
    text: 'Please fill required fields',
    open: true
  }
}

export const EMAIL_SUCCESS = (state) => {
  state.popup = {
    title: 'Send email',
    text: 'Email has been delivered',
    open: true
  }
}

export const EMAIL_FAILURE = (state) => {
  state.popup = {
    title: 'Send email',
    text: 'Operation failed. Email has not been delivered',
    open: true
  }
}
