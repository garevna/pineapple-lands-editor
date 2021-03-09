const crypto = require('cryptico')

const secret = process.env.VUE_APP_SECRET
const keyRSA = crypto.generateRSAKey(secret, 1024)
const publicKey = crypto.publicKeyString(keyRSA)

const encryptError = {
  status: 423,
  result: 'Encrypt error'
}

export default function (login, password, worker) {
  const userlogin = crypto.encrypt(login, publicKey)
  const userPassword = crypto.encrypt(password, publicKey)
  if (!userlogin.status || !userPassword.status) return encryptError
  return {
    status: 200,
    login: userlogin.cipher,
    password: userPassword.cipher
  }
}
