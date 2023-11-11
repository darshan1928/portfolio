import React from 'react'

export default function Projects({isDarkMode}) {
  return (
    <section className={`py-10 ${
      isDarkMode ? "bg-dark text-white" : "bg-light text-black"
    } flex flex-col items-center`}>
    <h2 className="text-2xl  font-bold mb-4">PROJECTS</h2>
    <div className={`card w-96   shadow-xl p-6 ${
      isDarkMode ? "bg-white text-black" : "bg-base-100 text-white"
    }`}>
      <figure>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbCQmtUTBEwcZOr_MuZupO_gkzVM1uoTFbQ&usqp=CAU" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-semibold mb-2">
          CONVEY
          <div className="badge badge-warning text-xs ml-2">NEW</div>
        </h2>
        <p className="text-sm mb-4">Real-Time Chat Application</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline text-xs mr-1">HTML</div>
          <div className="badge badge-outline text-xs mr-1">CSS</div>
          <div className="badge badge-outline text-xs mr-1">JavaScript</div>
          <div className="badge badge-outline text-xs mr-1">Express.js</div>
          <div className="badge badge-outline text-xs mr-1">Node.js</div>
        </div>
      </div>
    </div>
  </section>
  )
}
