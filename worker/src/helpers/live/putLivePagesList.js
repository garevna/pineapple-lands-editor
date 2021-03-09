import { putRecordByKey } from '../indexedDB'
import { saveLivePagesList } from './'

export const putLivePagesList = async (data) => {
  const { status, result } = await putRecordByKey('pineapple', 'live', 'list', data)
  if (status !== 200) return { status, result }
  return await saveLivePagesList()
}
