import React from 'react'
import Link from 'next/link'
import XIcon from '@mui/icons-material/X'
import ArticleIcon from '@mui/icons-material/Article'
import discordIcon from '@/icons/Discord.svg'
import Image from 'next/image'
export const Footer = () => {
  return (
    <div className="mt-1 flex w-full items-center justify-center p-2 text-white">
      <div className="   hidden  w-1/2 max-w-[600px] items-center     justify-between min-[900px]:flex">
        <div>© 2024 Nexus Network, Inc.</div>

        <div className="flex items-center  justify-between space-x-5 ">
          <Link
            href={'https://twitter.com/NexusNetwork_0x'}
            target="_blank"
            className="mb-2 text-sm transition-all duration-300 ease-in-out  hover:scale-110  sm:text-lg"
            title="Twitter"
          >
            <XIcon />
          </Link>
          <Link
            href={'https://nexusnetwork0x.substack.com/'}
            target="_blank"
            className="mb-2 text-sm transition-all duration-300 ease-in-out  hover:scale-110  sm:text-lg"
            title="Nexus Blog"
          >
            <ArticleIcon />
          </Link>

          <Link
            href={'https://discord.gg/wnTfyh6T'}
            target="_blank"
            className="mb-2 text-sm transition-all duration-300   ease-in-out  hover:scale-110  sm:text-lg"
            title="Discord Server"
          >
            <Image
              src={discordIcon}
              width={30}
              height={30}
              alt="discord icon"
              className=""
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
