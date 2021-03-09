import { putRecordByKey } from '../indexedDB'
import { saveLiveMainPage } from './'

export const putLiveMainPage = async (data) => {
  const { status, result } = await putRecordByKey('pineapple', 'live', 'home', data)
  if (status !== 200) return { status, result }
  return await saveLiveMainPage()
}
