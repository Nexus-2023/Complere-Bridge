import { Chain } from 'wagmi'

export var holeskyChain: Chain = {
  id: 17000,
  network: 'holesky',
  name: 'holesky',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://ethereum-holesky-rpc.publicnode.com']
    },
    public: {
      http: ['https://ethereum-holesky-rpc.publicnode.com']
    }
  },
  blockExplorers: {
    etherscan: {
      name: 'Etherscan',
      url: 'https://holesky.etherscan.io/'
    },
    default: {
      name: 'Etherscan',
      url: 'https://holesky.etherscan.io/'
    }
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 1448852
    }
  },
  testnet: true
}

export var baseSepoliaChain: Chain = {
  id: 84532,
  network: 'Base Sepolia',
  name: 'Base Sepolia',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: [`https://base-sepolia-rpc.publicnode.com`]
    },
    public: {
      http: [`https://base-sepolia-rpc.publicnode.com`]
    }
  },
  blockExplorers: {
    etherscan: {
      name: 'BlockScout',
      url: `https://base-sepolia.blockscout.com/`
    },
    default: {
      name: 'BlockScout',
      url: `https://base-sepolia.blockscout.com/`
    }
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 1059647
    }
  },
  testnet: true
}

export var complareChain: Chain = {
  id: 5918836757,
  network: 'complare-chain',
  name: 'complare-chain',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ["http://52.221.196.153:8449"]
    },
    public: {
      http: ["http://52.221.196.153:8449"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: 'BlockScout',
      url: `http://13.215.193.212/`
    },
    default: {
      name: 'BlockScout',
      url: `http://13.215.193.212/`
    }
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 5
    }
  },
  testnet: true
}

export var nexusOrbitChain: Chain = {
  id: 13331370,
  network: 'nexus-orbit-chain',
  name: 'Nexus Orbit Chain',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: [`${process.env.NEXT_PUBLIC_NEXUS_ORBIT_RPC_URL || 'null rpc'}`]
    },
    public: {
      http: [`${process.env.NEXT_PUBLIC_NEXUS_ORBIT_RPC_URL || 'null rpc'}`]
    }
  },
  blockExplorers: {
    blockscout: {
      name: 'blockscout',
      url: `${
        process.env.NEXT_PUBLIC_NEXUS_ORBIT_EXPLORER_URL || 'null Explorer url'
      }`
    },
    default: {
      name: 'blockscout',
      url: `${
        process.env.NEXT_PUBLIC_NEXUS_ORBIT_EXPLORER_URL || 'null Explorer url'
      }`
    }
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 15
    }
  },
  testnet: true
}
