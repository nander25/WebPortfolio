import React from 'react'

export default function Navbar() {
    const links = [
        ['LinkedIn', 'https://www.linkedin.com/in/noah-anderson25/'],
        ['GitHub', 'https://github.com/nander25']
    ]

  return (
    <div className='sticky flex justify-between items-center gap-4 sm:gap-8 p-4 text-xs sm:text-sm'>
        <a className='font-bold text-base sm:text-lg' href='/'>NA</a>
        <div className='flex items-center gap-4'>
            {links.map(link => {
                return [
                    <a href={link[1]} target="_blank">{link[0]}</a>
                ] 
            })}
        </div>
    </div>
  )
}
