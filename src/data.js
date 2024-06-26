export const cryptoAssets = [
  {
    id: 'bitcoin',
    amount: 0.02,
    price: 26421,
    date: new Date()
  },
  {
    id: 'ethereum',
    amount: 5,
    price: 2400,
    date: new Date()
  },
  {
    id: 'dogecoin',
    amount: 10000,
    price: 0.097,
    date: new Date()
  }
]


export const cryptoData = {
    result: [
      {
        id: "bitcoin",
        'icon': "https://static.coinstats.app/coins/valentine/bitcoin.png",
        'name': "Bitcoin",
        'symbol': "BTC",
        rank: 1,
        price: 51450.855624479766,
        priceBtc: 1,
        volume: 62959932238.527405,
        marketCap: 1009871271545.4695,
        availableSupply: 19627881,
        totalSupply: 21000000,
        priceChange1h: -0.28,
        priceChange1d: 4.57,
        priceChange1w: 18.27,
        redditUrl: "https://www.reddit.com/r/Bitcoin/",
        websiteUrl: "https://bitcoin.org",
        twitterUrl: "https://twitter.com/bitcoin",
        explorers: [
        "https://mempool.space/",
        "https://blockchair.com/bitcoin/",
        "https://btc.com/",
        "https://btc.tokenview.io/",
        "https://www.oklink.com/btc",
        "https://3xpl.com/bitcoin",
        "https://blockchain.coinmarketcap.com/chain/bitcoin",
        "https://blockexplorer.one/btc/mainnet"
        ]
      },
      {
        id: "ethereum",
        icon: "https://static.coinstats.app/coins/valentine/ethereum.png",
        name: "Ethereum",
        symbol: "ETH",
        rank: 2,
        price: 2745.2280521963494,
        priceBtc: 0.053308171152750924,
        volume: 26774171784.26262,
        marketCap: 329886659388.0627,
        availableSupply: 120167306,
        totalSupply: 120167306,
        priceChange1h: 0.11,
        priceChange1d: 4.33,
        priceChange1w: 13.88,
        redditUrl: "https://www.reddit.com/r/ethereum",
        websiteUrl: "https://www.ethereum.org/",
        twitterUrl: "https://twitter.com/ethereum",
        contractAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        decimals: 18,
        explorers: [
        "https://etherscan.io/",
        "https://ethplorer.io/",
        "https://blockchair.com/ethereum",
        "https://eth.tokenview.io/",
        "https://www.oklink.com/eth",
        "https://3xpl.com/ethereum",
        "https://blockchain.coinmarketcap.com/chain/ethereum"
        ]
      },
      {
        id: "tether",
        icon: "https://static.coinstats.app/coins/valentine/tether2.png",
        name: "Tether",
        symbol: "USDT",
        rank: 3,
        price: 1.0007,
        priceBtc: 0.000019432078449685888,
        volume: 50198762981.3316,
        marketCap: 97029203914.6881,
        availableSupply: 96961330983,
        totalSupply: 96961330983,
        priceChange1h: 0.17,
        priceChange1d: 0.15,
        priceChange1w: 0.04,
        "redditUrl": "https://www.reddit.com",
        "websiteUrl": "https://tether.to/",
        "twitterUrl": "https://twitter.com/Tether_to",
        "contractAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "decimals": 18,
        "explorers": [
          "https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7",
          "https://ethplorer.io/address/0xdac17f958d2ee523a2206206994597c13d831ec7",
          "https://explorer.kava.io/token/0x919c1c267bc06a7039e03fcc2ef738525769109c",
          "https://avascan.info/blockchain/c/address/0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7/token",
          "https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
          "https://nearblocks.io/token/usdt.tether-token.near",
          "https://www.omniexplorer.info/asset/31"
        ]
      },
      {
        id: "binance-coin",
        icon: "https://static.coinstats.app/coins/valentine/bnb.png",
        name: "BNB",
        symbol: "BNB",
        rank: 4,
        price: 332.21836759191206,
        priceBtc: 0.0064511775571825915,
        volume: 1092159039.3004317,
        marketCap: 51113838996.97636,
        availableSupply: 153856150,
        totalSupply: 153856150,
        priceChange1h: -0.5,
        priceChange1d: 2.92,
        priceChange1w: 8.53,
        "redditUrl": "https://www.reddit.com/r/binance",
        "websiteUrl": "https://www.binance.com",
        "twitterUrl": "https://twitter.com/binance",
        "contractAddress": "BNB",
        "decimals": 18,
        "explorers": [
          "https://bscscan.com",
          "https://explorer.binance.org/",
          "https://binance.mintscan.io/",
          "https://etherscan.io/token/0xb8c77482e45f1f44de1745f52c74426c631bdd52",
          "https://ethplorer.io/address/0xb8c77482e45f1f44de1745f52c74426c631bdd52",
          "https://www.oklink.com/bsc",
          "https://3xpl.com/bnb",
          "https://explorer.energi.network/token/0xc3c19ee91cf3c1f7fbf3716a09d21dc35de0bd6d"
        ]
      },
      {
        id: "solana",
        icon: "https://static.coinstats.app/coins/valentine/solana.png",
        name: "Solana",
        symbol: "SOL",
        rank: 5,
        price: 115.93953836429972,
        priceBtc: 0.0022513702457434186,
        volume: 3864123621.910413,
        marketCap: 50715234821.6618,
        availableSupply: 437428297,
        totalSupply: 569541921,
        priceChange1h: -0.16,
        priceChange1d: 3.8,
        priceChange1w: 18.97,
        "redditUrl": "https://www.reddit.com/r/solana",
        "websiteUrl": "https://solana.com/",
        "twitterUrl": "https://twitter.com/solana",
        "contractAddress": "0x7dff46370e9ea5f0bad3c4e29711ad50062ea7a4",
        "decimals": 18,
        "explorers": [
          "https://solscan.io/",
          "https://xray.helius.xyz/",
          "https://solana.fm/",
          "https://solanabeach.io/",
          "https://www.oklink.com/sol",
          "https://explorer.solana.com/"
        ]
      },
      {
        id: "ripple",
        icon: "https://static.coinstats.app/coins/XRPdnqGJ.png",
        name: "XRP",
        symbol: "XRP",
        rank: 6,
        price: 0.5375459996088944,
        priceBtc: 0.000010438329204271866,
        volume: 759718899.788143,
        marketCap: 29300003209.324726,
        availableSupply: 54506969135,
        totalSupply: 99987912526,
        priceChange1h: 0.63,
        priceChange1d: 2.31,
        priceChange1w: 5.96,
        "redditUrl": "https://www.reddit.com/r/ripple",
        "websiteUrl": "https://ripple.com/currency/",
        "twitterUrl": "https://twitter.com/Ripple",
        "contractAddress": "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
        "decimals": 18,
        "explorers": [
          "https://blockchair.com/ripple",
          "https://xrpcharts.ripple.com",
          "https://xrpscan.com/",
          "https://bithomp.com/explorer/"
        ]
      },
      {
        id: "usd-coin",
        icon: "https://static.coinstats.app/coins/1650455825065.png",
        name: "USDC",
        symbol: "USDC",
        rank: 7,
        price: 1.001,
        priceBtc: 0.000019433564162110598,
        volume: 7150884461,
        marketCap: 27942348315,
        availableSupply: 27958227662,
        totalSupply: 27958370974,
        priceChange1h: 0.12,
        priceChange1d: -0.02,
        priceChange1w: -0.05,
        "redditUrl": "https://www.reddit.com",
        "websiteUrl": "https://www.circle.com/en/usdc",
        "twitterUrl": "https://twitter.com/circle",
        "contractAddress": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "decimals": 18,
        "explorers": [
          "https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          "https://nearblocks.io/token/17208628f84f5d6ad33f0da3bbbeb27ffcb398eac501a31bd6ad2011e36133a1",
          "https://ethplorer.io/address/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          "https://basescan.org/token/0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
          "https://arbiscan.io/token/0xaf88d065e77c8cc2239327c5edb3a432268e5831",
          "https://bscscan.com/token/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
          "https://www.teloscan.io/token/0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b"
        ]
      },
      {
        id: "staked-ether",
        icon: "https://static.coinstats.app/coins/staked-etheruqt.png",
        name: "Lido Staked Ether",
        symbol: "STETH",
        rank: 8,
        price: 2742.23,
        priceBtc: 0.053238064587676874,
        volume: 35170895,
        marketCap: 26569031168,
        availableSupply: 9700955,
        totalSupply: 9709577,
        priceChange1h: 0.05,
        priceChange1d: 4.25,
        priceChange1w: 13.74,
        "redditUrl": "https://www.reddit.com/r/lidofinance/",
        "websiteUrl": "https://www.lido.fi",
        "twitterUrl": "https://twitter.com/lidofinance",
        "contractAddress": "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
        "decimals": 18,
        "explorers": [
          "https://etherscan.io/token/0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
          "https://ethplorer.io/address/0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
          "https://ethereum.dex.guru/token/0xae7ab96520de3a18e5e111b5eaab095312d7fe84"
        ]
      },
      {
        id: "cardano",
        icon: "https://static.coinstats.app/coins/CardanojXddT.png",
        name: "Cardano",
        symbol: "ADA",
        rank: 9,
        price: 0.57196516663509,
        priceBtc: 0.00001110669730043043,
        volume: 443895395.6057783,
        marketCap: 20092159614.456272,
        availableSupply: 35128292397,
        totalSupply: 45000000000,
        priceChange1h: 0.7,
        priceChange1d: 5.16,
        priceChange1w: 16.92,
        "redditUrl": "https://www.reddit.com/r/cardano",
        "websiteUrl": "https://www.cardano.org/en/home/",
        "twitterUrl": "https://twitter.com/Cardano_CF",
        "contractAddress": "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
        "decimals": 18,
        "explorers": [
          "https://cardanoscan.io/",
          "https://cardanoexplorer.com/",
          "https://blockchair.com/cardano",
          "https://adaex.org/",
          "https://adastat.net/",
          "https://ada.tokenview.io/",
          "https://3xpl.com/cardano"
        ]
      },
      {
        id: "avalanche-2",
        icon: "https://static.coinstats.app/coins/1675667082696.png",
        name: "Avalanche",
        symbol: "AVAX",
        rank: 10,
        price: 41.53,
        priceBtc: 0.0008064401394056746,
        volume: 781969991,
        marketCap: 15212025068,
        availableSupply: 367489075,
        totalSupply: 435521701,
        priceChange1h: 0.43,
        priceChange1d: 4.11,
        priceChange1w: 18.08,
        "redditUrl": "https://www.reddit.com/r/Avax",
        "websiteUrl": "https://www.avax.network",
        "twitterUrl": "https://twitter.com/avax",
        "contractAddress": "0xd26649b3eb22eb275326a8cb052d2f4736c863cf",
        "decimals": 18,
        "explorers": [
          "https://snowtrace.io/",
          "https://explorer.avax.network/",
          "https://avascan.info/",
          "https://www.oklink.com/avax"
        ]
      },
      {
        id: "dogecoin",
        icon: "https://static.coinstats.app/coins/DogecoinIZai5.png",
        name: "Dogecoin",
        symbol: "DOGE",
        rank: 11,
        price: 0.08548072443032938,
        priceBtc: 0.0000016599062087200376,
        volume: 558710910.0190849,
        marketCap: 12229901315.826763,
        availableSupply: 143072036384,
        totalSupply: 143072166384,
        priceChange1h: 0.73,
        priceChange1d: 5.37,
        priceChange1w: 7.54,
        "redditUrl": "https://www.reddit.com/r/dogecoin/",
        "websiteUrl": "http://dogecoin.com/",
        "twitterUrl": "https://twitter.com/dogecoin",
        "contractAddress": "0xba2ae424d960c26247dd6c32edc70b295c744c43",
        "decimals": 18,
        "explorers": [
          "https://blockchair.com/dogecoin",
          "https://doge.tokenview.io/",
          "https://3xpl.com/dogecoin"
        ]
      },
      {
        id: "chainlink",
        icon: "https://static.coinstats.app/coins/ChainLink0JkIR.png",
        name: "Chainlink",
        symbol: "LINK",
        rank: 12,
        price: 20.132107142105877,
        priceBtc: 0.00039093503082130804,
        volume: 492354450.1803627,
        marketCap: 11819559519.299253,
        availableSupply: 587099971,
        totalSupply: 1000000000,
        priceChange1h: 0.07,
        priceChange1d: 1.52,
        priceChange1w: 9.04,
        "redditUrl": "https://www.reddit.com/r/Chainlink/",
        "websiteUrl": "https://chain.link/",
        "twitterUrl": "https://twitter.com/chainlink",
        "contractAddress": "0x514910771af9ca656af840dff83e8264ecf986ca",
        "decimals": 18,
        "explorers": [
          "https://etherscan.io/token/0x514910771af9ca656af840dff83e8264ecf986ca",
          "https://ethplorer.io/address/0x514910771af9ca656af840dff83e8264ecf986ca",
          "https://arbiscan.io/token/0xf97f4df75117a78c1a5a0dbb814af92458539fb4",
          "https://explorer.chain.link",
          "https://blockscout.com/poa/xdai/tokens/0xE2e73A1c69ecF83F464EFCE6A5be353a37cA09b2/token-transfers",
          "https://bscscan.com/token/0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
          "https://polygonscan.com/token/0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39",
          "https://snowtrace.io/token/0x5947bb275c521040051d82396192181b413227a3",
          "https://nearblocks.io/token/514910771af9ca656af840dff83e8264ecf986ca.factory.bridge.near",
          "https://scan.meter.io/address/0xb3654dc3d10ea7645f8319668e8f54d2574fbdc8"
        ]
      },
      {
        id: "tron",
        icon: "https://static.coinstats.app/coins/TRONxJljY.png",
        name: "TRON",
        symbol: "TRX",
        rank: 13,
        price: 0.12899666332720894,
        priceBtc: 0.000002504919837635698,
        volume: 140652354.12960428,
        marketCap: 11360447319.696999,
        availableSupply: 88067761031,
        totalSupply: 88067871278,
        priceChange1h: 0.09,
        priceChange1d: 2.75,
        priceChange1w: 2.81,
        "redditUrl": "https://www.reddit.com/r/Tronix",
        "websiteUrl": "https://tron.network",
        "twitterUrl": "https://twitter.com/trondao",
        "contractAddress": "0x85eac5ac2f758618dfa09bdbe0cf174e7d574d5b",
        "decimals": 18,
        "explorers": [
          "https://tronscan.org/",
          "https://trx.tokenview.io",
          "https://www.oklink.com/trx",
          "https://www.trxplorer.io/"
        ]
      },
      {
        id: "polkadot",
        icon: "https://static.coinstats.app/coins/1641284295533.png",
        name: "Polkadot",
        symbol: "DOT",
        rank: 14,
        price: 7.609091392257637,
        priceBtc: 0.00014775703094351957,
        volume: 258095100.72185257,
        marketCap: 10121894556.34442,
        availableSupply: 1330236954,
        totalSupply: 1411182480,
        priceChange1h: 1.07,
        priceChange1d: 4.8,
        priceChange1w: 10.55,
        "redditUrl": "https://www.reddit.com/r/dot/",
        "websiteUrl": "https://polkadot.network/",
        "twitterUrl": "https://twitter.com/Polkadot",
        "contractAddress": "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
        "decimals": 18,
        "explorers": [
          "https://polkadot.subscan.io/",
          "https://hubble.figment.io/polkadot/chains/polkadot",
          "https://3xpl.com/polkadot",
          "https://www.mintscan.io/secret/address/secret1h5d3555tz37crrgl5rppu2np2fhaugq3q8yvv9"
        ]
      },
      {
        id: "matic-network",
        icon: "https://static.coinstats.app/coins/1686037797025.png",
        name: "Polygon",
        symbol: "MATIC",
        rank: 15,
        price: 0.8810922488074453,
        priceBtc: 0.00001710947706629003,
        volume: 320657536.3184444,
        "marketCap": 8179129622.119546,
        "availableSupply": 9282943566,
        "totalSupply": 10000000000,
        "priceChange1h": 0.8,
        "priceChange1d": 2.38,
        "priceChange1w": 6.91,
        "redditUrl": "https://www.reddit.com/r/maticnetwork/",
        "websiteUrl": "https://polygon.technology/",
        "twitterUrl": "https://twitter.com/0xPolygon",
        "contractAddress": "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
        "decimals": 18,
        "explorers": [
          "https://etherscan.io/token/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
          "https://ethplorer.io/address/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
          "https://polygonscan.com/token/0x0000000000000000000000000000000000001010",
          "https://bscscan.com/token/0xCC42724C6683B7E57334c4E856f4c9965ED682bD",
          "https://moonriver.moonscan.io/token/0x682f81e57eaa716504090c3ecba8595fb54561d8",
          "https://moonbeam.moonscan.io/token/0x3405A1bd46B85c5C029483FbECf2F3E611026e45",
          "https://explorer.energi.network/token/0x98997e1651919faeacee7b96afbb3dfd96cb6036",
          "https://www.oklink.com/polygon",
          "https://3xpl.com/polygon",
          "https://binplorer.com/address/0xcc42724c6683b7e57334c4e856f4c9965ed682bd"
        ]
      },
      {
        "id": "wrapped-bitcoin",
        "icon": "https://static.coinstats.app/coins/wrapped-bitcoinoc1.png",
        "name": "Wrapped Bitcoin",
        "symbol": "WBTC",
        "rank": 16,
        "price": 51566,
        "priceBtc": 1.0011100595238713,
        "volume": 222291975,
        "marketCap": 8081597767,
        "availableSupply": 156932,
        "totalSupply": 156932,
        "priceChange1h": 0.04,
        "priceChange1d": 4.94,
        "priceChange1w": 18.48,
        "redditUrl": "https://www.reddit.com",
        "websiteUrl": "https://www.wbtc.network/",
        "twitterUrl": "https://twitter.com/WrappedBTC",
        "contractAddress": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
        "decimals": 18,
        "explorers": [
          "https://etherscan.io/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
          "https://ethplorer.io/address/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
          "https://blockscout.com/poa/xdai/tokens/0x8e5bBbb09Ed1ebdE8674Cda39A0c169401db4252/token-transfers",
          "https://scan.tomochain.com/tokens/0x503b2ddc059b81788fd1239561596614b27faade",
          "https://polygonscan.com/token/0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
          "https://nearblocks.io/address/2260fac5e5542a773aa44fbcfedf7c193bc2c599.factory.bridge.near#transaction",
          "https://cronos-explorer.crypto.org/token/0x062e66477faf219f25d27dced647bf57c3107d52",
          "https://snowtrace.io/token/0x50b7545627a5162f82a992c33b87adc75187b218",
          "https://explorer.mainnet.aurora.dev/token/0xF4eB217Ba2454613b15dBdea6e5f22276410e89e",
          "https://moonriver.moonscan.io/token/0x6ab6d61428fde76768d7b45d8bfeec19c6ef91a8"
        ]
      },
      {
        "id": "the-open-network",
        "icon": "https://static.coinstats.app/coins/1685602314954.png",
        "name": "Toncoin",
        "symbol": "TON",
        "rank": 17,
        "price": 2.21,
        "priceBtc": 0.00004290527152673769,
        "volume": 34434002,
        "marketCap": 7645862745,
        "availableSupply": 3466729007,
        "totalSupply": 5102685092,
        "priceChange1h": -0.23,
        "priceChange1d": -0.33,
        "priceChange1w": 8.14,
        "redditUrl": "https://www.reddit.com",
        "websiteUrl": "https://ton.org/",
        "twitterUrl": "https://twitter.com/ton_blockchain",
        "contractAddress": "0x582d872a1b094fc48f5de31d3b73f2d9be47def1",
        "decimals": 18,
        "explorers": [
          "https://tonscan.org",
          "https://tonmoon.org/explorer/",
          "https://youton.org/",
          "https://3xpl.com/ton",
          "https://tonapi.io/",
          "https://etherscan.io/token/0x582d872a1b094fc48f5de31d3b73f2d9be47def1",
          "https://ethplorer.io/address/0x582d872a1b094fc48f5de31d3b73f2d9be47def1",
          "https://bscscan.com/token/0x76a797a59ba2c17726896976b7b3747bfd1d220f",
          "https://binplorer.com/address/0x76a797a59ba2c17726896976b7b3747bfd1d220f"
        ]
      },
      {
        "id": "internet-computer",
        "icon": "https://static.coinstats.app/coins/internet-computer4kw.png",
        "name": "Internet Computer",
        "symbol": "ICP",
        "rank": 18,
        "price": 13.42,
        "priceBtc": 0.0002605929850908777,
        "volume": 197558891,
        "marketCap": 6120221246,
        "availableSupply": 458341177,
        "totalSupply": 514457250,
        "priceChange1h": -0.13,
        "priceChange1d": 3.89,
        "priceChange1w": 10.55,
        "redditUrl": "https://www.reddit.com/r/dfinity/",
        "websiteUrl": "https://internetcomputer.org/",
        "twitterUrl": "https://twitter.com/dfinity",
        "contractAddress": "ryjl3-tyaaa-aaaaa-aaaba-cai",
        "decimals": 18,
        "explorers": [
          "https://dashboard.internetcomputer.org/canister/ryjl3-tyaaa-aaaaa-aaaba-cai"
        ]
      },
      {
        "id": "shiba-inu",
        "icon": "https://static.coinstats.app/coins/1646234478930.png",
        "name": "Shiba Inu",
        "symbol": "SHIB",
        "rank": 19,
        "price": 0.00000973,
        "priceBtc": 1.8889967961771841e-10,
        "volume": 168545983,
        "marketCap": 5722428253,
        "availableSupply": 589281019358102,
        "totalSupply": 999982368073199,
        "priceChange1h": 0.09,
        "priceChange1d": 2.77,
        "priceChange1w": 7.84,
        "redditUrl": "https://www.reddit.com/r/SHIBArmy/",
        "websiteUrl": "https://shibatoken.com/",
        "twitterUrl": "https://twitter.com/Shibtoken",
        "contractAddress": "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
        "decimals": 18,
        "explorers": [
          "https://etherscan.io/token/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
          "https://ethplorer.io/address/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
          "https://bscscan.com/token/0x2859e4544c4bb03966803b044a93563bd2d0dd4d",
          "https://explorer.energi.network/token/0x7fDb933327aa6989ae706001c2EA54BA5E046e79",
          "https://ethereum.dex.guru/token/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce"
        ]
      },
      {
        "id": "bitcoin-cash",
        "icon": "https://static.coinstats.app/coins/1646234235578.png",
        "name": "Bitcoin Cash",
        "symbol": "BCH",
        "rank": 20,
        "price": 278.8009235690275,
        "priceBtc": 0.005413891694452105,
        "volume": 853985137.5139589,
        "marketCap": 5476134416.099939,
        "availableSupply": 19641737,
        "totalSupply": 21000000,
        "priceChange1h": -0.08,
        "priceChange1d": 3.5,
        "priceChange1w": 17.44,
        "redditUrl": "https://www.reddit.com/r/btc",
        "websiteUrl": "https://bch.info/",
        "contractAddress": "0xd4a161eaa78e77eb2af35d8e5bbdcf6af07a6835",
        "decimals": 18,
        "explorers": [
          "https://blockchair.com/bitcoin-cash",
          "https://bch.btc.com/",
          "https://explorer.bitcoin.com/bch",
          "https://bch.tokenview.io/",
          "https://hecoinfo.com/token/0xef3cebd77e0c52cb6f60875d9306397b5caca375",
          "https://www.oklink.com/bch",
          "https://3xpl.com/bitcoin-cash"
        ]
      }
    ],
    meta: {
      page: 1,
      limit: 20,
      itemCount: 15746,
      pageCount: 788,
      hasPreviousPage: false,
      hasNextPage: true
    }
}



