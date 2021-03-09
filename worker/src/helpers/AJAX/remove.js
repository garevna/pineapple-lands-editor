import { getRecordByKey } from '../indexedDB'

export const remove = async (endpoint) => {
  const { status, result: token } = getRecordByKey('pineapple', 'common', 'token')
  if (status !== 200) return { status: 403, result: 'Unauthorized user. Access denied' }
  if (!navigator.onLine) return { status: 0, result: 'Offline mode: Operation failed. Try later' }

  const response = await fetch(endpoint, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: token
    }
  })

  return { status: response.status, result: null }
}
