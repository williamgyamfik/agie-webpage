// import React from "react";
// import Image from "next/image";

// import president from "@/public/assets/ivy.jpeg";
// import vice from "@/public/assets/ben.jpeg";
// import financialSecretary from "@/public/assets/bene.jpg";
// import welfare from "@/public/assets/sam.jpg";
// import poo from "@/public/assets/salomey.jpeg";
// import genSec from "@/public/assets/christabel.jpg";
// import viceSec from "@/public/assets/maggie.jpg";
// import crIt from "@/public/assets/profilePic.jpg";

// const team = [
//   { id: 1, name: "Ivy Osae", role: "President", image: president },
//   { id: 2, name: "Benjamin Abbam-baiden", role: "Vice President", image: vice },
//   {
//     id: 3,
//     name: "Benedicta Allala",
//     role: "Financial Secretary",
//     image: financialSecretary,
//   },
//   { id: 4, name: "Samuel Amankwa", role: "Welfare Officer", image: welfare },

//   {
//     id: 5,
//     name: "Salomey Amponsah",
//     role: "Public and Organizing Officer",
//     image: poo,
//   },
//   {
//     id: 4,
//     name: "Crystabel Esi-Annoa Kelly-Bissue",
//     role: "General Secretary",
//     image: genSec,
//   },
//   {
//     id: 4,
//     name: "Margaret Menorkpor",
//     role: "Vice General Secretary",
//     image: viceSec,
//   },
//   {
//     id: 4,
//     name: "William Gyamfi Kumi",
//     role: "Coordinator, Research and IT",
//     image: crIt,
//   },
// ];

// const AboutPage = () => {
//   return (
//     <main className="bg-white">
//       {/* Hero Section */}
//       <section className="bg-green-700 text-white py-20 px-6 md:px-12 lg:px-24 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">
//           About <span className="text-yellow-300">Us</span>
//         </h1>
//         <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
//           We are an association of Ghanaians living in Estonia, officially Eesti
//           Ghanalaste Ühing (The Estonian Ghanaian Association MTÜ).
//         </p>
//       </section>

//       {/* What Makes Us Different */}
//       <section className="py-20 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//           What Makes Us Different
//         </h2>
//         <p className="text-gray-700 mb-6 leading-relaxed">
//           Officially formed in September 2017, and registered on 12 September
//           2020, under the Non-Profit Associations Act of Estonia (1996). <br />
//           Registration code: 80585799 <br />
//           The Association is non-profit, non-governmental and non-partisan.
//         </p>
//       </section>

//       {/* Aims and Objectives */}
//       <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//           Aims and Objectives
//         </h2>
//         <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed">
//           <li>
//             Bring together and foster friendly relationships among all Ghanaians
//             resident in Estonia.
//           </li>
//           <li>Assist members of the Association in times of difficulties.</li>
//           <li>
//             Create awareness among Ghanaians regarding cultural and
//             socio-economic situations in Estonia to facilitate integration.
//           </li>
//           <li>
//             Serve as the official body liaising between Ghanaians in Estonia and
//             the Government of Ghana, Ghana Embassy, other consulates and
//             institutions.
//           </li>
//           <li>
//             Form expert groups and leverage business cooperation and
//             entrepreneurial initiatives to enhance Estonia-Ghana collaborations.
//           </li>
//         </ul>
//       </section>

//       {/* Our Activities */}
//       <section className="py-20 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//           Our Activities
//         </h2>
//         <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed">
//           <li>
//             Organise Ghanaians resident in Estonia to foster friendly relations
//             among them and with Estonian society.
//           </li>
//           <li>
//             Organise meetings, workshops, seminars, and conferences supporting
//             the objectives of the Association.
//           </li>
//           <li>
//             Organise events, exhibitions, and activities promoting cultural and
//             socio-economic cohesion.
//           </li>
//           <li>
//             Engage in research, scientific work, and development projects
//             through business cooperation and entrepreneurial initiatives.
//           </li>
//           <li>
//             Engage in other lawful activities aligned with the objectives of the
//             Association.
//           </li>
//         </ul>
//       </section>

//       <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
//           Meet Our <span className="text-green-700">Executive Team</span>
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
//           {team.map((member) => (
//             <div
//               key={member.id}
//               className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col items-center text-center p-6"
//             >
//               <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-green-700 shadow-lg">
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   className="object-cover w-full h-full"
//                   width={150}
//                   height={150}
//                 />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900">
//                 {member.name}
//               </h3>
//               <p className="text-green-700 font-medium">{member.role}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// };

// export default AboutPage;

"use client";
import React from "react";
import Image from "next/image";

