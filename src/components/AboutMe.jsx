import React from "react";
import { FaCode } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";

export default function AboutMe({isDarkMode}) {
  return (
    <section className={`py-10 flex flex-col md:flex-row mx-auto w-3/4 ${
      isDarkMode ? "bg-dark text-white" : "bg-light text-black"
    }`}>
      {/* First Half (About Me) */}
      <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
        <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 border-b-2 border-orange-500" >
          About Me
        </span>
    
        <p className="text-sm md:text-base mt-4 lg:text-lg">
          Hello! I'm a passionate web developer with experience in building web
          applications using technologies like React, Node.js, and MongoDB. ...
        </p>
      </div>
    
      {/* Second Half (Education) */}
      <div className="md:w-1/2">
  <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 border-b-2 border-orange-500">
    Education
  </span>

  <div className="flex items-center mt-4">
    <IoSchool className="mr-2 text-2xl " />
    <div>
      <p className="text-base md:text-lg lg:text-xl font-semibold">
        Bachelor of Technology in Civil Engineering
      </p>
      <p className="text-sm md:text-base lg:text-lg ">
        (2016-2020)
      </p>
      <p className="text-base md:text-lg lg:text-xl ">
    APJ Abdul Kalam Technological University, Kerala
  </p>
    </div>
  </div>

  <div className="flex items-center mt-4">
    <FaCode className="mr-2 text-2xl " />
    <div>
      <p className="text-base md:text-lg lg:text-xl font-semibold">
        Full-Stack Developer
      </p>
      <p className="text-sm md:text-base lg:text-lg ">
        (2022-2023)
      </p>
      <p className="text-base md:text-lg lg:text-xl  ">
    Entri Elevate
  </p>
    </div>
  </div>

  

  
</div>

    </section>
    
    
    
    
    
  );
}
