const { hostname: host } = require('@/configs/host').default

export default async (path, defaultFilePath, formData) => {
  const token = localStorage.getItem('token')
  if (!token) return { status: 403, message: 'Unauthorized user. Access denied' }
  const response = await fetch(`${host}/${path}`, {
    method: 'POST',
    headers: {
      Authorization: token
    },
    body: formData
  })

  if (response.status === 401 || response.status === 403) {
    return {
      status: 403,
      message: 'Access denied',
      url: `${host}/${defaultFilePath}`
    }
  }
  if (response.status === 200) {
    const url = await response.text()
    return {
      status: 200,
      message: 'Success',
      url
    }
  }
  return {
    status: response.status,
    message: 'Success',
    url: `${host}/${defaultFilePath}`
  }
}
