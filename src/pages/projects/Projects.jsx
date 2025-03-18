import React from 'react'

function Projects() {
  return (
    <div id='project' className='flex bg-gray-50 my-6 h-auto'>
        
    <div className='flex-auto p-5 text-left border-2 border-black-500 rounded-lg'>
    <h1 className=' text-2xl pb-2'>PROJECTS</h1>
   <p className='font-sans'> <span className='font-semibold'> Project 1: Agrisense</span><br/>
    Worked on the front-end of a group project, designing and styling the login and sign-up pages using HTML and CSS. The result was a visually appealing and user-friendly design.
   </p>
    </div>
  
    <div className='relative flex-auto p-5 text-left border-2 border-black-500 rounded-lg'>
   <p className='font-sans'> <span className='font-semibold'>PROJECT 2: My Portfolio</span><br/>
   Designed my portfolio from scratch using HTML, Tailwind CSS, and React for the first time, and the result turned out great.
   </p>
   </div>
     </div>
     
  )
}


export default Projects