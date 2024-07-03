import { twMerge } from 'tailwind-merge'

import { ExternalLink } from '../common/ExternalLink'
import Link from 'next/link'
import TwitterIcon from '@mui/icons-material/Twitter'
import LanguageIcon from '@mui/icons-material/Language'

export const SidebarFooter = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        'mt-[20px] flex w-full items-center justify-center gap-[12px]   px-[16px] pb-[16px] text-white',
        className
      )}
    >
      <div className="duration-300  ease-in-out hover:scale-125">
        <Link href={'https://x.com/NexusNetwork_0x'} target="_blank">
          <TwitterIcon sx={{ fontSize: 35 }} />
        </Link>
      </div>

      <div className="scal duration-300 ease-in-out hover:scale-125">
        <Link href={'https://nexusnetwork.co.in/'} target="_blank">
          <LanguageIcon sx={{ fontSize: 35 }} />
        </Link>
      </div>
    </div>
  )
}
