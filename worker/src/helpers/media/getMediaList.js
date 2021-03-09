import { getRecordByKey } from '../indexedDB'
import { storeMediaList } from './'

const availableTypes = ['image', 'icon', 'avatar']

export const getMediaList = async (mediaType) => {
  if (availableTypes.indexOf(mediaType) === -1) return { status: 422, result: `Invalid request ${mediaType}` }

  const { status, result } = await getRecordByKey('pineapple', 'media', mediaType)

  if (status !== 200) return await storeMediaList(mediaType)

  return { status, result }
}
