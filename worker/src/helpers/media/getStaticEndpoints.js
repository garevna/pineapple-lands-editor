import { host } from '../../configs/host'

export const getStaticEndpoints = async (request) => {
  return {
    status: 200,
    result: {
      images: `${host.getHost()}/${host.image.static}`,
      icons: `${host.getHost()}/${host.icon.static}`,
      avatars: `${host.getHost()}/${host.avatar.static}`
    }
  }
}
