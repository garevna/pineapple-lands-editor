import { putRecordByKey } from '../indexedDB'
import { saveLivePageById } from './'

export const putLivePageById = async (key, data) => {
  const { status, result } = await putRecordByKey('pineapple', 'live', key, data)
  if (status !== 200) return { status, result }
  return await saveLivePageById(key)
}
