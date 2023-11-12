import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import { useState } from "react";
import Contact from "./components/Contact";
import "./App.css"


export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className={`${isDarkMode? 'bg-dark text-white':'bg-white text-black'}`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <HomePage  isDarkMode={isDarkMode}/>
      <Skills   isDarkMode={isDarkMode}/>
      <Projects  isDarkMode={isDarkMode} />
      <AboutMe  isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode}/>
      <Footer  isDarkMode={isDarkMode} />
    </div>
  );
}
