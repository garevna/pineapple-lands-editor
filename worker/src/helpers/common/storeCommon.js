import { putRecordByKey } from '../indexedDB'
import { host } from '../../configs/host'

export const storeCommon = async (key) => {
  if (!navigator.onLine) return { status: 0, result: 'Offline mode' }
  const response = await fetch(host.commonEndpoint(key))
  if (response.status !== 200) return { status: response.status, result: await response.text() }
  const json = await response.json()
  const { status, result } = await putRecordByKey('pineapple', 'common', key, json)
  return { status, result }
}
