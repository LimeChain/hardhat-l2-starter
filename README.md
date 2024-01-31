# L2 Networks hardhat starter template

This project demonstrates differences in OP codes and other technical details when deploying contract to L2 networks.

Node version: `20.10.0`

If you use another version, please use [n](https://github.com/tj/n) to manage.

## ⚙️ Installation

```
yarn
```

Before running the project please create `.env` or use the example one.

```shell
cp .env.example .env
```

```
WALLET_PRIVATE_KEY = <PRIVATE_KEY>
```

## 🚀 Scripts

Compile contract:

```shell
npx hardhat compile
```

Deploy to network:

```shell
npx hardhat deploy --network <NETWORK_NAME>
```

Interact with contract:

```shell
npx hardhat interact --address <CONTRACT_ADDRESS> --network <NETWORK_NAME>
```

### Networks settings and information

| Network          | Type    | Scan                                  | RPC                                                        | Network name in config |
| ---------------- | ------- | ------------------------------------- | ---------------------------------------------------------- | ---------------------- |
| Arbitrum One     | Mainnet | https://arbiscan.io/                  | https://arb-pokt.nodies.app                                | `arbitrum`             |
| Arbitrum Sepolia | Testnet | https://sepolia.arbiscan.io/          | https://arbitrum-sepolia.blockpi.network/v1/rpc/public     | `sepoliaArb`           |
| Base             | Mainnet | https://basescan.org/                 | https://endpoints.omniatech.io/v1/base/mainnet/public      | `base`                 |
| Base Sepolia     | Testnet | https://sepolia.basescan.org/         | https://base-sepolia.blockpi.network/v1/rpc/public         | `sepoliaBase`          |
| Linea            | Mainnet | https://lineascan.build/              | https://1rpc.io/linea                                      | `linea`                |
| Linea Goerli     | Testnet | https://explorer.goerli.linea.build/  | https://linea-goerli.blockpi.network/v1/rpc/public         | `goerliLinea`          |
| Taiko            | Testnet | https://explorer.jolnir.taiko.xyz/    | https://taiko-jolnir.blockpi.network/v1/rpc/public         | `taiko`                |
| Polygon zkEVM    | Mainnet | https://zkevm.polygonscan.com/        | https://polygon-zkevm.drpc.org                             | `polygonZkEvm`         |
| Scroll           | Mainnet | https://scrollscan.com/               | https://1rpc.io/scroll                                     | `scroll`               |
| Scroll Sepolia   | Testnet | https://sepolia.scrollscan.dev/       | https://scroll-sepolia.blockpi.network/v1/rpc/publicscroll | `sepoliaScroll`        |
| zkSync           | Mainnet | https://explorer.zksync.io/           | https://zksync-era.blockpi.network/v1/rpc/public           | `zkSyncEra`            |
| zkSync Sepolia   | Testnet | https://sepolia.explorer.zksync.io/   | https://sepolia.era.zksync.dev                             | `sepoliaZkSyncEra`     |
| Optimism         | Mainnet | https://optimistic.etherscan.io/      | https://optimism.meowrpc.com                               | `optimism`             |
| Optimism Goerli  | Testnet | https://goerli-optimism.etherscan.io/ | https://optimism-goerli.publicnode.com                     | `goerliOptimism`       |

### Deployed contracts

| Network       | Type    | Scan                                                                       | Contract address                             |
| ------------- | ------- | -------------------------------------------------------------------------- | -------------------------------------------- |
| Arbitrum One  | Mainnet | https://arbiscan.io/address/0xC1810fC1250AFf6A5C614492dae0A67D6bdf9da7     | `0xC1810fC1250AFf6A5C614492dae0A67D6bdf9da7` |
| Base          | Mainnet | https://basescan.org/address/0xC1810fC1250AFf6A5C614492dae0A67D6bdf9da7    | `0xC1810fC1250AFf6A5C614492dae0A67D6bdf9da7` |
| Linea         | Mainnet | https://lineascan.build/address/0xecf7eF134E47A977e748AD9CAcEde0471b019663 | `0xecf7eF134E47A977e748AD9CAcEde0471b019663` |
| Taiko         | Testnet | https://explorer.jolnir.taiko.xyz/                                         | ``                                           |
| Polygon zkEVM | Mainnet | https://zkevm.polygonscan.com/                                             | ``                                           |
| Scroll        | Mainnet | https://scrollscan.com/                                                    | ``                                           |
| zkSync        | Mainnet | https://explorer.zksync.io/                                                | ``                                           |
| Optimism      | Mainnet | https://optimistic.etherscan.io/                                           | ``                                           |

### Deployed contracts data

| Network      | Gas usage | Base fee  | Block proposer address                       |
| ------------ | --------- | --------- | -------------------------------------------- |
| Arbitrum One | 9595      | 100000000 | `0xA4b000000000000000000073657175656e636572` |
| Base         | 9595      | 0         | `0x4200000000000000000000000000000000000011` |
| Linea        | 9595      | 7         | `0x8F81e2E3F8b46467523463835F965fFE476E1c9E` |
