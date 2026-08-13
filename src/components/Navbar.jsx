import React, { useState } from 'react'
import {navLinks} from '../constants/navLinks'
import {Link,NavLink} from 'react-router-dom'
import {HiOutlineMenu,HiOutlineX} from 'react-icons/hi'
function Navbar() {
  const [open,setOpen] = useState(false)//use to open and close the mobile menu
  const scrollTop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  return (
    <nav className='bg-green-900  fixed top-0 w-full h-18 font-bold z-50'>
        <div className='flex justify-between items-center'>
          <NavLink to='/' className='ml-2 p-3 flex flex-row justify-center items-center gap-2'>
            <img src="/logo1.png" alt="" className='h-10 w-10 object-contan rounded-full '/>
           <h1 className='italic text-white tracking-wide'>GreenNest Plants Gallery</h1>
          </NavLink>

          <button onClick={()=> setOpen(!open)} className='bg-blue-500 p-2 font-bold text-xl mr-5 md:hidden'>{open?<HiOutlineX/>:<HiOutlineMenu/>}</button>

          <ul className='md:flex hidden gap-5 mr-10 text-white'>
            {
              navLinks.map((link,index)=>(
                <li key={index}>
                  <Link onClick={scrollTop} to ={link.path}>{link.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>

        {
        open &&
        <ul className='bg-gray-300 flex flex-col md:hidden gap-5 mr-10 p-4 border border-gray-500 text-green-900 w-full '>
          {
            navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path} onClick={() => {
                   { ScrollTop }
                  setOpen(false)

                }

                }>{link.name}</Link>
              </li>

            ))
          }
        </ul>
      }


    </nav>
  )
}

export default Navbar
