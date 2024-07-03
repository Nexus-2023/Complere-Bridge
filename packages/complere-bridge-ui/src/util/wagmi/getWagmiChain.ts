import { Chain } from 'wagmi'
import { mainnet, arbitrum } from 'wagmi/chains'

import {
  chainToWagmiChain,
  sepolia,
  baseSepolia,
  holesky,
  arbitrumNova,
  arbitrumSepolia,
  stylusTestnet,
  localL1Network,
  localL2Network,
  nexusOrbit,
  complare
} from './wagmiAdditionalNetworks'
import { ChainId } from '../networks'
import { getCustomChainFromLocalStorageById } from '../networks'
import { orbitChains } from '../orbitChainsList'
import { log } from 'console'

export function getWagmiChain(chainId: number): Chain {
  const customChain = getCustomChainFromLocalStorageById(chainId)
  // excluding Stylus because its part of the SDK
  const orbitChain = orbitChains[chainId]

  if (customChain) {
    return chainToWagmiChain(customChain)
  }

  if (orbitChain) {
    return chainToWagmiChain(orbitChain)
  }

  switch (chainId) {
    case ChainId.Holesky:
      return holesky

    case ChainId.baseSepolia:
      return baseSepolia

    case ChainId.NexusOrbit:
      return nexusOrbit

    case ChainId.Complare:
      return complare

    case ChainId.Ethereum:
      return mainnet

    case ChainId.ArbitrumOne:
      return arbitrum

    case ChainId.ArbitrumNova:
      return arbitrumNova

    // Testnets
    case ChainId.Sepolia:
      return sepolia

    case ChainId.ArbitrumSepolia:
      return arbitrumSepolia

    case ChainId.StylusTestnet:
      return stylusTestnet

    // // Local networks
    case ChainId.Local:
      return localL1Network

    case ChainId.ArbitrumLocal:
      return localL2Network

    default:
      throw new Error(`[getWagmiChain] Unexpected chain id: ${chainId}`)
  }
}
