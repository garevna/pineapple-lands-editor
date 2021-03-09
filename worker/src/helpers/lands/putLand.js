import { putRecordByKey } from '../indexedDB'
import { saveLand } from './'

export const putLand = async (key, data) => {
  const { status, result } = await putRecordByKey('pineapple', 'lands', key, data)
  if (status !== 200) return { status, action: 'put', store: 'lands', key, result }
  return await saveLand(key)
}
