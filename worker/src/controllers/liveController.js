import {
  getLiveMainPage,
  getLivePageById,
  getLivePagesList,
  putLiveMainPage,
  putLivePageById,
  putLivePagesList,
  storeLiveMainPage,
  storeLivePageById,
  storeLivePagesList,
  saveLiveMainPage,
  saveLivePageById,
  saveLivePagesList
} from '../helpers/live'

const actions = {
  get: {
    home: getLiveMainPage,
    page: getLivePageById,
    list: getLivePagesList
  },
  put: {
    home: putLiveMainPage,
    page: putLivePageById,
    list: putLivePagesList
  },
  store: {
    home: storeLiveMainPage,
    page: storeLivePageById,
    list: storeLivePagesList
  },
  save: {
    home: saveLiveMainPage,
    page: saveLivePageById,
    list: saveLivePagesList
  }
}

const target = request => request.key === 'list' || request.key === 'home' ? request.key : 'page'

class LiveController {
  get (request) {
    return actions.get[target(request)](request.key)
  }

  put (request) {
    if (request.key === 'list' || request.key === 'home') return actions.put[target(request)](request.data)
    else return actions.put[target(request)](request.key, request.data)
  }

  store (request) {
    return actions.store[target(request)](request.key)
  }

  save (request) {
    return actions.save[target(request)](request.key)
  }
}

export const liveController = new LiveController()
