const { email: endpoint } = require('@/configs/host').default

export default async (name, email, phone, subject, message) => {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      phone,
      subject,
      message
    })
  })
  console.log(response)
  return response
}
