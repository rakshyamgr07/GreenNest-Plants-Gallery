import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTiktok } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

function Footer() {
    return (
        <div className='bg-gray-400 flex flex-col '>
           <div className='bg-gray-400 flex flex-col'>
             <div className='flex flex-col justify-center items-center  md:flex-row md:space-evenly mt-4'>

                <div className='flex flex-col gap-2 justify-center'>
                    <img src="/logo1.png" alt="" className='h-12 w-12 rounded-full' />
                    <h1 className='text-green-900 font-bold text-xl sm:text-2xl md:text-3xl '>GreenNest</h1>
                    <p className='italic text-green-900 font-medium text-base sm:text-xl md:text-2xl'>Bring Nature Into Your Home</p>
                </div>

                <div className='text-green-900 flex-flex-col m-4 p-8 gap-2'>
                    <h1 className='font-bold text-xl sm:text-2xl md:text-3xl '>Quick Links</h1>
                    <div className='font-medium text-sm flex flex-col gap-3 sm:text-base md:text-xl '>
                        <a href="/" >Home</a>
                        <a href="/blogs">Blogs</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </div>

                </div>
                <div className='flex flex-col ml-2 gap-4  h-full m-10 p-4 ml-20'>
                    <h1 className='text-green-900 font-bold text-3xl'>Contact Us</h1>
                    <div className='flex flex-row  items-center gap-2 font-medium'>
                        <FaLocationDot className='text-green-700'></FaLocationDot>Kathmandu, Nepal
                    </div>

                    <div className='flex flex-row  items-center gap-2  font-medium'>
                        <FaEnvelope className='text-green-700'></FaEnvelope>info@greennest.com
                    </div>

                    <div className='flex flex-row  items-center gap-2 font-medium'>
                        <FaPhone className=' text-green-700'></FaPhone>+977 9763631696
                    </div>


                </div>

                <div  className='flex flex-col ml-2 gap-4  h-full m-10 p-4 ml-20'>
                    <h1 className='text-green-900 font-bold text-xl sm:text-2xl md:text-3xl ' > Follow Us</h1>
                    <div className='flex flex-row text-green-700 gap-4 ml-4 justify-center items-center text-xl p-4'>

                        <a href="https://facebook.com"><FaFacebook></FaFacebook></a>
                        <a href="https://instagram.com"><FaInstagram></FaInstagram></a>
                        <a href="https://tikyok.com"><FaTiktok></FaTiktok></a>
                    </div>
                </div>


           </div>
           <div className="text-sm items-center flex justify-center text-center font-bold  text-black-900 bg-gray-500 h-12">
          © 2026 GreenNest. All Rights Reserved
        </div>

            </div>
</div>

            )
}

            export default Footer
