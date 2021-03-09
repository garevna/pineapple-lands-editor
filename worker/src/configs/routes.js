const {
  authController,
  commonController,
  landsController,
  liveController,
  mediaController,
  filesController
} = require('../controllers')

/* action get -    from IndexedDB to App; from remote server to IndexedDB if data is absent */
/* action put -    from App to IndexedDB and then to remote server (using action save) */
/* action store -  from remote server to IndexedDB */
/* action save -   from IndexedDB to remote server */

export const routes = {
  auth: {
    auth: authController.auth,
    token: authController.validateToken
  },
  common: {
    auth: authController.auth,
    token: authController.validateToken,
    get: commonController.get,
    put: commonController.put,
    store: commonController.store,
    save: commonController.save
  },
  lands: {
    get: landsController.get,
    put: landsController.put,
    store: landsController.store,
    save: landsController.save
  },
  live: {
    get: liveController.get,
    put: liveController.put,
    store: liveController.store,
    save: liveController.save
  },
  media: {
    get: mediaController.get,
    store: mediaController.store,
    save: mediaController.save,
    images: mediaController.images,
    icons: mediaController.icons,
    avatars: mediaController.avatars,
    static: mediaController.static
  },
  images: {
    get: filesController.getImage,
    store: filesController.storeImage,
    save: filesController.saveImage,
    delete: filesController.deleteImage
  },
  avatars: {
    get: filesController.getAvatar,
    store: filesController.storeAvatar,
    save: filesController.saveAvatar,
    delete: filesController.deleteAvatar
  },
  icons: {
    get: filesController.getIcon,
    store: filesController.storeIcon,
    save: filesController.saveIcon,
    delete: filesController.deleteIcon
  }
}
