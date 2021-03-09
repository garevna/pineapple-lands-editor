import { getRecordByKey } from '../indexedDB'
import { host } from '../../configs/host'
import { post } from '../AJAX'

export async function saveLivePagesList () {
  const { status, result } = await getRecordByKey('pineapple', 'live', 'list')
  if (status !== 200) return { status, result }
  const response = await post(host.live.listEndpoint(), result)
  return { status: response.status, result }
}
