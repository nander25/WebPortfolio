import React from 'react'
import Introduction from './Introduction'

export default function Main() {
  return (
    <div className="bg-aiArt md:bg-slate-100 bg-left-top bg-no-repeat grid sm:flex items-top p-10 grid-rows-3">
        <div className='flex-shrink sm:basis-2/5'/>
        <Introduction/>
    </div>
  )
}
