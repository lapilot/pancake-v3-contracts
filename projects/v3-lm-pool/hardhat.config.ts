import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@typechain/hardhat'
import 'dotenv/config'
import { NetworkUserConfig } from 'hardhat/types'
import 'solidity-docgen';
require('dotenv').config({ path: require('find-config')('.env') })

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

const config: HardhatUserConfig = {
  solidity: {
    version: '0.7.6',
  },
  networks: {
    hardhat: {},
    ...(process.env.KEY_TESTNET && { bscTestnet }),
    ...(process.env.KEY_MAINNET && { bscMainnet }),
    ...(process.env.KEY_GOERLI && { goerli }),
    ...(process.env.KEY_ETH && { eth }),
    ...(process.env.KEY_PILOT_MAINNET && { pilotMainnet }),
    ...(process.env.KEY_PILOT_TESTNET && { pilotTestnet }),
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
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
  paths: {
    sources: './contracts/',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
}

export default config
