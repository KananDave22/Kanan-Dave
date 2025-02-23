import React from "react";
import { EXPERIENCES } from "../assets/constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-700 pb-4">
      <h2 className="my-10 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">
                  {experience.year}
                </p>
              </div>
              <div className="w-full max-w-xl lg: w-3/4">
                <h6 className="mb-2 font-semibold ">
                  {experience.role} -{" "}
                  <span className=" text-blue-600">{experience.company}</span>
                </h6>
                {/* <p className="mb-4 text-neutral-400">{experience.description}</p> */}
                <ul className="mb-4 list-disc pl-5 text-neutral-400">
                  {experience.description
                    .split("• ")
                    .map((item, index) =>
                      item ? <li key={index}>{item.trim()}</li> : null
                    )}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
