import React, { useState } from 'react'
import { FaMoon,FaBars, FaTimes } from "react-icons/fa";
import Skills from './Skills';
import Projects from './Projects';
import AboutMe from './AboutMe';
export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 
  return (
    <>
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-lg font-semibold">Darshan</span>
       
      </div>
      <div className="md:hidden">
        {isMenuOpen ? (
          <FaTimes className="text-2xl" onClick={toggleMenu} />
        ) : (
          <FaBars className="text-2xl" onClick={toggleMenu} />
        )}
      </div>
      <div className="hidden md:flex items-center">
        <div className="ml-auto">
          skills
        </div>
        <div className="ml-4">
        projects
        </div>
        <div className="ml-4">
         about me
        </div>
        <div className="ml-4">
          <FaMoon className="text-xl" />
        </div>
      </div>
    </nav>

    {isMenuOpen && (
      <div className="md:hidden p-4 absolute top-16 right-0">
        <div className="mb-4">Skills</div>
        <div className="mb-4">Projects</div>
        <div className="mb-4">About Me</div>
        <div className="mb-4">
          <FaMoon className="text-xl" />
        </div>
      </div>
    )}
  </>
  )
}
