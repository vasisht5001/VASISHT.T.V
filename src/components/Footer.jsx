import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white mt-12  flex flex-col items-center '>
        <div className='mt-10 bg-yellow-500 h-1 w-3/4 mb-10'></div>
      <div className='container flex flex-col md:flex-row  px-5 '>
       

        <div className='flex  justify-center md:w-full '>
        


          <div className='flex flex-col items-center justify-center'>
        
          <h3 className='font-medium text-gray-700 text-2xl  '>Social Connections</h3>
          
          <ul className='text-gray-500 space-y-2 flex gap-5 items-center'>
            
            <li><a href="https://www.linkedin.com/in/vasisht-tv/"><img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG8.png" className='size-8' alt="" srcset="" /></a></li>
            <li><a href="https://www.instagram.com/v_a_s_i_s_h_t/"><img src="https://static.vecteezy.com/system/resources/previews/023/986/555/original/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png" alt="" className='size-8' srcset="" /></a></li>
            <li><a href="https://wa.me/7356289776"><img src="https://s3.amazonaws.com/freebiesupply/large/2x/whatsapp-logo-vertical.png" alt="" className='size-20' srcset="" /></a></li>
          </ul>
          
          </div>
        </div>
      </div>

      <div className='mt-10 bg-yellow-500 h-2 w-full'></div>
    </div>
  )
}

export default Footer
