import { getRecordByKey } from '../indexedDB'
import { storeFile } from './'

export const getFile = async (request) => {
  const { requestInitiatorId } = request
  const { status, result } = await getRecordByKey('pineapple', request.store, request.key)

  if (status !== 200) return await storeFile(request.store, request.key, requestInitiatorId)

  if (!(result instanceof Blob)) return { status: 422, result: `File ${request.key} has invalid format`, requestInitiatorId }

  // const file = new File([result], request.key, { lastModified: new Date() })
  return { status: 200, result: URL.createObjectURL(result), requestInitiatorId }
}
