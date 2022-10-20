import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan"
import "dotenv/config"
import "hardhat-abi-exporter"
import "hardhat-deploy"
import "hardhat-gas-reporter"
import "hardhat-spdx-license-identifier"
import { HardhatUserConfig } from 'hardhat/types';
// import "./tasks"

const accounts = {
  mnemonic: process.env.MNEMONIC || "what glove never goat pony smoke pill misery poet anxiety injury cloth",
}


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    apiKey: {
      bscTestnet:process.env.API_KEY,
      ftmTestnet:process.env.API_KEY,
      avalancheFujiTestnet:process.env.API_KEY,
    },        
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts,
      tags: ["local"],
    },
    bscTestnet: {
      url: "https://data-seed-prebsc-2-s3.binance.org:8545",
      accounts,
      chainId: 97,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
    },
    ftmTestnet: {
      url: "https://rpc.testnet.fantom.network",
      accounts,
      chainId: 4002,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
    },
    avalanche: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      accounts,
      chainId: 43114,
      live: true,
      saveDeployments: true,
      gasPrice: 470000000000,
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts,
      chainId: 43113,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
    },    
    goerli: {
      url: "https://goerli.infura.io/v3/",
      accounts,
      chainId: 5,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
    },    
    mainnet: {
      url: "https://mainnet.infura.io/v3/",
      accounts,
      chainId: 1,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gasMultiplier: 2,
    },  
  },
  paths: {
    sources: "contracts",
    tests: "test",
    cache: "cache",
    artifacts: "artifacts",
  },

};
export default config