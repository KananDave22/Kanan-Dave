import React from "react";
import { EDUCATIONS } from "../assets/constants";

const Education = () => {
  return (
    <div className="border-b border-neutral-700 pb-4">
      <h2 className="my-10 text-4xl text-center">Education</h2>

      <div className="mb-16 flex flex-wrap lg:justify-center gap-25">
        {EDUCATIONS.map((education, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-neutral-800 to-neutral-900 p-5 rounded-2xl my-4 hover:bg-neutral-600 hover:border hover:border-neutral-600"
          >
            <div className="w-full max-w-xl ">
              <img
                src={education.image}
                width={300}
                height={300}
                alt={education.uniName}
                className="mb-6 rounded flex justify-center"
              />
            </div>

            <div className="">
              <h6 className="mb-1 text-xl font-semibold">
                {education.uniName}
              </h6>
              <p className="max-w-[300px] break-words my-1">{education.degree} </p>
              <p>{education.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
