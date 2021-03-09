import { getMediaList, storeFile } from './'

export const getAvatars = async () => {
  const { status, result } = await getMediaList('avatar')
  if (status !== 200) return { status, result }
  const response = {}
  for (const fileName of result) {
    const { status, result } = await storeFile('avatars', fileName)
    response[fileName] = status !== 200 ? null : result
  }
  return { status: 200, result: response }
}
