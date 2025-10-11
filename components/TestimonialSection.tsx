// "use client";
// import React from "react";
// import Image from "next/image";
// import { Quote } from "lucide-react";

// import member1 from "@/public/assets/member1.jpg";
// import member2 from "@/public/assets/member2.jpg";
// import member3 from "@/public/assets/member3.jpg";

// const testimonials = [
//   {
//     id: 1,
//     name: "Ayisha Mohammed",
//     role: "Master’s Student, Tallinn University",
//     image: member1,
//     quote:
//       "Joining the Association made my first months in Estonia so much easier. I found friends, mentors, and opportunities I never expected.",
//   },
//   {
//     id: 2,
//     name: "Kwesi Mensah",
//     role: "Software Engineer, Tartu",
//     image: member3,
//     quote:
//       "Through the Association, I connected with professionals who helped me navigate life in Estonia and even find my current job.",
//   },
//   {
//     id: 3,
//     name: "Akua Owusu",
//     role: "Entrepreneur, Tallinn",
//     image: member2,
//     quote:
//       "The events are always lively, inspiring, and full of genuine people. It feels like having a second family here in Estonia.",
//   },
// ];

// const TestimonialSection = () => {
//   return (
//     <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//           What Our <span className="text-green-700">Members Say</span>
//         </h2>
//         <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//           Real voices from Ghanaians building a vibrant community here in
//           Estonia.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {testimonials.map((person) => (
//           <div
//             key={person.id}
//             className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center text-center relative"
//           >
//             <Quote
//               className="text-green-600 absolute top-5 left-5 opacity-20"
//               size={40}
//             />

//             <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-green-600">
//               <Image
//                 src={person.image}
//                 alt={person.name}
//                 className="object-cover w-full h-full"
//               />
//             </div>

//             <p className="text-gray-700 italic mb-6 leading-relaxed">
//               “{person.quote}”
//             </p>

//             <div>
//               <h3 className="font-semibold text-lg text-gray-900">
//                 {person.name}
//               </h3>
//               <p className="text-sm text-gray-500">{person.role}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;

"use client";
import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

import member1 from "@/public/assets/member1.jpg";
import member2 from "@/public/assets/member2.jpg";
import member3 from "@/public/assets/member3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Ayisha Mohammed",
    role: "Master’s Student, Tallinn University",
    image: member1,
    quote:
      "Joining the Association made my first months in Estonia so much easier. I found friends, mentors, and opportunities I never expected.",
  },
  {
    id: 2,
    name: "Kwesi Mensah",
    role: "Software Engineer, Tartu",
    image: member3,
    quote:
      "Through the Association, I connected with professionals who helped me navigate life in Estonia and even find my current job.",
  },
  {
    id: 3,
    name: "Akua Owusu",
    role: "Entrepreneur, Tallinn",
    image: member2,
    quote:
      "The events are always lively, inspiring, and full of genuine people. It feels like having a second family here in Estonia.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our <span className="text-green-700">Members Say</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Real voices from Ghanaians building a vibrant community here in
          Estonia.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((person) => (
          <div
            key={person.id}
            className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center text-center relative"
          >
            <Quote
              className="text-green-600 absolute top-6 left-6 opacity-15"
              size={45}
            />

            {/* Larger image size */}
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-6 border-4 border-green-600 shadow-lg">
              <Image
                src={person.image}
                alt={person.name}
                className="object-cover w-full h-full"
                width={200}
                height={200}
              />
            </div>

            <p className="text-gray-700 italic mb-6 leading-relaxed text-base md:text-lg">
              “{person.quote}”
            </p>

            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm text-gray-500">{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
