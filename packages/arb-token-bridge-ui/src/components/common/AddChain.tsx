import React from 'react'
import { addHoleskyChain, addNexusChain } from '../../util/metamask'
import { Button } from '@mui/material'
import { useNetworks } from '../../hooks/useNetworks'
import { useNetworksRelationship } from '../../hooks/useNetworksRelationship'
import { isNetwork } from '../../util/networks'
import MetamaskLogo from '@/icons/MetamaskLogo.svg'
import Image from 'next/image'
export const AddChainButton = () => {
  const [networks] = useNetworks()
  const { parentChain, childChain } = useNetworksRelationship(networks)

  const {
    isArbitrum: isConnectedToArbitrum,
    isOrbitChain: isConnectedToOrbitChain
  } = isNetwork(networks.sourceChain.id)
  const isParentChainEthereum = isNetwork(
    parentChain.id
  ).isEthereumMainnetOrTestnet

  return (
    <div>
      {(isParentChainEthereum && isConnectedToArbitrum) ||
      isConnectedToOrbitChain ? (
        <Button
          className="   rounded-lg    border-2 text-sm   font-medium hover:border-2       "
          onClick={addHoleskyChain}
          variant="outlined"
          sx={{ color: '#1377BB' }}
          title="add testnet holesky chain to your metamask"
        >
          <Image
            src={MetamaskLogo}
            width={25}
            height={25}
            alt="metamask logo"
            className="mr-2"
          />
          Add Holesky
        </Button>
      ) : (
        <Button
          className="   rounded-lg    border-2 text-sm   font-medium hover:border-2       "
          onClick={addNexusChain}
          variant="outlined"
          sx={{ color: '#1377BB' }}
          title="add testnet nexus network chain to your metamask"
        >
          <Image
            src={MetamaskLogo}
            width={25}
            height={25}
            alt="metamask logo"
            className="mr-2"
          />
          Add Nexus
        </Button>
      )}
    </div>
  )
}

export const AddNexusButton = () => {
  return (
    <div>
      <Button
        className="   rounded-lg    border-2 text-sm   font-medium hover:border-2       "
        onClick={addNexusChain}
        variant="outlined"
        sx={{ color: '#1377BB' }}
        title="add testnet nexus network chain to your metamask"
      >
        <Image
          src={MetamaskLogo}
          width={25}
          height={25}
          alt="metamask logo"
          className="mr-2"
        />
        Add Nexus
      </Button>
    </div>
  )
}

export const AddHoleskyButton = () => {
  return (
    <div>
      <Button
        className="   rounded-lg    border-2 text-sm   font-medium hover:border-2       "
        onClick={addHoleskyChain}
        variant="outlined"
        sx={{ color: '#1377BB' }}
        title="add testnet holesky chain to your metamask"
      >
        <Image
          src={MetamaskLogo}
          width={25}
          height={25}
          alt="metamask logo"
          className="mr-2"
        />
        Add Holesky
      </Button>
    </div>
  )
}
