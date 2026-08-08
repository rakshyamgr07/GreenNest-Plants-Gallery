import React from 'react'

function About() {
  return (
    <div className='relative w-full min-h-full md:min-h-full md:w-full'>
      <img src="/aboutimg.png" alt="" className='w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] object-cover'></img>
      <div className='absolute inset-0 bg-black/30'></div>
      <div className='absolute inset-0 flex flex-col gap-3 justify-center text-white ml-5 w-1/2'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-green-900 '>About GreenNest</h1>
        <p className='mt-5 text-lg text-green-900 text-wrap font-medium'> At GreenNest, we believe plants make life better. We're passionate about bringing greenery to your home and helping you create a healthier, happier lifestyle.</p>
      </div>
    </div>
  )
}

export default About
