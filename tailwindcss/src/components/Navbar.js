import React from 'react'
import { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdFavorite } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { FaHireAHelper } from "react-icons/fa";
import { AiFillTag } from "react-icons/ai";
import { BsSaveFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
function Navbar() {
    const [nav,setNav]=useState(false)
  return (
    <div className=' max-w-[1640px] m-auto flex justify-between items-center p-4 '>
    <div  className='flex items-center'>
    <div className=' cursor-pointer'>
    <AiOutlineMenu size={34} onClick={()=>setNav(!nav)}/>
    </div>
    <h1 className=' text-3xl sm:text-3xl lg:4xl px-2'>Best<span className=' font-bold'>Eat</span></h1>
   
    <div className=' hidden lg:flex  items-center bg-gray-800 rounded-full p-2 text-[14px] '>
    <p className=' text-white'>Delivery</p>
    <p className=' text-white p-2 bg-slate-400 rounded-full'>Pick Up</p>
    </div>
    </div>
    <div className=' bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[300px] lg:w-[500px] '  >
    <HiOutlineSearch size={25}  />
    <input  className=' bg-transparent w-full p-2 focus:outline-none' type='text' placeholder='Search food' />
    </div> 
    <button className=' border border-black px-5 rounded-xl  bg-black text-white items-center hidden md:flex py-2'><BsFillCartFill size={25} className=' mr-2'/>Cart</button>
    {nav ? <div className=' bg-black/80 w-full  fixed h-screen top-0 left-0'>
    </div> : '' }
    
   
    <div className= {nav ?  'fixed top-0 left-0  h-screen z-10 w-[300px] bg-white duration-300' 
    : 'fixed top-0    z-10 w-[300px] left-[-100%] bg-white duration-300 ' }>
    <AiOutlineClose size={25} className=' absolute right-4 top-4 cursor-pointer' onClick={()=>setNav(!nav)}/> 
    <h2 className=' text-xl p-4'>Best<span className=' font-bold'>Eat</span></h2> 
    <nav>
    <ul className=' flex flex-col p-4 text-gray-800 '>
    <li className='text-xl py-4 flex'><CiDeliveryTruck  size={25} className=' mr-4'/>Orders</li>
    <li className='text-xl py-4 flex'><MdFavorite  size={25} className=' mr-4'/>Favourits</li>
    <li className='text-xl py-4 flex'><FaWallet  size={25} className=' mr-4'/>Walet</li>
    <li className='text-xl py-4 flex'><FaHireAHelper  size={25} className=' mr-4'/>Help</li>
    <li className='text-xl py-4 flex'><AiFillTag  size={25} className=' mr-4'/>Promotions</li>
    <li className='text-xl py-4 flex'><BsSaveFill   size={25} className=' mr-4'/>Best Orders</li>
    <li className='text-xl py-4 flex'><FaUserFriends  size={25} className=' mr-4'/>Invite Friends</li>
    </ul>
    </nav>
    </div>
    </div>
  )
}

export default Navbar