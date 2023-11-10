// Navbar.js
import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <nav
        className={`${
          isDarkMode ? "bg-dark text-white" : "bg-light text-black"
        } p-4 flex justify-between items-center`}
      >
        <div className="flex items-center">
          <span className="text-lg font-bold">Darshan</span>
        </div>
        <div className="md:hidden">
          {isMenuOpen ? (
            <FaTimes className=" text-2xl" onClick={toggleMenu} />
          ) : (
            <FaBars className="text-2xl" onClick={toggleMenu} />
          )}
        </div>
        <div className="hidden md:flex items-center">
          <div className="font-semibold ml-auto">SKILLS</div>
          <div className="font-semibold ml-4">PROJECTS</div>
          <div className="font-semibold ml-4">ABOUT ME</div>
          <div className=" ml-4" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <FaSun className="text-xl" />
            ) : (
              <FaMoon className="text-xl" />
            )}
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className={`md:hidden p-4 absolute ${
            isDarkMode ? "bg-blue text-white" : "bg-light text-black"
          }  top-16 right-0`}
        >
          <div className="mb-4">
            <span className="text-lg font-semibold  hover:text-red-500 cursor-pointer">
              SKILLS
            </span>
          </div>
          <div className="mb-4">
            <span className="text-lg font-semibold  hover:text-red-500 cursor-pointer">
              PROJECTS
            </span>
          </div>
          <div className="mb-4">
            <span className="text-lg font-semibold  hover:text-red-500 cursor-pointer">
              ABOUT ME
            </span>
          </div>
          <div className="mb-4" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <FaSun className="text-xl  hover:text-red-500 cursor-pointer" />
            ) : (
              <FaMoon className="text-xl  hover:text-red-500 cursor-pointer" />
            )}
          </div>
        </div>
      )}
    </>
  );
}
