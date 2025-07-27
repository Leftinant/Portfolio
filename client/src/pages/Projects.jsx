import { motion } from "framer-motion";

const projects = [
  {
    title: "Chalkboard Blog",
    description: "A blogging platform styled like a blackboard.",
    github: "https://github.com/yourusername/chalkboard-blog",
    demo: "https://chalkboard-blog.vercel.app",
  },
  {
    title: "Sticky Notes App",
    description: "A sticky-note productivity tool with chalk aesthetics.",
    github: "https://github.com/yourusername/sticky-notes",
    demo: "https://sticky-notes.vercel.app",
  },
];

export default function Projects() {
  return (
    <motion.div
      className='p-8'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className='text-3xl mb-6 text-pink-300'>🧪 My Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className='border border-dashed border-white p-4 rounded-xl bg-black/40 hover:scale-105 transition-transform'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className='text-xl font-bold mb-1'>{project.title}</h3>
            <p className='text-sm mb-2'>{project.description}</p>
            <div className='space-x-2'>
              <a
                href={project.github}
                target='_blank'
                className='underline text-blue-300 hover:text-blue-400'
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target='_blank'
                className='underline text-green-300 hover:text-green-400'
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
