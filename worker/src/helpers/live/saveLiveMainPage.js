import { getRecordByKey } from '../indexedDB'
import { host } from '../../configs/host'
import { post } from '../AJAX'

export async function saveLiveMainPage () {
  const { status, result } = await getRecordByKey('pineapple', 'live', 'home')
  if (status !== 200) return { status, result }
  const response = await post(host.live.homeEndpoint(), result)
  return { status: response.status, result: null }
}
