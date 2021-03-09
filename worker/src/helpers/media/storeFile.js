import { putRecordByKey } from '../indexedDB'
import { host } from '../../configs/host'

export async function storeFile (store, fileName) {
  if (!navigator.onLine) return { status: 0, result: 'Offline mode. Operation is impossible' }
  if (!store) return { status: 422, result: 'Store name missed' }
  if (!fileName) return { status: 422, result: 'File name missed' }
  // const response = await fetch(host.downloadEndpoint(targets[store], fileName))
  const link = `${host.getHost()}/${store}/${fileName}`
  const response = await fetch(link)
  if (response.status !== 200) return { status: response.status, result: `*** Reading ${link} failed` }
  const blob = await response.blob()
  const { status } = await putRecordByKey('pineapple', store, fileName, blob)
  return { status, result: status === 200 ? URL.createObjectURL(blob) : `Storing ${fileName} failed` }
}
