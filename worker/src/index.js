import { routes } from './configs/routes'

const badRequest = (request) => {
  self.postMessage({ status: 422, result: `Invalid request\n ${request.action} ${request.store} ${request.key}` })
}

self.onmessage = (event) => {
  const { store, action, key } = event.data

  if (!routes[store] || typeof routes[store][action] !== 'function') return badRequest(event.data)

  routes[store][action](event.data)
    .then(response => self.postMessage(Object.assign({}, { action, store, key }, response)))
}
