import { authorization } from './AJAX'
import { host } from '../configs/host'

export const auth = async (login, password) => {
  const response = await authorization(host.authEndpoint(), { login, password })
  return response
}
