import { putRecordByKey } from '../indexedDB'
import { host } from '../../configs/host'

export async function storeLand (key) {
  if (!navigator.onLine) return { status: 0, result: 'Offline mode' }
  const response = await fetch(host.landEndpoint(key))
  if (response.status !== 200) return { status: response.status, result: await response.text() }
  const page = await response.json()
  const { status, result } = await putRecordByKey('pineapple', 'lands', key, page)
  return { status, result }
}
