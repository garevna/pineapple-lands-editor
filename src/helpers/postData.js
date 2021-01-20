const { hostname: host } = require('@/configs/host').default

export default async (path, payload) => {
  const token = localStorage.getItem('token')
  if (!token) return { status: 403, message: 'Unauthorized user. Access denied' }
  const response = await fetch(`${host}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: token
    },
    body: JSON.stringify(payload)
  })

  return response
}
