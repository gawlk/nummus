import jsSHA from '/cdn/jssha'

const fetchCoinbasePro = async (key, secret, passphrase) => {
  // TO DO
  const url = 'https://api.pro.coinbase.com/accounts'
}

const fetchBinance = async (key, secret) => {
  if (key && secret) {
    const url = 'https://api.binance.com/api/v3/account'

    const query = `timestamp=${Date.now()}`

    const shaObj = new jsSHA('SHA-256', 'TEXT', {
      hmacKey: { value: secret, format: 'TEXT' },
    })

    shaObj.update(query)

    const signature = shaObj.getHash('HEX')

    const result = await fetch(`${url}?${query}&signature=${signature}`, {
      headers: {
        // 'Access-Control-Allow-Headers': '*',
        'X-MBX-APIKEY': key,
      },
    })

    console.log(await result.json())
    // var url =
    //     burl + endPoint + '?' + dataQueryString + '&signature=' + signature
  }
}

const config = {
  binance: [
    {
      name: 'Crypto ML BTC + Shit HODL',
      key: '',
      secret: '',
    },
    {
      name: 'Blue Chip DeFi',
      key: '',
      secret: '',
    },
  ],
  custom: [
    {
      name: 'Bourse direct',
      orders: [
        {
          type: 'STOCK',
          name: 'LQQ',
          boughtAt: 544.04,
          quantity: 9,
        },
        {
          type: 'STOCK',
          name: 'CW8',
          boughtAt: 317.24,
          quantity: 7,
        },
      ],
    },
    {
      name: 'Degiro',
      orders: [
        {
          type: 'STOCK',
          name: 'CDR',
          quantity: 3,
          boughtAt: 60,
        },
      ],
    },
    {
      name: 'Trade Republic',
      orders: [],
    },
  ],
}

config.binance.forEach(async (config) => {
  fetchBinance(config.key, config.secret)
})
