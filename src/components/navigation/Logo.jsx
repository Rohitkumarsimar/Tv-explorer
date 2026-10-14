import React from 'react'
import { Clapperboard } from 'lucide-react';
const Logo = () => {

  return (
    <div className='flex items-center gap-2'>
       <Clapperboard className='text-yellow-400' size={40} />
       <div className='hidden md:block lg:block flex flex-col items-center justify-center'>
        <h1 className='text-yellow-400 font-bold'>TV-Explorer</h1>
        <p className='text-sm  text-yellow-200'>Search.Click.Enjoy</p>
       </div>
    </div>
  )
}

export default Logo
