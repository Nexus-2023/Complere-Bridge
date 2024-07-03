import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import nexusLogoExpanded from '@/images/nexus/nexusLogoUncompressed.svg'
import nexusLogoCollapsed from '@/images/nexus/nexusLogoCompressed.svg'

import { useSidebarStore } from './SidebarStore'

export const SidebarHeader = () => {
  const { sidebarOpened } = useSidebarStore()

  return (
    <div
      className={twMerge(
        'shrink-0 grow-0',
        'flex-col items-center justify-center gap-x-[16px] overflow-hidden pb-[24px]',
        sidebarOpened ? 'px-[16px]' : 'px-[4px]'
      )}
    >
      <Link
        href="/?destinationChain=nexus-orbit-chain&sourceChain=holesky"
        className={twMerge(
          'arb-hover flex cursor-pointer flex-col items-start',
          sidebarOpened && 'items-start px-[16px]'
        )}
      >
        <Image
          id="header-image-expanded"
          src={nexusLogoExpanded}
          alt="Nexus logo"
          className={twMerge(
            'w-[150px] min-w-[150px]',
            !sidebarOpened && 'hidden'
          )}
        />
        <Image
          id="header-image-collapsed"
          src={nexusLogoCollapsed}
          alt="Nexus logo"
          className={twMerge(
            'ml-[10px] h-[42px] w-[42px]',
            sidebarOpened && 'hidden'
          )}
        />
      </Link>
    </div>
  )
}
