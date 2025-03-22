import React from 'react'
import heroImage from './hero.png'
export default function Hero() {
  return (
    <div className="h-[75vh]   flex">
      
      {/* here we take two width one for text and other for image */}
      {/* width : 3/6 of 100% which mens occupy 50% of total width */}
      <div className=" w-full lg:w-3/6 flex flex-col items-center lg:items-start justify-center"><h1 className='text-4xl lg:text-6xl font-semibold text-yellow-100 text-center lg:text-left'>Unlock the Boundless World of Stories</h1>
      <p className='mt-4 text-xl text-zinc-300 text-center lg:text-left'>Explore limitless tales, profound knowledge, and endless inspiration on every page.</p>
      <div className='mt-10'>
      <button className='text-yellow-100 text-xl  lg:text-2xl font-semibold border border-yellow-100 px-10 py-4 hover:bg-zinc-800 rounded-full '> Discover Books</button>
      </div>
    
      </div>
      <div className=" w-full lg:w-3/6 h-auto lg:h[100%] flex items-center justify-center">
      <img src={heroImage} alt="hero" />
      </div>
    </div>
  )
}
