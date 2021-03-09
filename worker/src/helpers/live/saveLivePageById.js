import { getRecordByKey } from '../indexedDB'
import { host } from '../../configs/host'
import { post } from '../AJAX'

export async function saveLivePageById (id) {
  const { status, result } = await getRecordByKey('pineapple', 'live', id)
  if (status !== 200) return { status, result }
  const response = await post(host.live.pageEndpoint(id), result)
  return { status: response.status, result: null }
}
