 
import { BigNumber, ethers  } from 'ethers'
import { GetContractTypeFromFactory } from '@arbitrum/sdk/dist/lib/abi/common'
import { useState } from 'react'
import   NexusAbiJson  from '../NexusLibrary.json'
 
export async function getNexusReward(): Promise<string | undefined> {
 
  
    const { abi: nexusABI} = NexusAbiJson 
 
    if (window.ethereum) {
      const holesky_rpc = `https://ethereum-holesky-rpc.publicnode.com` 
      const provider = new ethers.providers.JsonRpcProvider(holesky_rpc);
      const contractAddress = '0x85deaBEa8c6b45ff1f21C128b1f6Ed971bC122b3';
      const NexusLibrary = new ethers.Contract(contractAddress, nexusABI as any , provider );
      const library = await NexusLibrary.attach(contractAddress);
      const rewardsBigNumber = await library.getRewards();
      const rewardEth = ethers.utils.formatEther(rewardsBigNumber);
 
      return rewardEth;
    } else {
      console.error('MetaMask not found');
      return undefined;
    }
  };


  export async function getNexusBalance(): Promise<string | undefined> {
 
  
    const { abi: nexusABI} = NexusAbiJson 
 
    if (window.ethereum) {
      const holesky_rpc = `https://ethereum-holesky-rpc.publicnode.com` 
      const provider = new ethers.providers.JsonRpcProvider(holesky_rpc);
      const contractAddress = '0x85deaBEa8c6b45ff1f21C128b1f6Ed971bC122b3';
      const NexusLibrary = new ethers.Contract(contractAddress, nexusABI as any , provider );
      const library = await NexusLibrary.attach(contractAddress);
 
      const  balance = await library.balance();
      const balanceEth = ethers.utils.formatEther(balance);
   
 
      return balanceEth;
    } else {
      console.error('MetaMask not found');
      return undefined;
    }
  };

 