import React from "react";
import { PROJECTS } from "../assets/constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-700 pb-4">
      <h2 className="my-10 text-4xl text-center">Projects</h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full max-w-xl lg:w-1/4 ">
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              {/* <p>{project.description}</p> */}
              <ul className="list-disc pl-5">
                {project.description
                  .split("• ")
                  .map((item, index) =>
                    item ? <li key={index}>{item.trim()}</li> : null
                  )}
              </ul>
              {project.technologies.map((tech,index) =>(
                <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
