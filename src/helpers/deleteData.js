const { hostname: host } = require('@/configs/host').default

export default async (path, content) => {
  const token = localStorage.getItem('token')
  if (!token) return { status: 403, message: 'Unauthorized user. Access denied' }
  const response = await fetch(`${host}/${path}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: token
    }
  })

  return response
}
