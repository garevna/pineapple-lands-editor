export const openDB = (dbName, storeName) => new Promise((resolve) => Object.assign(indexedDB.open(dbName), {
  onupgradeneeded: (event) => {
    event.target.result.createObjectStore('common')
    event.target.result.createObjectStore('live')
    event.target.result.createObjectStore('lands')
    event.target.result.createObjectStore('media')
    event.target.result.createObjectStore('images')
    event.target.result.createObjectStore('icons')
    event.target.result.createObjectStore('avatars')
    return event.target.result
  },
  onsuccess: event => resolve({
    status: 200,
    result: event.target.result
  }),
  onerror: event => resolve({ status: 700, result: null })
}))
