const lands = [
  {
    title: 'fast-fibre-internet.pineapple.net.au',
    route: 'fast-fibre-internet',
    short: '1'
  },
  {
    title: 'connect-melbournecbd.pineapple.net.au',
    route: 'connect-melbourne-cbd',
    short: '2',
    childs: [
      {
        title: 'conservatory',
        route: 'conservatory',
        short: '2-1',
        url: 'connect-melbournecbd.pineapple.net.au/conservatory'
      },
      {
        title: 'qv1',
        route: 'qv1',
        short: '2-2',
        url: 'connect-melbournecbd.pineapple.net.au/qv1'
      },
      {
        title: 'aurora',
        route: 'aurora',
        short: '2-3',
        url: 'connect-melbournecbd.pineapple.net.au/aurora'
      }
    ]
  },
  {
    title: '3months.pineapple.net.au',
    route: '3months',
    short: '3'
  },
  {
    title: 'refer-a-friend.pineapple.net.au',
    route: 'refer-a-friend',
    short: '4'
  },
  {
    title: 'nbn.pineapple.net.au',
    route: 'nbn',
    short: '5'
  },
  {
    title: 'dgtek.net/free-upgrade',
    route: 'dgtek',
    short: 'dgtek-1'
  },
  {
    title: 'live.pineapple.net.au',
    route: 'live',
    short: 'live'
  }
]

export default lands
