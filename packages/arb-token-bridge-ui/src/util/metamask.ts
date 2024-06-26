export async function addNexusChain() {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const result = await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0xCB6BAA',
              rpcUrls: [
                `${process.env.NEXT_PUBLIC_NEXUS_ORBIT_RPC_URL || 'null rpc'}`
              ],
              chainName: 'Nexus Orbit Chain',
              nativeCurrency: {
                name: 'ETHER',
                symbol: 'ETH',
                decimals: 18
              },
              blockExplorerUrls: [
                `${
                  process.env.NEXT_PUBLIC_NEXUS_ORBIT_EXPLORER_URL ||
                  'null Explorer url'
                }`
              ]
            }
          ]
        })
        console.log('Metamask is installed')
      } else {
        console.log('Metamask is not installed')
      }
    } catch (error) {
      console.log(error)
    }
  }


  export async function addHoleskyChain() {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const result = await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0x4268',
              rpcUrls: [
                `https://ethereum-holesky-rpc.publicnode.com`
              ],
              chainName: 'holesky',
              nativeCurrency: {
                name: 'ETHER',
                symbol: 'ETH',
                decimals: 18
              },
              blockExplorerUrls: [
                `https://holesky.etherscan.io/`
              ]
            }
          ]
        })
        console.log('Metamask is installed')
      } else {
        console.log('Metamask is not installed')
      }
    } catch (error) {
      console.log(error)
    }
  }