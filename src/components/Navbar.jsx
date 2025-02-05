import React, { useState } from 'react'
import { IoMdClose, IoMdMenu } from "react-icons/io";
import CV from '../assets/cv.pdf'
import {Link} from 'react-scroll'

const Navbar = () => {

const [menu,setMenu]=useState(false)


    const items=[
        {id:1, text:"About",to:"about"},
        {id:2, text:"Services" ,to:"services"},
        {id:3, text:"Work",to:"work"},
        
        {id:4, text:"Contact" ,to:"contact"}
    ]
  return (
    <div className='bg-yellow-50 text-black w-full'>
        <div className='container mx-auto p-4 hidden md:flex justify-between items-center'>
            <div className='text-black text-xl md:text-2xl font-bold flex items-center gap-1'>
            <span className='text-black'>VASISHT</span>
            <span className='text-yellow-500'>TV</span>
            </div>            <div className='hidden md:flex space-x-6 items-center list-none text-lg'>
       {items.map(({id, text,to})=>(
        <li key={id} className='hover:text-yellow-500 duration-200 cursor-pointer'>
            <Link 
           to={to} 
           smooth={true} 
           duration={500}>
            {text}
            </Link> 
            </li>
       ))}
            </div>
            <a className='text-lg bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400'
             href={CV} download="cv.pdf">
                Download cv
                </a>
        </div>
        <div className='flex w-full  justify-between items-center md:hidden p-2 shadow-sm'>
            <div className='text-xl font-bold flex items-center gap-2'>
                <span className='text-black'>VASISHT</span>
                <span className='text-yellow-500'>TV</span>
            </div>

    <div className='flex justify-center items-center gap-2'>
   <div onClick={()=>setMenu(!menu)}>
  {menu ? <IoMdClose size={30} className='text-black' /> : <IoMdMenu  size={30} className='text-black' />}
   </div>
    </div>

        </div>
    <div>
        {menu && (
            <div className='md:hidden bg-yellow-50 py-6 justify-center items-center text-black flex flex-col list-none shadow-sm gap-2 text-lg'>
                 {items.map(({id, text,to})=>(
        <li key={id} className='hover:text-yellow-500 duration-200 cursor-pointer border-b w-11/12'>
           <Link 
           to={to} 
           smooth={true} 
           duration={500}>
            {text}
            </Link> 
            </li>
       ))}
   <a className='text-lg bg-yellow-500  mt-4 text-black px-4 py-2 rounded hover:bg-yellow-400'
             href="{cv}" download="cv.pdf">
                Download cv
                </a>


            </div>
        )}
    </div>

    </div>
  )
}

export default Navbar