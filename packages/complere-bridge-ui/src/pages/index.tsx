import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Loader } from '../components/common/atoms/Loader'


const App = dynamic(() => import('../components/App/App'), {
  ssr: false,
  loading: () => (
    <>
      <div className="h-12 w-full lg:h-16" />
     
        <div className="fixed inset-0 m-auto h-[44px] w-[44px]">
          <Loader size="large" color="white" />
        </div>
      
    </>
  )
})

export default function Index() {

  return <App />
}
