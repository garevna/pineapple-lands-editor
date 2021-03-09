import { getRecordByKey } from '../indexedDB'
import { storeLand } from './'

export const getLand = async (key) => {
  const { status, result } = await getRecordByKey('pineapple', 'lands', key)
  if (status !== 200) return storeLand(key)
  return { status, result }
}
