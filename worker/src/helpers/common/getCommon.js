import { getRecordByKey } from '../indexedDB'
import { storeCommon } from './'

export const getCommon = async (key) => {
  const { status, result } = await getRecordByKey('pineapple', 'common', key)
  if (status === 200) return { status, result }
  return await storeCommon(key)
}
