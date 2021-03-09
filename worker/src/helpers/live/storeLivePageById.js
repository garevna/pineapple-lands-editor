import { putRecordByKey } from '../indexedDB'
import { host } from '../../configs/host'

export async function storeLivePageById (id) {
  if (!navigator.onLine) return { status: 0, result: 'Offline mode' }
  const response = await fetch(host.live.pageEndpoint(id))
  if (response.status !== 200) return { status: response.status, result: await response.text() }
  const page = await response.json()
  const { status, result } = await putRecordByKey('pineapple', 'live', id, page)
  return { status, result }
}
