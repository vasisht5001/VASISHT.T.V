import React from 'react'
import service1 from '../assets/service1.jpg'
import service2 from '../assets/service2.jpg'
import service3 from '../assets/service3.jpg'
import { FaArrowRight } from "react-icons/fa";
const Services = () => {
  return (
    <div id='services' className='bg-white py-6'>
        <div className='container mx-auto px-6 lg:px-24 text-center'>
            <div className='mb-12'>
              <h3 className='text-yellow-500 font-semibold text-lg uppercase mb-2'>Services</h3>
            <h2 className='text-4xl font-bold text-gray-800 mb-4'>Check my services</h2>  
            </div>
            
        </div>

<div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
<div className='bg-gray-50 rounded-lg shadow-lg p-6'>
    <img src={service1} alt="service1" className='w-full h-48 object-cover rounded-lg mb-4' />
    <h3 className='text-2xl font-semibold text-gray-800 mb-2'>Blog application</h3>
    <p className='text-gray-600 mb-2'>Unlock the power of seamless blogging with our MERN stack blog application! Crafted for performance and scalability, our solution offers a
      user-friendly interface, dynamic content management, and robust security. Elevate your online presence with a customized blog that engages your audience and grows with your needs.
           </p>
</div>
<div className='bg-gray-50 rounded-lg shadow-lg p-6'>
<img src={service2} alt="service1" className='w-full h-48 object-cover rounded-lg mb-4' />
    <h3 className='text-2xl font-semibold text-gray-800 mb-2'>portfolio website</h3>
    <p className='text-gray-600 mb-2'>"Showcase your skills and achievements with a stunning, custom-built portfolio website. I create sleek, responsive, and professional portfolios
      that highlight your work, impress clients, and boost your online presence. Let’s build a website that truly represents you!"
           </p>
</div>
<div className='bg-gray-50 rounded-lg shadow-lg p-6'>
<img src={service3} alt="service1" className='w-full h-48 object-cover rounded-lg mb-4' />
    <h3 className='text-2xl font-semibold text-gray-800 mb-2'>ecommerce website</h3>
    <p className='text-gray-600 mb-2'>"Launch your online store with a powerful, high-performance MERN stack eCommerce application. I build secure, scalable, and user-friendly
      platforms with seamless payment integration, intuitive navigation, and a smooth shopping experience. Let’s bring your eCommerce vision to life!"
           </p>
</div>

</div>
<div className='mt-8 text-right'>
 <a className='flex items-center justify-end
  text-yellow-500 font-semibold hover:text-yellow-400' 
 href="">Explore All Services <FaArrowRight className='ml-2'/>
  </a>
</div>

    </div>
  )
}

export default Services
