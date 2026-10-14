import { Star } from 'lucide-react'
const Favourite = () => {
  return (
    <div className='p-2 bg-gray-900 rounded-full w-fit relative group hidden md:block'>
      <Star className=' text-yellow-300'/>
      <div className='hidden absolute group-hover:block space-y-2 p-2 rounded-2xl bg-black w-screen top-10 -right-66'>
        <p className='p-2 bg-black text-yellow-500 hover:bg-gray-800'>Hello</p>
                <p className='p-2 bg-black text-yellow-500 hover:bg-gray-800'>Hello</p>

        <p className='p-2 bg-black text-yellow-500 hover:bg-gray-800'>Hello</p>

        <p className='p-2 bg-black text-yellow-500 hover:bg-gray-800'>Hello</p>


      </div>
    </div>
  )
}

export default Favourite
