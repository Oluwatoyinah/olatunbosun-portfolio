import React from "react";
import About from "../components/About";
import Boundary from "../components/Boundary";
import Contact from "../components/Contact/Contact";
import Education from "../components/Education/Education";
import Footer from "../components/Footer";
import Projects from "../components/Projects/Projects";
import Tools from "../components/Tools/Tools";
import Works from "../components/Work/Works";

const Home = () => {
  return (
    <div>
      <Boundary />
      <About />
      <Tools />
      <Works />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <Boundary />
    </div>
  );
};

export default Home;
