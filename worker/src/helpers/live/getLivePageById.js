import { getRecordByKey } from '../indexedDB'
import { storeLivePageById } from './'

export const getLivePageById = async (id) => {
  const response = await getRecordByKey('pineapple', 'live', id)
  return response.status === 200 ? response : await storeLivePageById(id)
}
