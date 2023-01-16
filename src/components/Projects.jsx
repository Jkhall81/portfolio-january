import React from "react";
import ProjectItem from "./ProjectItem";
//import propertyImg from "../assets/property.jpg";
//import propertyImg from "../assets/property.jpg";
//import propertyImg from "../assets/property.jpg";
//import propertyImg from "../assets/property.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae quam
        velit porro veniam tempore blanditiis? Distinctio eveniet doloribus est
        magnam quisquam dolorem at, repudiandae minima, dicta ea sit veritatis!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img="" title="Crypto App" />
        <ProjectItem img="" title="Property App" />
        <ProjectItem img="" title="Netflix App" />
        <ProjectItem img="" title="Twitch App" />
      </div>
    </div>
  );
};

export default Projects;
