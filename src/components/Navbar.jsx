import React from 'react'

export default function Navbar() {
    const links = [
        ['LinkedIn', 'https://www.linkedin.com/in/noah-anderson25/'],
        ['GitHub', 'https://github.com/nander25']
    ]

  return (
    <div className='sticky flex font-mono bg-black justify-between items-center gap-4 sm:gap-8 p-3 text-cyan-400 text-xs sm:text-sm'>
        <a className='text-bold text-sm sm:text-base' href='/'>N A</a>
        <div className='flex items-center gap-5 '>
            {links.map(link => {
                return [
                    <a href={link[1]} target="_blank" className='rounded-md p-1 hover:bg-slate-800'>{link[0]}</a>
                ] 
            })}
        </div>
    </div>
  )
}
