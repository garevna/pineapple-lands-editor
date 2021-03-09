import { deleteRecordByKey } from '../indexedDB'
import { host } from '../../configs/host'
import { remove } from '../AJAX'
import { storeMediaList } from './'

/* store must be 'image', 'icon', 'avatar' or 'trash' */

export const deleteFile = async (request) => {
  const { status, result } = await deleteRecordByKey('pineapple', request.store, request.key)
  if (status !== 200) return { status, result }
  const response = await remove(host.deleteEndpoint(request.store, request.key))
  if (response.status === 200) storeMediaList(request.store.slice(0, -1))
  return { status: response.status, result: null }
}
