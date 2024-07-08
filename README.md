# Complere Bridge

 ## Prerequisites for running the code

- Install [Node.js](https://nodejs.org/en/download/) for your platform
- Install [Node Version Manager (nvm)](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) to setup the correct Node version for the project.
- use node version 18
- Install [Yarn (version 1)](https://classic.yarnpkg.com) - Package manager



## Steps to run the code locally

1. Clone the Arbitrum token bridge repository from Github onto your local machine

   ```bash
   $ git clone <YOUR_REPO_LINK>
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

   2. Set `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` to your WalletConnect project ID. You can create a new project on the [WalletConnect dashboard](https://cloud.walletconnect.com/app).

3. Build the project and internal packages

   ```bash
   $ yarn build
   ```

4. Finally, running the project

   1. (back in root dir:)

      ```bash
      $ yarn run dev
      ```

   2. Visit `http://localhost:3000/`

<br />

## Deployment
Deployment is done by vercel

- go to https://vercel.com/home
- sign in
- select your github project to deploy
- set env in vercel deployed project settings
