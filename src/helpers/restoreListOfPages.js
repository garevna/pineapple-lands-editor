const { getData } = require('./getData').default

export default async (path, content) => {
  const files = getData('content/content')
  if (!files) {
    return {
      status: 500,
      message: 'Error reading folder content'
    }
  }
  const livePages = files.filter(filename => filename.indexOf('land-live-') !== -1 && filename !== 'land-live-pages.json')
  console.log(livePages)
  const pages = []
  const names = livePages.map(page => page.slice(5, -5))
  for (const name of names) {
    const response = await getData(`content/${name}`)
    pages.push({
      id: name.slice(5),
      address: response.address ? response.address : {},
      hidden: Boolean(response.address),
      404: Boolean(response.address)
    })
  }
  return pages
}
