import { lands } from './lands'

export const host = {
  development: 'https://pineapple-net-land.glitch.me',
  production: 'https://api.pineapple.net.au',
  general: 'content/general',
  testimonials: 'testimonials',
  internetPlans: 'content/plans',
  content: 'content',
  pages: 'content/live-pages',
  avatar: {
    static: 'avatars',
    upload: 'testimonials/avatar',
    get: 'testimonials/avatars',
    delete: 'testimonials/avatars',
    default: 'avatars/default.png'
  },
  image: {
    static: 'images',
    upload: 'content/picture',
    get: 'content/images',
    delete: 'content/images',
    default: 'images/default.jpg'
  },
  icon: {
    static: 'icons',
    upload: 'content/icon',
    get: 'content/icons',
    delete: 'content/icons',
    default: 'icons/default.png'
  },
  getHost () {
    return location.origin === 'https://pa.pineapple.net.au' ? this.production : this.development
  },
  tokenEndpoint () {
    return `${this.getHost()}/auth/token`
  },
  authEndpoint () {
    return `${this.getHost()}/auth`
  },
  commonEndpoint (key) {
    const path = key === 'testimonials' ? '' : 'content/'
    return `${this.getHost()}/${path}${key}`
  },
  mediaListEndpoint (store) {
    return `${this.getHost()}/${this[store].get}`
  },
  uploadEndpoint (target) {
    return `${this.getHost()}/${this[target].upload}`
  },
  deleteEndpoint (target, fileName) {
    return `${this.getHost()}/${this[target].delete}/fileName`
  },
  downloadEndpoint (target, fileName) {
    return `${this.getHost()}/${this[target].static}/fileName`
  },
  landEndpoint (key) {
    return `${this.getHost()}/content/${lands[key]}`
  },
  live: {
    homeEndpoint () {
      return `${host.getHost()}/content/live`
    },
    listEndpoint () {
      return `${host.getHost()}/content/live-pages`
    },
    pageEndpoint (id) {
      return `${host.getHost()}/content/live-${id}`
    }
  }
}
