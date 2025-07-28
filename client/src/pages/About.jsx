import avatar from "/benja.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaDownload,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import FadeInSection from "../components/FadeInSection";

const skill = [
  {
    id: 1,
    name: "HTML",
    percent: 90,
    color: "border-red-500 text-red-500 bg-red-500/40",
    icon: <FaHtml5 className='text-[10rem] text-gray-500' />,
    description: "Semantic, accessible markup and SEO-friendly structure.",
  },
  {
    id: 2,
    name: "CSS",
    percent: 90,
    color: "border-blue-500 text-blue-500 bg-blue-500/40",
    icon: <FaCss3Alt className='text-[10rem] text-gray-500' />,
    description: "Responsive layouts, animations, and modern styling.",
  },
  {
    id: 3,
    name: "JavaScript",
    percent: 87,
    color: "border-yellow-500 text-yellow-500 bg-yellow-500/40",
    icon: <FaJs className='text-[10rem] text-gray-500' />,
    description: "ES6+, DOM manipulation, and interactive web features.",
  },
  {
    id: 4,
    name: "Node.js",
    percent: 79,
    color: "border-green-400 text-green-400 bg-green-400/40",
    icon: <FaNodeJs className='text-[10rem] text-gray-500' />,
    description: "Backend APIs, Express.js, RESTful routes.",
  },
  {
    id: 5,
    name: "React",
    percent: 80,
    color: "border-cyan-400 text-cyan-400 bg-cyan-400/40",
    icon: <FaReact className='text-[10rem] text-gray-500' />,
    description: "Component-driven architecture, hooks, and SPA design.",
  },
  {
    id: 6,
    name: "MongoDB",
    percent: 85,
    color: "border-green-600 text-green-600 bg-green-600/50",
    icon: <SiMongodb className='text-[10rem] text-gray-500 absolute z-0' />,
    description: "Schema design, CRUD operations, and Mongoose ODM.",
  },
];

const experience = [
  {
    id: 1,
    years: "2021 - 2024",
    desc: "Diploma in Web Design  ",
    school: "Meru National Polytechnic",
    color: "text-red-300 border-red-300 ",
    dot: "bg-red-400",
  },
  {
    id: 2,
    years: "2023",
    desc: "ICT Technician ",
    school: "Meru Teachers College",
    color: " border-green-300 text-green-300",
    dot: " bg-green-400",
  },
  {
    id: 3,
    years: "2024",
    desc: "IT Support Specialist",
    school: "Ministry of Lands ",
    color: "  border-blue-300 text-blue-300",
    dot: "bg-blue-400",
  },
  {
    id: 4,
    years: "2025",
    desc: "Certificate in Software Engineering",
    school: "PLP Academy",
    color: "  border-t-yellow-300 text-yellow-300",
    dot: "bg-yellow-400",
  },
];
const aboutText = `I'm Ayasa Benjamin — a passionate full-stack developer with a love for clean code, clever design, and creative solutions. With a strong foundation in the MERN stack (MongoDB, Express, React, Node.js), I build interactive, responsive, and performant web applications from front to back. I thrive on solving real-world problems and transforming ideas into digital experiences. Whether I’m styling components with Tailwind CSS or designing scalable APIs, I bring both technical precision and artistic flair to every project.Outside coding, I enjoy experimenting with UI animations, contributing to open-source projects, and exploring how tech can empower communities.`;

function renderFadeInWords(text) {
  return text.split(" ").map((word, idx) => (
    <FadeInSection key={idx}>
      <span className='inline-block mb-2 mr-1'>{word}</span>
    </FadeInSection>
  ));
}

