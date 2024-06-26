# Nexus Orbit Chain Dapp

## Introduction
Nexus Orbit Chain is a chain run on arbitrum nitro node and the repo is a fork of arbitrum bridge which showcases Nexus Staking yeilds for Rollups(currently on nexus chain) with support of holesky as parent chain 

Official arbitrum bridge [Repo](https://github.com/OffchainLabs/arbitrum-token-bridge)


## Prerequisites for running the code

- Install [Node.js](https://nodejs.org/en/download/) for your platform
- Install [Node Version Manager (nvm)](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) to setup the correct Node version for the project.
- use node version 18
- Install [Yarn (version 1)](https://classic.yarnpkg.com) - Package manager


 
## Steps to run the code locally

1. Clone the Arbitrum token bridge repository from Github onto your local machine

   ```bash
   $ git clone https://github.com/Nexus-2023/arbitrum-token-bridge.git
   ```

2. Use the Node version as per project settings to avoid any errors before project installation.

   ```bash
   $ nvm use <NODE_VERSION_18>
   ```

3. Install dependencies in all packages using yarn in root of project.

   ```bash
   $ yarn
   ```

4. Set env vars:

   1. Copy the existing env.local.sample file present.

      ```bash
      $ cp ./packages/arb-token-bridge-ui/.env.local.sample  ./packages/arb-token-bridge-ui/.env
      ```

   2. In `.env` created, add `NEXT_PUBLIC_INFURA_KEY=my-infura-key` get it from [Infura](https://app.infura.io/login)

   3. Set `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` to your WalletConnect project ID. You can create a new project on the [WalletConnect dashboard](https://cloud.walletconnect.com/app).

   4. set `NEXT_PUBLIC_NEXUS_GRAPH_API` which is nexus contracts subgraph url to fetch dashboard data 

   5. For custom urls, set optional vars:

   - `NEXT_PUBLIC_ETHEREUM_RPC_URL=my-eth-node`
   - `NEXT_PUBLIC_SEPOLIA_RPC_URL=my-sepolia-node`
     (see [.env.local.sample](./packages/arb-token-bridge-ui/.env.local.sample))
     If no custom URL is provided, `NEXT_PUBLIC_INFURA_KEY` will be used by default.

6. Build the project and internal packages

   ```bash
   $ yarn build
   ```

7. Finally, running the project

   1. (back in root dir:)

      ```bash
      $ yarn run dev
      ```

   2. Visit `http://localhost:3000/`

<br />

---

<br />

 