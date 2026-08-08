import React from 'react'

function Blogs() {
  return (
    <div className='flex flex-col justify-center items-center '>
      <h1 className='font-bold text-green-900 tracking-wide text-4xl p-4'>Plants Care Tips & Blog</h1>
<div className='flex flex-col justify-between gap-4 m-4 p-4 border border-gray-300 rounded-md shadow-xl/30 h-full'>
<div className='flex flex-row '>
      
      <div className='flex flex-col border border-gray-300  shadow-xl/10 rounded-md p-2 m-3 gap-4 w-1/3 h-[300px] md:h-[300px] lg:h-[400px]'>
        <img src="/plantcareimg.png" alt="" className='rounded-sm '/>
        <p className='font-bold text-green-900 text-lg'>How to Care for indoor Plants</p>
        <span className='text-gray-500 text-sm'>May 12, 2024</span>
      </div>

      <div className='flex flex-col border border-gray-300 shadow-xl/10 rounded-md p-2 m-3 gap-4 w-1/3 h-[300px] md:h-[300px] lg:h-[400px]'>
          <img src="/lowlightplant.png" alt=""   className='rounded-sm '/>
          <p  className='font-bold text-green-900 text-lg'>Best Low Light Plants for Home</p>
          <span className='text-gray-500 text-sm'>September 28, 2006</span>
      </div>

      <div className='flex flex-col border border-gray-300 shadow-xl/10 rounded-md p-2 m-3 gap-4 w-1/3 h-[300px] md:h-[300px] lg:h-[400px]'>
        <img src="/waterplant.png" alt=""  className='rounded-sm ' />
        <p  className='font-bold text-green-900 text-lg'>Watering Plants :
          Tips & Tricks
        </p>
          <span className='text-gray-500 text-sm'>April 24, 2022</span>
      </div>
      </div>
<a href="#" className='text-center text-green-900 font-medium'>View All Articles </a>
      
</div>

    </div>
  )
}

export default Blogs
