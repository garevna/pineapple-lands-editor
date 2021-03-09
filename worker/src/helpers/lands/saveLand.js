import { getRecordByKey } from '../indexedDB/getRecordByKey'
import { post } from '../AJAX'
import { host } from '../../configs/host'

export async function saveLand (key) {
  const { status, result } = await getRecordByKey('pineapple', 'lands', key)
  if (status !== 200) return { status, result }
  const response = await post(host.landEndpoint(key), result)
  return { status: response.status, result: null }
}
