import {
  getMediaList,
  storeMediaList,
  saveMediaList,
  getImages,
  getIcons,
  getAvatars,
  getStaticEndpoints
} from '../helpers/media'

class MediaStoreController {
  async get (request) {
    return await getMediaList(request.key)
  }

  async store (request) {
    return await storeMediaList(request.key)
  }

  async save (request) {
    return await saveMediaList(request.key)
  }

  async images () {
    return await getImages()
  }

  async icons () {
    return await getIcons()
  }

  async avatars () {
    return await getAvatars()
  }

  async static () {
    return await getStaticEndpoints()
  }
}

export const mediaController = new MediaStoreController()
