import { getRecordByKey } from '../indexedDB'

export const post = async (endpoint, payload) => {
  const { status, result: token } = await getRecordByKey('pineapple', 'common', 'token')
  if (status !== 200) return { status: 401, result: 'Unauthorized user. Access denied' }
  if (!navigator.onLine) return { status: 0, result: 'Offline mode: Data has not been saved. Try later' }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: token
    },
    body: JSON.stringify(payload)
  })
  return { status: response.status, result: null }
}
