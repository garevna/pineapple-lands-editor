import Vue from 'vue'

const workersNames = [
  '__authWorker',
  '__commonWorker',
  '__landWorker',
  '__liveWorker',
  '__mediaWorker',
  '__filesWorker',
  '__imagesWorker',
  '__iconsWorker',
  '__avatarsWorker'
]

const path = location.href.indexOf('pineapple-lands-editor') > 0 ? 'pineapple-lands-editor/' : ''
workersNames.forEach(name => {
  Vue.prototype[name] = new Worker(`/${path}live.worker.js`)
})

const mutations = {
  __authWorker: 'RECEIVE_MESSAGE_FROM_AUTH_WORKER',
  __commonWorker: 'RECEIVE_MESSAGE_FROM_COMMON_WORKER',
  __mediaWorker: 'RECEIVE_MESSAGE_FROM_MEDIA_WORKER',
  __filesWorker: 'RECEIVE_MESSAGE_FROM_FILES_WORKER',
  __landWorker: 'RECEIVE_MESSAGE_FROM_LANDS_WORKER',
  __liveWorker: 'RECEIVE_MESSAGE_FROM_LIVE_WORKER',
  __imagesWorker: 'RECEIVE_MESSAGE_FROM_IMAGES_WORKER',
  __iconsWorker: 'RECEIVE_MESSAGE_FROM_ICONS_WORKER',
  __avatarsWorker: 'RECEIVE_MESSAGE_FROM_AVATARS_WORKER'
}

Vue.prototype.callback = function (event) {
  const { status, store: target, action, key, result } = event.data
  Vue.prototype.__commit('SET_PROGRESS', false)
  if (status !== 200) {
    Vue.prototype.__commit(action === 'save' ? 'SAVE_FAILURE' : 'READ_FAILURE', result)
    return
  }
  if (action === 'save') Vue.prototype.__commit('SAVE_SUCCESS', result)
  if (target === 'lands' || (target === 'live' && key !== 'list')) Vue.prototype.__commit('SET_PAGE_CONTENT_READY', true)
}

for (const worker of workersNames) {
  Vue.prototype[worker].onerror = function (event) {
    Vue.prototype.__commit('WORKER_FAILURE')
  }

  Vue.prototype[worker].onmessage = function (event) {
    Vue.prototype.__dispatch(mutations[worker], event.data)
  }

  Vue.prototype[worker].addEventListener('message', Vue.prototype.callback)
}

Vue.prototype.__sendLandRequest = function (landName) {
  Vue.prototype.__commit('SET_PROGRESS', true)
  Vue.prototype.__commit('SET_PAGE_CONTENT_READY', false)
  Vue.prototype.__landWorker.postMessage({ action: 'get', store: 'lands', key: landName })
}

Vue.prototype.__sendLiveRequest = function () {
  Vue.prototype.__commit('SET_PROGRESS', true)
  Vue.prototype.__commit('SET_PAGE_CONTENT_READY', false)
  Vue.prototype.__liveWorker.postMessage({ action: 'get', store: 'live', key: 'home' })
}

Vue.prototype.__sendPageRequest = function (pageId) {
  Vue.prototype.__commit('SET_PROGRESS', true)
  Vue.prototype.__commit('SET_PAGE_CONTENT_READY', false)
  Vue.prototype.__liveWorker.postMessage({ action: 'get', store: 'live', key: pageId })
}

Vue.prototype.__sendListRequest = function () {
  Vue.prototype.__commit('SET_PROGRESS', true)
  Vue.prototype.__commit('SET_LIVE_LIST_READY', false)
  Vue.prototype.__liveWorker.postMessage({ action: 'get', store: 'live', key: 'list' })
}

Vue.prototype.__sendFileRequest = function (target, fileName) {
  Vue.prototype.__filesWorker.postMessage({
    store: target,
    action: 'get',
    key: fileName
  })
}

Vue.prototype.__saveLand = function (key, data) {
  Vue.prototype.__commit('SET_PROGRESS', true)
  Vue.prototype.__landWorker.postMessage({
    store: 'lands',
    action: 'put',
    key,
    data
  })
}

Vue.prototype.__saveLivePages = function (data) {
  if (!Array.isArray(data)) return console.warn('Error in data type:\n', data)
  Vue.prototype.__commit('SET_PROGRESS', true)
  Vue.prototype.__liveWorker.postMessage({
    store: 'live',
    action: 'put',
    key: 'list',
    data
  })
}

Vue.prototype.__saveLiveHome = function (data) {
  Vue.prototype.__commit('SET_PROGRESS', true)
  Vue.prototype.__liveWorker.postMessage({
    store: 'live',
    action: 'put',
    key: 'home',
    data
  })
}

Vue.prototype.__saveLivePage = function (key, data) {
  Vue.prototype.__commit('SET_PROGRESS', true)
  Vue.prototype.__liveWorker.postMessage({
    store: 'live',
    action: 'put',
    key,
    data
  })
}

Vue.prototype.__saveGeneralInfo = function (data) {
  Vue.prototype.__commit('SET_PROGRESS', true)
  Vue.prototype.__commonWorker.postMessage({
    store: 'common',
    action: 'put',
    key: 'general',
    data
  })
}

Vue.prototype.__saveTestimonials = function (data) {
  Vue.prototype.__commit('SET_PROGRESS', true)
  Vue.prototype.__commonWorker.postMessage({
    store: 'common',
    action: 'put',
    key: 'testimonials',
    data
  })
}

Vue.prototype.__sendImageRequest = function (fileName) {
  Vue.prototype.__sendFileRequest('images', fileName)
}

Vue.prototype.__sendIconRequest = function (fileName) {
  Vue.prototype.__sendFileRequest('icons', fileName)
}

Vue.prototype.__sendAvatarRequest = function (fileName) {
  Vue.prototype.__sendFileRequest('avatars', fileName)
}

// Vue.prototype.__getAllImages = function (fileName) {
//   Vue.prototype.__imagesWorker.postMessage({ store: 'media', action: 'images' })
// }
// Vue.prototype.__getAllIcons = function (fileName) {
//   Vue.prototype.__iconsWorker.postMessage({ store: 'media', action: 'icons' })
// }
// Vue.prototype.__getAllAvatars = function (fileName) {
//   Vue.prototype.__avatarsWorker.postMessage({ store: 'media', action: 'avatars' })
// }

Vue.prototype.__init = function () {
  for (const key of ['general', 'testimonials', 'plans']) {
    Vue.prototype.__commonWorker.postMessage({ store: 'common', action: 'get', key })
  }
  for (const key of ['image', 'icon', 'avatar']) {
    Vue.prototype.__mediaWorker.postMessage({ store: 'media', action: 'get', key })
  }
  Vue.prototype.__mediaWorker.postMessage({ store: 'media', action: 'static', key: 'endpoints' })
  Vue.prototype.__imagesWorker.postMessage({ store: 'media', action: 'images' })
  Vue.prototype.__iconsWorker.postMessage({ store: 'media', action: 'icons' })
  Vue.prototype.__avatarsWorker.postMessage({ store: 'media', action: 'avatars' })
}

export default Vue
