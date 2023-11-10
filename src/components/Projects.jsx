import React from 'react'
const Project = ({ title, description, techStack }) => {
    return (
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="font-semibold">Tech Stack: {techStack.join(', ')}</p>
      </div>
    );
  };
export default function Projects() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div>
        <Project
          title="Project 1"
          description="Description of Project 1."
          techStack={['React', 'Node.js', 'Express.js']}
        />
        <Project
          title="Project 2"
          description="Description of Project 2."
          techStack={['HTML', 'CSS', 'JavaScript']}
        />
      </div>
    </section>
  )
}
