import { getRecordByKey } from '../indexedDB'
import { storeLivePagesList } from './'

export const getLivePagesList = async () => {
  const response = await getRecordByKey('pineapple', 'live', 'list')
  return response.status === 200 ? response : await storeLivePagesList()
}
