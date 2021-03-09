import { putRecordByKey } from '../indexedDB'
import { host } from '../../configs/host'

export async function storeLiveMainPage () {
  if (!navigator.onLine) return { status: 0, result: 'Offline mode' }
  const response = await fetch(host.live.homeEndpoint())
  if (response.status !== 200) return { status: response.status, result: await response.text() }
  return await putRecordByKey('pineapple', 'live', 'home', await response.json())
}
