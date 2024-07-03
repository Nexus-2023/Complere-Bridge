import React from 'react'
import { twMerge } from 'tailwind-merge'

import { Toast } from './atoms/Toast'

import 'react-toastify/dist/ReactToastify.css'

export type LayoutProps = {
  children: React.ReactNode
}

export function Layout(props: LayoutProps) {
  return (
    <div className={twMerge('relative flex-col  ')}>
      <div className="relative flex flex-col bg-[var(--background)]  sm:min-h-screen">
        <div className="flex flex-row">
          <main className="grow">{props.children}</main>

          <Toast />
        </div>
      </div>
    </div>
  )
}
