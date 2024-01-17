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
npx hardhat run scripts/deploy.ts --network <NETWORK_NAME>
```

### Networks settings and information

| Network          | Type    | Scan                                  | RPC                                                        | Network name in config |
| ---------------- | ------- | ------------------------------------- | ---------------------------------------------------------- | ---------------------- |
| Arbitrum One     | Mainnet | https://arbiscan.io/                  | https://arbitrum.llamarpc.com                              | `arbitrum`             |
| Arbitrum Sepolia | Testnet | https://sepolia.arbiscan.io/          | https://arbitrum-sepolia.blockpi.network/v1/rpc/public     | `sepoliaArb`           |
| Base             | Mainnet | https://basescan.org/                 | https://base.llamarpc.com                                  | `base`                 |
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
