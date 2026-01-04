// import React from "react";
// import { EDUCATIONS } from "../assets/constants";

// const Education = () => {
//   return (
//     <div className="border-b border-neutral-700 pb-4">
//       <h2 className="my-10 text-4xl text-center">Education</h2>

//       <div className="mb-16 flex flex-wrap lg:justify-center gap-25">
//         {EDUCATIONS.map((education, index) => (
//           <div
//             key={index}
//             className="bg-gradient-to-b from-neutral-800 to-neutral-900 p-5 rounded-2xl my-4 hover:bg-neutral-600 hover:border hover:border-neutral-600"
//           >
//             <div className="w-full max-w-xl ">
//               <img
//                 src={education.image}
//                 width={300}
//                 height={300}
//                 alt={education.uniName}
//                 className="mb-6 rounded flex justify-center"
//               />
//             </div>

//             <div className="">
//               <h6 className="mb-1 text-xl font-semibold">
//                 {education.uniName}
//               </h6>
//               <p className="max-w-[300px] break-words my-1">{education.degree} </p>
//               <p>{education.duration}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Education;


import React from "react";
import { EDUCATIONS } from "../assets/constants";

const Education = () => {
  return (
    <div className="border-b border-neutral-700 pb-20">
      <h2 className="my-12 text-4xl text-center">Education</h2>

      <div className="flex flex-wrap justify-center gap-12">
        {EDUCATIONS.map((education, index) => (
          <div
            key={index}
            className="
              relative
              w-full max-w-[340px]
              rounded-3xl
              bg-neutral-900/70
              backdrop-blur-xl
              p-7
              overflow-hidden
            "
          >
            {/* Inset neon border (sample-accurate) */}
            <div
              className="
                pointer-events-none
                absolute inset-0
                rounded-3xl
                border border-neutral-600/50
                shadow-[0_0_20px_rgba(140,140,255,0.18)]
              "
            />

            {/* Subtle linear light (inside card) */}
            <div
              className="
                pointer-events-none
                absolute inset-0
                rounded-3xl
                bg-gradient-to-br
                from-indigo-500/10 via-transparent to-transparent
              "
            />

            {/* Image (NO background container) */}
            <div className="relative flex justify-center mb-6">
              <img
                src={education.image}
                alt={education.uniName}
                className="
                  w-56
                  max-h-44
                  object-contain
                  rounded-xl
                "
              />
            </div>

            {/* Content */}
            <div className="relative text-center space-y-2">
              <h3 className="text-lg font-semibold text-neutral-100">
                {education.uniName}
              </h3>

              <p className="text-sm text-neutral-400">
                {education.degree}
              </p>

              <p className="text-sm text-neutral-500">
                {education.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

