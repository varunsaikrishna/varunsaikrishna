import React from "react";
import "./body.css";
import About from "./about/index";
import Projects1 from "./projects/project1";
import Skills from "./skills/index";
import Work from "./work/index";
import Contact from "./contact/index";
function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="projects">
        <Projects1 />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
