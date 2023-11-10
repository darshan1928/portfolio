import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineDownload } from 'react-icons/hi'

export default function HomePage({isDarkMode}) {
  return (
<div className={`${isDarkMode ? 'bg-dark text-white' : 'bg-light text-black'} flex  flex-col md:flex-row justify-center items-center h-screen `}>
  {/* Left Side */}

  <div className="md:w-1/2 p-6 md:p-12 text-center md:text-left">
  <p className="text-4xl md:text-5xl font-semibold mb-2">Hey, This is</p>
  <p className="text-5xl md:text-6xl font-extrabold mb-4">
    Darshan <span style={{ color: '#f66c22', fontWeight: 'bold' }}>Raj</span>
  </p>
  <p className="text-xl md:text-2xl mb-6">Full Stack Web Developer</p>

  <div className="flex items-center justify-center md:justify-start space-x-4">
    {/* GitHub Icon */}
    <a href="https://github.com/darshan1928" target="_blank" rel="noopener noreferrer">
      <FaGithub className="text-3xl  " />
    </a>

    {/* Twitter Icon */}
    <a href="https://twitter.com/CallMe_Darshan" target="_blank" rel="noopener noreferrer">
      <FaTwitter className="text-3xl " />
    </a>

    {/* LinkedIn Icon */}
    <a href="https://linkedin.com/in/darshanraj1928" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="text-3xl  " />
    </a>

    {/* Email Icon */}
    <a href="mailto:darshankollam8@gmail.com">
      <FaEnvelope className="text-3xl   " />
    </a>
  </div>


  <div className="flex items-center justify-center md:justify-start mt-4">
  <button className={` border ${isDarkMode ?' border-white  hover:bg-white hover:text-black hover:border-white ' : ' border-black  hover:bg-black hover:text-white hover:border-black'} font-semibold py-3 px-8 md:py-4 md:px-10 rounded-full flex items-center transition-all duration-300 ease-in-out `}>
  <span className="mr-2 text-base md:text-lg">Download</span>
  <HiOutlineDownload size={24} /> {/* Adjust the size as needed */}
</button>

  </div>
</div>





  {/* Right Side */}
 
 <div className="flex justify-center md:items-center h-screen ">
  <div className="relative">
    <img
      src="https://img.freepik.com/premium-photo/cartoon-illustration-man-with-beard-using-laptop-generative-ai_958165-24539.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1697587200&semt=ais"  // Replace with your image URL
      alt="Profile"
      className="w-80 h-80 object-cover rounded-full outline-8 border-c4c4c4"
    />
  </div>
</div>


</div>

  )
}
