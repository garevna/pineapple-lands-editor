import { upload } from '../AJAX'
import { storeMediaList, storeFile } from './'

/* target must be 'image', 'icon', 'avatar' or 'trash' */

const targets = {
  images: 'image',
  icons: 'icon',
  avatars: 'avatar'
}

export async function saveFile (request) {
  if (!(request.blob instanceof Blob)) return { status: 422, result: 'Invalid file data' }

  const file = new File([request.blob], request.key, { lastModified: new Date() })

  const formData = new FormData()
  formData.set(targets[request.store], file)
  const response = await upload(targets[request.store], formData)
  if (response.status === 200) {
    const { status } = await storeMediaList(targets[request.store])
    if (status === 200) await storeFile(request.store, request.key)
  }
  return Object.assign(response, { requestInitiatorId: request.requestInitiatorId })
}
