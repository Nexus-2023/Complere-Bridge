import Image from 'next/image'
import * as React from 'react'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import MoreVertIcon from '@mui/icons-material/MoreVert'

import bitcoin from '@/icons/BridgeAssets/bitcoin.svg'
import bnb from '@/icons/BridgeAssets/bnb.svg'
import cosmos from '@/icons/BridgeAssets/cosmos.svg'
import eth from '@/icons/BridgeAssets/eth.svg'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
const AssetData = [
  {
    token: bitcoin,
    currentWeight: '41.3 %',
    EthAmount: '256.8 ETH',
    TargetWeight: '45 %'
  },
  {
    token: eth,
    currentWeight: '21.3 %',
    EthAmount: '34.45 ETH',
    TargetWeight: '18 %'
  },
  {
    token: cosmos,
    currentWeight: '12.3 %',
    EthAmount: '256.8 ETH',
    TargetWeight: '20 %'
  },
  {
    token: bnb,
    currentWeight: '41.3 %',
    EthAmount: '256.8 ETH',
    TargetWeight: '45 %'
  }
]
export function AssetTable() {
  return (
    <>
      <div className="mt-8">
        <div className="flex w-full items-center   justify-around border-b-2 border-[#C9CFDA] py-2  text-lg font-[400] text-black">
          <h1 className="">Token</h1>
          <h1 className="">Current Weight</h1>
          <h1 className="min-w-32">Eth Amount</h1>
          <h1 className="">Target Weight</h1>
        </div>

        {AssetData.map((asset, index) => (
          <AssetRow
            key={index} // It's recommended to use a unique key for each list item
            token={asset.token}
            currentWeight={asset.currentWeight}
            EthAmount={asset.EthAmount}
            TargetWeight={asset.TargetWeight}
          />
        ))}
      </div>
    </>
  )
}

export function DeListTable() {
  return (
    <>
      <div className="mt-8">
        <div className="flex w-full items-center   justify-around   border-b-2  border-[#C9CFDA] py-2 text-lg font-[400] text-black">
          <h1 className="">Token</h1>
          <h1 className="">Current Weight</h1>
          <h1 className="">Eth Amount</h1>
          <h1 className=" ">Target Weight</h1>
        </div>

        {AssetData.map((asset, index) => (
          <DelistRow
            key={index}
            token={asset.token}
            currentWeight={asset.currentWeight}
            EthAmount={asset.EthAmount}
            TargetWeight={asset.TargetWeight}
          />
        ))}
      </div>
    </>
  )
}

interface AssetRowProps {
  token: string
  currentWeight: string
  EthAmount: string
  TargetWeight: string
}

export function AssetRow({ ...props }: AssetRowProps) {
  return (
    <div className="mt-2 flex w-full     items-center justify-around border-b-2 border-[#C9CFDA] py-2 text-lg font-[400] text-black">
      <Image src={props.token} alt="Bridgetoken" />
      <h1 className="">{props.currentWeight}</h1>
      <h1 className="">{props.EthAmount}</h1>
      <h1 className="">{props.TargetWeight}</h1>
    </div>
  )
}
export function DelistRow({ ...props }: AssetRowProps) {
  return (
    <div className="mt-2 flex w-full   items-center justify-between border-b-2 border-[#C9CFDA] py-2 text-lg font-[400] text-black">
      <Image src={props.token} alt="Bridgetoken" />
      <h1 className="">{props.currentWeight}</h1>
      <h1 className="">{props.EthAmount}</h1>
      <h1 className="">{props.TargetWeight}</h1>
    </div>
  )
}

export function WhitlistAssetRow({ ...props }: AssetRowProps) {
  return (
    <div className="mt-2 flex w-full   items-center justify-between border-b-2 border-[#C9CFDA] py-2 text-lg font-[400] text-black">
      <Image src={props.token} alt="Bridgetoken" />
      <h1 className="">{props.currentWeight}</h1>
      <h1 className="">{props.EthAmount}</h1>
      <h1 className="">{props.TargetWeight}</h1>

      <ChangeLimitButton />
    </div>
  )
}
 
export function DeListButton() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <Button
        // variant="contained"
        variant="outlined"
        onClick={handleClickOpen}
        // sx={{ color: "white", backgroundColor: "#0375C9" }}
        sx={{ color: '#0375C9', fontSize: '14px', textTransform: 'capitalize' }}
      >
        DeList
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Are you sure you want to delist stETH ?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Delisting will unstake all stETH assets and convert to ETH
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export function WhiteListButton() {
  const [open, setOpen] = useState(false)
  const [isValidAddress, setIsValidAddress] = useState(true) // Flag to track if address is valid

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const formJson = Object.fromEntries(formData.entries())
    const addr = formJson.text as string

    const ethereumAddressPattern = /^0x[a-fA-F0-9]{40}$/

    if (ethereumAddressPattern.test(addr)) {
      console.log('Valid Ethereum address:', addr)

      setIsValidAddress(true)

      handleClose()
    } else {
      console.log('Invalid Ethereum address:', addr)
      setIsValidAddress(false)
    }
  }

  return (
    <React.Fragment>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          color: 'white',
          backgroundColor: '#0375C9',
          fontSize: '18px',
          paddingX: '2.5rem',
          textTransform: 'capitalize'
        }}
      >
        WhiteList
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>WhiteList Token</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter the WhiteListing token contract address
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="text"
              label="Contract Address"
              type="text"
              fullWidth
              variant="standard"
              error={!isValidAddress}
              helperText={!isValidAddress ? 'Invalid Ethereum address' : ''}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Confirm</Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  )
}

 

export function ChangeLimitButton() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <Button
        // variant="contained"
        variant="outlined"
        onClick={handleClickOpen}
        // sx={{ color: "white", backgroundColor: "#0375C9" }}
        sx={{ color: '#0375C9', fontSize: '14px', textTransform: 'capitalize' }}
      >
        Change Limit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Change Limit'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Change Limit To any abc asset
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
