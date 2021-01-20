const { hostname: host } = require('@/configs/host').default

export default async function () {
  const token = localStorage.getItem('token')
  if (!token) {
    return {
      status: 401,
      message: 'Unauthorized user. Access denied'
    }
  }
  const response = await fetch(`${host}/auth/token`, {
    method: 'GET',
    headers: {
      Authorization: token
    },
    body: null
  })

  if (response.status !== 200) {
    return {
      status: 403,
      message: 'Auth failure. Access denied'
    }
  }
  return response
}
