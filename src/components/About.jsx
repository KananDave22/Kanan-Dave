import React from "react";
import about_image from "../assets/Kanan_AboutSectionImage.jpg";
import { ABOUT_CONTENT } from "../assets/constants";

const About = () => {
  return (
    <div className="border-b border-neutral-700 pb-4">
      <h2 className="my-8 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>

      <div className="flex flex-wrap lg:flex-row-reverse ">
       
        {/* Text - part */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-start">
            <p className="mb-2 max-w-xl text-xl tracking-normal font-thin">
              {ABOUT_CONTENT}
            </p>
          </div>
        </div>

        {/* Image Part */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className=" w-90 h-90 rounded-2xl"
              src={about_image}
              alt="Kanan_AboutImage"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
