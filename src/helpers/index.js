const validateToken = require('./validateToken').default
const auth = require('./auth').default
const getData = require('./getData').default
const postData = require('./postData').default
const putData = require('./putData').default
const patchData = require('./patchData').default
const deleteData = require('./deleteData').default
const upload = require('./upload').default
const removeImage = require('./removeImage').default
const sendEmail = require('./sendEmail').default

export default {
  validateToken,
  auth,
  getData,
  postData,
  putData,
  patchData,
  deleteData,
  upload,
  removeImage,
  sendEmail
}
