import React from 'react'
import profilePic from '../../assets/images/profilePic.jpg'
function Resume() {
  return (
    <div id='resume' className='flex'>
    <div className='bg-blue-100 w-1/2 p-4'>
    <h2  className=' text-2xl Light font weight text-black-500 mb-3'> MY RESUME</h2>
    <h3 className="text-xl Light font weight text-blue-500 m-3">PROFILE</h3>
      <div className='m-3 p-2 flex'>
        <div className='w-1/2 mr-2'>
      <img src={profilePic} alt="Icon" className='rounded-full w-a h-auto'/>
       
        </div>
        <div className='w-1/2'>
        <p className='font-semibold text-xl'>BRENDA KARIMI</p> 
        <p className='font-medium'>
      Computer Scientist</p>
      <p >Detail-oriented Full Stack Web Developer.
      </p>
    
      </div>
        </div>
      <div className='mb-4'>
        <h3 className="text-xl Light font weight text-blue-500">CONTANT</h3>
<p><span className='font-semibold'>Phone:</span> 0796931627</p>
<p><span className='font-semibold'>LinkedIn:</span> <a href='https://www.linkedin.com/in/brenda-karimi-872788288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
<span  className="block text-blue-500 truncate">https://www.linkedin.com/in/brenda-karimi-872788288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app</span>
</a></p>
<p><span className='font-semibold'>Email:</span>  <a href='brendathiaini31@gmail.com'>brendathiaini31@gmail.com</a></p>
        </div>
      
<div>
      <h3  className='text-xl Light font weight text-blue-500'>EDUCATION</h3>
      <h4 className='font-medium'>2023- Till Date</h4>
      <p> Unversity: Bachelor in Science Computer Science</p>
      <h4 className='font-medium'> 2019-2022</h4>
      <p> High School: Attained the Kenya Certificate of Secondary Education- with an mean grade of B+ </p>
      <h4 className='font-medium'>2010-2018</h4>
      <p> Attained Kenya Certificate of Primary Education -with a mean grade of A-</p>
      </div> 
    </div>
    <div className='bg-blue-100 w-1/2 p-4 ' >
      <div className='mb-5'>
            <div>
        <h3  className='text-xl Light font weight text-blue-500'>WORK EXPRIENCE</h3>
        <h4  className='text-s Light font weight font-medium'>Lewa conservancy, Education Program: Digital Content Curator, Digital Skills Trainer</h4>
        <h5  className='text-s Light font weight text-blue-400'>May 2024-August 2024</h5>
        <p>In my role as a Digital Content Curator, I was responsible for transforming traditional 
          hardcopy curriculum books into interactive digital versions using HTML and CSS. This involved creating engaging content that included videos rather than just static links. Additionally, I enhanced the user experience by implementing an intuitive navigation system, allowing users to easily access specific topics by clicking on the relevant titles in the table of contents. 
        This project aimed to make the learning experience more dynamic, user-friendly, and accessible.<br/>
        As a Digital Skills Trainer, my role was to introduce learners to digital world by training them the basics of typing and programming.
</p>

      </div>
      </div>
<div className='mb-4 '>
  <h3  className='text-xl Light font weight text-blue-500'>SKILLS</h3>
  <p>HTML, CSS</p>
  <p>Good with design principles</p>
  <p>Good communication skills </p>
</div>
<div className='mb-5'>
        <h3  className='text-xl Light font weight text-blue-500 '>HOBBIES</h3>
<p>
Exploring design trends<br/>
Photographing
</p>
      </div>

    </div>
    
    </div>
  )
}

export default Resume