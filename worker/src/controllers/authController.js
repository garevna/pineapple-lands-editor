import { validateToken } from '../helpers/AJAX'
import { putRecordByKey } from '../helpers/indexedDB'
import { auth } from '../helpers/auth'

class AuthController {
  async auth (request) {
    const { status, result } = await auth(request.login, request.password)
    if (status === 200) {
      return await putRecordByKey('pineapple', 'common', 'token', result)
    }
    return { status, result }
  }

  async validateToken () {
    return await validateToken()
  }
}

export const authController = new AuthController()
