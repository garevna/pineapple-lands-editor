import {
  getCommon,
  putCommon,
  saveCommon,
  storeCommon
} from '../helpers/common'

class CommonController {
  /* IndexedDB => App */
  get (request) {
    return getCommon(request.key)
  }

  /* App => IndexedDB => remote server */
  put (request) {
    return putCommon(request.key, request.data)
  }

  /* remote server => IndexedDB */
  store (request) {
    return storeCommon(request.key)
  }

  /* IndexedDB => remote server */
  save (request) {
    return saveCommon(request.key)
  }
}

export const commonController = new CommonController()
