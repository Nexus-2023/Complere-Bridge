'use client'

import * as React from 'react'

import { Box, Toolbar, IconButton, Menu, Button, MenuItem } from '@mui/material'
import XIcon from '@mui/icons-material/X'
import ArticleIcon from '@mui/icons-material/Article'
import discordIcon from '@/icons/Discord.svg'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import logo from '/public/images/nexus/nexusLogoUncompressed.svg'
import { usePathname } from 'next/navigation'
import { HeaderAccountPopover } from './HeaderAccountPopover'
import { Header } from './Header'
import { addNexusChain, addHoleskyChain } from '../../util/metamask'

import {
  AddChainButton,
  AddHoleskyButton,
  AddNexusButton
} from '../common/AddChain'
interface ResponsiveAppBarProps {
  wallet: Boolean

  marginBelow: string
}

function ResponsiveAppBar({ wallet, marginBelow }: ResponsiveAppBarProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <div className={`z-30 ${marginBelow}  flex justify-center`}>
      <nav
        className=" fixed   mx-auto w-full   border-b-2 border-gray-900 px-0 text-white    backdrop-blur-lg sm:px-8  md:max-w-[85vw]     "
        aria-labelledby="menu-button"
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' }
            }}
          >
            <Image
              src={logo}
              width={130}
              height={130}
              alt="web nexus logo"
              className="sm:mr-16"
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', lg: 'none' },
              color: 'white'
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* Mobile Links */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', lg: 'none' },
                mt: '1px',

                backdropFilter: 'blur(5px)',
                '& .MuiMenu-paper': {
                  backgroundColor: 'var(--mobile-menu-bg)',
                  borderRadius: '8px'
                }
              }}
            >
              {wallet && (
                <MenuItem
                  sx={{
                    transition: 'background 0.3s ease-in-out'
                  }}
                >
                  <HeaderAccountPopover />
                </MenuItem>
              )}

              <Link href="/?destinationChain=nexus-orbit-chain&sourceChain=holesky">
                <MenuItem
                  sx={{
                    width: { sm: '80vw', xs: '90vw' },

                    color: 'white',
                    py: '8px',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '8px',

                    transition: 'background 0.3s ease-in-out',

                    ':hover': {
                      background: '#003F69'
                    }
                  }}
                >
                  Deposit
                </MenuItem>
              </Link>

              <Link href="/rollup">
                <MenuItem
                  sx={{
                    width: { sm: '80vw', xs: '90vw' },

                    color: 'white',
                    py: '8px',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '8px',

                    transition: 'background 0.3s ease-in-out',

                    ':hover': {
                      background: '#003F69'
                    }
                  }}
                >
                  Dashboard
                </MenuItem>
              </Link>

              <Link href="https://docs.nexusnetwork.live/" target="_blank">
                <MenuItem
                  sx={{
                    width: { sm: '80vw', xs: '90vw' },

                    color: 'white',
                    py: '8px',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '8px',

                    transition: 'background 0.3s ease-in-out',

                    ':hover': {
                      background: '#003F69'
                    }
                  }}
                >
                  Docs
                </MenuItem>
              </Link>

              <Link href="https://www.nexusnetwork.live/" target="_blank">
                <MenuItem
                  sx={{
                    width: { sm: '80vw', xs: '90vw' },

                    color: 'white',
                    py: '8px',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '8px',

                    transition: 'background 0.3s ease-in-out',

                    ':hover': {
                      background: '#003F69'
                    }
                  }}
                >
                  Website
                </MenuItem>
              </Link>

              <MenuItem
                sx={{
                  width: { sm: '80vw', xs: '90vw' }
                }}
              >
                <div className="mt-1 flex w-full items-center justify-center p-2 text-white">
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
              </MenuItem>
            </Menu>
          </Box>

          {/* Mobile menu end */}

          {/* web/mobile button and links */}

          <Box
            sx={{
              display: { xs: 'flex', lg: 'none', flexGrow: 1, mr: 2 }
            }}
          >
            <Image
              src={logo}
              width={130}
              height={130}
              alt="mobile nexus logo"
              className=" -ml-12 "
            />
          </Box>

          {/* Web Links */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
            <div className="   flex  space-x-6  text-base  ">
              <button className=" my-2 block  font-normal  capitalize   transition-all  duration-300  ease-in-out  hover:text-[#1377BB]">
                <Link href="/?destinationChain=nexus-orbit-chain&sourceChain=holesky">
                  Deposit
                </Link>
              </button>

              <button className=" my-2 block  font-normal  capitalize   transition-all  duration-300  ease-in-out  hover:text-[#1377BB]">
                <Link href="/rollup">Dashboard</Link>
              </button>

              <button className=" my-2 block  font-normal  capitalize   transition-all  duration-300  ease-in-out  hover:text-[#1377BB]">
                <Link href="https://docs.nexusnetwork.live/" target="_blank">
                  Docs
                </Link>
              </button>

              <button className=" my-2 block  font-normal  capitalize   transition-all  duration-300  ease-in-out  hover:text-[#1377BB]">
                <Link href="https://www.nexusnetwork.live/" target="_blank">
                  Website
                </Link>
              </button>
            </div>
          </Box>

          {wallet && (
            <div className="mr-4  flex w-full  max-w-max  items-center   justify-end ">
              <AddChainButton />
            </div>
          )}

          {wallet && (
            <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
              <HeaderAccountPopover />
            </Box>
          )}
        </Toolbar>
      </nav>
    </div>
  )
}
export default ResponsiveAppBar
