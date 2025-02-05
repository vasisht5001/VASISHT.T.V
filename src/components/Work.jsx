import React from 'react'
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'
import work4 from '../assets/work4.png'
import work5 from '../assets/work5.png'
import work6 from '../assets/work6.png'
import work7 from '../assets/work7.png'





const testimonials=[
    {
        name:"unknown",

    }
]



const caseStudies=[
    {
        id:1,
        title:"chat application",
        description:"this is a chat application build using  MERN + Socket.io + TailwindCSS + Daisy UI ,Authentication && Authorization are done  with JWT , Real-time messaging is made possible  with Socket.io ,Online user status is added in this project like a filter button . Global state management is done with Zustand and  Error handling both on the server and on the client is done perfectly  ",
        workImg:work7,
        link:"https://github.com/vasisht5001/mern-stack-chat-application.git",
      
        preview: "https://mern-stack-chat-application-2bq3.onrender.com"
         
        
    },

        {
            id:2,
            title:"blog application",
            description:"this is mern stack blog application. it's name is explore kerala in which we can add details about the tourist places in kerala.if the user is not signed in they can only read the blogs.But if they signed in they can add comments also.and can update their profile also. Acoording to this website only an admin can post,edit, delete the blog and admin can also delete the users acting against the policy. You can download the source code from the below given link",
            workImg:work1,
            link:"https://github.com/vasisht5001/Explore-kerala-github.git",
          
            preview: "https://explore-kerala-frontend.onrender.com/"
             
            
        },
        {
            id:3,
            title:"Digital Clock",
            description:"This is a simple Digital clock build using html,css,and javascript",
            workImg:work2,
            link: "https://github.com/vasisht5001/digital-clock",
            preview:"http://vasisht5001.github.io/digital-clock/"
        },
        {
            id:4,
            title:"Stop Watch",
            description:"This is a simple stop watch build using html,css,and javascript",
            workImg:work3,
            link: "https://github.com/vasisht5001/stop-watch.git",
            preview:"http://vasisht5001.github.io/stop-watch/"
        },
        {
            id:5,
            title:"Dice game",
            description:"This is a simple Dice game build using html,css,and javascript",
            workImg:work4,
            link: "https://github.com/vasisht5001/dice-game.git",
            preview:"http://vasisht5001.github.io/dice-game/"
        },
        {
            id:6,
            title:"Netflix clone(static)",
            description:"This is a clone website static website of netflix which is build using html, css and used the bootstrap frame work also",
            workImg:work5,
            link: "https://github.com/vasisht5001/netflix-3.git",
            preview:"http://vasisht5001.github.io/netflix-3/"
        },
        {
            id:7,
            title:"Calculator",
            description:"This is a simple calculator build using html,css,and javascript",
            workImg:work6,
            link: "https://github.com/vasisht5001/simple-calculator.git",
            preview:"https://vasisht5001.github.io/simple-calculator/"
        },
    ]


const Work = () => {
    
  return (
    <div id='work' className='mx-auto px-4 py-12'>
        <h3 
        className='text-yellow-500 font-semibold text-center uppercase mb-2'>Work

        </h3 > 

        <h2 className='text-center font-bold text-4xl mb-12'>My Case Studies</h2>
        {caseStudies.map((study,index)=>(
            <div 
            key={study.id} className={`flex flex-col lg:flex-row items-center justify-between mb-16 lg:mb-24 ${
         index % 2===0 ? "lg:flex-row-reverse" : ""}`}>
            <div className='w-full lg:w-1/3 p-4'>
       <img src={study.workImg} alt=""  className='w-full h-full object-cover rounded-lg shadow-lg'/>
            </div>
<div className="w-full lg:w1/2 p-4">
    <div className='flex items-center mb-4 '>
        <span className='text-3xl font-bold text-yellow-500 mr-2'>{`0${index+1}`}</span>
        <h3 className='text-2xl font-semibold'>{study.title}</h3>
    </div>
    <p className='text-gray-600 mb-4'>{study.description}</p>
    <div className='flex gap-2'>
    <button  className='border-2 border-yellow-500 text-yellow-500 px-3 py-2 rounded-full hover:bg-yellow-500 hover:text-white'><a href={study.link}>Source code</a></button>
    <button  className='border-2 border-yellow-500 text-yellow-500 px-3 py-2 rounded-full hover:bg-yellow-500 hover:text-white'><a href={study.preview}>preview</a></button>
</div>
</div>

            </div>
        ))}
    </div>
  );
}

export default Work