import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import { useState } from "react";


export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <HomePage  isDarkMode={isDarkMode}/>
      <Skills />
      <Projects />
      <AboutMe />
      <Footer />
    </div>
  );
}
