import React from 'react'
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Swal from 'sweetalert2'
const Contact = () => {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "37a8dfed-649d-4197-9d12-2b97af93233a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "message recieved successfully!",
        icon: "success"
      });
    }
  };


  
  return (
    <div id='contact'  className='flex flex-col md:flex-row items-center justify-center py-12 px-4 md:px-12 lg:px-24 bg-gray-50 bg-gradient-to-t from-white to-yellow-50'>
        {/* left section */}
        <div className='flex flex-1 flex-col px-6 mb-14'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-gray-900'>Contact Me</h2>
            <p className='mb-6 text-gray-600'>We are committed to processing the information to contact you and discuss your projects  </p>

            <div>
                <div className='space-y-4 text-gray-700'>
         <FiMail className='text-yellow-500 size-6'/>
         <span>vasishttv8@gmail.com</span>
                </div>

                <div className='space-y-4 text-gray-700'>
         <FiMapPin className='text-yellow-500 size-6'/>
         <span>Kozhikode,kerala,India</span>
                </div>

                <div className='space-y-4 text-gray-700'>
         <FiPhone className='text-yellow-500 size-6'/>
         <span>+91-07356289776</span>
                </div>
            </div>

        </div>
        {/* right section */}
        <div className='flex items-center justify-center w-11/12 max-w-screen-sm bg-white shadow-lg rounded-lg p-6'>
          <form onSubmit={onSubmit}  action="#" method='POST' className='w-11/12 space-y-4'>
            <div>
           <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name
            <span className='text-red-500'>*</span>
           </label>
           <input 
           type="text" 
           id='name'
           name='name'
           required
           placeholder='your name'
           className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-500'
           
           />
            </div>
  <div>
  <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Email
            <span className='text-red-500'>*</span>
           </label>
           <input 
           type="email" 
           id='email'
           name='email'
           required
           placeholder='your email address'
           className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-500'
           
           />
  </div>
  <div>
  <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Message
            <span className='text-red-500'>*</span>
           </label>
           <textarea 
           name="message" 
           id="message"
           rows="4"
           className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-500'
           placeholder='type your enquiries here'
           >
            

           </textarea>
  </div>

  <div>
    <button type='submit' className='w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400  focus:ring-offset-2'>Submit</button>
  </div>

          </form>
        </div>
    </div>
  )
}

export default Contact
