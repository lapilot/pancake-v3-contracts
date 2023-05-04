import type { HardhatUserConfig, NetworkUserConfig } from 'hardhat/types'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-web3'
import '@nomiclabs/hardhat-truffle5'
import 'hardhat-abi-exporter'
import 'hardhat-contract-sizer'
import 'dotenv/config'
import 'hardhat-tracer'
// import '@nomiclabs/hardhat-etherscan'
import '@nomicfoundation/hardhat-verify'
import 'solidity-docgen'
require('dotenv').config({ path: require('find-config')('.env') })

// const bscTestnet: NetworkUserConfig = {
//   url: 'https://rpc.ankr.com/bsc_testnet_chapel',
//   chainId: 97,
//   accounts: [process.env.KEY_TESTNET!],
// }

// const goerli: NetworkUserConfig = {
//   url: `https://eth-goerli.g.alchemy.com/v2/${process.env.GOERLI_API_KEY}`,
//   chainId: 5,
//   // accounts: [process.env.KEY_GOERLI!],
// }

// const bscMainnet: NetworkUserConfig = {
//   url: 'https://bsc-dataseed.binance.org/',
//   chainId: 56,
//   // accounts: [process.env.KEY_MAINNET!],
// }

const bscTestnet: NetworkUserConfig = {
  url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  chainId: 97,
  accounts: [process.env.KEY_TESTNET!],
}

const bscMainnet: NetworkUserConfig = {
  url: 'https://bsc-dataseed.binance.org/',
  chainId: 56,
  accounts: [process.env.KEY_MAINNET!],
}

const goerli: NetworkUserConfig = {
  url: 'https://rpc.ankr.com/eth_goerli',
  chainId: 5,
  accounts: [process.env.KEY_GOERLI!],
}

const eth: NetworkUserConfig = {
  url: 'https://eth.llamarpc.com',
  chainId: 1,
  accounts: [process.env.KEY_ETH!],
}
const pilotMainnet: NetworkUserConfig = {
  url: 'https://rpc-main-a.pilotscan.org/',
  chainId: 1023,
  accounts: [process.env.KEY_PILOT_MAINNET!],
}

const pilotTestnet: NetworkUserConfig = {
  url: 'https://rpc-test-a.pilotscan.org/',
  chainId: 2047,
  accounts: [process.env.KEY_PILOT_TESTNET!],
}

const config = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    ...(process.env.KEY_TESTNET && { bscTestnet }),
    ...(process.env.KEY_MAINNET && { bscMainnet }),
    ...(process.env.KEY_GOERLI && { goerli }),
    ...(process.env.KEY_ETH && { eth }),
    ...(process.env.KEY_PILOT_MAINNET && { pilotMainnet }),
    ...(process.env.KEY_PILOT_TESTNET && { pilotTestnet }),
    // testnet: bscTestnet,
    // mainnet: bscMainnet,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || '',
    customChains: [
      {
        network: "pilotMainnet",
        chainId: 1023,
        urls: {
          apiURL: "https://pilotscan.org/api",
          browserURL: "https://pilotscan.org"
        }
      },
      {
        network: "pilotTestnet",
        chainId: 2047,
        urls: {
          apiURL: "https://testnet.pilotscan.org/api",
          browserURL: "https://testnet.pilotscan.org"
        }
      }
    ]
  },
  solidity: {
    compilers: [
      {
        version: '0.7.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 10,
          },
        },
      },
      {
        version: '0.8.10',
        settings: {
          optimizer: {
            enabled: true,
            runs: 10,
          },
        },
      },
      {
        version: '0.6.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 10,
          },
        },
      },
      {
        version: '0.5.16',
        settings: {
          optimizer: {
            enabled: true,
            runs: 10,
          },
        },
      },
      {
        version: '0.4.18',
        settings: {
          optimizer: {
            enabled: true,
            runs: 10,
          },
        },
      },
    ],
    overrides: {
      '@pancakeswap/v3-core/contracts/libraries/FullMath.sol': {
        version: '0.7.6',
        settings: {},
      },
      '@pancakeswap/v3-core/contracts/libraries/TickBitmap.sol': {
        version: '0.7.6',
        settings: {},
      },
      '@pancakeswap/v3-core/contracts/libraries/TickMath.sol': {
        version: '0.7.6',
        settings: {},
      },
      '@pancakeswap/v3-periphery/contracts/libraries/PoolAddress.sol': {
        version: '0.7.6',
        settings: {},
      },
      'contracts/libraries/PoolTicksCounter.sol': {
        version: '0.7.6',
        settings: {},
      },
    },
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  // abiExporter: {
  //   path: "./data/abi",
  //   clear: true,
  //   flat: false,
  // },
  docgen: {
    pages: 'files',
  },
}

export default config
