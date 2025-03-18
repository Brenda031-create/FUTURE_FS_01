import React from 'react'
const Navbar = () => {

  return (
   
<nav className="bg-white max-w-full p-4 flex justify-between items-center rounded-lg shadow-md sticky top-0 z-10">
    <ul className="flex space-x-3 float-right"> 
        <li>
            <a href='#home' className="text-gray-700 hover:text-blue-500 rounded-lg shadow-md p-4 bg-gray-200">HOME</a>
        </li>
        <li>
            <a href='#about' className="text-gray-700 hover:text-blue-500 rounded-lg shadow-md p-4 bg-gray-200">ABOUT_ME</a>
        </li>
        <li>
            <a href='#resume' className="text-gray-700 hover:text-blue-500 rounded-lg shadow-md p-4 bg-gray-200 ">RESUME</a>
        </li>

        <li>
            <a href='#project' className="text-gray-700 hover:text-blue-500 rounded-lg shadow-md p-4 bg-gray-200">PROJECTS</a>
        </li>
<li>
            <a href='#contact' className="text-gray-700 hover:text-blue-500 rounded-lg shadow-md p-4 bg-gray-200">CONTACTS</a>
        </li>
    </ul>
</nav>

  
  );
};
export default Navbar