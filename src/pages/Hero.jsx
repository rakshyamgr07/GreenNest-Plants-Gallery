import React from 'react'

function Hero() {
  return (
    <div className='relative w-full min-h-full md:w-full md:min-h-full'>
       <img src="/homeimg.png" alt="" className='w-full  h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] object-cover mt-18 '>
        </img>
         <div className="absolute inset-0 bg-black/30"></div>

          <div className='absolute inset-0 flex flex-col justify-center text-white ml-5 w-[200px] md:w-full '>
            <h1 className='text-4xl sm:text-5xl md:text-7xl font-bold text-green-900 max-w-2xl'>Bring Nature Into Your Home</h1>
            <p className='mt-3 text-lg text-green-900'>Discover beautiful plants that purify your space and uplift your soul</p>
            <button className='mt-5 bg-green-900 px-6 py-3 rounded-lg w-40 transition duration-300 hover:scale-105 hover:bg-green-700 '>Learn More</button>
         
        </div>
      
    </div>
  )
}

export default Hero
