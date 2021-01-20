const crypto = require('cryptico')

const postData = require('./postData').default

const secret = process.env.VUE_APP_SECRET
const keyRSA = crypto.generateRSAKey(secret, 1024)
const publicKey = crypto.publicKeyString(keyRSA)

const encryptError = {
  status: 423,
  message: 'Encrypt error'
}

export default async function (login, password) {
  const userlogin = crypto.encrypt(login, publicKey)
  const userPassword = crypto.encrypt(password, publicKey)
  if (!userlogin.status || !userPassword.status) return encryptError
  const response = await postData('auth', {
    login: userlogin.cipher,
    password: userPassword.cipher
  })
  if (response.status === 200) {
    localStorage.setItem('token', await response.text())
  }
  return response
}
