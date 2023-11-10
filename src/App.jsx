import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar/>
      <Skills />
      <Projects />
      <AboutMe />
      <Footer />
    </div>
  );
}
