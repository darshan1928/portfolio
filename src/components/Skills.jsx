import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaArrowRight,
} from "react-icons/fa";
import {BsArrowRightCircleFill, BsGit} from "react-icons/bs"
import {DiMongodb} from "react-icons/di"
import {SiPostman, SiSocketdotio} from "react-icons/si"
import {SiTailwindcss} from "react-icons/si"
import {IoLogoFigma} from "react-icons/io5"



export default function Skills({isDarkMode}) {
  return (
    <section id="skills" className={`py-10 ${
      isDarkMode ? "bg-dark text-white" : "bg-light text-black"
    } flex flex-col items-center`}>
    <h2 className="text-4xl  font-bold  mb-10 border-b-2 border-orange-500">What I Am Good At?</h2>

    <ul className="list-disc ml-0 mb-8 flex flex-wrap justify-center">
      {/* Display the first 6 items in a row */}
      <li className="flex items-center mb-4 flex-shrink-0 mr-6">
        <div className="rounded-full   p-3">
          <FaHtml5 className=" text-4xl md:text-5xl lg:text-6xl" />
        </div>
      </li>
      <li className="flex items-center mb-4 flex-shrink-0 mr-6">
        <div className="rounded-full   p-3">
          <FaCss3 className=" text-4xl md:text-5xl lg:text-6xl" />
        </div>
      </li>
      <li className="flex items-center mb-4 flex-shrink-0 mr-6">
        <div className="rounded-full   p-3">
          <FaJs className=" text-4xl md:text-5xl lg:text-6xl" />
        </div>
      </li>
      <li className="flex items-center mb-4 flex-shrink-0 mr-6">
        <div className="rounded-full   p-3">
          <FaReact className=" text-4xl md:text-5xl lg:text-6xl" />
        </div>
      </li>
      <li className="flex items-center mb-4 flex-shrink-0 mr-6">
        <div className="rounded-full   p-3">
          <FaNodeJs className=" text-4xl md:text-5xl lg:text-6xl" />
        </div>
      </li>
      <li className="flex items-center mb-4 flex-shrink-0 mr-6">
        <div className="rounded-full   p-3">
          <BsGit className=" text-4xl md:text-5xl lg:text-6xl" />
        </div>
      </li>

      {/* Center the remaining items below */}
      <li className="flex items-center mb-4 flex-shrink-0 mr-6">
        <div className="rounded-full   p-3">
          <DiMongodb className=" text-4xl md:text-5xl lg:text-6xl" />
        </div>
      </li>
      <li className="flex items-center mb-4 flex-shrink-0 mr-6">
        <div className="rounded-full  p-3">
          <SiSocketdotio className=" text-4xl md:text-5xl lg:text-6xl" />
        </div>
      </li>
      <li className="flex items-center mb-4 flex-shrink-0 mr-6">
        <div className="rounded-full   p-3">
          <SiTailwindcss className=" text-4xl md:text-5xl lg:text-6xl" />
        </div>
      </li>
      <li className="flex items-center mb-4 flex-shrink-0 mr-6">
        <div className="rounded-full   p-3">
          <IoLogoFigma className=" text-4xl md:text-5xl lg:text-6xl" />
        </div>
      </li>
      <li className="flex items-center mb-4 flex-shrink-0 mr-6">
        <div className="rounded-full   p-3">
          <SiPostman className=" text-4xl md:text-5xl lg:text-6xl" />
        </div>
      </li>
      {/* Add more items as needed */}
    </ul>

    {/* Points and Arrow Icons */}
    <div className="flex flex-col items-start mb-4 text-left mx-4 sm:mx-0">
  <div className="flex items-center ">
    <BsArrowRightCircleFill className="text-2xl mt-1 mr-2" />
    <p className="text-lg md:text-xl lg:text-2xl font-small mb-1 ">
      Building Restful API in Express
    </p>
  </div>
  <div className="flex items-center">
    <BsArrowRightCircleFill className="text-2xl mt-1 mr-2" />
    <p className="text-lg md:text-xl lg:text-2xl font-small mb-1">
      Building Responsive Single Page Application
    </p>
  </div>
  <div className="flex items-center">
    <BsArrowRightCircleFill className="text-2xl mt-1 mr-2" />
    <p className="text-lg md:text-xl lg:text-2xl font-small mb-1">
    Version Control and Collaboration
    </p>
  </div>
  <div className="flex items-center">
    <BsArrowRightCircleFill className="text-2xl mt-1 mr-2" />
    <p className="text-lg md:text-xl lg:text-2xl font-small mb-1">
    Authentication and Authorization
    </p>
  </div>
</div>

  </section>

  );
}
