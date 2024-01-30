import { HardhatUserConfig, task } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import 'dotenv/config';

task('deploy', 'Deploy contract').setAction(async () => {
  const deploy = require('./scripts/deploy');

  await deploy();
});

task('interact', 'Interact with contract')
  .addParam('address', "Contract's address")
  .setAction(async taskArgs => {
    const { address } = taskArgs;
    const interact = require('./scripts/interact');

    await interact(address);
  });

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
      url: 'https://arb-pokt.nodies.app',
      accounts: [process.env.WALLET_PRIVATE_KEY as string],
    },
    // Arbitrum Sepolia Testnet
    sepoliaArb: {
      url: 'https://arbitrum-sepolia.blockpi.network/v1/rpc/public',
      accounts: [process.env.WALLET_PRIVATE_KEY as string],
    },
    // Base Mainet
    base: {
      url: 'https://endpoints.omniatech.io/v1/base/mainnet/public',
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
    // OP Mainnet
    optimism: {
      url: 'https://optimism.meowrpc.com',
      accounts: [process.env.WALLET_PRIVATE_KEY as string],
    },
    // OP Goerli Testnet
    goerliOptimism: {
      url: 'https://optimism-goerli.publicnode.com',
      accounts: [process.env.WALLET_PRIVATE_KEY as string],
    },
  },
};

export default config;
