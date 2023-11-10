import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

export default function Skills() {
  return (

    <section className="py-10">
    <h2 className="text-2xl font-bold mb-4">Skills</h2>
    <ul className="list-disc ml-8">
      <li>
        <FaHtml5 className="inline-block mr-2" />
        HTML
      </li>
      <li>
        <FaCss3 className="inline-block mr-2" />
        CSS
      </li>
      <li>
        <FaJs className="inline-block mr-2" />
        JavaScript
      </li>
      <li>
        <FaReact className="inline-block mr-2" />
        React Js
      </li>
      <li>
        <FaNodeJs className="inline-block mr-2" />
        Node Js
      </li>
      <li>
        <FaNodeJs className="inline-block mr-2" />
        Express Js
      </li>
      <li>
        <FaDatabase className="inline-block mr-2" />
        MongoDB
      </li>
    </ul>
  </section>
   
  );
}
