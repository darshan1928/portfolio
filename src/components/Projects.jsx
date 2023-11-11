import React from "react";
import { MdOutlineLiveTv } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
export default function Projects({ isDarkMode }) {
  return (
    <section
      className={`py-10 ${
        isDarkMode ? "bg-dark text-white" : "bg-light text-black"
      } flex flex-col items-center`}
    >
      <h2 className="text-4xl  font-bold  mb-10 border-b-2 border-orange-500">PROJECTS</h2>
      <div
        className={`card w-96 shadow-xl   p-6 ${
          isDarkMode ? "bg-white text-black" : "bg-base-100 text-white"
        }`}
      >
        <figure>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbCQmtUTBEwcZOr_MuZupO_gkzVM1uoTFbQ&usqp=CAU"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-semibold mb-1">
            CONVEY
            <div className="badge badge-warning text-xs ml-2">NEW</div>
          </h2>
          <p className="text-sm mb-4">Real-Time Chat Application</p>
          <div className="flex items-center text-xs mb-2">
            <MdOutlineLiveTv className="mr-1 text-2xl" />
            <span className="ml-1">Live Site</span>
            <BiCodeAlt className="ml-4 mr-1 text-2xl" />
            <span className="ml-1">Source Code</span>
          </div>
          <div className="card-actions justify-start mt-1">
  <h1 className="text-lg font-semibold mb-1">Tech Stack Used</h1>
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
