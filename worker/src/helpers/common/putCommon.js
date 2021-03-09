import { putRecordByKey } from '../indexedDB'
import { saveCommon } from './'

export const putCommon = async (key, data) => {
  const { status, result } = await putRecordByKey('pineapple', 'common', key, data)
  if (status !== 200) return { status, result }
  return await saveCommon(key)
}
