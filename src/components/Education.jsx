import React from 'react'
import { EDUCATIONS } from "../assets/constants";

const Education = () => {
  return (
    <div className="border-b border-neutral-700 pb-4">
          <h2 className="my-10 text-4xl text-center">Education</h2>
    
          <div>
            {EDUCATIONS.map((education, index) => (
              <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full max-w-xl lg:w-1/4 ">
                  <img
                    src={education.image}
                    width={250}
                    height={250}
                    alt={education.uniName}
                    className="mb-6 rounded"
                  />
                </div>
    
                <div className="w-full max-w-xl lg:w-3/4">
                  <h6 className="mb-1 font-semibold">{education.uniName}</h6>
                  <p>{education.degree} </p>
                  <p>{education.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Education