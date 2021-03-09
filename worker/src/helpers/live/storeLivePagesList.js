import { putRecordByKey } from '../indexedDB'
import { host } from '../../configs/host'

export async function storeLivePagesList () {
  if (!navigator.onLine) return { status: 0, result: 'Offline mode' }
  const response = await fetch(host.live.listEndpoint())
  if (response.status !== 200) return { status: response.status, result: await response.text() }
  const pages = await response.json()
  const { status, result } = await putRecordByKey('pineapple', 'live', 'list', pages)
  return { status, result }
}
