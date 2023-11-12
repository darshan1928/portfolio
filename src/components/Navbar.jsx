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
  const logoSrc = isDarkMode ? "./darshan-logo-white.png" : "./darshan-logo-png.png";
  return (
    <>
      <nav
        className={`${
          isDarkMode ? "bg-dark text-white" : "bg-light text-black"
        } p-2 flex justify-between items-center`}
      >
        <div
          className={`flex items-center  `}
        >
          <img
  src={logoSrc}
  alt="Darshan"
  style={{ width: "6.8em", height: "2.5em", objectFit: "cover" }}
/>
        </div>
        <div className="md:hidden">
          {isMenuOpen ? (
            <FaTimes className=" text-2xl" onClick={toggleMenu} />
          ) : (
            <FaBars className="text-2xl" onClick={toggleMenu} />
          )}
        </div>
        <div className="hidden md:flex items-center">
          <div className="font-semibold ml-auto">
            <a href="#skills" className="nav-link">
              SKILLS
            </a>
          </div>
          <div className="font-semibold ml-4">
            <a href="#projects" className="nav-link">
              PROJECTS
            </a>
          </div>
          <div className="font-semibold ml-4">
            <a href="#aboutMe" className="nav-link">
              ABOUT ME
            </a>
          </div>

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
              <a href="#skills" className="nav-link">
                SKILLS
              </a>
            </span>
          </div>
          <div className="mb-4">
            <span className="text-lg font-semibold  hover:text-red-500 cursor-pointer">
              <a href="#projects" className="nav-link">
                PROJECTS
              </a>
            </span>
          </div>
          <div className="mb-4">
            <span className="text-lg font-semibold  hover:text-red-500 cursor-pointer">
              <a href="#aboutMe" className="nav-link">
                ABOUT ME
              </a>
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
