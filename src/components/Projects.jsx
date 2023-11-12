import React from "react";
import { MdOutlineLiveTv } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
export default function Projects({ isDarkMode }) {
  return (
    <section id="projects" className={`py-6 sm:py-10 mx-4 sm:mx-0 flex flex-col items-center`}>
    <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-10 border-b-2 border-orange-500">PROJECTS</h2>
    <div className={`card w-full sm:w-80 shadow-xl p-4 sm:p-6 ${isDarkMode ? "bg-white text-black" : "bg-base-100 text-white"}`}>
      <figure>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbCQmtUTBEwcZOr_MuZupO_gkzVM1uoTFbQ&usqp=CAU"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-xl sm:text-2xl font-semibold mb-1">
          CONVEY
          <div className="badge badge-warning text-xs ml-2">NEW</div>
        </h2>
        <p className="text-sm sm:text-base mb-4">Real-Time Chat Application</p>
        <div className="flex items-center flex-wrap text-xs mb-2 sm:mb-4">
          <MdOutlineLiveTv className="mr-1 text-2xl" />
          <span className="ml-1">Live Site</span>
          <BiCodeAlt className="ml-4 mr-1 text-2xl" />
          <span className="ml-1">Source Code</span>
        </div>
        <div className="card-actions justify-start mt-1">
          <h1 className="text-base sm:text-lg font-semibold mb-1">Tech Stack Used</h1>
          <div className="flex items-center flex-wrap">
            <div className="badge badge-outline text-xs mr-1 mb-1">HTML</div>
            <div className="badge badge-outline text-xs mr-1 mb-1">CSS</div>
            <div className="badge badge-outline text-xs mr-1 mb-1">JavaScript</div>
            <div className="badge badge-outline text-xs mr-1 mb-1">Express.js</div>
            <div className="badge badge-outline text-xs mr-1 mb-1">Node.js</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
}
