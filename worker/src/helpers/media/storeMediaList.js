import { putRecordByKey } from '../indexedDB'
import { host } from '../../configs/host'

const availableKeys = ['image', 'icon', 'avatar']

export async function storeMediaList (key) {
  if (!navigator.onLine) return { status: 0, result: `Offline mode. Remote resource ${key} is not available` }
  if (availableKeys.indexOf(key) === -1) return { status: 422, result: `Invalid request ${key}` }
  const response = await fetch(host.mediaListEndpoint(key))
  if (response.status !== 200) return { status: response.status, result: await response.text() }
  const mediaList = (await response.json()).filter(item => item !== '.gitkeep')
  const { status, result } = await putRecordByKey('pineapple', 'media', key, mediaList)
  return { status, result }
}
