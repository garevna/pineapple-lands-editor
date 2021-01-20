const lands = [
  {
    route: 'fast-fibre-internet',
    url: 'fast-fibre-internet.pineapple.net.au'
  },
  {
    route: 'connect-melbourne-cbd',
    url: 'connect-melbournecbd.pineapple.net.au'
  },
  {
    route: 'conservatory',
    url: 'connect-melbournecbd.pineapple.net.au/conservatory'
  },
  {
    route: 'qv1',
    url: 'connect-melbournecbd.pineapple.net.au/qv1'
  },
  {
    route: 'aurora',
    url: 'connect-melbournecbd.pineapple.net.au/aurora'
  },
  {
    route: '3months',
    url: '3months.pineapple.net.au'
  },
  {
    route: 'refer-a-friend',
    url: 'refer-a-friend.pineapple.net.au'
  },
  {
    route: 'nbn',
    url: 'nbn.pineapple.net.au'
  },
  {
    route: 'dgtek',
    url: 'dgtek.net/free-upgrade'
  },
  {
    route: 'live',
    url: 'live.pineapple.net.au'
  }
]

lands.getURL = function (routeName) {
  return `https://${this.find(item => item.route === routeName)?.url}`
}

export default lands
