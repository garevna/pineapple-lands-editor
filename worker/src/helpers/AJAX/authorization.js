import { host } from '../../configs/host'

export const authorization = async (endpoint, payload) => {
  if (!navigator.onLine) return { status: 0, result: 'Offline mode: authorization is impossible' }

  const response = await fetch(host.authEndpoint(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(payload)
  })
  return { status: response.status, result: await response.text() }
}
