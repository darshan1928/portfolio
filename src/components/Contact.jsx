import React, { useState } from "react";

export default function Contact({isDarkMode}) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling form submission here
    console.log("Email:", email);
    console.log("Message:", message);
  };
  return (
    <div className={`max-w-screen-md mx-auto py-10 px-4 `}>
    <h2 className="text-3xl font-bold text-center mb-8">Connect with Me</h2>
    <form onSubmit={handleSubmit} className={`flex flex-col sm:mx-auto items-center space-y-4 border ${isDarkMode ? "border-white" : "border-black"} rounded-xl`}>
      <div className={`w-full sm:w-80 md:w-96   `} >
        <label htmlFor="email" className=" p-2 block text-sm font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full p-2 border rounded focus:outline-none focus:border-white-500 transition-all  duration-300  ${isDarkMode ? "bg-black" : "bg-gray-100"}`}
          placeholder="Your email"
          required
        />
      </div>
      <div className="w-full sm:w-80 md:w-96">
        <label htmlFor="message" className=" p-2 block text-sm font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          className={`w-full p-2 border rounded focus:outline-none focus:border-white-500 transition-all duration-300  ${isDarkMode ? "bg-black" : "bg-gray-100"} `}
          placeholder="Your message"
          required
        ></textarea>
      </div>
      <div className="w-full p-2 sm:w-80 md:w-96">
        <button
          className={`border ${
            isDarkMode
              ? "border-white hover:bg-white hover:text-black hover:border-white"
              : "border-black hover:bg-black hover:text-white hover:border-black"
          } font-semibold py-2 px-5 md:py-2 md:px-5 rounded-full flex items-center transition-all duration-300 ease-in-out`}
        >
          <span className="text-base md:text-lg">SEND</span>
        </button>
      </div>
    </form>
  </div>
  
  


  
  );
}
