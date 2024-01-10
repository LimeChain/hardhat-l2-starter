import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import 'dotenv/config';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.19',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    // Arbitrum Mainnet
    arbitrum: {
      url: 'https://arbitrum.llamarpc.com',
      accounts: [process.env.WALLET_PRIVATE_KEY as string],
    },
    // Arbitrum Sepolia Testnet
    sepoliaArb: {
      url: 'https://arbitrum-sepolia.blockpi.network/v1/rpc/public',
      accounts: [process.env.WALLET_PRIVATE_KEY as string],
    },
    // Base Mainet
    base: {
      url: 'https://base.llamarpc.com',
      accounts: [process.env.WALLET_PRIVATE_KEY as string],
    },
    // Base Sepolia Testnet
    sepoliaBase: {
      url: 'https://base-sepolia.blockpi.network/v1/rpc/public',
      accounts: [process.env.WALLET_PRIVATE_KEY as string],
    },
    // Linea Mainnet
    linea: {
      url: 'https://1rpc.io/linea	',
      accounts: [process.env.WALLET_PRIVATE_KEY as string],
    },
    // Linea Goerli Testnet
    goerliLinea: {
      url: 'https://linea-goerli.blockpi.network/v1/rpc/public',
      accounts: [process.env.WALLET_PRIVATE_KEY as string],
    },
    // Taiko Testnet
    taiko: {
      url: 'https://taiko-jolnir.blockpi.network/v1/rpc/public',
      accounts: [process.env.WALLET_PRIVATE_KEY as string],
    },
    // Polygon zkEVM Mainnet
    polygonZkEvm: {
      url: 'https://polygon-zkevm.drpc.org',
      accounts: [process.env.WALLET_PRIVATE_KEY as string],
    },
    // Scroll Mainnet
    scroll: {
      url: 'https://1rpc.io/scroll',
      accounts: [process.env.WALLET_PRIVATE_KEY as string],
    },
    // Scroll Sepolia Testnet
    sepoliaScroll: {
      url: 'https://scroll-sepolia.blockpi.network/v1/rpc/public',
      accounts: [process.env.WALLET_PRIVATE_KEY as string],
    },
    // zkSync Era Mainnet
    zkSyncEra: {
      url: 'https://zksync-era.blockpi.network/v1/rpc/public	',
      accounts: [process.env.WALLET_PRIVATE_KEY as string],
    },
    // zkSync Sepolia Testnet
    sepoliaZkSyncEra: {
      url: 'https://sepolia.era.zksync.dev',
      accounts: [process.env.WALLET_PRIVATE_KEY as string],
    },
  },
};

export default config;
