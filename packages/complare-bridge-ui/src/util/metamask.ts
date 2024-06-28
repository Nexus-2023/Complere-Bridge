 
  export async function addComplareChain() {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const result = await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0x160CA4815',
              rpcUrls: [
                `${process.env.NEXT_PUBLIC_L3_RPC || 'null rpc'}`
              ],
              chainName: 'complare-chain',
              nativeCurrency: {
                name: 'ETHER',
                symbol: 'ETH',
                decimals: 18
              },
              blockExplorerUrls: [
                `${
                  process.env.NEXT_PUBLIC_L3_EXPLORER ||
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

  export async function addBaseSepoliaChain() {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const result = await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0x14A34',
              rpcUrls: [
                `${process.env.NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL}` || "invalid rpc"
              ],
              chainName: 'Base Sepolia Testnet',
              nativeCurrency: {
               name: 'Sepolia Ether',
                symbol: 'ETH',
                decimals: 18
              },
              blockExplorerUrls: [
               "https://base-sepolia.blockscout.com/"
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