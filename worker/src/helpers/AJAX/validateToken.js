import { host } from '../../configs/host'
import { getRecordByKey } from '../indexedDB'

export const validateToken = async () => {
  const { status, result: token } = await getRecordByKey('pineapple', 'common', 'token')
  if (status !== 200) return { status: 401, result: 'Unauthorized user. Access denied' }
  if (!navigator.onLine) return { status: 0, result: 'Offline mode: Auth failed. Try later' }

  const response = await fetch(host.tokenEndpoint(), {
    method: 'GET',
    headers: {
      Authorization: token
    },
    body: null
  })

  if (response.status !== 200) return { status: 403, result: 'Auth failure. Access denied' }
  return { status: 200, result: token }
}
