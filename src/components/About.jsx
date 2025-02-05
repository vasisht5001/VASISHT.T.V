import React from 'react'
import aboutImg from '../assets/aboutImg.png'
import CV from '../assets/cv.pdf'
import { FaRegHandshake } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { BsDownload } from "react-icons/bs";
const About = () => {
  return (
    <div id='about' className='py-16 bg-gray-50'>
    <div className='container mx-auto px-6 lg:px-14 flex flex-col md:flex-row items-center justify-between '>
        {/* left section */}
        <div className='w-75 md:w-85 mb-8 md:mb-0 md:ml-30'>
            <img src={aboutImg} alt="about me" />
        </div>
        {/* right section */}
        <div className='w-full md:w-1/2 md:pl-12'>
<h3 className='text-yellow-500 font-semibold text-lg uppercase mb-4 '>A bit</h3>
<h2 className='text-4xl md:text-6xl font-bold text-gray-800 mb-6'>About me</h2>
<p className='text-gray-600 mb-6'>I am a passionate MERN stack developer with over 2 years of in-depth research and
     self-driven exploration in web development. My expertise lies in building dynamic, user-friendly applications
      using MongoDB, Express.js, React.js, and Node.js. I thrive on solving complex problems and continuously
       enhancing my skills to stay ahead in the ever-evolving tech landscape.
 </p>
 <div className="flex flex-wrap mb-6">
    <div className='flex items-center w-1/2 mb-4'>
<FaRegHandshake className='text-yellow-500 text-5xl mr-4'/>
<div className="">
    <h4 className='text-gray-700 font-semibold '>fresher</h4>
</div>
    </div>


 </div>

 <div className="flex flex-wrap mb-6">
 <div className='flex items-center w-1/2 mb-4'>
<MdSupportAgent className='text-yellow-500 text-5xl mr-4'/>
<div className="">
    <h4 className='text-gray-700 font-semibold '>24x7</h4>
    <p className='text-gray-700'> customer support</p>
</div>
    </div>
    </div>
    <div className='flex items-center '>
    <a href='https://wa.me/7356289776' className='bg-yellow-500 px-8 py-3 rounded-lg mr-4 hover:bg-yellow-400'>Hire Me</a>
    <a className='flex items-center text-yellow-500 font-semibold' href={CV} download="cv.pdf">Download CV <BsDownload className='ml-2 text-lg'/></a>
</div>

        </div>


    </div>
    </div>
  )
}

export default About