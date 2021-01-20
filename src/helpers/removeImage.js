const { hostname: host } = require('@/configs/host').default

export const removePicture = async (pathToFile) => {
  const token = localStorage.getItem('token')
  if (!token) return { status: 403, message: 'Unauthorized user. Access denied' }
  const response = await fetch(`${host}/${pathToFile}`, {
    method: 'DELETE',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  })
  return response
}