// Images
import heroBg from "@/public/assets/headerImage.jpg"; // Add a hero background image
import president from "@/public/assets/ivy.jpeg";
import vice from "@/public/assets/ben.jpeg";
import financialSecretary from "@/public/assets/bene.jpg";
import welfare from "@/public/assets/sam.jpg";
import poo from "@/public/assets/salomey.jpeg";
import genSec from "@/public/assets/christabel.jpg";
import viceSec from "@/public/assets/maggie.jpg";
import crIt from "@/public/assets/profilePic.jpg";

const team = [
  {
    id: 1,
    name: "Ivy Osae",
    role: "President",
    image: president,
    intro:
      "I'm Ivy. I love to cook, enjoy the simplicity of life, and believe in respect for each other. I love nature and an occasional glass (bottle) of wine.",
  },
  {
    id: 2,
    name: "Benjamin Abbam-baiden",
    role: "Vice President",
    image: vice,
    intro:
      "You can call me Benny. I work at Wise, and I enjoy watching football and playing FIFA on the weekends.",
  },
  {
    id: 3,
    name: "Benedicta Allala",
    role: "Financial Secretary",
    image: financialSecretary,
    intro:
      "I am Benedicta, passionate about organization, finance, and helping the Association achieve its goals.",
  },
  {
    id: 4,
    name: "Samuel Amankwa",
    role: "Welfare Officer",
    image: welfare,
    intro:
      "I love nature and sports, and I ensure the welfare of all members is prioritized.",
  },
  {
    id: 5,
    name: "Salomey Amponsah",
    role: "Public and Organizing Officer",
    image: poo,
    intro:
      "I am Salomey Pomaa Amponsah, a due diligence agent at Wise, a lover of music and chocolates.",
  },
  {
    id: 6,
    name: "Crystabel Esi-Annoa Kelly-Bissue",
    role: "General Secretary",
    image: genSec,
    intro:
      "I am Crystabel, dedicated to communication and ensuring smooth operations within the Association.",
  },
  {
    id: 7,
    name: "Margaret Menorkpor",
    role: "Vice General Secretary",
    image: viceSec,
    intro:
      "My name is Margaret, well known as Mamaga Elorm. I'm a beacon of positivity, resilience, determination, and courage.",
  },
  {
    id: 8,
    name: "William Gyamfi Kumi",
    role: "Coordinator, Research and IT",
    image: crIt,
    intro:
      "I coordinate research and IT initiatives, supporting the Association through technology and innovation.",
  },
];

const AboutPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section with background image */}
      <section
        className="relative w-full h-96 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${heroBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-yellow-300">Us</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We are an association of Ghanaians living in Estonia, officially
            Eesti Ghanalaste Ühing (The Estonian Ghanaian Association MTÜ).
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          What Makes Us Different
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Officially formed in September 2017, and registered on 12 September
          2020, under the Non-Profit Associations Act of Estonia (1996). <br />
          Registration code: 80585799 <br />
          The Association is non-profit, non-governmental and non-partisan.
        </p>
      </section>

      {/* Aims and Objectives */}
      <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Aims and Objectives
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed">
          <li>
            Bring together and foster friendly relationships among all Ghanaians
            resident in Estonia.
          </li>
          <li>Assist members of the Association in times of difficulties.</li>
          <li>
            Create awareness among Ghanaians regarding cultural and
            socio-economic situations in Estonia to facilitate integration.
          </li>
          <li>
            Serve as the official body liaising between Ghanaians in Estonia and
            the Government of Ghana, Ghana Embassy, other consulates, and
            institutions.
          </li>
          <li>
            Form expert groups and leverage business cooperation and
            entrepreneurial initiatives to enhance Estonia-Ghana collaborations.
          </li>
        </ul>
      </section>

      {/* Our Activities */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Our Activities
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3 leading-relaxed">
          <li>
            Organise Ghanaians resident in Estonia to foster friendly relations
            among them and with Estonian society.
          </li>
          <li>
            Organise meetings, workshops, seminars, and conferences supporting
            the objectives of the Association.
          </li>
          <li>
            Organise events, exhibitions, and activities promoting cultural and
            socio-economic cohesion.
          </li>
          <li>
            Engage in research, scientific work, and development projects
            through business cooperation and entrepreneurial initiatives.
          </li>
          <li>
            Engage in other lawful activities aligned with the objectives of the
            Association.
          </li>
        </ul>
      </section>

      {/* Executive Team */}
      <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Meet Our <span className="text-green-700">Executive Team</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col items-center text-center p-6"
            >
              <div className="w-36 h-36 rounded-full overflow-hidden mb-4 border-4 border-green-700 shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                  width={180}
                  height={180}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-green-700 font-medium mb-4">{member.role}</p>
              <p className="text-gray-700 text-sm">{member.intro}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
