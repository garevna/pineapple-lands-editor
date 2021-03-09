import { getRecordByKey } from '../indexedDB'
import { post } from '../AJAX'
import { host } from '../../configs/host'

export async function saveCommon (key) {
  const { status, result } = await getRecordByKey('pineapple', 'common', key)
  if (status !== 200) return { status, result }
  const response = await post(host.commonEndpoint(key), result)
  return { status: response.status, result: response.result }
}
