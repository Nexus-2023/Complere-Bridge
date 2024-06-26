import { AssetTable } from '../../components/common/Assets'
import CenteredTabs from '../../components/common/Tabs'
import ResponsiveAppBar from '../../components/common/navbar'
import { BigNumber, ethers } from 'ethers'
import { GetContractTypeFromFactory } from '@arbitrum/sdk/dist/lib/abi/common'
import { useState, useEffect } from 'react'
 
import { getNexusReward, getNexusBalance } from '../../util/Contract'
import { fetchValidatorData } from '../../util/graphQL/fetch'
import Fade from '@mui/material/Fade';

export default function Index() {
  const [rewardsEarned, setRewardsEarned] = useState<string>('')
  const [heightVariable, setHeight] = useState(700)
  const [ethBridged, setEthBridged] = useState<string>('')
  const [stakedAmount, setStakedAmount] = useState<number>(0)
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchValidatorData()
    
        if (data) {
        const stakedAmount = data.validators.length * 32
        const balance: any = await getNexusBalance()
        const reward: any = await getNexusReward()

        const trimmedtotalBalance = parseFloat(balance).toFixed(3)
        const trimmedReward = parseFloat(reward).toFixed(3)
        setRewardsEarned(trimmedReward)
        setStakedAmount(stakedAmount)
        setEthBridged(trimmedtotalBalance)
        }

      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    const updateHeight = () => {
      const heightValue = window.innerHeight
      setHeight(heightValue)
    }
    updateHeight()

    fetchData()
    setFadeIn(true);
    window.addEventListener('resize', updateHeight)

    return () => {
      window.removeEventListener('resize', updateHeight)
    }
  }, [])

  return (
    
    <div id="backgroundImage" className="">
      <ResponsiveAppBar wallet={false} marginBelow={'mb-12'} />
      <div
        className=" flex  w-full flex-col  py-2   backdrop-blur-2xl   sm:px-16"
        style={{ height: heightVariable > 900 ? heightVariable : '100%' }}
      >
        <>
      <Fade in={fadeIn} timeout={1000}>
          <div className="mb-4 mt-4 flex w-full items-center justify-center space-x-8 text-[#CDEBFF]">
            <div className=" flex h-full  w-3/12 flex-col items-center justify-center rounded-xl  border-2 border-[#1377BB] px-2 py-4 text-center shadow-md   shadow-[#1377BB]">
              <h1 className=" lg:text-xl xl:text-2xl">ETH Bridged</h1>
              <h1 className=" font-light lg:text-lg xl:text-xl">
                {' '}
                {ethBridged !== '' ? `${ethBridged} ETH` : 'Loading...'}
              </h1>
            </div>

            <div className=" flex h-full w-3/12 flex-col items-center justify-center rounded-xl  border-2 border-[#1377BB] px-2 py-4 text-center shadow-md   shadow-[#1377BB]">
              <h1 className="lg:text-xl xl:text-2xl ">ETH Staked</h1>
              <h1 className=" font-light lg:text-lg xl:text-xl">
                {' '}
                {stakedAmount !== 0 ? `${stakedAmount} ETH` : 'Loading...'}
              </h1>
            </div>

            <div className=" flex h-full w-3/12 flex-col items-center  justify-center rounded-xl  border-2 border-[#1377BB] px-2 py-4 text-center shadow-md   shadow-[#1377BB]">
              <h1 className=" lg:text-xl xl:text-2xl">Rewards Earned</h1>
              <h1 className="font-light lg:text-lg xl:text-xl">
                {' '}
                {rewardsEarned !== '' ? (
                  <p>{rewardsEarned} ETH</p>
                ) : (
                  <p>Loading...</p>
                )}
              </h1>
            </div>
          </div>
          </Fade>
          <div className="  flex    items-center justify-center ">
            <CenteredTabs />
          </div>
        </>
        
      </div>
      
    </div>
  )
}
