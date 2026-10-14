import React from 'react'
import { useRef } from 'react'
import Typewriter from '../components/home-page/Typewriter'
const Home = () => {
  window.addEventListener("scroll",()=>{
    console.log(window.scrollY)
  })
  return (
    <div className='h-1000 bg-blue-500'>
      Helo homeee
      <Typewriter/>
    </div>
  )
}

export default Home
