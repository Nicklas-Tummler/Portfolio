import React from "react";
//Files
import Navbar from "./Portfolio/Navbar";
import Portfolio from "./Portfolio/Portfolio";
import About from "./Portfolio/About";
import Skills from "./Portfolio/Skills";
import Projects from "./Portfolio/Projects";
import Contact from "./Portfolio/Contact";
import Footer from "./Portfolio/Footer";


function App() {
  return (
    <div className="App-files">
      <Navbar />
      <Portfolio />
      <About />
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
