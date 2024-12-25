import React from "react";
import { PROJECTS } from "../constants";

function Projects() {
  return (
    <div className="border-b border-neutral-900">
      <h2 className="my-20 text-center text-4xl">Projects</h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img className="mb-6 rounded" src={project.image}></img>
            </div>
            <div className="w-full lg:ml-5 max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 text-purple-900 rounded bg-neutral-900 px-2 py-1 text-sm font-medium"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;