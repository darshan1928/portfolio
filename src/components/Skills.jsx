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



export default function Skills() {
  return (
    <section className="py-10 flex flex-col items-center">
    <h2 className="text-2xl font-bold mb-6">What I Am Good At?</h2>

    <ul className="list-disc ml-0 mb-8 flex flex-wrap justify-center">
      {/* Display the first 6 items in a row */}
      <li className="flex items-center mb-4 flex-shrink-0 mr-6">
        <div className="rounded-full bg-black p-3">
          <FaHtml5 className="text-white text-4xl md:text-5xl lg:text-6xl" />
        </div>
      </li>
      <li className="flex items-center mb-4 flex-shrink-0 mr-6">
        <div className="rounded-full bg-black p-3">
          <FaCss3 className="text-white text-4xl md:text-5xl lg:text-6xl" />
        </div>
      </li>
      <li className="flex items-center mb-4 flex-shrink-0 mr-6">
        <div className="rounded-full bg-black p-3">
          <FaJs className="text-white text-4xl md:text-5xl lg:text-6xl" />
        </div>
      </li>
      <li className="flex items-center mb-4 flex-shrink-0 mr-6">
        <div className="rounded-full bg-black p-3">
          <FaReact className="text-white text-4xl md:text-5xl lg:text-6xl" />
        </div>
      </li>
      <li className="flex items-center mb-4 flex-shrink-0 mr-6">
        <div className="rounded-full bg-black p-3">
          <FaNodeJs className="text-white text-4xl md:text-5xl lg:text-6xl" />
        </div>
      </li>
      <li className="flex items-center mb-4 flex-shrink-0 mr-6">
        <div className="rounded-full bg-black p-3">
          <BsGit className="text-white text-4xl md:text-5xl lg:text-6xl" />
        </div>
      </li>

      {/* Center the remaining items below */}
      <li className="flex items-center mb-4 flex-shrink-0 mr-6">
        <div className="rounded-full bg-black p-3">
          <DiMongodb className="text-white text-4xl md:text-5xl lg:text-6xl" />
        </div>
      </li>
      <li className="flex items-center mb-4 flex-shrink-0 mr-6">
        <div className="rounded-full bg-black p-3">
          <SiSocketdotio className="text-white text-4xl md:text-5xl lg:text-6xl" />
        </div>
      </li>
      <li className="flex items-center mb-4 flex-shrink-0 mr-6">
        <div className="rounded-full bg-black p-3">
          <SiTailwindcss className="text-white text-4xl md:text-5xl lg:text-6xl" />
        </div>
      </li>
      <li className="flex items-center mb-4 flex-shrink-0 mr-6">
        <div className="rounded-full bg-black p-3">
          <IoLogoFigma className="text-white text-4xl md:text-5xl lg:text-6xl" />
        </div>
      </li>
      <li className="flex items-center mb-4 flex-shrink-0 mr-6">
        <div className="rounded-full bg-black p-3">
          <SiPostman className="text-white text-4xl md:text-5xl lg:text-6xl" />
        </div>
      </li>
      {/* Add more items as needed */}
    </ul>

    {/* Points and Arrow Icons */}
    <div className="flex flex-col items-start mb-4 text-left">
      <div className="flex items-center mb-2">
        <BsArrowRightCircleFill className="text-2xl text-black mt-1 mr-2" />
        <p className="text-lg md:text-xl lg:text-2xl font-medium">
          Building Restful API in Express
        </p>
      </div>
      <div className="flex items-center">
        <BsArrowRightCircleFill className="text-2xl text-black mt-1 mr-2" />
        <p className="text-lg md:text-xl lg:text-2xl font-medium">
          Building Responsive Single Page Application
        </p>
      </div>
    </div>
  </section>

  );
}
