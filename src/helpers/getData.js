const { hostname: host } = require('@/configs/host').default

export default async (path) => {
  const response = await fetch(`${host}/${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
  const data = response.status !== 200 ? null : await response.json()

  return {
    status: response.status,
    data
  }
}
