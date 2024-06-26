import { InformationCircleIcon } from '@heroicons/react/24/outline'

import { GET_HELP_LINK } from '../../constants'
import { ExternalLink } from '../common/ExternalLink'
import metamaskLogo from '@/icons/MetamaskLogo.svg'
import walletLogo from '@/images/crypto-wallet.png'
import Image from 'next/image'
import {
  AddChainButton,
  AddHoleskyButton,
  AddNexusButton
} from '../common/AddChain'

function WalletConnectWarning() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center text-white ">
        <h1 className="text-[2.5rem] font-black  ">Get Started</h1>

        <div>
          <Image
            src={metamaskLogo}
            width={200}
            height={200}
            alt="walletLogo"
            className=" "
          />
        </div>
      </div>
    </>
  )
}
export function AppConnectionFallbackContainer({
  children
}: {
  children?: React.ReactNode
}) {
  return (
    <div className="flex w-full flex-col items-center    justify-center pt-4   ">
      <WalletConnectWarning />
      {children}
    </div>
  )
}
