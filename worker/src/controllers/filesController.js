import {
  getFile,
  storeFile,
  saveFile,
  deleteFile
} from '../helpers/media'

class FileStoreController {
  get (request) {
    return getFile(request)
  }

  store (request) {
    return storeFile(request)
  }

  save (request) {
    return saveFile(request)
  }

  delete (request) {
    return deleteFile(request)
  }

  getImage (request) {
    return getFile(Object.assign(request, { store: 'images' }))
  }

  getIcon (request) {
    return getFile(Object.assign(request, { store: 'icons' }))
  }

  getAvatar (request) {
    return getFile(Object.assign(request, { store: 'avatars' }))
  }

  storeImage (request) {
    return storeFile(Object.assign(request, { store: 'images' }))
  }

  storeIcon (request) {
    return storeFile(Object.assign(request, { store: 'icons' }))
  }

  storeAvatar (request) {
    return storeFile(Object.assign(request, { store: 'avatars' }))
  }

  saveImage (request) {
    return saveFile(Object.assign(request, { store: 'images' }))
  }

  saveIcon (request) {
    return saveFile(Object.assign(request, { store: 'icons' }))
  }

  saveAvatar (request) {
    return saveFile(Object.assign(request, { store: 'avatars' }))
  }

  deleteImage (request) {
    return deleteFile(Object.assign(request, { store: 'images' }))
  }

  deleteIcon (request) {
    return deleteFile(Object.assign(request, { store: 'icons' }))
  }

  deleteAvatar (request) {
    return deleteFile(Object.assign(request, { store: 'avatars' }))
  }
}

export const filesController = new FileStoreController()
