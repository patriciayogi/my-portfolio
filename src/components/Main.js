import React from "react";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Main() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
    <About />      
    <Skills />
    <Projects />      
    <Contact />
    </div> 
  );
}