import React from 'react'
import { Search } from 'lucide-react';

import { useState } from 'react'
const SearchBar = () => {
    const [search, setSearch] = useState("")
    function handleSubmit(e){
        e.preventDefault();
        console.log("Searched")
    }
  return (
    <div className='lg:w-2xl'>
        <form onSubmit={handleSubmit} className='flex gap-2'>
            <input type="text" placeholder='Enter a movie/show name...' value={search} onChange={(e)=>setSearch(e.target.value)} className='h-10 py-2 px-5 w-full bg-gray-700 hover-shadow-sm rounded-full text-yellow-200 active:bg-gray-800 text-white outline-none border border-yellow-100/50 focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1'/>

            <button className='p-2 bg-gray-800 rounded-full hover:bg-gray-900 transition-all duration-300'>
                <Search height={20} className='text-yellow-200'/>
            </button>
        </form>

    </div>
  )
}

export default SearchBar
