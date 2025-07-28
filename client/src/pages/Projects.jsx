import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    image: "/books.png",
    title: "Bookstore App",
    github: "https://github.com/Leftinant/SafariReads",
    demo: "https://chalkboard-blog.vercel.app",
    description:
      "Safari Reads isn’t just a bookstore — it's a literary journey. With a fast, responsive frontend, this project brings together performance, usability, and culture.",
    tags: [
      { label: "React", icon: <FaReact /> },
      { label: "Tailwind", icon: <FaCss3Alt /> },
      { label: "NodeJs", icon: <FaNodeJs /> },
    ],
  },
  {
    image: "/betty.png",
    title: "Salon Website",
    github: "https://github.com/Leftinant/BettyRepo",
    demo: "https://betty-salon.netlify.app/",
    description:
      "This is a modern and responsive Beauty Shop website with the pages: about us, services, contact us.",
    tags: [
      { label: "HTML", icon: <FaHtml5 /> },
      { label: "CSS", icon: <FaCss3Alt /> },
      { label: "Javascript", icon: <FaJs /> },
    ],
  },
  {
    image: "/blog.png",
    title: "Social Media App",
    github: "https://github.com/Leftinant/blogClone",
    demo: "https://blogapp-ben.vercel.app/",
    description:
      "A full-featured blog platform. Includes authentication, image uploads, comments, pagination, and more.",
    tags: [
      { label: "React", icon: <FaReact /> },
      { label: "Tailwind", icon: <FaCss3Alt /> },
      { label: "NodeJs", icon: <FaNodeJs /> },
    ],
  },
  {
    image: "ludo.png",
    title: "Ludo Game",
    github: "https://github.com/Leftinant/LudoGame",
    demo: "https://benludo.netlify.app/",
    description:
      " Strategy-based board game in which players race their four tokens from start to finish according to the rolls of a single die.",
    actionLabel: "View Demo",
    actionIcon: <FaJs />,
    tags: [
      { label: "HTML", icon: <FaHtml5 /> },
      { label: "CSS", icon: <FaCss3Alt /> },
      { label: "Javascript", icon: <FaJs /> },
    ],
  },
];

export default function Projects() {
  return (
    <div className='flex flex-col justify-center items-center gap-16 py-30 min-h-screen text-center  md:px-20 px-4 overflow-hidden bg-[url("/black.jpg")] bg-cover bg-center'>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          github={project.github}
          demo={project.demo}
          actionLabel='Buy Template'
          // actionIcon={<FaNuxt />}
          tags={project.tags}
          isReversed={index % 2 !== 0}
        />
      ))}
    </div>
  );
}
