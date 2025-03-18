import React from 'react'
import downloadIcon from "../../assets/icons/downloadIcon.png"
const About = () => {
  return (
    <div id='about' className='flex bg-gray-100 my-6 h-auto'>
   <div className='flex-auto p-5 text-left'>

   <h3 className='text-xl text-blue-400'>ABOUT ME:</h3>
   <h4 className='font-semibold text-xl mb-2'>Personal Information</h4>
   <p><span className='font-medium'>Date of Birth:</span>10th March (GenZ)</p>
   <p><span className='font-medium'>Email:</span>brendathiaini31@gamil.com</p>
   <p><span className='font-medium'>Address:</span>255-60200 Meru</p>
   <button className='bg-blue-400 rounded-xl p-1 mt-2'>
        <a href="http://localhost:5000/api/download-cv" download="BRENDACV.pdf">
        <img src={downloadIcon} alt="Download Icon" className="w-8 h-8 mr-2" />
        Download CV
      </a>
    </button>
   </div>
   <div className='relative flex-auto p-5 text-left'></div>
   <p className='font-sans '> I am a 
    Detail-oriented Full Stack Web Developer with expertise in front-end (HTML, CSS, JavaScript, React) and back-end (Node.js). Skilled in creating responsive, visually appealing websites and seamless user experiences. Passionate about clean code and staying current with the latest web technologies.

  </p>
    </div>
  )
}

export default About