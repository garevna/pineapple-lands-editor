import {
  getLand,
  putLand,
  saveLand,
  storeLand
} from '../helpers/lands'

class LandsController {
  get (request) {
    return getLand(request.key)
  }

  put (request) {
    return putLand(request.key, request.data)
  }

  store (request) {
    return storeLand(request.key)
  }

  save (request) {
    return saveLand(request.token, request.key)
  }
}

export const landsController = new LandsController()
