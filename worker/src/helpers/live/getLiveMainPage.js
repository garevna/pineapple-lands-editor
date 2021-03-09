import { getRecordByKey } from '../indexedDB'
import { storeLiveMainPage } from './'

export const getLiveMainPage = async () => {
  const response = await getRecordByKey('pineapple', 'live', 'home')
  return response.status === 200 ? response : await storeLiveMainPage()
}
