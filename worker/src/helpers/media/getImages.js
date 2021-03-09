import { getMediaList, storeFile } from './'

export const getImages = async () => {
  const { status, result } = await getMediaList('image')
  if (status !== 200) return { status, result }
  const response = {}
  for (const fileName of result) {
    const { status, result } = await storeFile('images', fileName)
    response[fileName] = status !== 200 ? null : result
  }
  return { status: 200, result: response }
}
