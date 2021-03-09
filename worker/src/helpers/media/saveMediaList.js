import { getRecordByKey } from '../indexedDB'
import { host } from '../../configs/host'
import { post } from '../AJAX'

export async function saveMediaList (key) {
  const { status, result } = await getRecordByKey('pineapple', 'media', key)
  if (status !== 200) return { status, result }
  const response = await post(host.live.mediaListEndpoint(key), result)
  return { status: response.status, result: null }
}