export default function About() {
  return (
    <div className='text-white min-h-screen max-w-screen-2xl container py-20 mx-auto md:px-20 px-4 bg-[url("/black.jpg")] bg-cover bg-center'>
      {/* About Section */}
      <section className='max-w-7xl mx-auto flex flex-col md:flex-row justify-center space-x-3 gap-5'>
        {/* Image  */}
        <FadeInSection>
          <div className='md:w-90 text-center'>
            <img src={avatar} alt='About' className='w-full max-w-md mx-auto' />
          </div>
        </FadeInSection>

        {/* Text Section */}

        <div className='md:w-2/3 text-left text-lg'>
          <h2 className='text-[4rem] font-bold mb-4 '>About Me</h2>
          <div className='text-lg text-left flex flex-wrap'>
            {renderFadeInWords(aboutText)}
          </div>
          <FadeInSection>
            <a href='https://drive.google.com/file/d/1XMDYTGNaO_iqs49GRhD2INB4jOICwdNe/view'>
              <button className='mt-6 px-6 py-2 text-white rounded-3xl flex border-b-2 shadow-md hover:border-t-2 cursor-pointer'>
                <FaDownload />
                <p className='ml-2'>Download CV</p>
              </button>
            </a>
          </FadeInSection>
        </div>
      </section>

      {/* Skills Section */}
      <section className='max-w-6xl mx-auto mt-10'>
        <FadeInSection>
          <h2 className='text-[4rem] font-bold text-center mb-10'>Skills</h2>
        </FadeInSection>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-10 text-center'>
          {skill.map((skill, id) => (
            <FadeInSection key={id}>
              <div className='relative flex flex-col items-center'>
                <div className='relative w-40 h-40 flex items-center justify-center'>
                  {skill.icon}
                  <div
                    className={`absolute bottom-0 right-0 w-20 h-20 rounded-full border-4 flex items-center justify-center text-sm font-bold ${skill.color}`}
                  >
                    {skill.percent}%
                  </div>
                </div>
                <h3 className='font-semibold text-lg mt-2'>{skill.name}</h3>
                <p className='text-sm text-gray-200 md:mx-15'>
                  {skill.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      <section className='max-w-6xl mx-auto mt-20 px-4'>
        <FadeInSection>
          <h2 className='text-[4rem] font-bold text-center mb-16'>
            Education And Experience
          </h2>
        </FadeInSection>

        <div className='relative'>
          {/* Vertical Center Line */}
          <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white z-10'></div>

          <div className='space-y-3'>
            {experience.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div key={i} className='relative flex items-center w-full'>
                  {/* Left Side */}
                  {isLeft && (
                    <>
                      <div className='w-1/2 mr-4 flex  justify-end pr-4'>
                        <FadeInSection>
                          <div
                            className={`p-6 rounded-[4em] border-x-2  shadow-md md:w-80 w-40 ${item.color}`}
                          >
                            <h3 className='text-2xl font-semibold'>
                              {item.years}
                            </h3>
                            <p className='text-lg'>{item.desc}</p>
                            <p className='text-lg'>{item.school}</p>
                          </div>
                        </FadeInSection>
                      </div>

                      {/* Connector Line and Dot */}
                      <div className='absolute left-1/2 transform -translate-x-1/2 h-full flex items-center'>
                        <div className={`w-6 h-1 ${item.dot}`}></div>
                        <div
                          className={`w-4 h-4 rounded-full  ${item.dot} ml-1`}
                        ></div>
                      </div>

                      <div className='w-1/2'></div>
                    </>
                  )}

                  {/* Right Side */}
                  {!isLeft && (
                    <>
                      <div className='w-1/2'></div>

                      {/* Connector Line and Dot */}
                      <div className='absolute left-1/2 transform -translate-x-1/2 h-full flex items-center'>
                        <div
                          className={`w-4 h-4 rounded-full  ${item.dot} mr-1`}
                        ></div>
                        <div className={`w-6 h-1 ${item.dot}`}></div>
                      </div>

                      <div className='w-1/2 ml-4 flex justify-start pl-4'>
                        <FadeInSection>
                          <div
                            className={`p-6 rounded-[4em] border-x-2 shadow-md md:w-80 w-40 ${item.color}`}
                          >
                            <h3 className='text-2xl font-semibold'>
                              {item.years}
                            </h3>
                            <p className='text-lg'>{item.desc}</p>
                            <p className='text-lg'>{item.school}</p>
                          </div>
                        </FadeInSection>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
